"use client";

export default function SpiralBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none flex items-center justify-center overflow-hidden bg-[#121212]">
      {/* Soft glow behind the ribbon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]"></div>
      
      <svg viewBox="0 0 1200 1200" className="w-full h-full object-contain origin-center animate-[pulse_15s_infinite_ease-in-out] scale-125 lg:scale-150">
        <g fill="none" stroke="#ffffff" strokeWidth="2" className="opacity-[0.07]">
          {/* Main looping spiral */}
          {Array.from({ length: 20 }).map((_, i) => {
            const offset = i * 6;
            return (
              <path 
                key={i} 
                d={`
                  M 0 ${700 + offset} 
                  C 300 ${-300 + offset}, 1000 ${-300 + offset}, 1100 ${600 + offset} 
                  C 1200 ${1200 + offset}, 300 ${1100 + offset}, 400 ${500 + offset} 
                  C 450 ${150 + offset}, 850 ${150 + offset}, 800 ${600 + offset} 
                  C 750 ${950 + offset}, 550 ${850 + offset}, 600 ${600 + offset}
                  C 620 ${450 + offset}, 720 ${500 + offset}, 700 ${600 + offset}
                `} 
              />
            );
          })}
          
          {/* Secondary intersecting ribbon */}
          {Array.from({ length: 12 }).map((_, i) => {
            const offset = i * 6;
            return (
              <path 
                key={`secondary-${i}`} 
                d={`
                  M -100 ${300 + offset}
                  C 400 ${800 + offset}, 800 ${800 + offset}, 1300 ${200 + offset}
                `}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
