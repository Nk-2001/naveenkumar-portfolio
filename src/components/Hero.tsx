import React, { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Terminal } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const titles = [
    "Frontend Developer",
    "React.js Developer",
    "MERN Stack Developer",
    "JavaScript Developer"
  ];
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeTitle = titles[titleIdx];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(activeTitle.substring(0, charIdx - 1));
        setCharIdx((prev) => prev - 1);
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(activeTitle.substring(0, charIdx + 1));
        setCharIdx((prev) => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIdx === activeTitle.length) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setTitleIdx((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, titleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-36 pb-24 flex items-center justify-center overflow-hidden bg-[#050505] text-white"
    >
      {/* Decorative Brand Accent Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#F27D26]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Main Info */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-left" id="hero-info">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-[#F27D26]/10 border border-[#F27D26]/20 text-[#F27D26] px-4 py-2 rounded-none text-[10px] uppercase tracking-widest font-black"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F27D26]" />
              <span>Available for collaboration & hire</span>
            </motion.div>

            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-[#F27D26] font-mono text-xs tracking-[0.3em] uppercase block font-semibold"
              >
                Frontend Developer | React.js Developer
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter leading-[0.95] uppercase"
              >
                Hi, I'm <br />
                <span className="text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/3 after:h-2 after:bg-[#F27D26]">
                  Naveenkumar L
                </span>
              </motion.h1>

              {/* Dynamic Subtitle */}
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl sm:text-2xl font-display font-bold uppercase tracking-wider text-slate-300 min-h-[40px] flex items-center pt-4"
              >
                <span className="text-slate-500 font-normal">Expertise in&nbsp;</span>
                <span className="text-white border-b-2 border-[#F27D26] pb-1 font-black">
                  {typedText}
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed font-sans"
            >
              Frontend Developer with 1 year of professional experience in React.js, JavaScript, HTML5, CSS3, REST APIs, and responsive web development. Skilled at building scalable user interfaces, integrating APIs, and developing modern web applications.
            </motion.p>

            {/* Call to Actions (Bold, no rounded corners) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
              id="hero-ctas"
            >
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 bg-[#F27D26] hover:bg-[#ff9445] text-black px-8 py-4 rounded-none text-xs font-black uppercase tracking-widest shadow-lg shadow-[#F27D26]/10 transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore Work</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-transparent hover:bg-white/5 text-white px-8 py-4 rounded-none text-xs font-black uppercase tracking-widest border-2 border-white/20 hover:border-white transition-all hover:scale-105 active:scale-95"
              >
                <span>Connect Now</span>
              </a>
              <a
                href="https://github.com/Nk-2001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-4 rounded-none bg-[#111] hover:bg-[#181818] border border-white/10 text-slate-400 hover:text-white transition-all hover:scale-105"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/naveenkumar-wd/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-4 rounded-none bg-[#111] hover:bg-[#181818] border border-white/10 text-slate-400 hover:text-white transition-all hover:scale-105"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Interactive Code Visualizer / Terminal Mock */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end" id="hero-graphic">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-full max-w-md bg-[#0d0d0d] border-2 border-white/10 rounded-none shadow-2xl overflow-hidden font-mono text-[11px] text-slate-300"
            >
              {/* Window Header */}
              <div className="bg-[#111] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2 h-2 bg-white/40" />
                  <div className="w-2 h-2 bg-[#F27D26]" />
                  <div className="w-2 h-2 bg-white/20" />
                </div>
                <div className="text-[9px] text-[#F27D26] uppercase tracking-[0.2em] font-bold flex items-center space-x-1.5">
                  <Terminal className="w-3 h-3" />
                  <span>developer.ts</span>
                </div>
                <div className="w-12" />
              </div>

              {/* Code Panel */}
              <div className="p-6 space-y-4 text-left overflow-x-auto leading-relaxed">
                <div>
                  <span className="text-[#F27D26] font-bold">const</span>{" "}
                  <span className="text-white font-bold">developer</span> = {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-slate-500">name:</span>{" "}
                  <span className="text-[#F27D26]">"Naveenkumar L"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500">role:</span>{" "}
                  <span className="text-white">"Frontend / MERN Developer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500">location:</span>{" "}
                  <span className="text-white">"Coimbatore, India"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500">experience:</span>{" "}
                  <span className="text-white">"Subiksham Software Solutions"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500">skills:</span> [
                  <span className="text-[#F27D26]">"React"</span>,{" "}
                  <span className="text-[#F27D26]">"Express"</span>,{" "}
                  <span className="text-white">"Node"</span>,{" "}
                  <span className="text-white">"Tailwind"</span>]
                </div>
                <div>{"};"}</div>

                <div className="pt-2 border-t border-white/10 text-slate-500 text-[10px]">
                  {"// Initiate communication channel"}
                </div>
                <div>
                  <span className="text-[#F27D26]">developer</span>.
                  <span className="text-white">getInTouch</span>()
                </div>
                <div className="text-emerald-400 font-bold">
                  {"▸ Output: API connection active"}
                </div>
              </div>

              {/* Footer Stat */}
              <div className="bg-black px-4 py-2 text-[9px] uppercase tracking-wider text-slate-500 border-t border-white/10 flex justify-between">
                <span>UTF-8</span>
                <span>TypeScript</span>
                <span>Active</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
