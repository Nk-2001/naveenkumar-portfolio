import React, { useState } from "react";
import { Github, ExternalLink, ShieldCheck, Instagram, CloudSun, ShoppingBag, FolderOpen, Search, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "fullstack" | "frontend">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const projects: Project[] = [
    {
      id: "proj-3",
      title: "Weather App (Live)",
      subtitle: "React.js & OpenWeather API Client",
      description: "Developed a responsive weather application using React.js and OpenWeather API.",
      tags: ["React.js", "JavaScript (ES6)", "OpenWeather API", "Vercel", "CSS3"],
      githubUrl: "https://github.com/Nk-2001",
      liveUrl: "https://weather-app-sigma-one-82.vercel.app/",
      status: "Production",
      bullets: [
        "Implemented real-time weather search by city with current temperature, humidity, wind speed, and weather conditions.",
        "Added dynamic weather icons and responsive UI for desktop and mobile devices.",
        "Integrated REST APIs using asynchronous JavaScript (fetch/axios)."
      ]
    },
    {
      id: "proj-2",
      title: "Portfolio",
      subtitle: "React.js Developer Portfolio",
      description: "Designed and developed a highly polished, responsive personal portfolio showcasing developer expertise, built with modular React components, smooth scroll reveals, and a custom interactive administrative mailbox.",
      tags: ["React.js", "Vite", "TypeScript", "Tailwind CSS", "motion"],
      githubUrl: "https://github.com/Nk-2001",
      liveUrl: "https://naveenkumar-portfolio-pink.vercel.app/",
      status: "Production",
      bullets: [
        "Crafted a custom dark-industrial aesthetic using space-optimized typography and high-contrast accents.",
        "Engineered custom responsive structures including scroll animated modules, interactive states, and contact inbox admin mode.",
        "Optimized for smooth performance and search accessibility across standard modern browsers."
      ]
    },
    {
      id: "proj-1",
      title: "Instagram Clone",
      subtitle: "Full-Stack MERN Stack App",
      description: "Developed a full-stack social media application with user authentication, posts, likes/unlikes, and comments.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST API"],
      githubUrl: "https://github.com/Nk-2001",
      liveUrl: "https://frontend-68ti.onrender.com",
      status: "Production",
      bullets: [
        "Implemented RESTful APIs using Node.js and Express.js with MongoDB database.",
        "Designed responsive and interactive UI using React.js.",
        "Focused on performance optimization and smooth user experience.",
        "Built full post interactions including media feeds, dynamic likes, and comments."
      ]
    },
    {
      id: "proj-4",
      title: "MERN E-Commerce",
      subtitle: "MERN Stack - Ongoing",
      description: "Working on product listings, cart functionality, and authentication.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Redux"],
      githubUrl: "https://github.com/Nk-2001",
      status: "Ongoing",
      bullets: [
        "Implementing admin and user dashboards.",
        "Designing local storage mechanisms keeping client shopping carts intact between visits.",
        "Configuring security layers verifying checkout forms and validating payment fields."
      ]
    }
  ];

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "proj-3":
        return <CloudSun className="w-6 h-6 text-[#F27D26]" />;
      case "proj-2":
        return <FolderOpen className="w-6 h-6 text-[#F27D26]" />;
      case "proj-1":
        return <Instagram className="w-6 h-6 text-[#F27D26]" />;
      default:
        return <ShoppingBag className="w-6 h-6 text-[#F27D26]" />;
    }
  };

  const getProjectGradient = (id: string) => {
    return "from-[#111] to-[#0d0d0d]";
  };

  const filteredProjects = projects.filter((proj) => {
    // Category Filter
    const matchesCategory =
      filter === "all" ||
      (filter === "fullstack" && (proj.subtitle.includes("MERN") || proj.subtitle.includes("Full-Stack"))) ||
      (filter === "frontend" && (proj.subtitle.includes("API Client") || proj.subtitle.includes("Portfolio")));

    // Search Query Filter
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-32 bg-[#050505] text-white relative border-t border-white/10">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#F27D26]/[0.01] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[10px] font-mono text-[#F27D26] uppercase tracking-[0.3em] font-black">My Craft & Creations</h2>
            <p className="mt-2 text-4xl sm:text-5xl font-display font-black tracking-tighter uppercase text-white">
              Featured Portfolio Projects
            </p>
            <div className="mt-4 h-1.5 w-16 bg-[#F27D26] mx-auto rounded-none" />
          </div>
        </ScrollReveal>

        {/* Filters and Search Bar */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16" id="projects-controls">
            {/* Categories Tab Selector */}
            <div className="flex flex-wrap items-center gap-1 bg-black p-1 rounded-none w-full sm:w-fit border border-white/10">
              <button
                onClick={() => setFilter("all")}
                className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-none text-[10px] uppercase tracking-wider font-black transition-all cursor-pointer ${
                  filter === "all"
                    ? "bg-[#F27D26] text-black font-black"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter("fullstack")}
                className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-none text-[10px] uppercase tracking-wider font-black transition-all cursor-pointer ${
                  filter === "fullstack"
                    ? "bg-[#F27D26] text-black font-black"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Full-Stack
              </button>
              <button
                onClick={() => setFilter("frontend")}
                className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-none text-[10px] uppercase tracking-wider font-black transition-all cursor-pointer ${
                  filter === "frontend"
                    ? "bg-[#F27D26] text-black font-black"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Frontend APIs
              </button>
            </div>

            {/* Search Box */}
            <div className="relative max-w-xs w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search tech, name, keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#111] border border-white/10 rounded-none pl-10 pr-4 py-3 text-xs text-slate-300 placeholder-slate-500 focus:outline-none focus:border-[#F27D26]/80 focus:ring-1 focus:ring-[#F27D26]/30 transition-all font-bold uppercase tracking-wider"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left" id="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, index) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, y: 35, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.05 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: index * 0.05 }}
                className={`bg-gradient-to-b ${getProjectGradient(
                  proj.id
                )} border border-white/10 rounded-none p-8 flex flex-col justify-between hover:border-[#F27D26]/40 transition-all group`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-black border border-white/10 rounded-none">
                      {getProjectIcon(proj.id)}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[9px] font-mono text-[#F27D26] font-bold tracking-widest uppercase">
                        {proj.subtitle}
                      </span>
                      {proj.status && (
                        <span
                          className={`text-[8px] px-2.5 py-1 rounded-none font-mono font-black tracking-wider border uppercase ${
                            proj.status === "Production"
                              ? "bg-white/10 text-white border-white/20"
                              : "bg-[#F27D26]/10 text-[#F27D26] border-[#F27D26]/20"
                          }`}
                        >
                          {proj.status}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-display font-black uppercase tracking-tight text-white group-hover:text-[#F27D26] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-sans mt-3 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Detail Bullet Points */}
                  <ul className="space-y-3 mt-6 mb-6 text-xs text-slate-300 font-sans list-none border-t border-white/5 pt-6">
                    {proj.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#F27D26] font-bold mt-0.5">▪</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Tags & Links */}
                <div className="space-y-5">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-black px-2.5 py-1 rounded-none text-[9px] font-mono font-semibold text-slate-400 border border-white/5 uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-white/5">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs text-slate-400 hover:text-white font-bold uppercase tracking-wider transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code Repo</span>
                    </a>

                    {proj.liveUrl ? (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest bg-[#F27D26] hover:bg-[#ff9445] text-black px-5 py-3 rounded-none font-black shadow-md shadow-[#F27D26]/10 transition-all hover:scale-105"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5 stroke-[3]" />
                      </a>
                    ) : (
                      <span className="text-[10px] uppercase tracking-wider text-slate-500 font-mono font-bold italic">
                        In Progress
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="col-span-1 lg:col-span-2 py-20 text-center border-2 border-dashed border-white/10 rounded-none flex flex-col items-center justify-center space-y-4">
              <FolderOpen className="w-12 h-12 text-slate-600" />
              <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">No projects found matching query.</p>
              <button
                onClick={() => {
                  setFilter("all");
                  setSearchQuery("");
                }}
                className="text-xs text-[#F27D26] underline font-black uppercase tracking-wider cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
