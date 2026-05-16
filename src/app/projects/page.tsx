import ProjectsComponent from "@/components/Projects";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen text-white pt-24 pb-24">
      <ProjectsComponent />
      
      <div className="flex flex-col items-center justify-center mt-8">
        <p className="text-neutral-400 mb-6 font-light text-lg">Interested in working together?</p>
        <Link href="/contact" className="relative group overflow-hidden rounded-full bg-white px-10 py-4 text-black font-semibold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          <span className="relative z-10 flex items-center gap-2">
            Let's Connect
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" />
            </svg>
          </span>
        </Link>
      </div>
    </main>
  );
}
