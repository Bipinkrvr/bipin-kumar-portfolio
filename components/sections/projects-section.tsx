"use client";

import { useEffect } from "react";
import { FolderGit2, Github, Linkedin, ExternalLink, Terminal, Cpu, Zap, Server, Database, Maximize } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion"; 
import { projectsData } from "@/lib/projects-data"; 

// --- NEW: Tracker to prevent re-animation on navigation ---
let hasPlayedAnimation = false;

export function ProjectsSection() {
  
  // Mark as played after the component mounts for the first time
  useEffect(() => {
    hasPlayedAnimation = true;
  }, []);

  const visualMap: Record<string, { icon: any, color: string }> = {
    "residential-solar-autocad": { icon: Zap, color: "amber" },
    "automated-motor-qc": { icon: Cpu, color: "emerald" },
    "power-plant-dashboard": { icon: Database, color: "blue" },
    "smart-water-tank": { icon: Zap, color: "cyan" },
    "vlsi-digital-design": { icon: Cpu, color: "emerald" },
    "iot-phone-sensor": { icon: Terminal, color: "emerald" },
    "nextjs-sales-dashboard": { icon: Server, color: "blue" },
    "explore-jharkhand": { icon: FolderGit2, color: "cyan" },
    "memorae-landing": { icon: FolderGit2, color: "amber" }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: { 
      opacity: 1, y: 0, scale: 1, 
      transition: { type: "spring", stiffness: 200, damping: 20 } 
    },
  };

  return (
    <section id="projects" className="w-full flex flex-col items-center justify-center relative py-12 sm:py-20 px-2 sm:px-8 bg-transparent">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between mb-2 border-b border-zinc-300 pb-1.5 gap-2 w-full shrink-0">
        <div className="flex items-center gap-2 px-1 sm:px-0">
          <FolderGit2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />
          <h2 className="text-lg sm:text-2xl font-mono font-bold text-zinc-900 tracking-wider">
            [ENGINEERING_PROJECTS]
          </h2>
        </div>
        
        <div className="flex items-center gap-2 font-mono text-xs sm:text-sm px-1 sm:px-0">
          <Link href="https://github.com/Bipinkrvr" target="_blank" className="flex items-center gap-1 px-2 py-0.5 bg-white border border-zinc-300 hover:border-cyan-500 hover:text-cyan-600 text-zinc-700 rounded-sm transition-all shadow-sm group">
            <Github className="w-4 h-4 group-hover:animate-pulse" />
            <span>GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/bipinkrvr/" target="_blank" className="flex items-center gap-1 px-2 py-0.5 bg-white border border-zinc-300 hover:border-emerald-500 hover:text-emerald-600 text-zinc-700 rounded-sm transition-all shadow-sm group">
            <Linkedin className="w-4 h-4 group-hover:animate-pulse" />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>

      {/* THE SOLID RACK BOX */}
      <div className="w-full max-w-6xl flex-grow flex flex-col relative z-10 border-[4px] sm:border-[6px] border-zinc-400 bg-zinc-200 rounded-lg overflow-hidden shadow-2xl h-auto min-h-0">
        
        {/* Rack Top Plate */}
        <div className="w-full bg-zinc-300 border-b-[3px] border-zinc-400 p-2 sm:p-2 flex items-center justify-between shrink-0 shadow-sm z-20">
          <div className="flex items-center gap-1.5 sm:gap-2">
             <Server className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-600" />
             <div>
               <h2 className="text-sm sm:text-base font-mono font-black text-zinc-900 tracking-widest leading-none">ACTIVE_DEPLOYMENTS</h2>
             </div>
          </div>
          
          <div className="flex items-center gap-3">
             <div className="hidden sm:flex flex-col items-end">
                <span className="text-[9px] font-mono text-emerald-700 font-bold tracking-widest leading-none mb-[2px]">DATALINK: ACTIVE</span>
                <div className="flex gap-0.5">
                   {[1,2,3,4,5].map(i => (
                     <div key={i} className="w-1.5 h-2 bg-emerald-500 animate-pulse" style={{animationDelay: `${i*150}ms`}}></div>
                   ))}
                </div>
             </div>
             <div className="flex flex-col items-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
             </div>
          </div>
        </div>

        {/* --- UPDATED MOTION.DIV --- */}
        {/* If hasPlayedAnimation is true, skip the "hidden" state and jump straight to "show" */}
        <motion.div 
          variants={containerVariants}
          initial={hasPlayedAnimation ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex-grow p-3 sm:p-5 bg-zinc-100 grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-5 relative z-10 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] content-start min-h-0"
        >
          {projectsData.map((project, index) => {
            const visual = visualMap[project.id] || { icon: FolderGit2, color: "zinc" };
            const displayId = `PRJ_${String(index + 1).padStart(2, '0')}`;

            const colorMap = {
              emerald: { text: "text-emerald-700", border: "border-emerald-400", hover: "group-hover:text-emerald-700", bg: "hover:bg-emerald-50" },
              cyan: { text: "text-cyan-700", border: "border-cyan-400", hover: "group-hover:text-cyan-700", bg: "hover:bg-cyan-50" },
              amber: { text: "text-amber-700", border: "border-amber-400", hover: "group-hover:text-amber-700", bg: "hover:bg-amber-50" },
              blue: { text: "text-blue-700", border: "border-blue-400", hover: "group-hover:text-blue-700", bg: "hover:bg-blue-50" },
              zinc: { text: "text-zinc-700", border: "border-zinc-400", hover: "group-hover:text-zinc-700", bg: "hover:bg-zinc-50" }
            };
            const theme = colorMap[visual.color as keyof typeof colorMap];

            return (
              <motion.div 
                variants={itemVariants}
                key={project.id}
                className="group relative w-full h-full bg-white border border-zinc-300 flex flex-row items-stretch overflow-hidden hover:bg-zinc-50 transition-colors duration-300 shadow-md rounded-md"
              >
                <div className="hidden sm:flex items-center justify-center bg-zinc-100 border-r border-zinc-200 px-2 shrink-0">
                  <div className="w-2 h-[60%] min-h-[40px] bg-gradient-to-b from-zinc-50 via-white to-zinc-200 rounded-[2px] border border-zinc-300 flex items-center justify-center shadow-sm">
                     <div className="w-[2px] h-[80%] bg-zinc-300 shadow-inner"></div>
                  </div>
                </div>

                <div className="flex-grow p-4 sm:p-5 flex flex-col justify-start relative min-w-0">
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className={`font-mono text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded border ${theme.border} ${theme.text} bg-white shrink-0`}>
                        {displayId}
                      </span>
                      <h3 className="font-mono text-sm sm:text-base font-bold text-zinc-900 uppercase tracking-tight">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-emerald-50 border border-emerald-200 rounded shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/project/${project.id}`}
                      className={`flex items-center gap-1 font-mono text-[10px] sm:text-xs font-bold tracking-wider px-2 py-1 border rounded transition-all shadow-sm shrink-0 ${theme.border} ${theme.text} ${theme.bg}`}
                    >
                      <Maximize className="w-3 h-3" /> [DETAILS]
                    </Link>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-zinc-700 leading-relaxed mb-3 flex-grow line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-2 border-t border-zinc-200 pt-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-zinc-100 border border-zinc-300 text-zinc-700 font-mono text-[9px] sm:text-[10px] px-1.5 py-0 hover:border-zinc-400 transition-colors rounded-[3px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {project.github && (
                        <Link href={project.github} target="_blank" className={`flex items-center gap-1 text-zinc-500 transition-colors text-[10px] sm:text-xs font-mono uppercase font-bold tracking-wider ${theme.hover}`}>
                          <Github className="w-3.5 h-3.5" /> SRC
                        </Link>
                      )}
                      {project.linkedin && (
                        <Link href={project.linkedin} target="_blank" className={`flex items-center gap-1 text-zinc-500 transition-colors text-[10px] sm:text-xs font-mono uppercase font-bold tracking-wider ${theme.hover}`}>
                          <Linkedin className="w-3.5 h-3.5" /> LINKEDIN
                        </Link>
                      )}
                      {project.live && (
                        <Link href={project.live} target="_blank" className={`flex items-center gap-1 text-zinc-500 transition-colors text-[10px] sm:text-xs font-mono uppercase font-bold tracking-wider ${theme.hover}`}>
                          <ExternalLink className="w-3.5 h-3.5" /> LIVE
                        </Link>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Rack Bottom Plate */}
        <div className="w-full h-5 sm:h-6 bg-zinc-300 border-t-[3px] border-zinc-400 flex justify-center items-center shrink-0 z-20 shadow-inner">
            <span className="font-mono text-[9px] sm:text-[10px] text-zinc-600 tracking-[0.3em] font-bold">END_OF_RACK // SECURED</span>
        </div>
      </div>
    </section>
  );
}