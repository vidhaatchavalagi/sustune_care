/**
 * Video Utilities for Sustune Care Media Player
 * Accurate duration formatting, metadata extraction, and orientation detection.
 */

export interface VideoMetadata {
  duration: number; // in seconds
  formattedDuration: string;
  width: number;
  height: number;
  isPortrait: boolean;
  aspectRatio: number;
}

/**
 * Format raw seconds into standard MM:SS or HH:MM:SS format
 * Strictly handles NaN, Infinity, negative values, and missing input gracefully.
 */
export function formatDuration(seconds: number | null | undefined): string {
  if (seconds === null || seconds === undefined || !Number.isFinite(seconds) || seconds < 0) {
    return '--:--';
  }

  const totalSeconds = Math.floor(seconds);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const remainingSeconds = totalSeconds % 60;

  const pad = (value: number) => String(value).padStart(2, '0');

  if (hours > 0) {
    return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
  }

  return `${pad(minutes)}:${pad(remainingSeconds)}`;
}

/**
 * Fallback baseline metadata for the 4 known Sustune Care video assets.
 * Real verified file values from ffprobe/Shell COM:
 * - aegis_overview.mp4: 38s, 2160x3840 (Portrait)
 * - sparsh_overview.mp4: 46s, 2160x3840 (Portrait)
 * - sustune_launch.mp4: 22s, 2160x3840 (Portrait)
 * - testimonial_nri.mp4: 30s, 1080x1920 (Portrait)
 */
export const VERIFIED_VIDEO_METADATA: Record<string, VideoMetadata> = {
  '/videos/aegis_overview.mp4': {
    duration: 38,
    formattedDuration: '00:38',
    width: 2160,
    height: 3840,
    isPortrait: true,
    aspectRatio: 2160 / 3840,
  },
  '/videos/sparsh_overview.mp4': {
    duration: 46,
    formattedDuration: '00:46',
    width: 2160,
    height: 3840,
    isPortrait: true,
    aspectRatio: 2160 / 3840,
  },
  '/videos/issue.mp4': {
    duration: 42,
    formattedDuration: '00:42',
    width: 2160,
    height: 3840,
    isPortrait: true,
    aspectRatio: 2160 / 3840,
  },
  '/videos/testimonial_nri2.mp4': {
    duration: 30,
    formattedDuration: '00:30',
    width: 1080,
    height: 1920,
    isPortrait: true,
    aspectRatio: 1080 / 1920,
  },
};

// In-memory cache for loaded metadata
const metadataCache = new Map<string, VideoMetadata>();

/**
 * Asynchronously fetch video metadata using lightweight preloading (preload="metadata")
 */
export function fetchVideoMetadata(src: string): Promise<VideoMetadata> {
  if (metadataCache.has(src)) {
    return Promise.resolve(metadataCache.get(src)!);
  }

  // Pre-seed with verified metadata if available
  const defaultMeta = VERIFIED_VIDEO_METADATA[src] || {
    duration: 0,
    formattedDuration: '--:--',
    width: 1920,
    height: 1080,
    isPortrait: false,
    aspectRatio: 16 / 9,
  };

  return new Promise((resolve) => {
    // Only in browser environment
    if (typeof window === 'undefined') {
      resolve(defaultMeta);
      return;
    }

    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = src;

    const timeout = setTimeout(() => {
      cleanup();
      metadataCache.set(src, defaultMeta);
      resolve(defaultMeta);
    }, 4000);

    const onLoadedMetadata = () => {
      clearTimeout(timeout);
      const duration = Number.isFinite(video.duration) ? video.duration : defaultMeta.duration;
      const width = video.videoWidth || defaultMeta.width;
      const height = video.videoHeight || defaultMeta.height;
      const isPortrait = height > width;
      const aspectRatio = width / (height || 1);

      const meta: VideoMetadata = {
        duration,
        formattedDuration: formatDuration(duration),
        width,
        height,
        isPortrait,
        aspectRatio,
      };

      cleanup();
      metadataCache.set(src, meta);
      resolve(meta);
    };

    const onError = () => {
      clearTimeout(timeout);
      cleanup();
      metadataCache.set(src, defaultMeta);
      resolve(defaultMeta);
    };

    const cleanup = () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('error', onError);
      video.src = '';
      video.load();
    };

    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('error', onError);
  });
}
