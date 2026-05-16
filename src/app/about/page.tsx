export default function About() {
  const glassCard = "relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-[40px] p-8 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.3)]";

  return (
    <main className="min-h-screen text-white pt-32 px-6 md:px-24 pb-24 flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className={glassCard}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-10 tracking-tighter">About Me.</h1>
            <div className="space-y-8 text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
              <p>
                I am <span className="font-medium text-white">Harshit Yadav</span>, a passionate coder and tech enthusiast who loves turning complex problems into elegant software solutions.
              </p>
              <p>
                Currently pursuing my Bachelor of Technology in Computer Science Engineering with a specialization in <span className="font-medium text-indigo-300">Artificial Intelligence and Data Science</span> at Lakshmi Narain College of Technology.
              </p>
              <p>
                I am highly skilled in Data Structures and Algorithms, and I am driven to build impactful, intelligent applications using modern frameworks and technologies like React, Node.js, and Machine Learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
