import React, { useState } from 'react';
import { CORPORATE_SLANG } from '../data/corporateData';
import { Volume2, Calculator, Send, Copy, Check, MessageSquare, Sparkles, BookOpen } from 'lucide-react';

interface CorporateSurvivalKitProps {
  onPlayTeamsSound: () => void;
  onPlayKeyboardClick: () => void;
  onPlayBadgeBeep: () => void;
  onPlayChaiSip: () => void;
  onPlayElevatorPing: () => void;
}

export const CorporateSurvivalKit: React.FC<CorporateSurvivalKitProps> = ({
  onPlayTeamsSound,
  onPlayKeyboardClick,
  onPlayBadgeBeep,
  onPlayChaiSip,
  onPlayElevatorPing,
}) => {
  const [activeTab, setActiveTab] = useState<'slang' | 'salary' | 'resignation' | 'sounds'>('slang');

  // Salary Calculator State
  const [ctcLpa, setCtcLpa] = useState<number>(12);
  const [bonusPercentage, setBonusPercentage] = useState<number>(10);

  // Resignation Generator State
  const [resignationReason, setResignationReason] = useState<string>('startup');
  const [lastDayNotice, setLastDayNotice] = useState<number>(90);
  const [copiedResignation, setCopiedResignation] = useState(false);

  // Calculation Logic
  const annualCtcInRupees = ctcLpa * 100000;
  const variableComponent = annualCtcInRupees * (bonusPercentage / 100);
  const fixedAnnualGross = annualCtcInRupees - variableComponent;
  const pfDeductionAnnual = Math.min(fixedAnnualGross * 0.12, 43200);
  const estimatedTaxAnnual = Math.max(0, (fixedAnnualGross - 750000) * 0.2);
  const totalAnnualInHand = Math.max(0, fixedAnnualGross - pfDeductionAnnual - estimatedTaxAnnual);
  const monthlyInHand = Math.round(totalAnnualInHand / 12);

  // Resignation Text Generator
  const getResignationTemplate = () => {
    switch (resignationReason) {
      case 'startup':
        return `Dear Manager,\n\nPlease accept this email as formal notification that I am resigning from my position as Senior PowerPoint Architect. My last working day will be after completing my mandatory ${lastDayNotice} days of notice period.\n\nI have decided to join a stealth-mode AI startup for a 120% hike and equity options. I will ensure smooth knowledge transfer of all pending =VLOOKUP spreadsheets.\n\nBest regards,\nCorporate Majdoor #404`;
      case 'chai':
        return `Dear HR & Team,\n\nKindly consider this email as my formal resignation. During my ${lastDayNotice} days notice period, I will be spending most of my working hours at the office cutting chai tapri reflecting on my career choices.\n\nPlease process my full & final settlement at the earliest.\n\nRegards,\nChai Tapri Regular`;
      case 'higher_studies':
        return `Dear Team,\n\nI am writing to formally tender my resignation. I will be pursuing higher studies (catching up on 4 years of lost sleep). My last day will be after ${lastDayNotice} days.\n\nThank you for all the "Quick Sync" calls.\n\nWarm regards,\nOverworked Desk Slave`;
      default:
        return `Dear Manager,\n\nPlease accept my resignation email. Last day: ${lastDayNotice} days from today. Kindly revert at the earliest.`;
    }
  };

  const handleCopyResignation = () => {
    onPlayKeyboardClick();
    navigator.clipboard.writeText(getResignationTemplate());
    setCopiedResignation(true);
    setTimeout(() => setCopiedResignation(false), 2000);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-6">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          Interactive Desk Utilities
        </div>
        <h3 className="text-2xl sm:text-4xl font-black text-slate-100 tracking-tight">
          Corporate Survival Kit
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          Essential toolkits for navigating office jargon, salary stubs, notice period dreams, and authentic soundboard effects.
        </p>
      </div>

      {/* Tabs Container */}
      <div className="glass-panel rounded-3xl p-4 sm:p-8 shadow-2xl backdrop-blur-xl border border-white/20">
        
        {/* Navigation Tab Headers */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-800 pb-4 mb-6">
          <button
            onClick={() => { onPlayKeyboardClick(); setActiveTab('slang'); }}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
              activeTab === 'slang'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Slang Dictionary</span>
          </button>

          <button
            onClick={() => { onPlayKeyboardClick(); setActiveTab('salary'); }}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
              activeTab === 'salary'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>CTC vs In-Hand Reality</span>
          </button>

          <button
            onClick={() => { onPlayKeyboardClick(); setActiveTab('resignation'); }}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
              activeTab === 'resignation'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Send className="w-4 h-4" />
            <span>Resignation Generator</span>
          </button>

          <button
            onClick={() => { onPlayKeyboardClick(); setActiveTab('sounds'); }}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
              activeTab === 'sounds'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Volume2 className="w-4 h-4" />
            <span>Desk Soundboard</span>
          </button>
        </div>

        {/* TAB 1: Slang Dictionary */}
        {activeTab === 'slang' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CORPORATE_SLANG.map((slang) => (
              <div
                key={slang.id}
                className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-amber-500/40 transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-amber-300 font-mono">
                    "{slang.phrase}"
                  </span>
                  <button
                    onClick={() => onPlayTeamsSound()}
                    className="p-1.5 rounded-lg bg-indigo-950 text-indigo-300 border border-indigo-800 hover:bg-indigo-900 transition-all text-[10px] font-mono flex items-center gap-1"
                    title="Play Teams notification"
                  >
                    <Volume2 className="w-3 h-3" /> Ding
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 text-xs font-mono text-emerald-300 border border-slate-800">
                  <span className="text-slate-400 text-[10px] block uppercase font-bold">What it actually means:</span>
                  {slang.translation}
                </div>

                <p className="text-[11px] text-slate-400 italic">
                  Context: {slang.context}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: CTC vs In-Hand Salary Reality Calculator */}
        {activeTab === 'salary' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <h4 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-amber-400" />
                CTC Input Parameters
              </h4>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 flex justify-between">
                  <span>Annual CTC (LPA In Rupees Lakhs):</span>
                  <span className="text-amber-400 font-bold">{ctcLpa} LPA (₹ {ctcLpa * 100000})</span>
                </label>
                <input
                  type="range"
                  min={3}
                  max={50}
                  step={1}
                  value={ctcLpa}
                  onChange={(e) => setCtcLpa(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 flex justify-between">
                  <span>Variable / Performance Bonus:</span>
                  <span className="text-purple-400 font-bold">{bonusPercentage}% (₹ {Math.round(variableComponent)})</span>
                </label>
                <input
                  type="range"
                  min={0}
                  max={30}
                  step={5}
                  value={bonusPercentage}
                  onChange={(e) => setBonusPercentage(Number(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
                💡 <strong className="text-slate-200">Note:</strong> Variable bonus is usually paid "subject to company performance" (which means never).
              </div>
            </div>

            {/* Salary Breakdown Result */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-2 border-amber-500/40 space-y-4">
              <div className="border-b border-slate-800 pb-3 flex justify-between items-center">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">SALARY BREAKDOWN STUB</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
                  REALITY CHECK
                </span>
              </div>

              <div className="space-y-2 text-xs font-mono text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Fixed Gross Annual:</span>
                  <span>₹ {Math.round(fixedAnnualGross).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-red-400">
                  <span>Provident Fund (PF):</span>
                  <span>- ₹ {Math.round(pfDeductionAnnual).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-red-400">
                  <span>Estimated Tax (TDS):</span>
                  <span>- ₹ {Math.round(estimatedTaxAnnual).toLocaleString()}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 bg-slate-900/80 p-4 rounded-xl text-center space-y-1">
                <span className="text-[11px] text-slate-400 font-mono uppercase tracking-wider block">
                  Actual Bank Account Credit
                </span>
                <p className="text-2xl sm:text-3xl font-black text-emerald-400">
                  ₹ {monthlyInHand.toLocaleString()} <span className="text-xs font-normal text-slate-400">/ month</span>
                </p>
                <p className="text-[10px] text-amber-300/80 italic font-mono pt-1">
                  "CTC sounds high on LinkedIn, but in-hand buys 2 extra cutting chais."
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Resignation Email Generator */}
        {activeTab === 'resignation' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 block">
                  Select Resignation Reason:
                </label>
                <select
                  value={resignationReason}
                  onChange={(e) => setResignationReason(e.target.value)}
                  className="w-full bg-slate-950 text-slate-200 text-xs font-mono p-3 rounded-xl border border-slate-800 focus:border-amber-500"
                >
                  <option value="startup">Joining Stealth Startup (+120% Hike)</option>
                  <option value="chai">Full time Chai Tapri Connoisseur</option>
                  <option value="higher_studies">Higher Studies (Catching Up On Sleep)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 block">
                  Notice Period (Days):
                </label>
                <select
                  value={lastDayNotice}
                  onChange={(e) => setLastDayNotice(Number(e.target.value))}
                  className="w-full bg-slate-950 text-slate-200 text-xs font-mono p-3 rounded-xl border border-slate-800 focus:border-amber-500"
                >
                  <option value={90}>90 Days (Indian IT Standard Pain)</option>
                  <option value={60}>60 Days (Moderate Tears)</option>
                  <option value={30}>30 Days (Blessed Startup)</option>
                  <option value={0}>0 Days (Immediate Buyout Dreams)</option>
                </select>
              </div>
            </div>

            {/* Generated Email Box */}
            <div className="relative bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3 font-mono text-xs text-slate-300">
              <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="text-amber-400 font-bold flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> DRAFTED RESIGNATION EMAIL
                </span>
                <button
                  onClick={handleCopyResignation}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md"
                >
                  {copiedResignation ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedResignation ? 'Copied to Drafts!' : 'Copy Email'}</span>
                </button>
              </div>

              <pre className="whitespace-pre-wrap leading-relaxed text-slate-200">
                {getResignationTemplate()}
              </pre>
            </div>
          </div>
        )}

        {/* TAB 4: Web Audio Soundboard */}
        {activeTab === 'sounds' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <button
              onClick={onPlayTeamsSound}
              className="p-5 rounded-2xl bg-indigo-950/80 border border-indigo-800 hover:border-indigo-500 text-indigo-300 flex flex-col items-center gap-2 transition-all hover:scale-105 active:scale-95 group shadow-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-900/60 flex items-center justify-center text-indigo-200 group-hover:animate-bounce">
                💬
              </div>
              <span className="text-xs font-bold font-mono">Teams "Ding!"</span>
              <span className="text-[10px] text-indigo-400">Key: T</span>
            </button>

            <button
              onClick={onPlayKeyboardClick}
              className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500 text-slate-200 flex flex-col items-center gap-2 transition-all hover:scale-105 active:scale-95 group shadow-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-amber-400">
                ⌨️
              </div>
              <span className="text-xs font-bold font-mono">Mechanical Key</span>
              <span className="text-[10px] text-slate-500">Key: Space/Any</span>
            </button>

            <button
              onClick={onPlayBadgeBeep}
              className="p-5 rounded-2xl bg-amber-950/80 border border-amber-800 hover:border-amber-500 text-amber-300 flex flex-col items-center gap-2 transition-all hover:scale-105 active:scale-95 group shadow-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-900/60 flex items-center justify-center text-amber-200">
                💳
              </div>
              <span className="text-xs font-bold font-mono">Badge Laser</span>
              <span className="text-[10px] text-amber-400">Key: B</span>
            </button>

            <button
              onClick={onPlayChaiSip}
              className="p-5 rounded-2xl bg-emerald-950/80 border border-emerald-800 hover:border-emerald-500 text-emerald-300 flex flex-col items-center gap-2 transition-all hover:scale-105 active:scale-95 group shadow-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-900/60 flex items-center justify-center text-emerald-200">
                ☕
              </div>
              <span className="text-xs font-bold font-mono">Cutting Chai Sip</span>
              <span className="text-[10px] text-emerald-400">Key: C</span>
            </button>

            <button
              onClick={onPlayElevatorPing}
              className="p-5 rounded-2xl bg-purple-950/80 border border-purple-800 hover:border-purple-500 text-purple-300 flex flex-col items-center gap-2 transition-all hover:scale-105 active:scale-95 group shadow-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-900/60 flex items-center justify-center text-purple-200">
                🔔
              </div>
              <span className="text-xs font-bold font-mono">Notice Period Bell</span>
              <span className="text-[10px] text-purple-400">Key: Bell</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
