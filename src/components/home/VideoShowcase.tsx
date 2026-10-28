import React, { useRef, useState } from 'react';
import { Play, Film, Shield, Sparkles, Clock } from 'lucide-react';
import { useVideoMetadata } from '../../hooks/useVideoMetadata';

interface VideoShowcaseProps {
  onOpenVideoModal: (videoSrc: string, title: string, subtitle?: string) => void;
}

interface VideoCardItem {
  id: string;
  title: string;
  category: string;
  src: string;
  description: string;
  tag: string;
  accentBorder: string;
  badgeBg: string;
}

// Individual Video Card with dynamic metadata loading and preview
const VideoCard: React.FC<{
  video: VideoCardItem;
  onOpenModal: (src: string, title: string, subtitle?: string) => void;
}> = ({ video, onOpenModal }) => {
  const meta = useVideoMetadata(video.src);
  const [isHovered, setIsHovered] = useState(false);
  const previewVideoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (previewVideoRef.current) {
      previewVideoRef.current.currentTime = 0;
      previewVideoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (previewVideoRef.current) {
      previewVideoRef.current.pause();
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`rounded-3xl border ${video.accentBorder} bg-white overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,115,183,0.16)] transition-all duration-300 flex flex-col justify-between group`}
    >
      {/* Portrait Video Preview Container - 4:5 or 9:14 ratio preserving 9:16 vertical video frame without stretching */}
      <div
        onClick={() => onOpenModal(video.src, video.title, video.category)}
        className="relative aspect-[4/5] bg-gradient-to-b from-[#081B30] to-[#040C17] flex items-center justify-center cursor-pointer overflow-hidden"
      >
        {/* Subtle background ambient blur from video */}
        <div className="absolute inset-0 bg-cover bg-center opacity-40 blur-md pointer-events-none" />

        {/* Real HTML5 Video element for accurate frame rendering and hover snippet */}
        <video
          ref={previewVideoRef}
          src={video.src}
          muted
          playsInline
          loop
          preload="metadata"
          className="w-full h-full object-contain max-h-full transition-transform duration-500 group-hover:scale-105"
        />

        {/* Ambient Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040C17] via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
          <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md shadow-sm ${video.badgeBg}`}>
            {video.tag}
          </span>
        </div>

        {/* Dynamic Duration Badge - Automatically computed from video metadata */}
        <div className="absolute bottom-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-[#051326]/85 text-amber-200 border border-[#C99738]/40 backdrop-blur-md shadow-md">
            <Clock className="w-3 h-3 text-[#C99738]" />
            <span>{meta.formattedDuration}</span>
          </span>
        </div>

        {/* Animated Play Button Icon */}
        <div className="absolute z-10 w-14 h-14 rounded-full bg-white/95 text-[#0D3B66] border border-[#C99738]/60 flex items-center justify-center shadow-xl group-hover:scale-115 group-hover:bg-[#C99738] group-hover:text-white transition-all duration-300">
          <Play className="w-6 h-6 fill-current ml-0.5" />
        </div>
      </div>

      {/* Video Information Deck */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#0073B7]">
              {video.category}
            </span>
            <span className="text-[10px] text-slate-400 font-medium">HD 1080p</span>
          </div>

          <h3 className="text-sm sm:text-base font-extrabold text-[#0D3B66] font-heading leading-snug group-hover:text-[#0073B7] transition-colors">
            {video.title}
          </h3>

          <p className="text-xs text-slate-600 leading-relaxed mt-2 line-clamp-3">
            {video.description}
          </p>
        </div>

        <button
          onClick={() => onOpenModal(video.src, video.title, video.category)}
          className="w-full py-2.5 px-3.5 rounded-xl text-xs font-bold text-[#0D3B66] bg-slate-100 hover:bg-gradient-to-r hover:from-[#0073B7] hover:to-[#0D3B66] hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs group-hover:shadow-md"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Watch Reel ({meta.formattedDuration})</span>
        </button>
      </div>
    </div>
  );
};

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({ onOpenVideoModal }) => {
  const videos: VideoCardItem[] = [
    {
      id: 'v-launch',
      title: 'Sustune Care Total: The Diaspora Dilemma Solved',
      category: 'Brand Story',
      src: '/videos/testimonial_nri2.mp4',
      description: 'Understanding why traditional brokers and distant relatives fall short for global NRIs, and how the Dual-Shield framework restores peace of mind.',
      tag: 'Core Launch',
      accentBorder: 'border-[#C99738]/40',
      badgeBg: 'bg-[#C99738]/90 text-white',
    },
    {
      id: 'v-aegis',
      title: 'Aegis Property: Forensic Asset Stewardship',
      category: 'Real Estate',
      src: '/videos/aegis_overview.mp4',
      description: 'From 80-point dampness and electrical audits to escrow rent collections and lawyer-drafted biometric leases in Hyderabad & Bengaluru.',
      tag: 'Aegis Property',
      accentBorder: 'border-[#0073B7]/40',
      badgeBg: 'bg-[#0073B7]/90 text-white',
    },
    {
      id: 'v-sparsh',
      title: 'Sparsh Healthcare: Bedside Warmth & Clinical Rigor',
      category: 'Parental Care',
      src: '/videos/sparsh_overview.mp4',
      description: 'Experience how our certified Care Companions escort aging parents through OPD visits at Apollo and Fortis while tracking biometric telemetry.',
      tag: 'Sparsh Care',
      accentBorder: 'border-[#0A8754]/40',
      badgeBg: 'bg-[#0A8754]/90 text-white',
    },
    {
      id: 'v-testimonial',
      title: 'Diaspora Voice: "Distance Stopped Hurting Us"',
      category: 'NRI Perspective',
      src: '/videos/issue.mp4',
      description: 'An NRI daughter shares the emotional relief of knowing her father in India has 24/7 rapid clinical SOS dispatch and warm weekly visits.',
      tag: 'Diaspora Voice',
      accentBorder: 'border-purple-400/40',
      badgeBg: 'bg-purple-600/90 text-white',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200 relative overflow-hidden">
      {/* Decorative ambient lights */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#0073B7]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#C99738]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-xs">
            <Film className="w-3.5 h-3.5 text-[#0073B7]" />
            <span>Official Media Vault &bull; Verified Metadata</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0D3B66] font-heading tracking-tight">
            See Sustune Care in Real-World Action
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
            High-definition walkthroughs of our clinical emergency protocols, property inspection technology, and the empathetic companions serving families across India.
          </p>
        </div>

        {/* Video Cards Grid - 4 Columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {videos.map((vid) => (
            <VideoCard
              key={vid.id}
              video={vid}
              onOpenModal={onOpenVideoModal}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
