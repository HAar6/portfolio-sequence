"use client";

import Link from "next/link";

export default function BentoStats() {
  const glassCard = "group relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-[40px] p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)]";

  return (
    <section className="min-h-screen px-6 md:px-12 lg:px-24 flex items-center relative overflow-hidden py-24 z-10">
      
      <div className="w-full max-w-[1200px] mx-auto relative z-10">
        <h3 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-white drop-shadow-md">At a Glance</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Large Card - AI/Data Science Focus */}
          <div className={`${glassCard} md:col-span-2 flex flex-col justify-center`}>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner backdrop-blur-md">
                <svg className="w-7 h-7 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h4 className="text-3xl font-semibold text-white mb-4 tracking-tight">AI & Machine Learning</h4>
              <p className="text-neutral-300 text-lg leading-relaxed max-w-lg font-light">
                Fusing data science with modern frontend engineering to build intelligent, high-performance applications that solve real-world problems.
              </p>
            </div>
          </div>

          {/* Top Right Card - Problem Solver (LeetCode) */}
          <div className={`${glassCard} flex flex-col justify-between`}>
            <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-1">Problem Solver</h4>
              <p className="text-neutral-400 font-light text-sm">Consistent algorithmic practice</p>
            </div>
            <div className="mt-8">
              <div className="text-4xl font-bold text-white mb-1">50+</div>
              <div className="text-sm font-medium text-orange-400 uppercase tracking-widest">Days Streak</div>
            </div>
          </div>

          {/* Bottom Left Card - GitHub */}
          <a href="https://github.com/harshityadav17" target="_blank" rel="noopener noreferrer" className={`${glassCard} flex flex-col justify-center`}>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6 text-neutral-200" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-1">Open Source</h4>
              <p className="text-neutral-400 font-light text-sm mb-4">View Repositories</p>
              <div className="flex items-center gap-2 text-neutral-300 text-sm font-medium tracking-wide">
                VISIT GITHUB <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          </a>

          {/* Bottom Right Card - Certifications */}
          <Link href="/resume" className={`${glassCard} md:col-span-2 flex flex-col justify-center`}>
            <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 shadow-inner">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">Certifications</h4>
                <p className="text-neutral-300 font-light text-lg mb-6">Cisco Cybersecurity, AWS Academy ML, Infosys Springboard</p>
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium tracking-wide">
                  VIEW FULL RESUME <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
              <div className="hidden md:flex w-24 h-24 rounded-full bg-emerald-500/5 border border-emerald-500/20 items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <svg className="w-10 h-10 text-emerald-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
