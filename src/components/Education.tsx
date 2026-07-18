import React from "react";
import { GraduationCap, Award, BookOpen, School } from "lucide-react";
import { motion } from "motion/react";
import { Education } from "../types";
import ScrollReveal from "./ScrollReveal";

export default function EducationSection() {
  const educationList: Education[] = [
    {
      id: "edu-1",
      degree: "M.Sc Computer Science",
      institution: "Excel College of Commerce & Science",
      period: "2024",
      percentage: "72%"
    },
    {
      id: "edu-2",
      degree: "B.Sc Computer Science",
      institution: "Excel College of Commerce & Science",
      period: "2022",
      percentage: "81%"
    },
    {
      id: "edu-3",
      degree: "Higher Secondary Course (HSC)",
      institution: "MDV Higher Secondary School",
      period: "2019",
      percentage: "61%"
    },
    {
      id: "edu-4",
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "MDV Higher Secondary School",
      period: "2017",
      percentage: "82%"
    }
  ];

  const getEduIcon = (id: string) => {
    if (id.includes("edu-1") || id.includes("edu-2")) {
      return <GraduationCap className="w-5 h-5 text-[#F27D26]" />;
    }
    return <School className="w-5 h-5 text-white" />;
  };

  return (
    <section id="education" className="py-32 bg-[#050505] text-white relative border-t border-white/10">
      <div className="absolute bottom-5 left-5 w-60 h-60 rounded-full bg-[#F27D26]/[0.01] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[10px] font-mono text-[#F27D26] uppercase tracking-[0.3em] font-black">Academic Framework</h2>
            <p className="mt-2 text-4xl sm:text-5xl font-display font-black tracking-tighter uppercase text-white">
              Education & Qualifications
            </p>
            <div className="mt-4 h-1.5 w-16 bg-[#F27D26] mx-auto rounded-none" />
          </div>
        </ScrollReveal>

        {/* Education grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
          {educationList.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="bg-[#111] border border-white/10 p-6 rounded-none flex flex-col justify-between hover:border-[#F27D26]/40 transition-all group animate-none"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-[#F27D26] bg-[#F27D26]/10 border border-[#F27D26]/25 px-2.5 py-1 rounded-none w-fit inline-block">
                    {edu.period}
                  </span>
                  <h3 className="text-lg font-display font-black uppercase tracking-tight text-white group-hover:text-[#F27D26] transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.institution}</span>
                  </p>
                </div>

                <div className="p-3 bg-black border border-white/10 rounded-none flex-shrink-0">
                  {getEduIcon(edu.id)}
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">Academic Score</span>
                <span className="text-[10px] font-mono font-bold text-white bg-white/5 border border-white/10 px-2.5 py-1 rounded-none">
                  {edu.percentage} Marks
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
