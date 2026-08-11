import React from 'react';
import { CorporateStatus } from '../types';
import { STATUS_LIST } from '../data/corporateData';
import { Shield, Coffee, Keyboard, Eye } from 'lucide-react';

interface HeaderProps {
  currentStatus: CorporateStatus;
  onStatusChange: (status: CorporateStatus) => void;
  onOpenBossKey: () => void;
  onChaiSip: () => void;
  onPlayTeamsSound: () => void;
  onScanBadge: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentStatus,
  onStatusChange,
  onOpenBossKey,
  onChaiSip,
  onPlayTeamsSound,
  onScanBadge,
}) => {
  const activeStatusObj = STATUS_LIST.find((s) => s.id === currentStatus) || STATUS_LIST[0];

  return (
    <header className="relative z-30 w-full pt-6 pb-4 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-6">
      {/* Top Utility Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 glass-panel rounded-2xl p-3 sm:p-4 shadow-2xl">
        {/* Brand Tag */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-teal-700 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-teal-500/30 ring-1 ring-teal-300/40">
            म
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-teal-200 font-semibold">
                Est. 2008 • IT Park Phase 3
              </span>
              <span className="text-[10px] bg-teal-500/20 text-teal-200 border border-teal-400/30 px-2 py-0.5 rounded-full font-mono">
                v9.0_FINAL_v2.xlsx
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2 text-glow">
              CORPORATE MAJDOOR
              <span className="text-xs font-normal text-teal-200/80 hidden sm:inline">
                (कॉरपोरेट मजदूर)
              </span>
            </h1>
          </div>
        </div>

        {/* Status Switcher */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-slate-400 font-medium hidden md:inline">
            Status:
          </span>
          <div className="relative group">
            <select
              value={currentStatus}
              onChange={(e) => onStatusChange(e.target.value as CorporateStatus)}
              className={`text-xs font-medium px-3 py-1.5 rounded-xl border transition-all appearance-none pr-8 cursor-pointer shadow-lg ${activeStatusObj.color}`}
            >
              {STATUS_LIST.map((st) => (
                <option key={st.id} value={st.id} className="bg-slate-900 text-slate-200">
                  {st.label}
                </option>
              ))}
            </select>
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
              <span className={`w-2 h-2 rounded-full inline-block ${activeStatusObj.dotColor}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Title & Subtitle Banner */}
      <div className="text-center space-y-2 py-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          {activeStatusObj.subtext}
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-slate-100 to-cyan-300 tracking-tight leading-tight">
          The Nostalgic 9-to-9 Desk Grind
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Dedicated to every corporate soul surviving =VLOOKUP errors, 3.2% appraisals, late night overtime, and 15-minute cutting chai breaks.
        </p>
      </div>

      {/* Quick Action Shortcuts Bar */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
        <button
          onClick={onOpenBossKey}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-red-950/60 hover:bg-red-900/80 text-red-300 border border-red-800/60 text-xs font-medium transition-all shadow-lg hover:scale-105 active:scale-95 group"
          title="Press Esc key anytime for fake MS Excel screen!"
        >
          <Eye className="w-4 h-4 text-red-400 group-hover:animate-pulse" />
          <span>BOSS IS COMING! <kbd className="bg-red-900/80 px-1.5 py-0.5 rounded text-[10px] border border-red-700 font-mono">Esc</kbd></span>
        </button>

        <button
          onClick={onPlayTeamsSound}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-indigo-950/60 hover:bg-indigo-900/80 text-indigo-300 border border-indigo-800/60 text-xs font-medium transition-all shadow-lg hover:scale-105 active:scale-95"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
          <span>Teams "Ding" <kbd className="bg-indigo-900/80 px-1.5 py-0.5 rounded text-[10px] border border-indigo-700 font-mono">T</kbd></span>
        </button>

        <button
          onClick={onScanBadge}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-950/60 hover:bg-amber-900/80 text-amber-300 border border-amber-800/60 text-xs font-medium transition-all shadow-lg hover:scale-105 active:scale-95"
        >
          <Shield className="w-4 h-4 text-amber-400" />
          <span>Scan Badge <kbd className="bg-amber-900/80 px-1.5 py-0.5 rounded text-[10px] border border-amber-700 font-mono">B</kbd></span>
        </button>

        <button
          onClick={onChaiSip}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-800/60 text-xs font-medium transition-all shadow-lg hover:scale-105 active:scale-95"
        >
          <Coffee className="w-4 h-4 text-emerald-400" />
          <span>Sip Chai <kbd className="bg-emerald-900/80 px-1.5 py-0.5 rounded text-[10px] border border-emerald-700 font-mono">C</kbd></span>
        </button>
      </div>
    </header>
  );
};
