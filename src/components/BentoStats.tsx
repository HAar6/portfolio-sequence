"use client";

import Link from "next/link";

export default function BentoStats() {
  const glassCard = "group relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-[40px] p-8 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)]";

  return (
    <section className="min-h-screen bg-[#121212] px-6 md:px-12 lg:px-24 flex items-center relative overflow-hidden py-24">
      
      <div className="w-full max-w-[1400px] mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side - Bento Box Grid */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight text-white drop-shadow-md">At a Glance</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Main Large Card - AI/Data Science Focus */}
            <div className={`${glassCard} sm:col-span-2 flex flex-col justify-center`}>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner backdrop-blur-md">
                  <svg className="w-7 h-7 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <h4 className="text-3xl font-semibold text-white mb-3 tracking-tight">AI & Machine Learning</h4>
                <p className="text-neutral-300 text-lg leading-relaxed font-light">
                  Fusing data science with modern frontend engineering to build intelligent, high-performance applications that solve real-world problems.
                </p>
              </div>
            </div>

            {/* Problem Solver (LeetCode) */}
            <div className={`${glassCard} flex flex-col justify-between`}>
              <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 shadow-inner">
                  <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">Problem Solver</h4>
                <p className="text-neutral-400 font-light text-xs">Consistent algorithmic practice</p>
              </div>
              <div className="mt-6">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-xs font-medium text-orange-400 uppercase tracking-widest">Days Streak</div>
              </div>
            </div>

            {/* GitHub / Open Source */}
            <a href="https://github.com/harshityadav17" target="_blank" rel="noopener noreferrer" className={`${glassCard} flex flex-col justify-between`}>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 shadow-inner">
                  <svg className="w-6 h-6 text-neutral-200" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Open Source</h4>
                  <p className="text-neutral-400 font-light text-xs">View Repositories</p>
                </div>
              </div>
              <div className="absolute bottom-8 right-8">
                <svg className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors group-hover:translate-x-1 duration-300 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>

            {/* Certifications Card */}
            <Link href="/resume" className={`${glassCard} sm:col-span-2 flex flex-col justify-center`}>
              <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">Certifications</h4>
                  <p className="text-neutral-400 font-light text-sm">Cisco, AWS, Infosys</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-emerald-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>

          </div>
        </div>

      </div>

      {/* Right Side - Full Screen Spiral Ribbon */}
      <div className="relative w-full h-[60vh] mt-12 lg:mt-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[45%] z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Soft glow behind the ribbon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]"></div>
        
        <svg viewBox="0 0 1200 1200" className="w-full h-full object-contain origin-center animate-[pulse_10s_infinite_ease-in-out] scale-125 lg:scale-150 lg:translate-x-20">
          <g fill="none" stroke="#ffffff" strokeWidth="2.5" className="opacity-40">
            {/* Main looping spiral */}
            {Array.from({ length: 20 }).map((_, i) => {
              const offset = i * 6; // slightly wider gap to make ribbon look bolder
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

    </section>
  );
}
