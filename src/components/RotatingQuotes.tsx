import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NOSTALGIC_QUOTES } from '../data/corporateData';
import { Quote, ChevronLeft, ChevronRight, Play, Pause, Sparkles } from 'lucide-react';

export const RotatingQuotes: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % NOSTALGIC_QUOTES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % NOSTALGIC_QUOTES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + NOSTALGIC_QUOTES.length) % NOSTALGIC_QUOTES.length);
  };

  const currentQuote = NOSTALGIC_QUOTES[currentIndex];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-4">
      <div className="relative rounded-2xl glass-panel p-6 sm:p-8 shadow-2xl backdrop-blur-xl overflow-hidden border border-white/20">
        
        {/* Subtle Background Glow */}
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          
          {/* Quote Content Box */}
          <div className="flex items-start gap-4 max-w-3xl">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-1">
              <Quote className="w-5 h-5" />
            </div>

            <div className="space-y-2 min-h-[90px] flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest bg-amber-500/10 text-amber-300 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                  Nostalgic Corporate Quote #{currentIndex + 1}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  • {currentQuote.category.replace('_', ' ')}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={currentQuote.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-base sm:text-lg md:text-xl font-medium text-slate-100 italic leading-snug"
                >
                  "{currentQuote.text}"
                </motion.p>
              </AnimatePresence>

              <p className="text-xs text-amber-400/90 font-mono">
                — {currentQuote.author}
              </p>
            </div>
          </div>

          {/* Controls & Progress */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              title="Previous quote"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              title={isAutoPlaying ? "Pause auto-rotation" : "Play auto-rotation"}
            >
              {isAutoPlaying ? <Pause className="w-4 h-4 text-amber-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
            </button>

            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              title="Next quote"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Auto Progress Bar */}
        {isAutoPlaying && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800/50 overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 5, ease: 'linear' }}
              className="h-full bg-gradient-to-r from-amber-500 to-cyan-400"
            />
          </div>
        )}
      </div>
    </section>
  );
};
