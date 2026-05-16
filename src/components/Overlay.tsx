"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { RefObject } from "react";

export default function Overlay({ containerRef }: { containerRef: RefObject<HTMLDivElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: 0% to 15% (fade out)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

  // Section 2: 25% to 45% (fade in then out)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

  // Section 3: 55% to 75%
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.9], [50, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center">
      {/* Section 1: Center */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400">
          HARSHIT  YADAV🧑‍💻
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300 font-light">Passionate Coder & Tech Enthusiast.</p>
      </motion.div>

      {/* Section 2: Left Aligned */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center text-left px-8 md:pl-32"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-xl drop-shadow-xl">
          I build impactful, intelligent applications.
        </h2>
      </motion.div>

      {/* Section 3: Right Aligned */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right px-8 md:pr-32"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-xl drop-shadow-xl">
          Turning complex problems into elegant solutions.
        </h2>
      </motion.div>
    </div>
  );
}
