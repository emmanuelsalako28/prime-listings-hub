import { useState } from 'react';
import { Play } from 'lucide-react';

interface MediaDisplayProps {
  src: string;
  alt: string;
  className?: string;
  showPlayButton?: boolean;
}

// Check if the URL is a video
function isVideo(url: string): boolean {
  if (!url) return false;
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv'];
  const lowercaseUrl = url.toLowerCase();
  
  // Check for video file extensions
  if (videoExtensions.some(ext => lowercaseUrl.includes(ext))) {
    return true;
  }
  
  // Check for common video hosting patterns
  if (lowercaseUrl.includes('youtube.com') || lowercaseUrl.includes('youtu.be')) {
    return true;
  }
  if (lowercaseUrl.includes('vimeo.com')) {
    return true;
  }
  
  return false;
}

// Convert YouTube/Vimeo URLs to embed URLs
function getEmbedUrl(url: string): string | null {
  const lowercaseUrl = url.toLowerCase();
  
  // YouTube
  if (lowercaseUrl.includes('youtube.com/watch')) {
    const videoId = new URL(url).searchParams.get('v');
    if (videoId) return `https://www.youtube.com/embed/${videoId}`;
  }
  if (lowercaseUrl.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1]?.split('?')[0];
    if (videoId) return `https://www.youtube.com/embed/${videoId}`;
  }
  
  // Vimeo
  if (lowercaseUrl.includes('vimeo.com/')) {
    const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
    if (videoId) return `https://player.vimeo.com/video/${videoId}`;
  }
  
  return null;
}

export function MediaDisplay({ src, alt, className = '', showPlayButton = true }: MediaDisplayProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  if (!src || imageError) {
    return (
      <div className={`bg-muted flex items-center justify-center ${className}`}>
        <span className="text-muted-foreground text-sm">No image</span>
      </div>
    );
  }
  
  const isVideoUrl = isVideo(src);
  const embedUrl = getEmbedUrl(src);
  
  // YouTube/Vimeo embed
  if (embedUrl) {
    if (!isPlaying && showPlayButton) {
      // Show thumbnail with play button
      const thumbnailUrl = src.includes('youtube') || src.includes('youtu.be')
        ? `https://img.youtube.com/vi/${new URL(embedUrl).pathname.split('/').pop()}/hqdefault.jpg`
        : undefined;
      
      return (
        <div 
          className={`relative cursor-pointer ${className}`}
          onClick={() => setIsPlaying(true)}
        >
          {thumbnailUrl ? (
            <img
              src={thumbnailUrl}
              alt={alt}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-muted" />
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center">
              <Play className="w-8 h-8 text-primary fill-current ml-1" />
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <iframe
        src={embedUrl}
        title={alt}
        className={className}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }
  
  // Direct video file
  if (isVideoUrl) {
    return (
      <video
        src={src}
        className={className}
        controls={isPlaying}
        muted
        loop
        playsInline
        onMouseEnter={(e) => {
          e.currentTarget.play();
          setIsPlaying(true);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.pause();
          e.currentTarget.currentTime = 0;
          setIsPlaying(false);
        }}
      />
    );
  }
  
  // Regular image
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setImageError(true)}
    />
  );
}
