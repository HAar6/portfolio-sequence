"use client";

import { useState } from "react";
import Link from "next/link";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Personal Portfolio",
      category: "Web Application",
      image: "/sequence/ezgif-frame-001.png",
      link: "https://haar6.vercel.app/"
    },
    {
      title: "Cardiovascular Disease Risk Predictor",
      category: "Machine Learning",
      image: "/HDP.png",
      link: "https://cvdpred.streamlit.app/",
    },

    {
      title: "Money MAP",
      category: "Expense Dashboard",
      image: "/money-map.jpg",
      link: "https://expensetrackerfrontend-oled.onrender.com",
    }

  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section className="py-12 px-6 md:px-24 min-h-screen relative z-20 text-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">Selected Work</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {visibleProjects.map((project, idx) => {
            const content = (
              <>
                <div className="aspect-[4/3] w-full overflow-hidden bg-black/40 flex items-center justify-center p-4 md:p-6 border-b border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-sm text-indigo-400 font-medium mb-2 uppercase tracking-wider">{project.category}</p>
                  <h4 className="text-xl md:text-2xl font-semibold text-white group-hover:text-indigo-300 transition-colors duration-300">{project.title}</h4>
                </div>
              </>
            );

            const containerClass = "group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] cursor-pointer block";

            return project.link ? (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={containerClass}
              >
                {content}
              </a>
            ) : (
              <div key={idx} className={containerClass}>
                {content}
              </div>
            );
          })}
        </div>

        {!showAll && projects.length > 2 && (
          <div className="flex justify-center pb-12">
            <button
              onClick={() => setShowAll(true)}
              className="relative group overflow-hidden rounded-full bg-zinc-900 px-8 py-4 border border-zinc-800 transition-all hover:border-zinc-700 block cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
              <span className="relative font-medium tracking-wide text-neutral-300 group-hover:text-white transition-colors z-10 flex items-center gap-2">
                Explore All Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
