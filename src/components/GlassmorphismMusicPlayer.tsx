import React, { useState, useEffect, useRef } from 'react';
import { PLAYLIST_TRACKS, YOUTUBE_PLAYLIST_ID } from '../data/corporateData';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, ListMusic, ExternalLink, Disc3, Radio } from 'lucide-react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export const GlassmorphismMusicPlayer: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [showTrackList, setShowTrackList] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(240); // 4 min default
  const [apiReady, setApiReady] = useState(false);

  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentTrack = PLAYLIST_TRACKS[currentTrackIndex] || PLAYLIST_TRACKS[0];

  // Initialize YouTube IFrame API
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    } else if (window.YT && window.YT.Player) {
      initPlayer();
    }

    function initPlayer() {
      if (playerRef.current) return;
      try {
        playerRef.current = new window.YT.Player('youtube-hidden-player', {
          height: '1',
          width: '1',
          playerVars: {
            listType: 'playlist',
            list: YOUTUBE_PLAYLIST_ID,
            autoplay: 0,
            controls: 0,
            enablejsapi: 1,
            origin: window.location.origin,
          },
          events: {
            onReady: (event: any) => {
              setApiReady(true);
              event.target.setVolume(volume);
            },
            onStateChange: (event: any) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                setIsPlaying(true);
              } else if (event.data === window.YT.PlayerState.PAUSED) {
                setIsPlaying(false);
              }
            },
          },
        });
      } catch (e) {
        console.warn('YouTube API player error', e);
      }
    }
  }, []);

  // Timer loop for progress tracking
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
          const curr = playerRef.current.getCurrentTime() || 0;
          const dur = playerRef.current.getDuration() || 240;
          setCurrentTime(curr);
          setDuration(dur);
        } else {
          setCurrentTime((prev) => (prev + 1) % duration);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const togglePlay = () => {
    if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleNextTrack = () => {
    if (playerRef.current && typeof playerRef.current.nextVideo === 'function') {
      playerRef.current.nextVideo();
    }
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST_TRACKS.length);
    setIsPlaying(true);
  };

  const handlePrevTrack = () => {
    if (playerRef.current && typeof playerRef.current.previousVideo === 'function') {
      playerRef.current.previousVideo();
    }
    setCurrentTrackIndex((prev) => (prev - 1 + PLAYLIST_TRACKS.length) % PLAYLIST_TRACKS.length);
    setIsPlaying(true);
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    setIsMuted(newVol === 0);
    if (playerRef.current && typeof playerRef.current.setVolume === 'function') {
      playerRef.current.setVolume(newVol);
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      handleVolumeChange(80);
    } else {
      setIsMuted(true);
      handleVolumeChange(0);
    }
  };

  const handleSelectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    if (playerRef.current && typeof playerRef.current.playVideoAt === 'function') {
      playerRef.current.playVideoAt(index);
    }
    setIsPlaying(true);
    setShowTrackList(false);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remSecs = Math.floor(secs % 60);
    return `${mins}:${remSecs < 10 ? '0' : ''}${remSecs}`;
  };

  return (
    <>
      {/* Hidden YouTube Iframe element */}
      <div className="fixed -bottom-96 -left-96 opacity-0 pointer-events-none">
        <div id="youtube-hidden-player" />
      </div>

      {/* Floating Glassmorphism Player Bar */}
      <div className="fixed bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 z-40 max-w-5xl mx-auto">
        
        {/* Track List Drawer Popover */}
        {showTrackList && (
          <div className="mb-3 bg-slate-950/95 border border-amber-500/30 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom duration-200">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-3">
              <span className="text-xs font-bold font-mono text-amber-300 flex items-center gap-2">
                <Radio className="w-4 h-4 text-amber-400 animate-pulse" />
                OFFICIAL CORPORATE MAJDOOR PLAYLIST
              </span>
              <a
                href={`https://youtube.com/playlist?list=${YOUTUBE_PLAYLIST_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-cyan-400 hover:underline flex items-center gap-1 font-mono"
              >
                Open on YouTube <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
              {PLAYLIST_TRACKS.map((t, idx) => (
                <div
                  key={t.id}
                  onClick={() => handleSelectTrack(idx)}
                  className={`p-2.5 rounded-xl border text-xs font-mono flex justify-between items-center cursor-pointer transition-all ${
                    idx === currentTrackIndex
                      ? 'bg-amber-500/20 border-amber-500/50 text-amber-200 font-bold'
                      : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-[10px] text-slate-500">{idx + 1}.</span>
                    <span className="truncate">{t.title}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 shrink-0">
                    {t.vibe}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Glassmorphism Bar */}
        <div className="relative rounded-2xl glass-panel p-3 sm:p-4 shadow-2xl backdrop-blur-2xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 border border-white/20">
          
          {/* Left: Track Details & Vinyl Spinning */}
          <div className="flex items-center gap-3 w-full sm:w-auto truncate">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shrink-0 shadow-lg shadow-amber-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-amber-400">
                <Disc3 className={`w-6 h-6 ${isPlaying ? 'animate-spin' : ''}`} />
              </div>
            </div>

            <div className="truncate space-y-0.5">
              <div className="flex items-center gap-2">
                <h4 className="text-xs sm:text-sm font-bold text-slate-100 truncate">
                  {currentTrack.title}
                </h4>
                <span className="text-[9px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.5 rounded font-mono shrink-0">
                  {currentTrack.vibe}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono truncate">
                {currentTrack.artist}
              </p>
            </div>
          </div>

          {/* Center: Play Controls & Equalizer Visualizer */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Equalizer Bars */}
            <div className="hidden md:flex items-center gap-1 h-5 px-2">
              {[0.4, 0.8, 0.3, 0.9, 0.5, 0.7].map((h, i) => (
                <div
                  key={i}
                  className={`w-1 rounded-full bg-amber-400 transition-all duration-300 ${
                    isPlaying ? 'animate-pulse' : 'opacity-40'
                  }`}
                  style={{
                    height: isPlaying ? `${Math.max(20, (i + 1) * 15)}%` : '30%',
                  }}
                />
              ))}
            </div>

            <button
              onClick={handlePrevTrack}
              className="p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 transition-all active:scale-95 border border-slate-800"
              title="Previous Track"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={togglePlay}
              className="p-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/30"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
            </button>

            <button
              onClick={handleNextTrack}
              className="p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 transition-all active:scale-95 border border-slate-800"
              title="Next Track"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Progress & Volume & Drawer Toggle */}
          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
            {/* Time Stamp */}
            <span className="text-[11px] font-mono text-slate-400 shrink-0">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>

            {/* Volume Control */}
            <div className="hidden sm:flex items-center gap-1.5">
              <button
                onClick={toggleMute}
                className="text-slate-400 hover:text-amber-400 transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <input
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={(e) => handleVolumeChange(Number(e.target.value))}
                className="w-16 accent-amber-500 cursor-pointer h-1"
              />
            </div>

            {/* Playlist Drawer Button */}
            <button
              onClick={() => setShowTrackList(!showTrackList)}
              className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                showTrackList
                  ? 'bg-amber-500 text-slate-950 border-amber-400'
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800'
              }`}
            >
              <ListMusic className="w-4 h-4" />
              <span className="hidden md:inline">Playlist</span>
            </button>
          </div>

        </div>
      </div>
    </>
  );
};
