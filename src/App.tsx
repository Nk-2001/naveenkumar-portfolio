import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import AdminInbox from "./components/AdminInbox";
import { Sparkles, MessageCircle, Heart, ArrowUp, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(() => {
    return window.location.search.includes("admin") || window.location.hash.includes("admin");
  });

  const enableAdminMode = () => {
    setIsAdminMode(true);
    setIsAdminOpen(true);
  };

  useEffect(() => {
    // 1. Secret Keyboard sequence "admin"
    let keysPressed = "";
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed += e.key.toLowerCase();
      if (keysPressed.endsWith("admin")) {
        enableAdminMode();
      }
      if (keysPressed.length > 20) {
        keysPressed = keysPressed.substring(keysPressed.length - 10);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // 2. Listen to hashchange
    const handleHashChange = () => {
      if (window.location.hash.includes("admin") || window.location.search.includes("admin")) {
        setIsAdminMode(true);
      }
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Quick helper to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] flex flex-col font-sans antialiased selection:bg-[#F27D26]/30 selection:text-[#F27D26]">
      
      {/* Dynamic Background Grid Pattern in theme colors */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none z-0 opacity-60" />

      {/* Floating Header Navbar */}
      <Navbar onOpenAdmin={() => setIsAdminOpen(true)} isAdminMode={isAdminMode} onEnableAdminMode={enableAdminMode} />

      {/* Main Sections */}
      <main className="flex-1 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Education />
        <Contact onOpenAdmin={() => setIsAdminOpen(true)} isAdminMode={isAdminMode} />
      </main>

      {/* Footer block */}
      <footer className="relative z-10 bg-[#050505] border-t border-white/10 py-16 text-slate-500 text-xs tracking-wider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="text-center md:text-left">
              <span className="font-display font-black text-lg text-white uppercase tracking-tighter">Naveenkumar L</span>
              <span className="text-[10px] text-[#F27D26] uppercase tracking-[0.2em] font-mono mt-1 block">Frontend Developer | React.js Developer</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[10px] uppercase tracking-widest font-semibold">
              <a href="#home" className="hover:text-[#F27D26] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#F27D26] transition-colors">About</a>
              <a href="#skills" className="hover:text-[#F27D26] transition-colors">Skills</a>
              <a href="#services" className="hover:text-[#F27D26] transition-colors">Services</a>
              <a href="#projects" className="hover:text-[#F27D26] transition-colors">Projects</a>
              <a href="#contact" className="hover:text-[#F27D26] transition-colors">Contact</a>
            </div>

            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <p className="text-[10px] text-slate-600 font-mono">
                &copy; {new Date().getFullYear()} NK.2001. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Admin Message Inbox Modal Drawer */}
      <AdminInbox isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

      {/* Back to top dynamic floating key */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 bg-[#F27D26] hover:bg-[#ff9445] text-white p-3 rounded-sm shadow-lg shadow-[#F27D26]/20 border border-white/20 hover:scale-110 transition-all hover:-translate-y-1"
        title="Scroll to Top"
        id="scroll-to-top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

    </div>
  );
}
