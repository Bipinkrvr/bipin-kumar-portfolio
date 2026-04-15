import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Database, HardDrive, Fan, Zap } from "lucide-react";

export function EducationSection() {
  const posWire = `
    transition-all duration-1000 ease-in-out pointer-events-none bg-zinc-300
    group-has-[.edu-cyan:hover]/board:bg-cyan-500 group-has-[.edu-cyan:hover]/board:shadow-[0_0_10px_rgba(6,182,212,0.5)]
    group-has-[.edu-emerald:hover]/board:bg-emerald-500 group-has-[.edu-emerald:hover]/board:shadow-[0_0_10px_rgba(16,185,129,0.5)]
    group-has-[.edu-amber:hover]/board:bg-amber-500 group-has-[.edu-amber:hover]/board:shadow-[0_0_10px_rgba(245,158,11,0.5)]
  `;

  const negWire = `
    transition-all duration-1000 ease-in-out pointer-events-none bg-zinc-300
    group-has-[.battery-cell:hover]/board:bg-blue-500 group-has-[.battery-cell:hover]/board:shadow-[0_0_10px_rgba(59,130,246,0.5)]
  `;

  const education = [
    {
      id: "edu-cyan",
      title: "B.Tech // Electrical",
      institution: "BIT Sindri",
      timeline: "2023 - 2027",
      status: "DISCHARGING: 75%",
      chargeHeight: "h-[75%]",
      description: "6th Semester. Bridging hardware physics with scalable software architecture.",
      modules: ["Power Electronics", "Control Systems"],
      icon: Cpu,
      theme: {
        text: "text-cyan-600",
        border: "group-hover:border-cyan-400",
        shadow: "group-hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)]",
        badge: "group-hover:border-cyan-300 group-hover:text-cyan-700",
        energyFill: "bg-cyan-100/50 group-has-[.battery-cell:hover]/board:bg-cyan-200 group-has-[.battery-cell:hover]/board:shadow-[0_0_15px_rgba(6,182,212,0.2)]",
      }
    },
    {
      id: "edu-emerald", 
      title: "Senior Secondary",
      institution: "Your School Name", 
      timeline: "2021 - 2023",
      status: "CAPACITY: 100%", 
      chargeHeight: "h-[100%]",
      description: "Core processing focus on Physics, Chemistry, and Mathematics (PCM).",
      modules: ["Physics", "Calculus"],
      icon: Database,
      theme: {
        text: "text-emerald-600",
        border: "group-hover:border-emerald-400",
        shadow: "group-hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)]",
        badge: "group-hover:border-emerald-300 group-hover:text-emerald-700",
        energyFill: "bg-emerald-100/50 group-has-[.battery-cell:hover]/board:bg-emerald-200 group-has-[.battery-cell:hover]/board:shadow-[0_0_15px_rgba(16,185,129,0.2)]",
      }
    },
    {
      id: "edu-amber", 
      title: "Secondary",
      institution: "Your School Name",
      timeline: "2019 - 2021",
      status: "CAPACITY: 100%",
      chargeHeight: "h-[100%]",
      description: "System initialization sequence. Foundational sciences and math reasoning.",
      modules: ["Mathematics", "Logic Foundation"],
      icon: HardDrive,
      theme: {
        text: "text-amber-600",
        border: "group-hover:border-amber-400",
        shadow: "group-hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)]",
        badge: "group-hover:border-amber-300 group-hover:text-amber-700",
        energyFill: "bg-amber-100/50 group-has-[.battery-cell:hover]/board:bg-amber-200 group-has-[.battery-cell:hover]/board:shadow-[0_0_15px_rgba(245,158,11,0.2)]",
      }
    }
  ];

  return (
    <section id="education" className="w-full min-h-screen flex flex-col justify-center relative py-20 overflow-hidden">
      
      <div className="flex items-center gap-3 mb-2 border-b border-zinc-200 pb-3 shrink-0 px-6 sm:px-12 max-w-6xl mx-auto w-full">
        <Zap className="w-6 h-6 text-cyan-600" />
        <h2 className="text-xl sm:text-2xl font-mono font-bold text-zinc-800 tracking-wider">
          [CORE_ARCHITECTURE]
        </h2>
      </div>

      <div className="w-full flex-grow overflow-hidden flex items-center relative">
        <div className="relative max-w-5xl mx-auto w-full group/board px-8 sm:px-12 h-[550px]">

          {/* THE CIRCUIT GRID */}
          <div 
            className="grid grid-cols-3 gap-x-8 w-full h-full relative"
            style={{ gridTemplateRows: '140px 24px minmax(0, 1fr) 24px' }}
          >
            
            {/* --- GLOBAL NEGATIVE TRUNK --- */}
            {/* Anchored EXACTLY 24px/32px to the left of the grid. Physically impossible to overlap the battery card. 
                top-[68px] and bottom-[10px] perfectly cap the horizontal wires. */}
            <div className={`absolute top-[68px] bottom-[10px] left-[-24px] sm:left-[-32px] w-[4px] z-10 ${negWire}`}></div>

            
            {/* ================= ROW 1: FAN & MCB ================= */}
            
            {/* Col 1: Horizontal wire connecting Global Trunk to Fan */}
            <div className="relative w-full h-full">
               <div className={`absolute top-1/2 left-[-24px] sm:left-[-32px] right-[-16px] h-[4px] -translate-y-1/2 z-10 ${negWire}`}></div>
            </div>

            {/* Col 2: The Fan */}
            <div className="relative w-full h-full">
               <div className={`absolute top-1/2 left-[-16px] right-[50%] h-[4px] -translate-y-1/2 z-10 ${negWire}`}></div>
               <div className={`absolute top-1/2 left-[50%] right-[-16px] h-[4px] -translate-y-1/2 z-10 ${posWire}`}></div>
               
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[5px] border-zinc-200 bg-white shadow-sm z-30 flex items-center justify-center transition-all duration-1000 group-has-[.battery-cell:hover]/board:border-zinc-300 group-has-[.battery-cell:hover]/board:shadow-[0_0_20px_rgba(0,0,0,0.05)]">
                  <Fan className="w-12 h-12 sm:w-16 sm:h-16 text-zinc-300 transition-colors duration-500 group-has-[.battery-cell:hover]/board:animate-spin group-has-[.battery-cell:hover]/board:[animation-duration:0.4s] group-has-[.edu-cyan:hover]/board:text-cyan-500 group-has-[.edu-emerald:hover]/board:text-emerald-500 group-has-[.edu-amber:hover]/board:text-amber-500" />
                  <div className="absolute w-5 h-5 bg-zinc-100 rounded-full border-2 border-zinc-200 z-10"></div>
               </div>
            </div>

            {/* Col 3: The MCB */}
            <div className="relative w-full h-full">
               <div className={`absolute top-1/2 left-[-16px] right-[50%] h-[4px] -translate-y-1/2 z-10 ${posWire}`}></div>
               <div className={`absolute top-1/2 bottom-0 left-[50%] w-[4px] -translate-x-[2px] z-10 ${posWire}`}></div>
               
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-20 sm:w-20 sm:h-24 bg-white border-2 border-zinc-300 rounded-lg z-30 flex flex-col items-center justify-center shadow-sm">
                  <div className="w-4 h-2.5 bg-zinc-300 absolute -top-2.5 rounded-t-sm" />
                  <div className="w-4 h-2.5 bg-zinc-300 absolute -bottom-2.5 rounded-b-sm" />
                  <span className="text-[7px] sm:text-[9px] font-mono text-zinc-500 absolute top-2 font-bold">MCB</span>
                  
                  <div className="w-2 h-2 rounded-full absolute top-5 sm:top-6 bg-red-500 transition-colors duration-1000 group-has-[.battery-cell:hover]/board:bg-emerald-500 group-has-[.battery-cell:hover]/board:shadow-[0_0_8px_rgba(16,185,129,0.5)]" />

                  <div className="w-6 h-8 sm:w-7 sm:h-10 mt-5 sm:mt-6 bg-zinc-100 rounded-sm shadow-inner relative flex justify-center p-1 border border-zinc-200">
                     <div className="w-1.5 h-full bg-zinc-300 rounded-full"></div>
                     <div className="w-full h-3 sm:h-4 bg-red-500 rounded-sm absolute bottom-1 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-has-[.battery-cell:hover]/board:bg-emerald-500 group-has-[.battery-cell:hover]/board:-translate-y-[14px] sm:group-has-[.battery-cell:hover]/board:-translate-y-[20px] shadow-sm flex items-center justify-center">
                        <div className="w-full h-[1.5px] bg-white/50"></div>
                     </div>
                  </div>
               </div>
            </div>


            {/* ================= ROW 2: POSITIVE BUS BAR ================= */}
            <div className="relative w-full h-full">
               <div className={`absolute top-1/2 left-[50%] right-[-16px] h-[4px] -translate-y-1/2 z-10 ${posWire}`}></div>
               <div className={`absolute top-1/2 bottom-0 left-[50%] w-[4px] -translate-x-[2px] z-10 ${posWire}`}></div>
            </div>
            <div className="relative w-full h-full">
               <div className={`absolute top-1/2 left-[-16px] right-[-16px] h-[4px] -translate-y-1/2 z-10 ${posWire}`}></div>
               <div className={`absolute top-1/2 bottom-0 left-[50%] w-[4px] -translate-x-[2px] z-10 ${posWire}`}></div>
            </div>
            <div className="relative w-full h-full">
               <div className={`absolute top-1/2 left-[-16px] right-[50%] h-[4px] -translate-y-1/2 z-10 ${posWire}`}></div>
               <div className={`absolute top-0 bottom-0 left-[50%] w-[4px] -translate-x-[2px] z-10 ${posWire}`}></div>
            </div>


            {/* ================= ROW 3: BATTERY CELLS ================= */}
            {education.map((edu, idx) => (
              <div key={idx} className={`relative flex flex-col h-full w-full battery-cell group cursor-pointer ${edu.id}`}>
                 
                 <div className={`w-[4px] h-4 shrink-0 mx-auto z-10 ${posWire}`}></div>
                 <div className="w-16 sm:w-20 h-3.5 bg-zinc-200 rounded-t-md border-t border-x border-zinc-300 mx-auto flex items-center justify-center transition-all duration-1000 group-hover:bg-white z-20 shadow-sm">
                   <span className="text-[11px] font-black text-zinc-600">+</span>
                 </div>

                 <Card className={`relative overflow-hidden flex-grow w-full flex flex-col bg-white border-2 border-zinc-200 transition-all duration-1000 z-30 shadow-sm ${edu.theme.border} ${edu.theme.shadow}`}>
                   <div className={`absolute bottom-0 left-0 right-0 w-full transition-all duration-1000 ${edu.chargeHeight} ${edu.theme.energyFill}`}>
                      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-white opacity-60"></div>
                   </div>

                   <div className="p-4 sm:p-5 relative z-10 flex flex-col h-full min-h-0">
                     <div className="flex justify-between items-start mb-3 border-b border-zinc-100 pb-3 shrink-0">
                       <Badge variant="outline" className={`bg-white font-mono text-[9px] sm:text-[10px] font-bold tracking-widest text-zinc-500 border-zinc-200 shadow-sm ${edu.theme.badge}`}>
                         {edu.status}
                       </Badge>
                       <edu.icon className={`w-5 h-5 text-zinc-400 transition-colors duration-1000 group-hover:${edu.theme.text}`} />
                     </div>

                     <div className="mb-2 shrink-0">
                       <h3 className={`font-mono text-base sm:text-lg font-bold text-zinc-800 transition-colors duration-1000 mb-1 leading-tight group-hover:${edu.theme.text}`}>{edu.title}</h3>
                       <div className="text-[10px] sm:text-[11px] font-mono text-zinc-500 leading-tight">
                         {edu.institution} <br/> <span className="text-zinc-600 font-bold">[{edu.timeline}]</span>
                       </div>
                     </div>

                     <p className="text-[11px] sm:text-xs font-mono text-zinc-600 leading-relaxed flex-grow overflow-y-auto custom-scrollbar my-2">
                       {edu.description}
                     </p>

                     <div className="flex flex-wrap gap-1.5 mt-auto shrink-0">
                       {edu.modules.map((mod, modIdx) => (
                         <Badge key={modIdx} variant="secondary" className={`bg-zinc-50 border border-zinc-200 text-zinc-600 font-mono text-[9px] sm:text-[10px] px-1.5 py-0 ${edu.theme.badge}`}>{mod}</Badge>
                       ))}
                     </div>
                   </div>
                 </Card>

                 <div className="w-16 sm:w-20 h-3.5 bg-zinc-300 rounded-b-md border-b border-x border-zinc-400 mx-auto flex items-center justify-center transition-all duration-1000 group-hover:bg-zinc-400 z-20 shadow-sm">
                   <span className="text-[11px] font-black text-zinc-100">-</span>
                 </div>
                 <div className={`w-[4px] h-4 shrink-0 mx-auto z-10 ${negWire}`}></div>
              </div>
            ))}


            {/* ================= ROW 4: NEGATIVE BUS BAR ================= */}
            <div className="relative w-full h-full">
               <div className={`absolute top-1/2 left-[-24px] sm:left-[-32px] right-[-16px] h-[4px] -translate-y-1/2 z-10 ${negWire}`}></div>
               <div className={`absolute top-0 bottom-1/2 left-[50%] w-[4px] -translate-x-[2px] z-10 ${negWire}`}></div>
            </div>
            <div className="relative w-full h-full">
               <div className={`absolute top-1/2 left-[-16px] right-[-16px] h-[4px] -translate-y-1/2 z-10 ${negWire}`}></div>
               <div className={`absolute top-0 bottom-1/2 left-[50%] w-[4px] -translate-x-[2px] z-10 ${negWire}`}></div>
            </div>
            <div className="relative w-full h-full">
               <div className={`absolute top-1/2 left-[-16px] right-[50%] h-[4px] -translate-y-1/2 z-10 ${negWire}`}></div>
               <div className={`absolute top-0 bottom-1/2 left-[50%] w-[4px] -translate-x-[2px] z-10 ${negWire}`}></div>
            </div>

          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(244, 244, 245, 1); border-radius: 2px;}
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(212, 212, 216, 1); border-radius: 2px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(161, 161, 170, 1); }
      `}} />
    </section>
  );
}