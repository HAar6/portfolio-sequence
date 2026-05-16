"use client";

import { motion } from "framer-motion";

export default function TechMarquee() {
  const technologies = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Python", 
    "Machine Learning", "Data Science", "C++", "MySQL", "AWS", 
    "Framer Motion", "Node.js"
  ];

  // We duplicate the array to create a seamless infinite loop
  const marqueeItems = [...technologies, ...technologies, ...technologies];

  return (
    <section className="py-20 bg-[#121212] overflow-hidden relative border-t border-white/5">
      {/* Left and right fade gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-full">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
          className="flex flex-nowrap items-center gap-12 pl-12"
        >
          {marqueeItems.map((tech, idx) => (
            <div 
              key={idx}
              className="flex items-center justify-center whitespace-nowrap text-xl md:text-3xl font-bold text-neutral-600 uppercase tracking-widest hover:text-white transition-colors duration-300"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
