import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, RotateCw, CheckCircle2, AlertTriangle, FileText, Sparkles, Heart } from 'lucide-react';

interface NostalgicHeroProps {
  onChaiSip: () => void;
  onScanBadge: () => void;
  onPlayKeyboardClick: () => void;
}

export const NostalgicHero: React.FC<NostalgicHeroProps> = ({
  onChaiSip,
  onScanBadge,
  onPlayKeyboardClick,
}) => {
  const [badgeFlipped, setBadgeFlipped] = useState(false);
  const [chaiLevel, setChaiLevel] = useState(100);
  const [chaiThought, setChaiThought] = useState<string | null>(null);
  const [activeSticky, setActiveSticky] = useState<number | null>(null);

  const chaiQuotes = [
    "Cutting chai: Liquid energy powering 14-hour IT shifts.",
    "Chai tapri is where real company policies are discussed.",
    "One chai sip reduces Teams meeting frustration by 40%.",
    "Chai level refilled! Ready for another meaningless slide deck.",
    "Sipping chai while silently rejecting extra weekend work."
  ];

  const handleSip = () => {
    onChaiSip();
    if (chaiLevel <= 20) {
      setChaiLevel(100);
      setChaiThought("Chai tapri wallah refilled your glass! ☕");
    } else {
      setChaiLevel((prev) => Math.max(10, prev - 25));
      const randomQuote = chaiQuotes[Math.floor(Math.random() * chaiQuotes.length)];
      setChaiThought(randomQuote);
    }
  };

  const handleFlipBadge = () => {
    onScanBadge();
    setBadgeFlipped(!badgeFlipped);
  };

  const stickyNotes = [
    {
      id: 1,
      color: 'bg-yellow-200 text-yellow-950 border-yellow-300',
      rotation: '-rotate-2',
      title: 'CRITICAL REMINDER',
      text: 'Do NOT hit "Reply All" on the HR Diwali email broadcast!'
    },
    {
      id: 2,
      color: 'bg-pink-200 text-pink-950 border-pink-300',
      rotation: 'rotate-3',
      title: 'NOTICE PERIOD',
      text: '89 Days Left. Do not accept new Jira tickets under any cost.'
    },
    {
      id: 3,
      color: 'bg-cyan-200 text-cyan-950 border-cyan-300',
      rotation: '-rotate-1',
      title: 'EXCEL CHEAT SHEET',
      text: '=IFERROR(VLOOKUP(A2, B:C, 2, FALSE), "Blame Server")'
    }
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 py-6">
      {/* Visual Frame Container with Frosted Glass */}
      <div className="relative rounded-3xl overflow-hidden glass-panel p-6 sm:p-10 shadow-2xl">
        
        {/* Background Image Layer with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/corporate_cubicle_night_1786440039764.jpg"
            alt="Corporate Cubicle Night View"
            className="w-full h-full object-cover object-center opacity-35 blur-[2px] scale-105 transition-all duration-700 hover:scale-100 hover:blur-0"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002626] via-[#004d4d]/80 to-transparent" />
        </div>

        {/* Hero Interactive Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Badge Card & Lanyard */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="text-center mb-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400/90 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Tap Badge to Flip Details
              </span>
            </div>

            {/* 3D Flip Card */}
            <div
              className="w-full max-w-sm h-[380px] perspective-1000 cursor-pointer group"
              onClick={handleFlipBadge}
            >
              <motion.div
                className="w-full h-full relative transition-all duration-500 transform-style-3d shadow-2xl rounded-2xl"
                animate={{ rotateY: badgeFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* FRONT: Corporate Employee Badge */}
                <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-2 border-amber-500/40 p-6 flex flex-col justify-between shadow-2xl overflow-hidden">
                  {/* Lanyard Hole */}
                  <div className="w-12 h-3 bg-slate-800 rounded-full mx-auto border border-amber-500/30 flex items-center justify-center">
                    <div className="w-6 h-1 bg-amber-500/50 rounded-full" />
                  </div>

                  {/* Header Tag */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-bold text-slate-200 tracking-wider">GLOBAL IT TECH CORP</span>
                    </div>
                    <span className="text-[10px] bg-amber-500/20 text-amber-300 font-mono px-2 py-0.5 rounded">
                      ID: CM-9042
                    </span>
                  </div>

                  {/* Employee Details */}
                  <div className="flex items-center gap-4 py-2">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden border-2 border-amber-500/50 shadow-md">
                      <img
                        src="/src/assets/images/chai_tapri_badge_1786440057207.jpg"
                        alt="Employee Badge"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay" />
                    </div>
                    <div className="space-y-1 text-left">
                      <h3 className="text-lg font-black text-slate-100 leading-tight">
                        MAJDOOR #404
                      </h3>
                      <p className="text-xs text-amber-400 font-medium">
                        Sr. VLOOKUP & Slide Deck Specialist
                      </p>
                      <p className="text-[11px] text-slate-400 font-mono">
                        Dept: Escalation Matrix
                      </p>
                      <div className="inline-block text-[10px] bg-red-950/80 text-red-300 border border-red-800/60 px-2 py-0.5 rounded mt-1 font-mono">
                        Notice Period Active
                      </div>
                    </div>
                  </div>

                  {/* Barcode & Footer */}
                  <div className="border-t border-slate-800 pt-3 space-y-2">
                    <div className="h-8 bg-slate-900 border border-slate-800 rounded flex items-center justify-center px-2 font-mono text-[10px] text-slate-500 tracking-widest overflow-hidden">
                      ||| | |||| || | ||||| ||| |||| | ||| ||||
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
                      <span>ACCESS LEVEL: CUBICLE</span>
                      <span className="text-amber-400 flex items-center gap-1">
                        <RotateCw className="w-3 h-3" /> Tap to view salary slip
                      </span>
                    </div>
                  </div>
                </div>

                {/* BACK: Salary Slip & Secret Resignation Draft */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-slate-950 border-2 border-purple-500/40 p-6 flex flex-col justify-between shadow-2xl">
                  <div className="border-b border-slate-800 pb-2 flex justify-between items-center">
                    <span className="text-xs font-bold text-purple-300 font-mono">SALARY SLUB (MONTHLY)</span>
                    <span className="text-[10px] text-emerald-400 font-mono">STATUS: CREDITED</span>
                  </div>

                  <div className="space-y-2 text-xs font-mono text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Basic CTC:</span>
                      <span>₹ 1,00,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">HRA & Special:</span>
                      <span>₹ 40,000</span>
                    </div>
                    <div className="flex justify-between text-red-400">
                      <span>PF + TDS + Canteen:</span>
                      <span>- ₹ 55,000</span>
                    </div>
                    <div className="border-t border-slate-800 pt-2 flex justify-between font-bold text-emerald-300 text-sm">
                      <span>In-Hand Bank Credit:</span>
                      <span>₹ 85,000 (45% Tears)</span>
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-[11px] text-slate-300 italic font-mono">
                    "Drafted resignation letter saved in notes app. Waiting for variable pay payout on 15th."
                  </div>

                  <div className="text-center text-[10px] text-purple-400 font-mono">
                    Tap again to flip back
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Cutting Chai Widget & Interactive Desk Details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Cutting Chai Station */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Coffee className="w-5 h-5 animate-bounce" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-100">
                      Cutting Chai Station
                    </h3>
                    <p className="text-xs text-slate-400">
                      Click glass to sip & recharge corporate sanity
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleSip}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <Coffee className="w-4 h-4" />
                  <span>Sip Cutting Chai ({chaiLevel}%)</span>
                </button>
              </div>

              {/* Chai Visual Progress Bar */}
              <div className="w-full h-3 bg-slate-950 rounded-full border border-slate-800 overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"
                  animate={{ width: `${chaiLevel}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Chai Thought Bubble */}
              <AnimatePresence mode="wait">
                {chaiThought && (
                  <motion.div
                    key={chaiThought}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="mt-3 p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-200 text-xs font-mono flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{chaiThought}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Interactive Sticky Notes Board */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" />
                  Cubicle Monitor Sticky Notes
                </h4>
                <span className="text-[10px] text-slate-500 font-mono">
                  Click note to expand
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {stickyNotes.map((note) => (
                  <motion.div
                    key={note.id}
                    whileHover={{ scale: 1.05, rotate: 0 }}
                    onClick={() => {
                      onPlayKeyboardClick();
                      setActiveSticky(activeSticky === note.id ? null : note.id);
                    }}
                    className={`p-4 rounded-xl border shadow-lg cursor-pointer transition-all ${note.color} ${note.rotation}`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] font-black tracking-wider uppercase opacity-80">
                        {note.title}
                      </span>
                      <CheckCircle2 className="w-3 h-3 opacity-60" />
                    </div>
                    <p className="text-xs font-mono font-medium leading-relaxed">
                      {note.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
