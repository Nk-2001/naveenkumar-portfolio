import React, { useState } from "react";
import { Cpu, Globe, Database, PenTool, Layout, Terminal, Code2 } from "lucide-react";
import { motion } from "motion/react";
import ScrollReveal from "./ScrollReveal";

interface SkillItem {
  name: string;
  level: "Expert" | "Intermediate" | "Basic";
  description: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: any;
  skills: SkillItem[];
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories: SkillCategory[] = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: Layout,
      skills: [
        { name: "React.js", level: "Expert", description: "State hooks, functional architecture, interactive component creation." },
        { name: "Next.js", level: "Basic", description: "Familiarity with file-based routing and SSR concepts." },
        { name: "Tailwind CSS", level: "Expert", description: "Fluid utility grids, clean flexboxes, adaptive screen sizes." },
        { name: "HTML5 / CSS3", level: "Expert", description: "Semantic web structure, animations, and high accessibility." }
      ]
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: Terminal,
      skills: [
        { name: "Node.js", level: "Intermediate", description: "Asynchronous runtime, module exports, package control." },
        { name: "Express.js", level: "Intermediate", description: "RESTful routers, custom error handling middleware, JSON request parsing." }
      ]
    },
    {
      id: "database",
      title: "Databases & Storage",
      icon: Database,
      skills: [
        { name: "MongoDB", level: "Intermediate", description: "Mongoose database schemas, simple documents CRUD, atlas connections." },
        { name: "SQL Basics", level: "Basic", description: "Structured query understanding, keys, and relational joins." }
      ]
    },
    {
      id: "languages",
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "JavaScript (ES6+)", level: "Expert", description: "Promises, async/await, arrow constructs, array iterations." }
      ]
    },
    {
      id: "tools",
      title: "Tools & Deployments",
      icon: PenTool,
      skills: [
        { name: "Git / GitHub", level: "Intermediate", description: "Commit branching, merge resolution, team code sync." },
        { name: "VS Code / NPM", level: "Expert", description: "Developer workspace configurations and dependency management." },
        { name: "Vercel / Render", level: "Intermediate", description: "Automated pipeline setups, live service hosting, variable configuration." }
      ]
    },
    {
      id: "other",
      title: "Other Competencies",
      icon: Cpu,
      skills: [
        { name: "REST APIs", level: "Expert", description: "Structuring, documentation, and client-side axios consumption." },
        { name: "JWT Authentication", level: "Intermediate", description: "Token storage strategies, request headers authorization, protected endpoints." },
        { name: "Responsive UI", level: "Expert", description: "Desktop-first and mobile-first layouts, cross-device scaling." }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-[#F27D26]/15 text-[#F27D26] border-[#F27D26]/30 font-black uppercase tracking-widest text-[8px]";
      case "Intermediate":
        return "bg-white/10 text-white border-white/20 font-black uppercase tracking-widest text-[8px]";
      default:
        return "bg-white/5 text-slate-400 border-white/10 font-black uppercase tracking-widest text-[8px]";
    }
  };

  const filteredCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-32 bg-[#050505] text-white border-t border-white/10 relative scroll-mt-24">
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[#F27D26]/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[10px] font-mono text-[#F27D26] uppercase tracking-[0.3em] font-black">My Technical Arsenal</h2>
            <p className="mt-2 text-4xl sm:text-5xl font-display font-black tracking-tighter uppercase text-white">
              Skills & Competencies
            </p>
            <div className="mt-4 h-1.5 w-16 bg-[#F27D26] mx-auto rounded-none" />
          </div>
        </ScrollReveal>

        {/* Categories Tab Selector */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-16" id="skills-filter-tabs">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-3 rounded-none text-xs uppercase tracking-widest font-black transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "bg-[#F27D26] text-black shadow-lg shadow-[#F27D26]/10"
                  : "bg-black text-slate-400 border border-white/10 hover:text-white"
              }`}
            >
              All Skills
            </button>
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-3 rounded-none text-xs uppercase tracking-widest font-black transition-all flex items-center space-x-2 cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-[#F27D26] text-black shadow-lg shadow-[#F27D26]/10"
                      : "bg-black text-slate-400 border border-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.title.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Skills Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {filteredCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <ScrollReveal key={cat.id} delay={index * 0.06} className="h-full">
                <motion.div
                  layout
                  className="bg-[#111] rounded-none border border-white/10 p-6 flex flex-col space-y-6 h-full"
                >
                  {/* Category Title */}
                  <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                    <div className="p-2.5 bg-[#F27D26]/10 rounded-none text-[#F27D26] border border-[#F27D26]/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-black text-sm uppercase tracking-wider text-white">{cat.title}</h3>
                  </div>

                  {/* Sub Skills */}
                  <div className="space-y-4 flex-1">
                    {cat.skills.map((skill, index) => (
                      <div key={index} className="space-y-1.5 p-3 rounded-none hover:bg-white/5 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs uppercase tracking-wide text-slate-200">{skill.name}</span>
                          <span
                            className={`px-2 py-0.5 rounded-none border font-bold ${getLevelColor(
                              skill.level
                            )}`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-sans">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Visual MERN Flow Panel */}
        <div className="mt-20 bg-black/50 border border-white/10 rounded-none p-8 max-w-4xl mx-auto text-left">
          <ScrollReveal>
            <h4 className="text-[10px] font-mono text-[#F27D26] uppercase tracking-[0.2em] font-black mb-2">Architecture Concept</h4>
            <h3 className="text-xl sm:text-2xl font-display font-black uppercase tracking-tight text-white mb-2">Full-Stack Integration (MERN Flow)</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-8">
              Stitching technologies together securely with standard, highly robust layers:
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1 */}
            <ScrollReveal delay={0.1} className="h-full">
              <div className="bg-[#111] p-5 rounded-none border-l-4 border-l-[#F27D26] border-y border-r border-white/10 relative z-10 h-full">
                <span className="text-[9px] font-mono text-[#F27D26] font-black uppercase tracking-wider block mb-1">01 / Front-End</span>
                <h5 className="font-black uppercase tracking-wider text-white mb-2 text-xs">React.js & Tailwind</h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Responsive visual elements designed with highly specific, non-rounded utility styles. Dynamic reactive state.
                </p>
              </div>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal delay={0.2} className="h-full">
              <div className="bg-[#111] p-5 rounded-none border-l-4 border-l-white border-y border-r border-white/10 relative z-10 h-full">
                <span className="text-[9px] font-mono text-white font-black uppercase tracking-wider block mb-1">02 / Controller Layer</span>
                <h5 className="font-black uppercase tracking-wider text-white mb-2 text-xs">Node.js & Express</h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Secure asynchronous API systems executing form delivery validation and protected endpoint requests.
                </p>
              </div>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal delay={0.3} className="h-full">
              <div className="bg-[#111] p-5 rounded-none border-l-4 border-l-[#F27D26] border-y border-r border-white/10 relative z-10 h-full">
                <span className="text-[9px] font-mono text-[#F27D26] font-black uppercase tracking-wider block mb-1">03 / Data Store</span>
                <h5 className="font-black uppercase tracking-wider text-white mb-2 text-xs">MongoDB</h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Persisting data securely with index parameters. Flexible schema matching the Express backend.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
