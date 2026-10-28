import React, { useEffect, useRef, useState, useCallback } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  RotateCcw,
  Shield,
  Sparkles
} from 'lucide-react';
import { formatDuration, fetchVideoMetadata, VERIFIED_VIDEO_METADATA } from '../../utils/videoUtils';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title: string;
  subtitle?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoSrc,
  title,
  subtitle,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollPosRef = useRef<number>(0);

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isPortrait, setIsPortrait] = useState<boolean>(true); // default to true based on Sustune 9:16 assets
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync initial metadata
  useEffect(() => {
    if (!videoSrc) return;
    const known = VERIFIED_VIDEO_METADATA[videoSrc];
    if (known) {
      setDuration(known.duration);
      setIsPortrait(known.isPortrait);
    }
    fetchVideoMetadata(videoSrc).then((meta) => {
      setDuration(meta.duration);
      setIsPortrait(meta.isPortrait);
    });
  }, [videoSrc]);

  // Handle modal open/close, body scroll lock and restore
  useEffect(() => {
    if (isOpen) {
      scrollPosRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      setIsPlaying(true);
      setCurrentTime(0);

      // Attempt auto-playback safely
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {
            // Autoplay with audio might be blocked by browser; fallback to muted autoplay if needed
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
              videoRef.current.play().catch(() => setIsPlaying(false));
            }
          });
        }
      }, 150);

      return () => clearTimeout(timer);
    } else {
      const scrollY = scrollPosRef.current;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);

      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isOpen]);

  // Keyboard navigation (Escape to close, Space to toggle play/pause, M to mute)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === ' ' || e.code === 'Space') {
        // Toggle play/pause only if not focused on an input
        if ((e.target as HTMLElement)?.tagName !== 'INPUT' && (e.target as HTMLElement)?.tagName !== 'BUTTON') {
          e.preventDefault();
          togglePlay();
        }
      } else if (e.key === 'm' || e.key === 'M') {
        toggleMute();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle Fullscreen state change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isNowFullscreen = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement
      );
      setIsFullscreen(isNowFullscreen);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (Number.isFinite(videoRef.current.duration) && videoRef.current.duration > 0) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = parseFloat(e.target.value);
    setCurrentTime(targetTime);
    if (videoRef.current) {
      videoRef.current.currentTime = targetTime;
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    const vid = videoRef.current;
    if (Number.isFinite(vid.duration) && vid.duration > 0) {
      setDuration(vid.duration);
    }
    if (vid.videoWidth && vid.videoHeight) {
      setIsPortrait(vid.videoHeight > vid.videoWidth);
    }
  };

  const toggleFullscreen = () => {
    const elem = containerRef.current || videoRef.current;
    if (!elem) return;

    if (!document.fullscreenElement && !(document as any).webkitFullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(() => {});
      } else if ((elem as any).webkitRequestFullscreen) {
        (elem as any).webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      }
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const triggerControlsActivity = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 2800);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Sustune Care Video Theater'}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#030914]/90 backdrop-blur-xl animate-fadeIn p-3 sm:p-5 select-none"
      style={{
        paddingTop: 'max(14px, env(safe-area-inset-top))',
        paddingBottom: 'max(14px, env(safe-area-inset-bottom))',
        paddingLeft: 'max(14px, env(safe-area-inset-left))',
        paddingRight: 'max(14px, env(safe-area-inset-right))',
        height: '100dvh',
        width: '100vw',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Ambient background glow matching brand palette */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#0073B7]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] bg-[#C99738]/12 rounded-full blur-[110px]" />
      </div>

      {/* Close button outside player modal for maximum accessibility without zoom */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-60 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-[#C99738] text-white hover:text-[#0D3B66] border border-white/20 hover:border-[#C99738] shadow-2xl backdrop-blur-md flex items-center justify-center transition-all duration-200 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#C99738]"
        aria-label="Close video player"
        title="Close video (Esc)"
      >
        <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
      </button>

      {/* Main Player Container - Dynamically sized based on portrait vs landscape */}
      <div
        ref={containerRef}
        onMouseMove={triggerControlsActivity}
        onTouchStart={triggerControlsActivity}
        className={`relative z-10 flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden border border-[#C99738]/30 bg-gradient-to-b from-[#081B30] to-[#040C17] shadow-[0_20px_70px_rgba(0,0,0,0.85)] transition-all duration-300 ${
          isPortrait
            ? 'w-full max-w-[420px] max-h-[88dvh]'
            : 'w-full max-w-4xl max-h-[88dvh]'
        }`}
        style={{
          boxShadow: '0 0 50px rgba(0, 115, 183, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-4 py-3 sm:px-5 sm:py-3.5 bg-[#051326]/90 border-b border-white/10 flex items-center justify-between gap-3 shrink-0 backdrop-blur-md">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-[#C99738]/20 border border-[#C99738]/40 flex items-center justify-center text-[#C99738] shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div className="truncate">
              <h3 className="text-xs sm:text-sm font-extrabold text-white font-heading truncate tracking-wide">
                {title}
              </h3>
              {subtitle && (
                <p className="text-[10px] text-amber-200/80 font-medium truncate">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-500/15 text-sky-300 border border-sky-400/30">
              <Sparkles className="w-2.5 h-2.5" />
              {isPortrait ? 'Portrait 9:16' : 'Cinema 16:9'}
            </span>
          </div>
        </div>

        {/* Video Frame Canvas - Pure object-contain with zero stretching */}
        <div
          className={`relative flex items-center justify-center bg-black overflow-hidden ${
            isPortrait ? 'aspect-[9/16] max-h-[calc(88dvh-110px)]' : 'aspect-video max-h-[calc(88dvh-110px)]'
          }`}
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            playsInline
            controls={false}
            autoPlay
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            className="w-full h-full object-contain max-h-full cursor-pointer"
          >
            Your browser does not support HTML5 video playback.
          </video>

          {/* Central Play/Pause Watermark Overlay when paused */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/45 flex items-center justify-center pointer-events-none transition-opacity">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#0073B7] to-[#C99738] text-white flex items-center justify-center shadow-2xl scale-100 hover:scale-105 transition-transform">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
            </div>
          )}

          {/* Floating Subtle Watermark */}
          <div className="absolute top-3 left-3 pointer-events-none opacity-80 z-20">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#051326]/75 text-white backdrop-blur-md border border-white/10 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Sustune Care Media
            </span>
          </div>
        </div>

        {/* Bottom Custom Playback Control Deck */}
        <div
          className={`p-3 sm:p-4 bg-[#051326]/95 border-t border-white/10 flex flex-col gap-2.5 shrink-0 transition-opacity duration-200 ${
            showControls ? 'opacity-100' : 'opacity-90'
          }`}
        >
          {/* Timeline Scrubber */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-slate-300 min-w-[36px] text-right font-medium">
              {formatDuration(currentTime)}
            </span>
            <div className="relative flex-1 flex items-center group">
              <input
                type="range"
                min={0}
                max={duration || 100}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-slate-700/80 rounded-lg appearance-none cursor-pointer accent-[#C99738] hover:h-2 transition-all focus:outline-none"
                aria-label="Seek video progress"
              />
            </div>
            <span className="text-[11px] font-mono text-slate-400 min-w-[36px] font-medium">
              {formatDuration(duration)}
            </span>
          </div>

          {/* Controls Button Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Play / Pause */}
              <button
                onClick={togglePlay}
                className="p-2 rounded-xl bg-slate-800 hover:bg-[#0073B7] text-white transition-colors cursor-pointer focus:outline-none"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
                title={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>

              {/* Restart */}
              <button
                onClick={handleRestart}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Restart video"
                title="Restart from beginning"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Mute Toggle */}
              <button
                onClick={toggleMute}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                title={isMuted ? 'Unmute (M)' : 'Mute (M)'}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
              </button>
            </div>

            <div className="flex items-center gap-2">
              {/* Fullscreen Toggle */}
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                title="Toggle Fullscreen"
              >
                {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
              </button>

              {/* Close Button Inside Footer for Mobile Touch Convenience */}
              <button
                onClick={onClose}
                className="px-3.5 py-1.5 rounded-xl bg-[#0073B7]/80 hover:bg-[#0073B7] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
