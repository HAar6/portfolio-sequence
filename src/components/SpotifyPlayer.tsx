"use client";

import { useEffect, useState, useRef } from "react";

interface SpotifyData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumImageUrl?: string;
  songUrl?: string;
  previewUrl?: string;
}

export default function SpotifyPlayer() {
  const [data, setData] = useState<SpotifyData>({ isPlaying: false });
  const [loading, setLoading] = useState(true);
  const [previewPlaying, setPreviewPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const fetchSpotify = async () => {
      try {
        const res = await fetch("/api/spotify");
        const json = await res.json();
        setData(json);
        
        // Pause audio if song changes and there's no preview for the new one
        if (previewPlaying && audioRef.current && audioRef.current.src !== json.previewUrl) {
          audioRef.current.pause();
          setPreviewPlaying(false);
        }
      } catch (error) {
        console.error("Failed to fetch Spotify data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpotify();
    // Poll every 15 seconds for more responsive updates
    const interval = setInterval(fetchSpotify, 15000);
    return () => clearInterval(interval);
  }, [previewPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (previewPlaying) {
      audioRef.current.pause();
      setPreviewPlaying(false);
    } else {
      audioRef.current.volume = 0.5;
      audioRef.current.play().then(() => setPreviewPlaying(true)).catch(e => console.error("Audio playback failed", e));
    }
  };

  if (loading) {
    return null; // Don't show skeleton while checking status initially, keeps UI clean
  }

  // Hide the entire widget if Spotify is not actively playing
  if (!data?.isPlaying) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 transition-transform duration-500 hover:-translate-y-2 group">
      <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center gap-4 w-[320px] shadow-2xl transition-all hover:bg-black/80 hover:border-white/20">
        
        {/* Album Art */}
        <div className="relative shrink-0">
          <img 
            src={data.albumImageUrl} 
            alt="Album art" 
            className="w-12 h-12 rounded-md object-cover shadow-md group-hover:shadow-green-500/20 transition-shadow"
          />
          
          {/* Play/Pause Button Overlay on Album Art */}
          {data.previewUrl && (
            <button 
              onClick={togglePlay}
              className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-md"
              aria-label={previewPlaying ? "Pause preview" : "Play preview"}
            >
              {previewPlaying ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M6 4h4v16H6zm8 0h4v16h-4z"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-1"><path d="M8 5v14l11-7z"/></svg>
              )}
            </button>
          )}
        </div>

        {/* Text Info */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-[#1DB954] uppercase tracking-wider">
                Now Playing
              </span>
            </div>
            {/* Audio Bars */}
            <div className="flex items-end gap-[2px] h-3 mr-1">
              <span className="w-[2px] bg-[#1DB954] animate-[bounce_1s_infinite_0ms]"></span>
              <span className="w-[2px] bg-[#1DB954] animate-[bounce_1.2s_infinite_200ms]"></span>
              <span className="w-[2px] bg-[#1DB954] animate-[bounce_0.8s_infinite_400ms]"></span>
            </div>
          </div>
          <p className="text-sm font-semibold text-white truncate w-full pr-2">
            {data.title}
          </p>
          <div className="flex items-center justify-between mt-0.5">
            <p className="text-xs text-neutral-400 truncate w-[130px]">
              {data.artist}
            </p>
            {/* Spotify Link Icon */}
            <a 
              href={data.songUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#1DB954] hover:scale-110 transition-transform"
              title="Open in Spotify"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm4.5 14.5c-.2.33-.63.44-.96.24-2.63-1.61-5.94-1.97-9.84-1.08-.38.09-.76-.15-.85-.53-.09-.38.15-.76.53-.85 4.26-1.01 7.92-.61 10.88 1.21.33.2.44.63.24.96zm1.36-3.04c-.25.41-.78.54-1.19.3-3-1.84-7.6-2.4-10.45-1.31-.48.18-.99-.06-1.17-.54-.18-.48.06-.99.54-1.17 3.32-1.27 8.42-.64 11.97 1.54.41.25.54.78.3 1.19zm.08-3.18c-3.59-2.13-9.52-2.33-12.95-1.29-.58.17-1.18-.15-1.35-.72-.17-.58.15-1.18.72-1.35 4.02-1.2 10.59-.97 14.77 1.51.52.31.69 1 .38 1.52-.31.52-1 .69-1.52.38z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Hidden Audio Element */}
        {data.previewUrl && (
          <audio 
            ref={audioRef} 
            src={data.previewUrl} 
            onEnded={() => setPreviewPlaying(false)} 
          />
        )}
      </div>
    </div>
  );
}
