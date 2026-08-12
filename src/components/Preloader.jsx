import { useState, useEffect } from 'react';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        // Random increment for realistic smooth loading feel
        const next = prev + Math.floor(Math.random() * 12) + 5;
        return next > 100 ? 100 : next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#00ADFF] flex flex-col justify-between p-8 md:p-12 font-jakarta transition-all duration-700 ease-in-out ${
        isDone ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Top Preloader Header */}
      <div className="flex justify-between items-center text-white/70 text-xs md:text-sm font-semibold tracking-wider uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
          <span>UTS 5.0 • Half Decade Event</span>
        </div>
        <span>2026 Edition</span>
      </div>

      {/* Center Preloader Visual */}
      <div className="my-auto flex flex-col items-center justify-center text-center select-none">
        
        {/* Large Counter */}
        <div className="flex items-baseline gap-1 text-white font-extrabold text-7xl sm:text-8xl md:text-9xl tracking-tight leading-none">
          <span>{progress}</span>
          <span className="text-white text-4xl sm:text-5xl md:text-6xl">%</span>
        </div>

        {/* Brand Text */}
        <h2 className="text-white/90 font-bold text-xl md:text-2xl mt-4 tracking-tight">
          Unilorin Tech Summit
        </h2>
        <p className="text-white/60 text-xs md:text-sm mt-1">
          Loading the premier student tech experience...
        </p>

        {/* Animated Progress Bar Capsule */}
        <div className="w-64 sm:w-80 md:w-96 h-2 bg-white/10 rounded-full mt-8 overflow-hidden relative p-0.5 border border-white/10">
          <div
            className="h-full bg-gradient-to-r from-[#FF0056] via-[#FFD100] to-[#00ADFF] rounded-full transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

      </div>

      {/* Bottom Footer Details */}
      <div className="flex justify-between items-center text-white/50 text-sm font-medium">
        <span>Meet • Connect • Inspire</span>
        <span>Unilorin University</span>
      </div>
    </div>
  );
};

export default Preloader;
