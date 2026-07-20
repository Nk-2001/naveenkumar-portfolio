import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X, Code, MessageSquareCode } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onOpenAdmin: () => void;
  isAdminMode: boolean;
  onEnableAdminMode: () => void;
}

export default function Navbar({ onOpenAdmin, isAdminMode, onEnableAdminMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);

  const handleLogoClick = (e: React.MouseEvent) => {
    setLogoClicks((prev) => {
      const next = prev + 1;
      if (next >= 5) {
        onEnableAdminMode();
        return 0;
      }
      return next;
    });
  };

  // Reset logo clicks after 4 seconds of no activity
  useEffect(() => {
    if (logoClicks > 0) {
      const timer = setTimeout(() => {
        setLogoClicks(0);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [logoClicks]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 150);
      window.history.pushState(null, "", href);
    }
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About & Experience", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={handleLogoClick}
            className="flex items-center space-x-2.5 text-white hover:opacity-95 transition-opacity select-none"
            id="nav-logo"
          >
            <div className="relative w-9 h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full filter drop-shadow-[0_2px_8px_rgba(242,125,38,0.2)]"
              >
                {/* Outer geometric shield/diamond */}
                <polygon
                  points="50,5 95,50 50,95 5,50"
                  className="fill-black stroke-[#F27D26] stroke-[5]"
                />
                {/* Internal accent border */}
                <polygon
                  points="50,14 86,50 50,86 14,50"
                  className="fill-none stroke-white/10 stroke-[2] stroke-dasharray-[3,3]"
                />
                {/* Left vertical pillar of 'N' */}
                <line
                  x1="32"
                  y1="32"
                  x2="32"
                  y2="68"
                  className="stroke-[#F27D26] stroke-[8] stroke-linecap-square"
                />
                {/* Diagonal line of 'N' */}
                <line
                  x1="32"
                  y1="32"
                  x2="52"
                  y2="68"
                  className="stroke-[#F27D26] stroke-[8] stroke-linecap-square"
                />
                {/* Right vertical pillar of 'N' / Spine of 'k' */}
                <line
                  x1="52"
                  y1="32"
                  x2="52"
                  y2="68"
                  className="stroke-white stroke-[8] stroke-linecap-square"
                />
                {/* Upper angled leg of 'k' */}
                <line
                  x1="52"
                  y1="50"
                  x2="66"
                  y2="36"
                  className="stroke-[#F27D26] stroke-[8] stroke-linecap-square"
                />
                {/* Lower angled leg of 'k' */}
                <line
                  x1="52"
                  y1="48"
                  x2="66"
                  y2="64"
                  className="stroke-white stroke-[8] stroke-linecap-square"
                />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-black text-lg sm:text-xl tracking-tight leading-none text-white uppercase">
                Nk
              </span>
              <span className="font-mono text-[8px] tracking-[0.25em] text-[#F27D26] uppercase font-black mt-0.5">
                Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1" id="nav-desktop-menu">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-300 hover:text-[#F27D26] transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button & Socials */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/Nk-2001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-1.5 hover:bg-white/5"
              title="GitHub"
              id="navbar-github"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/naveenkumar-wd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-1.5 hover:bg-white/5"
              title="LinkedIn"
              id="navbar-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            {isAdminMode && (
              <button
                onClick={onOpenAdmin}
                className="flex items-center space-x-1.5 text-[10px] uppercase tracking-[0.2em] bg-[#F27D26]/15 hover:bg-[#F27D26]/25 border border-[#F27D26]/30 text-[#F27D26] px-4 py-2 rounded-none font-bold transition-all cursor-pointer animate-pulse"
                title="Admin Portal"
                id="navbar-admin"
              >
                <MessageSquareCode className="w-3.5 h-3.5" />
                <span>Inbox</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            {isAdminMode && (
              <button
                onClick={onOpenAdmin}
                className="p-2 rounded-none bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/20 transition-all cursor-pointer animate-pulse"
                title="Admin Portal"
                id="nav-mobile-admin"
              >
                <MessageSquareCode className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-400 hover:text-white p-2 rounded-none bg-black border border-white/10"
              id="nav-mobile-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/10 overflow-hidden"
            id="nav-mobile-menu"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className="block px-4 py-4 text-xs uppercase tracking-[0.15em] font-semibold text-slate-300 hover:text-[#F27D26] hover:bg-white/5 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between px-4">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">Social Links</span>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Nk-2001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white p-2 bg-[#111] rounded-none border border-white/5"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/naveenkumar-wd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white p-2 bg-[#111] rounded-none border border-white/5"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
