import ScrollyCanvas from "@/components/ScrollyCanvas";
import SpotifyPlayer from "@/components/SpotifyPlayer";
import TechMarquee from "@/components/TechMarquee";
import BentoStats from "@/components/BentoStats";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <ScrollyCanvas />
      
      <TechMarquee />
      
      <BentoStats />
      
      <section className="py-32 flex flex-col items-center justify-center text-center px-6 relative z-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">Ready to see my work?</h2>
        <p className="text-xl text-neutral-400 mb-10 max-w-2xl font-light">
          Discover my latest case studies and digital experiences.
        </p>
        <Link 
          href="/projects" 
          className="relative group overflow-hidden rounded-full bg-white text-black px-10 py-5 font-semibold text-lg transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
        >
          <span className="relative z-10 flex items-center gap-3">
            Continue to Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </section>

      <SpotifyPlayer />
    </main>
  );
}
