"use client";

import { FolderGit2, Github, Linkedin, ExternalLink, Terminal, Cpu, Zap, Server, Database, Maximize } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function ProjectsSection() {
  const projects = [
    {
      id: "MOD_01",
      title: "VyaparLens",
      subtitle: "STARTUP INITIATIVE",
      description: "Flutter-based startup application with on-device AI for merchants. Uses Server-Driven UI (JSON) for dynamic updates.",
      tags: ["Flutter", "On-Device AI", "JSON UI"],
      icon: Terminal,
      color: "cyan",
      github: "https://github.com/yourusername",
      live: "https://yourlink.com"
    },
    {
      id: "MOD_02",
      title: "Thermal QC System",
      subtitle: "HARDWARE AUTOMATION",
      description: "Automated thermal testing hardware for DC motors. Integrates ESP32 and DHT11 sensors for predictive maintenance.",
      tags: ["ESP32", "DHT11", "Predictive"],
      icon: Cpu,
      color: "amber",
      github: "https://github.com/yourusername",
      live: "https://yourlink.com"
    },
    {
      id: "MOD_03",
      title: "Smart Water IoT",
      subtitle: "CLOSED-LOOP TELEMETRY",
      description: "Full-stack control system using ultrasonic sensors, BLE for provisioning, and Firebase to sync state to a dashboard.",
      tags: ["ESP32", "Firebase", "React Native"],
      icon: Zap,
      color: "blue",
      github: "https://github.com/yourusername",
      live: "https://yourlink.com"
    },
    {
      id: "MOD_04",
      title: "Glynac Analytics",
      subtitle: "FRONT-END ARCHITECTURE",
      description: "Client-side dashboard for a Wealth Management System using Next.js 15 and Recharts for complex financial data.",
      tags: ["Next.js", "Recharts", "Tailwind"],
      icon: Server,
      color: "emerald",
      github: "https://github.com/yourusername",
      live: "https://yourlink.com"
    },
    {
      id: "MOD_05",
      title: "Sensor Hub",
      subtitle: "HARDWARE UPCYCLING",
      description: "Upcycled an Android device using Termux to stream internal sensor data to a local Plotly.js web UI.",
      tags: ["Termux", "Plotly.js", "Node.js"],
      icon: Database,
      color: "emerald",
      github: "https://github.com/yourusername",
      live: "https://yourlink.com"
    }
  ];

  return (
    // Hard-locked height, no scrolling allowed.
    <section id="projects" className="w-full min-h-screen flex flex-col items-center justify-center relative py-16 px-2 sm:px-8 bg-transparent">
      
      {/* Super Compact Header */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between mb-2 border-b border-zinc-300 pb-1.5 gap-2 w-full shrink-0">
        <div className="flex items-center gap-2 px-1 sm:px-0">
          <FolderGit2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
          <h2 className="text-base sm:text-xl font-mono font-bold text-zinc-800 tracking-wider">
            [CIRCUIT_ARRAY_DEPLOYMENTS]
          </h2>
        </div>
        
        <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs px-1 sm:px-0">
          <Link href="https://github.com/yourusername" target="_blank" className="flex items-center gap-1 px-2 py-0.5 bg-white border border-zinc-300 hover:border-cyan-500 hover:text-cyan-600 text-zinc-600 rounded-sm transition-all shadow-sm group">
            <Github className="w-3 h-3 group-hover:animate-pulse" />
            <span>GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank" className="flex items-center gap-1 px-2 py-0.5 bg-white border border-zinc-300 hover:border-emerald-500 hover:text-emerald-600 text-zinc-600 rounded-sm transition-all shadow-sm group">
            <Linkedin className="w-3 h-3 group-hover:animate-pulse" />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>

      {/* THE SOLID RACK BOX */}
      <div className="w-full max-w-6xl flex-grow flex flex-col relative z-10 border-[4px] sm:border-[6px] border-zinc-400 bg-zinc-200 rounded-lg overflow-hidden shadow-2xl h-auto min-h-0">
        
        {/* Rack Top Plate */}
        <div className="w-full bg-zinc-300 border-b-[3px] border-zinc-400 p-2 sm:p-2 flex items-center justify-between shrink-0 shadow-sm z-20">
          <div className="flex items-center gap-1.5 sm:gap-2">
             <Server className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-500" />
             <div>
               <h2 className="text-xs sm:text-sm font-mono font-black text-zinc-800 tracking-widest leading-none">ACTIVE_NODE_CLUSTER</h2>
             </div>
          </div>
          
          <div className="flex items-center gap-3">
             <div className="hidden sm:flex flex-col items-end">
                <span className="text-[7px] font-mono text-emerald-600 font-bold tracking-widest leading-none mb-[2px]">DATALINK: ACTIVE</span>
                <div className="flex gap-0.5">
                   {[1,2,3,4,5].map(i => (
                     <div key={i} className="w-1 h-1.5 bg-emerald-500 animate-pulse" style={{animationDelay: `${i*150}ms`}}></div>
                   ))}
                </div>
             </div>
             <div className="flex flex-col items-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
             </div>
          </div>
        </div>

        {/* FIX APPLIED: grid-cols-1 (mobile) to lg:grid-cols-2 (desktop). 
          This perfectly aligns the 5 items into 3 rows without any scrolling required. 
        */}
        <div className="flex-grow p-2 sm:p-4 bg-zinc-100 grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3 relative z-10 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] content-start min-h-0">
          {projects.map((mod) => {
            const Icon = mod.icon;
            const colorMap = {
              emerald: { text: "text-emerald-600", border: "border-emerald-300", hover: "group-hover:text-emerald-600", bg: "hover:bg-emerald-50" },
              cyan: { text: "text-cyan-600", border: "border-cyan-300", hover: "group-hover:text-cyan-600", bg: "hover:bg-cyan-50" },
              amber: { text: "text-amber-600", border: "border-amber-300", hover: "group-hover:text-amber-600", bg: "hover:bg-amber-50" },
              blue: { text: "text-blue-600", border: "border-blue-300", hover: "group-hover:text-blue-600", bg: "hover:bg-blue-50" }
            };
            const theme = colorMap[mod.color as keyof typeof colorMap];

            return (
              <div 
                key={mod.id}
                className="group relative w-full h-full bg-white border border-zinc-200 flex flex-row items-stretch overflow-hidden hover:bg-zinc-50 transition-colors duration-300 shadow-sm rounded-sm"
              >
                {/* Left Hardware Handle (Ultra-thin) */}
                <div className="hidden sm:flex items-center justify-center bg-zinc-100 border-r border-zinc-200 px-1 shrink-0">
                  <div className="w-1.5 h-[60%] min-h-[30px] bg-gradient-to-b from-zinc-50 via-white to-zinc-200 rounded-[1px] border border-zinc-300 flex items-center justify-center shadow-sm">
                     <div className="w-[1px] h-[80%] bg-zinc-300 shadow-inner"></div>
                  </div>
                </div>

                {/* Compact Data Display */}
                <div className="flex-grow p-2 sm:p-3 flex flex-col justify-start relative min-w-0">
                  <div className="flex items-center justify-between mb-1 gap-1">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className={`font-mono text-[8px] sm:text-[9px] font-bold px-1 py-0.5 rounded border ${theme.border} ${theme.text} bg-white shrink-0`}>
                        {mod.id}
                      </span>
                      <h3 className="font-mono text-[11px] sm:text-xs font-bold text-zinc-800 uppercase tracking-tight truncate">
                        {mod.title}
                      </h3>
                      <div className="flex items-center gap-0.5 px-1 py-[1px] bg-emerald-50 border border-emerald-200 rounded shrink-0">
                        <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/project/${mod.id}`}
                      className={`flex items-center gap-0.5 font-mono text-[8px] sm:text-[9px] font-bold tracking-wider px-1.5 py-0.5 border rounded-[2px] transition-all shadow-sm shrink-0 ${theme.border} ${theme.text} ${theme.bg}`}
                    >
                      <Maximize className="w-2.5 h-2.5" /> [VIEW]
                    </Link>
                  </div>

                  {/* Restored slight line-clamp-2 to prevent any overflow on smaller screens */}
                  <p className="font-mono text-[9px] sm:text-[10px] text-zinc-600 leading-snug line-clamp-2 mb-2 flex-grow">
                    {mod.description}
                  </p>
                  
                  <div className="mt-auto flex flex-col sm:flex-row sm:items-end justify-between gap-1.5 sm:gap-1 border-t border-zinc-100 pt-2">
                    <div className="flex flex-wrap gap-1">
                      {mod.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-zinc-50 border border-zinc-200 text-zinc-600 font-mono text-[8px] px-1 py-0 hover:border-zinc-300 transition-colors rounded-[2px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 sm:gap-2 shrink-0">
                      <Link href={mod.github} target="_blank" className={`flex items-center gap-1 text-zinc-400 transition-colors text-[8px] sm:text-[9px] font-mono uppercase font-bold tracking-wider ${theme.hover}`}>
                        <Github className="w-2.5 h-2.5" /> SRC
                      </Link>
                      <Link href={mod.live} target="_blank" className={`flex items-center gap-1 text-zinc-400 transition-colors text-[8px] sm:text-[9px] font-mono uppercase font-bold tracking-wider ${theme.hover}`}>
                        <ExternalLink className="w-2.5 h-2.5" /> LIVE
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
        
        {/* Rack Bottom Plate */}
        <div className="w-full h-4 sm:h-5 bg-zinc-300 border-t-[3px] border-zinc-400 flex justify-center items-center shrink-0 z-20 shadow-inner">
            <span className="font-mono text-[7px] sm:text-[8px] text-zinc-500 tracking-[0.3em] font-bold">END_OF_RACK // SECURED</span>
        </div>
      </div>
    </section>
  );
}