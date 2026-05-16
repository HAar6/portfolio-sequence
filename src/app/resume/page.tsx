export default function Resume() {
  const skillCategories = [
    {
      category: "Technical",
      items: "Java, C++, HTML/CSS, JavaScript, Machine Learning, Artificial Intelligence"
    },
    {
      category: "Tools",
      items: "React, MongoDB, OpenCV, Git & GitHub, Linux/Unix, Vs-Code, UI/UX"
    },
    {
      category: "Subjects",
      items: "Data Structure and Algorithm, OOPs, Operating System, DBMS, Computer Network"
    },
    {
      category: "Additional Skills",
      items: "Team collaboration, Agile development exposure, Debugging & code optimization"
    }
  ];

  const certifications = [
    {
      title: "Cybersecurity Essentials",
      issuer: "Cisco",
      date: "May 2023"
    },
    {
      title: "AWS Academy Graduate - Machine Learning Foundations",
      issuer: "AWS",
      date: "May 2023"
    },
    {
      title: "Database Management System",
      issuer: "Infosys Springboard",
      date: "Nov 2024"
    }
  ];

  const achievements = [
    "Led logistics and promotions for college event 'The Laughter Factory,' ensuring smooth execution and high participation.",
    "Solved 140+ LeetCode problems, showcasing strong problem-solving and proficiency in C++ and Core Java.",
    "Participated in Smart India Hackathon 2024, developing an AI-driven traffic management system using machine learning, competing among top 50+ shortlisted teams at the national level."
  ];

  return (
    <main className="min-h-screen text-white pt-32 px-6 md:px-24 pb-24">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-[40px] p-8 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4">Resume.</h1>
            <p className="text-xl text-neutral-400 font-light mb-2">Harshit Yadav</p>
            <p className="text-neutral-500 max-w-2xl text-sm leading-relaxed">
              Passionate coder and tech enthusiast who loves turning complex problems into elegant software solutions. Skilled in DSA and driven to build impactful, intelligent applications.
            </p>
          </div>
          <a 
            href="/harshitresume11.pdf" 
            download="Harshit_Yadav_Resume.pdf"
            className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download PDF
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
          {/* Left Column: Education & Skills */}
          <div className="space-y-12">
            <section>
              <h2 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4">Education</h2>
              <div className="mb-6">
                <h3 className="text-lg font-medium">B.Tech - Computer Science Engineering</h3>
                <p className="text-neutral-400 text-sm mb-2">Lakshmi Narain College of Technology</p>
                <p className="text-neutral-500 text-sm mb-3">Nov 2022 - July 2026 • Bhopal, India</p>
                <ul className="text-neutral-300 font-light text-sm space-y-2 list-disc pl-4">
                  <li>Specialization in Artificial Intelligence and Data Science (Current CGPA: 7.59 / 10.00)</li>
                  <li>Completed 10th (MP Board, 85%) and 12th (MP Board, 86%) with a strong academic record.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4">Skills</h2>
              <div className="space-y-6">
                {skillCategories.map((group, idx) => (
                  <div key={idx}>
                    <h4 className="text-sm font-medium text-white/80 mb-2">{group.category}</h4>
                    <p className="text-neutral-400 font-light text-sm leading-relaxed">
                      {group.items}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Certifications & Achievements */}
          <div className="space-y-12">
            <section>
              <h2 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4">Certifications</h2>
              <div className="space-y-8">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-6 top-1.5 w-2 h-2 rounded-full bg-white/20 group-hover:bg-white transition-colors"></div>
                    <div className="absolute -left-[21px] top-4 bottom-[-32px] w-[1px] bg-white/10 last:hidden"></div>
                    <h3 className="text-xl font-medium mb-1">{cert.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-neutral-400">
                      <span className="text-white/80">{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4 mt-12">Achievements</h2>
              <ul className="space-y-6">
                {achievements.map((achievement, idx) => (
                  <li key={idx} className="text-neutral-300 font-light leading-relaxed flex items-start gap-4">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
          </div>
        </div>
      </div>
    </main>
  );
}
