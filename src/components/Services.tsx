import React from "react";
import { Code2, MonitorSmartphone, Atom, Webhook, ShieldCheck, Check } from "lucide-react";
import { motion } from "motion/react";
import ScrollReveal from "./ScrollReveal";

interface Service {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: React.ReactNode;
  tag: string;
}

export default function Services() {
  const servicesList: Service[] = [
    {
      id: "srv-1",
      title: "Frontend Development",
      description: "Building high-performance, accessible, and structured web applications using modern semantic web standards.",
      tag: "HTML5 & CSS3 & ES6",
      bullets: [
        "Structured Semantic Layouts",
        "Modern CSS Architectures",
        "Asynchronous Event Handling",
        "Cross-Browser Compatibility"
      ],
      icon: <Code2 className="w-5 h-5 text-[#F27D26]" />
    },
    {
      id: "srv-2",
      title: "Responsive Web Design",
      description: "Designing fluid user experiences that look stunning on mobile screens, tablets, laptops, and ultra-wide desktops alike.",
      tag: "Mobile-First Design",
      bullets: [
        "Fluid Layouts & Grid Systems",
        "Adaptive Typography & Images",
        "Touch-Optimized Interactions",
        "Pixel-Perfect Translation"
      ],
      icon: <MonitorSmartphone className="w-5 h-5 text-[#F27D26]" />
    },
    {
      id: "srv-3",
      title: "React Development",
      description: "Developing scalable, component-driven single page applications with highly optimized states and declarative UI layers.",
      tag: "Vite & React 18 & TS",
      bullets: [
        "Modular Component Architecture",
        "Custom Hook & State Engines",
        "Virtual DOM Optimization",
        "Declarative Layout Controls"
      ],
      icon: <Atom className="w-5 h-5 text-[#F27D26]" />
    },
    {
      id: "srv-4",
      title: "API Integration",
      description: "Bridging the gap between UI and backend systems with secure, reliable, and real-time asynchronous service connections.",
      tag: "REST & RESTful Endpoints",
      bullets: [
        "Secure AJAX & Fetch Handling",
        "Third-Party SDK Integrations",
        "Data Transformation & Mapping",
        "Graceful Error Recoveries"
      ],
      icon: <Webhook className="w-5 h-5 text-[#F27D26]" />
    },
    {
      id: "srv-5",
      title: "Website Maintenance",
      description: "Refactoring codebases, updating deprecated dependencies, auditing speed bottlenecks, and keeping your systems secure.",
      tag: "Optimization & Quality",
      bullets: [
        "Lighthouse Score Auditing",
        "Dependency Tree Optimization",
        "Search Engine Optimization (SEO)",
        "Code Refactoring & Cleaning"
      ],
      icon: <ShieldCheck className="w-5 h-5 text-[#F27D26]" />
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#050505] text-white relative border-t border-white/10">
      {/* Background Ambience Accent */}
      <div className="absolute top-1/4 right-10 w-80 h-80 rounded-full bg-[#F27D26]/[0.015] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-white/[0.005] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[10px] font-mono text-[#F27D26] uppercase tracking-[0.3em] font-black">Professional Capabilities</h2>
            <p className="mt-2 text-4xl sm:text-5xl font-display font-black tracking-tighter uppercase text-white">
              My Core Services
            </p>
            <div className="mt-4 h-1.5 w-16 bg-[#F27D26] mx-auto rounded-none" />
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className={`bg-[#111] border border-white/10 p-6 md:p-8 rounded-none flex flex-col justify-between hover:border-[#F27D26]/40 transition-all group relative overflow-hidden ${
                index === 3 || index === 4 ? "lg:col-span-1 lg:max-w-full" : ""
              }`}
            >
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#F27D26] group-hover:w-full transition-all duration-300" />
              
              <div>
                {/* Upper row: icon and short tag */}
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 bg-black border border-white/10 rounded-none text-[#F27D26] group-hover:border-[#F27D26]/20 transition-all duration-300">
                    {service.icon}
                  </div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-500 bg-white/5 border border-white/5 px-2 py-0.5 rounded-none">
                    {service.tag}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-display font-black uppercase tracking-tight text-white mb-3 group-hover:text-[#F27D26] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>
              </div>

              {/* Bullets List */}
              <div className="border-t border-white/5 pt-4">
                <ul className="space-y-2">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-[11px] text-slate-300 font-sans">
                      <Check className="w-3.5 h-3.5 text-[#F27D26] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
