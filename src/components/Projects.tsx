"use client";

import { useState } from "react";
import Link from "next/link";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Money MAP",
      category: "Expense Dashboard",
      image: "/money-map.jpg",
      link: "https://expensetrackerfrontend-oled.onrender.com",
    },
    {
      title: "Personal Portfolio",
      category: "Web Application",
      image: "/sequence/ezgif-frame-001.png",
    },
    {
      title: "MenuCraft",
      category: "Food Menu Website",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
    },
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
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-sm text-neutral-400 mb-2">{project.category}</p>
                  <h4 className="text-2xl font-semibold">{project.title}</h4>
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
