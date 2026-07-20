import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, Award, Languages, GraduationCap, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Experience, Certification } from "../types";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const [activeTab, setActiveTab] = useState<"experience" | "certifications">("experience");

  const experiences: Experience[] = [
    {
      id: "exp-1",
      role: "Frontend Developer",
      company: "IDM Techpark",
      location: "Erode",
      period: "May 2025 - May 2026",
      bullets: [
        "Developed and maintained responsive web applications using React.js.",
        "Built reusable UI components with HTML5, CSS3 and JavaScript.",
        "Integrated REST APIs and optimized application performance.",
        "Collaborated with the development team to deliver scalable frontend solutions.",
        "Improved UI responsiveness and fixed production issues.",
        "Followed Git/GitHub workflow and industry best practices."
      ]
    },
    {
      id: "exp-2",
      role: "Frontend Developer Intern (React.js)",
      company: "IDM Techpark",
      location: "Erode",
      period: "January 2025 - May 2025",
      bullets: [
        "Developed responsive and reusable UI components using React.js.",
        "Worked on real-world frontend projects following industry best practices.",
        "Collaborated with team members to improve application performance and UI/UX.",
        "Gained practical exposure to component-based architecture and modern frontend workflows."
      ]
    }
  ];

  const certifications: Certification[] = [
    {
      id: "cert-1",
      title: "Mern Stack Developer",
      issuer: "IDM Techpark",
      period: "January 2025",
      description: "Completed an industry-oriented certification covering full-stack application development using MongoDB, Express.js, React.js, and Node.js, with hands-on project experience."
    },
    {
      id: "cert-2",
      title: "Frontend Developer (React.js)",
      issuer: "IDM Techpark",
      period: "Jan-May 2025",
      description: "Gained practical experience in building responsive React.js user interfaces, reusable components, and integrating frontend applications with REST APIs."
    }
  ];

  return (
    <section id="about" className="py-32 bg-[#050505] border-t border-white/10 text-white relative scroll-mt-24">
      <div className="absolute top-1/2 left-5 w-72 h-72 rounded-full bg-[#F27D26]/[0.02] blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[10px] font-mono text-[#F27D26] uppercase tracking-[0.3em] font-black">About Me & Journey</h2>
            <p className="mt-2 text-4xl sm:text-5xl font-display font-black tracking-tighter uppercase text-white">
              My Professional Story
            </p>
            <div className="mt-4 h-1.5 w-16 bg-[#F27D26] mx-auto rounded-none" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Summary and Core Facts */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal delay={0.1}>
              <div className="bg-[#111] p-8 rounded-none border border-white/10">
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#F27D26] mb-4 flex items-center gap-2 font-bold">
                  <span>Brief Overview</span>
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm font-sans">
                  I am NAVEENKUMAR L, a Frontend Developer with 1 year of professional experience in React.js, JavaScript, HTML5, CSS3, REST APIs, and responsive web development.
                </p>
                <p className="mt-4 text-slate-400 leading-relaxed text-sm font-sans">
                  Experienced in building scalable user interfaces, integrating APIs, and developing modern web applications. Passionate about creating clean, responsive, and user-friendly applications while continuously learning modern frontend technologies.
                </p>

                <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-left">
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-mono">Location</span>
                    <span className="text-sm font-black text-white uppercase tracking-tight">Tiruchengode, Namakkal DT</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-mono">Experience Level</span>
                    <span className="text-sm font-black text-white uppercase tracking-tight">1 Year Experience</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Achievements Card */}
            <ScrollReveal delay={0.2}>
              <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] p-8 rounded-none border-l-4 border-l-[#F27D26] border-y border-r border-white/10">
                <h4 className="text-[10px] font-mono text-white uppercase tracking-[0.2em] mb-4 flex items-center gap-2 font-black">
                  <Award className="w-4 h-4 text-[#F27D26]" />
                  <span>Key Highlights</span>
                </h4>
                <ul className="space-y-4 text-slate-400 text-sm font-sans text-left">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-[#F27D26] mt-2 flex-shrink-0" />
                    <span><strong>1 Year of Professional Experience</strong> in React.js Development.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-[#F27D26] mt-2 flex-shrink-0" />
                    <span>Successfully completed Internship and Full-time <strong>Software Web Developer</strong> role at IDM Techpark.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-[#F27D26] mt-2 flex-shrink-0" />
                    <span>Built and deployed multiple <strong>MERN Stack applications</strong> following industry best practices.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Languages Card */}
            <ScrollReveal delay={0.3}>
              <div className="bg-[#111] p-6 rounded-none border border-white/10">
                <h4 className="text-[10px] font-mono text-white uppercase tracking-[0.2em] mb-4 flex items-center gap-2 font-black">
                  <Languages className="w-4 h-4 text-[#F27D26]" />
                  <span>Languages</span>
                </h4>
                <div className="flex flex-col gap-3">
                  <div className="bg-black px-4 py-3 rounded-none border border-white/10 flex items-center justify-between w-full">
                    <span className="text-xs text-white uppercase tracking-wider font-bold">English</span>
                    <span className="text-[9px] uppercase tracking-widest bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/20 px-2.5 py-1 rounded-none font-bold">Professional Working</span>
                  </div>
                  <div className="bg-black px-4 py-3 rounded-none border border-white/10 flex items-center justify-between w-full">
                    <span className="text-xs text-white uppercase tracking-wider font-bold">Tamil</span>
                    <span className="text-[9px] uppercase tracking-widest bg-white/10 text-white border border-white/20 px-2.5 py-1 rounded-none font-bold">Native Speaker</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Timeline tabs */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal delay={0.1}>
              <div className="flex border border-white/10 p-1 bg-black rounded-none max-w-sm">
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`flex-1 text-center py-2.5 rounded-none text-xs uppercase tracking-wider font-black transition-all ${
                    activeTab === "experience"
                      ? "bg-[#F27D26] text-black shadow-md shadow-[#F27D26]/10"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Experience
                </button>
                <button
                  onClick={() => setActiveTab("certifications")}
                  className={`flex-1 text-center py-2.5 rounded-none text-xs uppercase tracking-wider font-black transition-all ${
                    activeTab === "certifications"
                      ? "bg-[#F27D26] text-black shadow-md shadow-[#F27D26]/10"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Certificates
                </button>
              </div>
            </ScrollReveal>

            <div className="text-left">
              {activeTab === "experience" && (
                <div className="relative pl-6 border-l border-white/10 space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                      className="relative group"
                    >
                      {/* Timeline dot */}
                      <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-none bg-black border-2 border-[#F27D26] flex items-center justify-center group-hover:bg-[#F27D26] transition-all">
                        <span className="w-1 h-1 bg-white" />
                      </span>

                      <div className="bg-[#111] border border-white/10 p-6 rounded-none group-hover:border-[#F27D26]/50 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                          <div>
                            <h4 className="text-lg font-display font-black uppercase tracking-tight text-white group-hover:text-[#F27D26] transition-colors">
                              {exp.role}
                            </h4>
                            <span className="text-[#F27D26] text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 mt-1">
                              <Briefcase className="w-3.5 h-3.5" />
                              <span>{exp.company}</span>
                            </span>
                          </div>
                          <div className="flex flex-col items-start sm:items-end text-left sm:text-right">
                            <span className="text-[10px] uppercase tracking-wider bg-black text-[#F27D26] border border-[#F27D26]/20 px-3 py-1 rounded-none font-mono font-bold flex items-center gap-1.5">
                              <Calendar className="w-3 h-3" />
                              {exp.period}
                            </span>
                            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold flex items-center gap-1 mt-1.5">
                              <MapPin className="w-3 h-3 text-slate-600" />
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-3 mt-4 text-slate-400 text-sm font-sans list-none border-t border-white/5 pt-4">
                          {exp.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="text-[#F27D26] mt-1 flex-shrink-0 font-bold">▪</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "certifications" && (
                <div className="relative pl-6 border-l border-white/10 space-y-8">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                      className="relative group"
                    >
                      {/* Timeline dot */}
                      <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-none bg-black border-2 border-[#F27D26] flex items-center justify-center group-hover:bg-[#F27D26] transition-all">
                        <span className="w-1 h-1 bg-white" />
                      </span>

                      <div className="bg-[#111] border border-white/10 p-6 rounded-none group-hover:border-[#F27D26]/50 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                          <div>
                            <h4 className="text-lg font-display font-black uppercase tracking-tight text-white group-hover:text-[#F27D26] transition-colors">
                              {cert.title}
                            </h4>
                            <span className="text-[#F27D26] text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 mt-1">
                              <Award className="w-3.5 h-3.5" />
                              <span>{cert.issuer}</span>
                            </span>
                          </div>
                          <span className="text-[10px] uppercase tracking-wider bg-black text-[#F27D26] border border-[#F27D26]/20 px-3 py-1 rounded-none font-mono font-bold flex items-center gap-1.5 w-fit h-fit">
                            <Calendar className="w-3 h-3" />
                            {cert.period}
                          </span>
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed font-sans border-t border-white/5 pt-4">
                          {cert.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
