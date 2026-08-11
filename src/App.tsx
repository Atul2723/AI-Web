import React, { useState, useEffect } from 'react';
import { CorporateStatus } from './types';
import { Header } from './components/Header';
import { NostalgicHero } from './components/NostalgicHero';
import { RotatingQuotes } from './components/RotatingQuotes';
import { CorporateSurvivalKit } from './components/CorporateSurvivalKit';
import { BossExcelModal } from './components/BossExcelModal';
import { GlassmorphismMusicPlayer } from './components/GlassmorphismMusicPlayer';
import {
  playTeamsDing,
  playKeyClick,
  playBadgeBeep,
  playChaiSip,
  playElevatorPing,
} from './utils/audioSynth';

export default function App() {
  const [currentStatus, setCurrentStatus] = useState<CorporateStatus>('in_meeting');
  const [isBossKeyOpen, setIsBossKeyOpen] = useState(false);
  const [timeString, setTimeString] = useState<string>('');

  // Clock string
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' | MONDAY BLUES'
      );
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input or textarea
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA' ||
        document.activeElement?.tagName === 'SELECT'
      ) {
        return;
      }

      if (e.key === 'Escape') {
        e.preventDefault();
        setIsBossKeyOpen((prev) => !prev);
        playKeyClick();
      } else if (e.key === 't' || e.key === 'T') {
        playTeamsDing();
      } else if (e.key === 'b' || e.key === 'B') {
        playBadgeBeep();
      } else if (e.key === 'c' || e.key === 'C') {
        playChaiSip();
      } else if (e.key === ' ') {
        playKeyClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-teal-400 selection:text-slate-950 relative overflow-x-hidden pb-32" style={{ background: 'radial-gradient(circle at center, #008080 0%, #004d4d 60%, #002626 100%)' }}>
      
      {/* CRT Scanline Overlay */}
      <div className="fixed inset-0 crt-overlay z-30 pointer-events-none" />

      {/* Windows Retro Taskbar/Menubar */}
      <nav className="h-9 bg-[#c0c0c0] windows-shadow flex items-center justify-between px-3 z-40 relative text-black select-none">
        <div className="flex items-center gap-4">
          <button
            onClick={() => { playKeyClick(); setIsBossKeyOpen(true); }}
            className="px-3 py-0.5 bg-[#c0c0c0] windows-shadow text-black text-xs font-bold btn-win flex items-center gap-1.5 cursor-pointer hover:bg-[#d4d4d4]"
          >
            <span className="w-3 h-3 bg-red-600 inline-block shadow-sm" />
            <span>Start</span>
          </button>
          <div className="hidden sm:flex gap-4 text-xs font-semibold text-black">
            <span className="hover:bg-slate-300 px-1.5 rounded cursor-pointer" onClick={playKeyClick}>File</span>
            <span className="hover:bg-slate-300 px-1.5 rounded cursor-pointer" onClick={playKeyClick}>Edit</span>
            <span className="hover:bg-slate-300 px-1.5 rounded cursor-pointer" onClick={playKeyClick}>View</span>
            <span className="hover:bg-slate-300 px-1.5 rounded cursor-pointer" onClick={() => { playKeyClick(); setIsBossKeyOpen(true); }}>Special (Boss Key)</span>
          </div>
        </div>
        <div className="text-[11px] text-slate-900 font-mono px-3 py-0.5 bg-[#dfdfdf] border border-gray-400 font-bold">
          {timeString || '09:00 AM | MONDAY BLUES'}
        </div>
      </nav>

      {/* Background Radial Glow */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-1/3 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10 space-y-6">
        {/* Header Bar */}
        <Header
          currentStatus={currentStatus}
          onStatusChange={setCurrentStatus}
          onOpenBossKey={() => setIsBossKeyOpen(true)}
          onChaiSip={playChaiSip}
          onPlayTeamsSound={playTeamsDing}
          onScanBadge={playBadgeBeep}
        />

        {/* Central Visual Object & Hero Desk */}
        <NostalgicHero
          onChaiSip={playChaiSip}
          onScanBadge={playBadgeBeep}
          onPlayKeyboardClick={playKeyClick}
        />

        {/* Auto-Rotating Quotes Ticker */}
        <RotatingQuotes />

        {/* Corporate Survival Kit Tabs */}
        <CorporateSurvivalKit
          onPlayTeamsSound={playTeamsDing}
          onPlayKeyboardClick={playKeyClick}
          onPlayBadgeBeep={playBadgeBeep}
          onPlayChaiSip={playChaiSip}
          onPlayElevatorPing={playElevatorPing}
        />

        {/* Footer Nostalgia Credits */}
        <footer className="w-full max-w-7xl mx-auto px-4 text-center py-8 border-t border-teal-500/20 text-teal-200/70 text-xs font-mono space-y-2">
          <p className="text-glow">
            Crafted with ❤️ and ☕ for every Corporate Majdoor surviving IT Park Phase 3.
          </p>
          <p className="text-[10px] text-teal-300/60">
            Press <kbd className="bg-teal-950/80 px-1.5 py-0.5 rounded border border-teal-500/30 text-teal-200">Esc</kbd> for Boss Key • <kbd className="bg-teal-950/80 px-1.5 py-0.5 rounded border border-teal-500/30 text-teal-200">T</kbd> for Teams Ding • <kbd className="bg-teal-950/80 px-1.5 py-0.5 rounded border border-teal-500/30 text-teal-200">B</kbd> for Badge • <kbd className="bg-teal-950/80 px-1.5 py-0.5 rounded border border-teal-500/30 text-teal-200">C</kbd> for Chai
          </p>
        </footer>
      </div>

      {/* Emergency Boss Key Excel Modal */}
      <BossExcelModal
        isOpen={isBossKeyOpen}
        onClose={() => setIsBossKeyOpen(false)}
        onPlayKeyboardClick={playKeyClick}
      />

      {/* Glassmorphism YouTube Music Player */}
      <GlassmorphismMusicPlayer />

    </div>
  );
}

