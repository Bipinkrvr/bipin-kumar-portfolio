"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Terminal } from "lucide-react";

export function ExperienceSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const experiences = [
    {
      id: "EXP_01",
      role: "Founder & AI-Assisted Developer",
      company: "VyaparLens",
      timeline: "[TIMESTAMPS: JAN_2026 - PRESENT]",
      bullets: [
        "Architecting an AI-powered marketing application for small business owners, prioritizing strict user data privacy via on-device AI.",
        "Leveraging AI as a primary development tool to rapidly prototype, write, and deploy production-ready full-stack features.",
        "Managing the end-to-end product lifecycle, including software architecture, UI/UX design, and core business integrations."
      ]
    },
    {
      id: "EXP_02",
      role: "Student Ambassador",
      company: "Let's Upgrade",
      timeline: "[TIMESTAMPS: JULY 2025 - AUGUST 2025]",
      bullets: [
        "Organized and hosted technical workshops and webinars (Python, Data Science, Full-Stack), attracting over 500+ total attendees.",
        "Built and nurtured a campus community of 100+ technology enthusiasts, driving local engagement and tech-focused upskilling.",
        "Executed digital campaigns and acted as the primary liaison between students and corporate stakeholders to improve program strategy."
      ]
    }
  ];

  return (
    <section id="experience" className="w-full flex flex-col justify-center relative py-12 sm:py-20 px-4 sm:px-8 bg-transparent">
      <div className="flex items-center gap-3 mb-8 border-b border-zinc-200 pb-4 max-w-6xl mx-auto w-full">
        <Briefcase className="w-6 h-6 text-cyan-600" />
        <h2 className="text-xl sm:text-2xl font-mono font-bold text-zinc-800 tracking-wider">
          [FIELD_EXPERIENCE]
        </h2>
      </div>

      <div className="grid gap-8 w-full max-w-6xl mx-auto">
        {experiences.map((exp) => (
          <div 
            key={exp.id}
            className="relative group mt-4 w-full"
            data-active={activeId === exp.id}
            onTouchStart={() => setActiveId(exp.id)}
            onTouchEnd={() => setActiveId(null)}
            onTouchCancel={() => setActiveId(null)}
            onMouseEnter={() => setActiveId(exp.id)}
            onMouseLeave={() => setActiveId(null)}
          >
            <Card className="bg-white border-2 border-zinc-300 group-hover:border-cyan-500/70 group-data-[active=true]:border-cyan-500/70 group-hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)] group-data-[active=true]:shadow-[0_10px_30px_rgba(34,211,238,0.15)] transition-all duration-500 rounded-xl overflow-visible">
              
              {/* POWER SOURCE */}
              <div className="absolute top-0 left-4 sm:left-8 -translate-y-1/2 bg-white px-1 sm:px-2 text-zinc-400 group-hover:text-cyan-600 group-data-[active=true]:text-cyan-600 transition-colors duration-500 z-10 flex items-center gap-1 sm:gap-2 scale-90 sm:scale-100 origin-center">
                <span className="text-[10px] font-mono font-bold bg-white">VCC</span>
                <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="stroke-current stroke-2 bg-white">
                  <rect x="2" y="2" width="18" height="8" rx="1" />
                  <path d="M20 4V8" />
                  <path d="M6 6H10" />
                  <path d="M8 4V8" />
                </svg>
              </div>

              {/* THE SWITCH (RELAY) */}
              <div className="absolute top-0 right-4 sm:right-12 -translate-y-1/2 bg-white px-1 sm:px-2 flex items-center z-10 scale-90 sm:scale-100 origin-center">
                <svg width="40" height="12" viewBox="0 0 40 12" className="overflow-visible bg-white">
                  <circle cx="8" cy="6" r="2" className="fill-zinc-400 group-hover:fill-cyan-500 group-data-[active=true]:fill-cyan-500 transition-colors duration-500" />
                  <line x1="0" y1="6" x2="6" y2="6" className="stroke-zinc-300 group-hover:stroke-cyan-500 group-data-[active=true]:stroke-cyan-500 stroke-2 transition-colors duration-500" />
                  <circle cx="32" cy="6" r="2" className="fill-zinc-400 group-hover:fill-cyan-500 group-data-[active=true]:fill-cyan-500 transition-colors duration-500" />
                  <line x1="34" y1="6" x2="40" y2="6" className="stroke-zinc-300 group-hover:stroke-cyan-500 group-data-[active=true]:stroke-cyan-500 stroke-2 transition-colors duration-500" />
                  <line x1="8" y1="6" x2="30" y2="6" className="stroke-zinc-400 group-hover:stroke-cyan-500 group-data-[active=true]:stroke-cyan-500 stroke-2 origin-[8px_6px] -rotate-45 group-hover:rotate-0 group-data-[active=true]:rotate-0 transition-transform duration-300 ease-in-out" />
                </svg>
              </div>

              {/* THE BULB (LOAD) */}
              <div className="absolute bottom-0 right-6 sm:right-16 translate-y-1/2 bg-white px-2 sm:px-3 flex items-center justify-center z-10 scale-90 sm:scale-100 origin-center">
                <svg width="30" height="30" viewBox="0 0 30 30" className="overflow-visible bg-white">
                  <line x1="0" y1="15" x2="5" y2="15" className="stroke-zinc-300 group-hover:stroke-cyan-500 group-data-[active=true]:stroke-cyan-500 stroke-2 transition-colors duration-500" />
                  <line x1="25" y1="15" x2="30" y2="15" className="stroke-zinc-300 group-hover:stroke-cyan-500 group-data-[active=true]:stroke-cyan-500 stroke-2 transition-colors duration-500" />
                  <circle cx="15" cy="15" r="9" className="stroke-zinc-400 fill-white group-hover:stroke-amber-400 group-data-[active=true]:stroke-amber-400 group-hover:fill-amber-100 group-data-[active=true]:fill-amber-100 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)] group-data-[active=true]:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)] stroke-2 transition-all duration-500" />
                  <path d="M 11 11 L 19 19 M 11 19 L 19 11" className="stroke-zinc-400 group-hover:stroke-amber-500 group-data-[active=true]:stroke-amber-500 stroke-[1.5] transition-colors duration-500" />
                </svg>
              </div>

              {/* GROUND (GND) */}
              <div className="absolute bottom-0 left-6 sm:left-12 translate-y-1/2 bg-white px-2 sm:px-3 flex flex-col items-center z-10 scale-90 sm:scale-100 origin-center pt-[2px]">
                <div className="h-3 w-[2px] bg-zinc-300 group-hover:bg-cyan-500 group-data-[active=true]:bg-cyan-500 transition-colors duration-500" />
                <div className="w-5 h-[2px] bg-zinc-400 group-hover:bg-cyan-500 group-data-[active=true]:bg-cyan-500 transition-colors duration-500 mb-[2px]" />
                <div className="w-3 h-[2px] bg-zinc-400 group-hover:bg-cyan-500 group-data-[active=true]:bg-cyan-500 transition-colors duration-500 mb-[2px]" />
                <div className="w-1 h-[2px] bg-zinc-400 group-hover:bg-cyan-500 group-data-[active=true]:bg-cyan-500 transition-colors duration-500" />
              </div>

              <CardHeader className="pt-8 sm:pt-10 px-5 sm:px-8">
                <div className="flex justify-between items-start flex-col sm:flex-row gap-4">
                  <div>
                    <CardTitle className="text-lg sm:text-xl font-mono text-zinc-900 flex items-center gap-2">
                      <span className="text-cyan-500/0 group-hover:text-cyan-500 group-data-[active=true]:text-cyan-500 transition-colors duration-300">⚡</span>
                      {exp.role}
                    </CardTitle>
                    <p className="text-zinc-600 font-mono text-xs sm:text-sm mt-1">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="bg-zinc-100 border-zinc-300 text-cyan-700 font-mono text-[10px] sm:text-xs shrink-0">
                    {exp.timeline}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pb-10 sm:pb-12 px-5 sm:px-8">
                <ul className="space-y-3 font-mono text-xs sm:text-sm text-zinc-700">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3">
                      <Terminal className="w-4 h-4 text-zinc-400 group-hover:text-emerald-500 group-data-[active=true]:text-emerald-500 transition-colors shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}