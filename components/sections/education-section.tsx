"use client";

import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Database, HardDrive, Fan, Zap } from "lucide-react";

export function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const fanRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Independent Circuit Triggers
  const [isHovered, setIsHovered] = useState(false);
  const [isMcbOn, setIsMcbOn] = useState(false);
  const [hasAutoStarted, setHasAutoStarted] = useState(false);

  // The circuit is active if ANY trigger is engaged
  const isCircuitActive = isHovered || isMcbOn;

  // Physics state for smooth motor inertia
  const rotationRef = useRef(0);
  const speedRef = useRef(0);

  // Mobile: Auto-Start Circuit on Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAutoStarted && window.innerWidth < 768) {
          setIsMcbOn(true);
          setHasAutoStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAutoStarted]);

  // RequestAnimationFrame loop for realistic motor inertia (Spin up / Spin down)
  useEffect(() => {
    let animationFrameId: number;
    let lastActive = isCircuitActive;

    const animateMotor = () => {
      // Accelerate if ON, Decelerate if OFF
      if (lastActive) {
        speedRef.current = Math.min(speedRef.current + 0.3, 20); // Max Speed
      } else {
        speedRef.current = Math.max(speedRef.current - 0.2, 0); // Inertia slow-down
      }
      
      // Apply rotation if moving
      if (speedRef.current > 0) {
        rotationRef.current = (rotationRef.current + speedRef.current) % 360;
        fanRefs.current.forEach(fanWrapper => {
          if (fanWrapper) fanWrapper.style.transform = `rotate(${rotationRef.current}deg)`;
        });
      }
      
      // Continue animation loop if circuit is on OR motor is still spinning down
      if (lastActive || speedRef.current > 0) {
        animationFrameId = requestAnimationFrame(animateMotor);
      }
    };
    
    // Start loop
    animationFrameId = requestAnimationFrame(animateMotor);

    // Update closure reference when React state changes
    lastActive = isCircuitActive;

    return () => cancelAnimationFrame(animationFrameId);
  }, [isCircuitActive]);

  // Unified Wire CSS
  const posWire = `transition-all duration-1000 ease-in-out z-10 ${isCircuitActive ? 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]' : 'bg-zinc-300'}`;
  const negWire = `transition-all duration-1000 ease-in-out z-10 ${isCircuitActive ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-zinc-300'}`;
  
  const motorChassis = `transition-all duration-1000 border-[5px] bg-white shadow-sm z-30 flex items-center justify-center rounded-full ${isCircuitActive ? 'border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.4)]' : 'border-zinc-200'}`;
  const motorIcon = `transition-colors duration-500 ${isCircuitActive ? 'text-cyan-500' : 'text-zinc-300'}`;

  const education = [
    {
      title: "B.Tech // Electrical", institution: "BIT Sindri", timeline: "2023 - 2027", status: "DISCHARGING: 75%", chargeHeight: "h-[75%]",
      description: "6th Semester. Integrating hardware engineering with modern IoT and AI-assisted scalable software architecture.", modules: ["IoT Systems", "AI-Assisted Dev"], icon: Cpu,
      active: { border: "border-cyan-400", shadow: "shadow-[0_10px_30px_rgba(6,182,212,0.15)]", badge: "border-cyan-300 text-cyan-700 bg-white", energyFill: "bg-cyan-200", text: "text-cyan-600", termBg: "bg-white", termBorder: "border-zinc-200" },
      inactive: { border: "border-zinc-200", shadow: "shadow-sm", badge: "border-zinc-200 text-zinc-500 bg-white", energyFill: "bg-zinc-100/50", text: "text-zinc-400", termBg: "bg-zinc-200", termBorder: "border-zinc-300" }
    },
    {
      title: "Senior Secondary", institution: "BNS DAV Public School, Giridih", timeline: "2020 - 2022", status: "CAPACITY: 100%", chargeHeight: "h-[100%]",
      description: "CBSE Board. Core processing focus on Physics, Chemistry, and Mathematics (PCM).", modules: ["Score: 86%", "PCM"], icon: Database,
      active: { border: "border-emerald-400", shadow: "shadow-[0_10px_30px_rgba(16,185,129,0.15)]", badge: "border-emerald-300 text-emerald-700 bg-white", energyFill: "bg-emerald-200", text: "text-emerald-600", termBg: "bg-white", termBorder: "border-zinc-200" },
      inactive: { border: "border-zinc-200", shadow: "shadow-sm", badge: "border-zinc-200 text-zinc-500 bg-white", energyFill: "bg-zinc-100/50", text: "text-zinc-400", termBg: "bg-zinc-200", termBorder: "border-zinc-300" }
    },
    {
      title: "Secondary", institution: "BNS DAV Public School, Giridih", timeline: "2018 - 2020", status: "CAPACITY: 100%", chargeHeight: "h-[100%]",
      description: "CBSE Board. System initialization sequence. Foundational sciences and math reasoning.", modules: ["Score: 88%", "Science & Math"], icon: HardDrive,
      active: { border: "border-amber-400", shadow: "shadow-[0_10px_30px_rgba(245,158,11,0.15)]", badge: "border-amber-300 text-amber-700 bg-white", energyFill: "bg-amber-200", text: "text-amber-600", termBg: "bg-white", termBorder: "border-zinc-200" },
      inactive: { border: "border-zinc-200", shadow: "shadow-sm", badge: "border-zinc-200 text-zinc-500 bg-white", energyFill: "bg-zinc-100/50", text: "text-zinc-400", termBg: "bg-zinc-200", termBorder: "border-zinc-300" }
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="w-full flex flex-col justify-center relative py-12 sm:py-20 overflow-hidden bg-transparent">
      
      <div className="flex items-center gap-3 mb-6 sm:mb-10 border-b border-zinc-200 pb-3 shrink-0 px-6 sm:px-12 max-w-6xl mx-auto w-full">
        <Zap className="w-6 h-6 text-cyan-600" />
        <h2 className="text-xl sm:text-2xl font-mono font-bold text-zinc-800 tracking-wider">
          [EDUCATION]
        </h2>
      </div>

      <div className="w-full flex-grow flex items-center justify-center relative">
        
        {/* ======================================================== */}
        {/* DESKTOP LAYOUT */}
        {/* ======================================================== */}
        <div className="hidden md:block relative max-w-5xl mx-auto w-full px-12 h-auto pb-12">
          <div className="grid grid-cols-3 gap-x-8 w-full h-full relative" style={{ gridTemplateRows: '140px 24px auto 24px' }}>
            
            {/* Global Negative Trunk */}
            <div className={`absolute top-[68px] bottom-[12px] left-[-32px] w-[4px] ${negWire}`}></div>

            {/* ROW 1: FAN & MCB */}
            <div className="relative w-full h-full">
               <div className={`absolute top-1/2 left-[-32px] right-[-17px] h-[4px] -translate-y-1/2 ${negWire}`}></div>
            </div>

            <div className="relative w-full h-full">
               <div className={`absolute top-1/2 left-[-17px] right-[50%] h-[4px] -translate-y-1/2 ${negWire}`}></div>
               <div className={`absolute top-1/2 left-[50%] right-[-17px] h-[4px] -translate-y-1/2 ${posWire}`}></div>
               
               <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 ${motorChassis}`}>
                  <div ref={el => { fanRefs.current[0] = el }} className="w-full h-full flex items-center justify-center">
                     <Fan className={`w-16 h-16 ${motorIcon}`} />
                  </div>
                  <div className="absolute w-5 h-5 bg-zinc-100 rounded-full border-2 border-zinc-200 z-10"></div>
               </div>
               <span className="absolute -top-3 -left-6 text-[10px] font-mono font-bold text-zinc-500 tracking-wider bg-white/90 px-1 border border-zinc-200 rounded whitespace-nowrap z-40 shadow-sm">BLDC_24V_3000RPM</span>
            </div>

            <div className="relative w-full h-full">
               <div className={`absolute top-1/2 left-[-17px] right-[50%] h-[4px] -translate-y-1/2 ${posWire}`}></div>
               <div className={`absolute top-1/2 bottom-0 left-[50%] w-[4px] -translate-x-[2px] ${posWire}`}></div>
               
               <div 
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-24 bg-white border-2 border-zinc-300 rounded-lg z-30 flex flex-col items-center justify-center shadow-sm cursor-pointer hover:border-zinc-400 active:scale-95 transition-all"
                 onClick={() => setIsMcbOn(!isMcbOn)}
                 title="Toggle Circuit Breaker"
               >
                  <div className="w-4 h-2.5 bg-zinc-300 absolute -top-2.5 rounded-t-sm" />
                  <div className="w-4 h-2.5 bg-zinc-300 absolute -bottom-2.5 rounded-b-sm" />
                  <span className="text-[9px] font-mono text-zinc-800 absolute top-1.5 font-black">MCB</span>
                  <span className="text-[6px] font-mono text-zinc-500 absolute top-5 font-bold tracking-wider">32A DC_ISO</span>
                  <div className={`w-2 h-2 rounded-full absolute top-8 transition-colors duration-1000 ${isCircuitActive ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-red-500'}`} />

                  <div className="w-7 h-10 mt-8 bg-zinc-100 rounded-sm shadow-inner relative flex justify-center p-1 border border-zinc-200">
                     <div className="w-1.5 h-full bg-zinc-300 rounded-full"></div>
                     <div className={`w-full h-4 rounded-sm absolute bottom-1 transition-all duration-500 shadow-sm flex items-center justify-center ${isCircuitActive ? 'bg-cyan-500 -translate-y-[20px]' : 'bg-red-500'}`}>
                        <div className="w-full h-[1.5px] bg-white/50"></div>
                     </div>
                  </div>
               </div>
            </div>

            {/* ROW 2: POSITIVE BUS BAR */}
            <div className="relative w-full h-full">
               <div className={`absolute top-1/2 left-[50%] right-[-17px] h-[4px] -translate-y-1/2 ${posWire}`}></div>
               <div className={`absolute top-1/2 bottom-0 left-[50%] w-[4px] -translate-x-[2px] ${posWire}`}></div>
            </div>
            <div className="relative w-full h-full">
               <div className={`absolute top-1/2 left-[-17px] right-[-17px] h-[4px] -translate-y-1/2 ${posWire}`}></div>
               <div className={`absolute top-1/2 bottom-0 left-[50%] w-[4px] -translate-x-[2px] ${posWire}`}></div>
            </div>
            <div className="relative w-full h-full">
               <div className={`absolute top-1/2 left-[-17px] right-[50%] h-[4px] -translate-y-1/2 ${posWire}`}></div>
               <div className={`absolute top-0 bottom-0 left-[50%] w-[4px] -translate-x-[2px] ${posWire}`}></div>
            </div>

            {/* ROW 3: BATTERY CELLS */}
            {education.map((edu, idx) => {
              const theme = isCircuitActive ? edu.active : edu.inactive;

              return (
                <div 
                  key={idx} 
                  className="relative flex flex-col h-full w-full pt-4 cursor-pointer"
                  onMouseEnter={() => { if(window.innerWidth >= 768) setIsHovered(true) }}
                  onMouseLeave={() => { if(window.innerWidth >= 768) setIsHovered(false) }}
                >
                   <div className={`absolute top-0 left-1/2 -translate-x-[2px] w-[4px] h-[16px] ${posWire}`}></div>
                   <div className={`relative w-20 h-3.5 mx-auto flex items-center justify-center rounded-t-md border-t border-x z-20 shadow-sm transition-all duration-1000 ${theme.termBg} ${theme.termBorder}`}>
                     <span className="text-[11px] font-black text-zinc-600">+</span>
                   </div>

                   <Card className={`relative overflow-hidden flex-grow w-full flex flex-col bg-white border-2 transition-all duration-1000 z-30 h-auto ${theme.border} ${theme.shadow}`}>
                     <div className={`absolute bottom-0 left-0 right-0 w-full transition-all duration-1000 ${edu.chargeHeight} ${theme.energyFill}`}>
                        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-white opacity-60"></div>
                     </div>

                     <div className="p-5 relative z-10 flex flex-col h-full">
                       <div className="flex justify-between items-start mb-3 border-b border-zinc-100 pb-3">
                         <div className="flex flex-col gap-1">
                           <Badge variant="outline" className={`font-mono text-[10px] font-bold tracking-widest transition-colors duration-1000 shadow-sm ${theme.badge}`}>{edu.status}</Badge>
                           <span className="font-mono text-[8px] text-zinc-400 font-bold ml-1">12V_100Ah_CELL</span>
                         </div>
                         <edu.icon className={`w-5 h-5 transition-colors duration-1000 ${theme.text}`} />
                       </div>

                       <div className="mb-2">
                         <h3 className={`font-mono text-lg font-bold transition-colors duration-1000 mb-1 leading-tight ${theme.text}`}>{edu.title}</h3>
                         <div className="text-[11px] font-mono text-zinc-500 leading-tight">
                           {edu.institution} <br/> <span className="text-zinc-600 font-bold">[{edu.timeline}]</span>
                         </div>
                       </div>

                       <p className="text-xs font-mono text-zinc-600 leading-relaxed flex-grow my-2">
                         {edu.description}
                       </p>

                       <div className="flex flex-wrap gap-1.5 mt-auto">
                         {edu.modules.map((mod, modIdx) => (
                           <Badge key={modIdx} variant="secondary" className={`border px-1.5 py-0 font-mono text-[10px] transition-colors duration-1000 ${theme.badge}`}>{mod}</Badge>
                         ))}
                       </div>
                     </div>
                   </Card>

                   <div className={`relative w-20 h-3.5 mx-auto flex items-center justify-center rounded-b-md border-b border-x z-20 shadow-sm transition-all duration-1000 bg-zinc-300 border-zinc-400`}>
                     <span className="text-[11px] font-black text-zinc-100">-</span>
                   </div>
                   <div className={`absolute bottom-0 left-1/2 -translate-x-[2px] w-[4px] h-[16px] ${negWire}`}></div>
                </div>
              );
            })}

            {/* ROW 4: NEGATIVE BUS BAR */}
            <div className="relative w-full h-full">
               <div className={`absolute top-0 bottom-1/2 left-[50%] w-[4px] -translate-x-[2px] ${negWire}`}></div>
               <div className={`absolute top-1/2 left-[-32px] right-[-17px] h-[4px] -translate-y-1/2 ${negWire}`}></div>
            </div>
            <div className="relative w-full h-full">
               <div className={`absolute top-0 bottom-1/2 left-[50%] w-[4px] -translate-x-[2px] ${negWire}`}></div>
               <div className={`absolute top-1/2 left-[-17px] right-[-17px] h-[4px] -translate-y-1/2 ${negWire}`}></div>
            </div>
            <div className="relative w-full h-full">
               <div className={`absolute top-0 bottom-1/2 left-[50%] w-[4px] -translate-x-[2px] ${negWire}`}></div>
               <div className={`absolute top-1/2 left-[-17px] right-[50%] h-[4px] -translate-y-1/2 ${negWire}`}></div>
            </div>

          </div>
        </div>


        {/* ======================================================== */}
        {/* MOBILE LAYOUT (True vertical responsive stack) */}
        {/* ======================================================== */}
        <div className="md:hidden relative w-full max-w-[400px] mx-auto px-4 sm:px-8 py-2 flex flex-col gap-10">
          
          {/* Top Section: Fan and MCB */}
          <div className="flex justify-between items-center relative w-full">
             
             {/* Left Vertical Start (Motor Corner -> Down) */}
             <div className={`absolute left-0 top-[calc(50%-2px)] w-[4px] h-[calc(50%+42px)] z-20 rounded-none ${negWire}`}></div>
             
             {/* Right Vertical Start (MCB Corner -> Down) */}
             <div className={`absolute right-0 top-[calc(50%-2px)] w-[4px] h-[calc(50%+42px)] z-20 rounded-none ${posWire}`}></div>

             {/* Horizontal Motor Line */}
             <div className={`h-[4px] flex-grow z-10 ${negWire}`}></div>

             {/* The Fan */}
             <div className="relative flex items-center justify-center z-20">
                <div className={`relative w-20 h-20 ${motorChassis}`}>
                  <div ref={el => { fanRefs.current[1] = el }} className="w-full h-full flex items-center justify-center">
                    <Fan className={`w-10 h-10 ${motorIcon}`} />
                  </div>
                  <div className="absolute w-3 h-3 bg-zinc-100 rounded-full border-2 border-zinc-200 z-10"></div>
                </div>
                <span className="absolute -top-6 -left-1 text-[8px] font-mono font-bold text-zinc-500 tracking-wider bg-white px-1 border border-zinc-200 rounded shadow-sm z-40 whitespace-nowrap">BLDC_24V_3000RPM</span>
             </div>

             {/* Wire between Fan and MCB */}
             <div className={`h-[4px] w-4 shrink-0 z-10 ${posWire}`}></div>

             {/* The MCB */}
             <div 
                className="relative w-16 h-20 bg-white border-2 border-zinc-300 rounded-lg z-30 flex flex-col items-center justify-center shadow-sm cursor-pointer active:scale-95 transition-all"
                onClick={() => setIsMcbOn(!isMcbOn)}
             >
                <div className="w-3 h-2 bg-zinc-300 absolute -top-2 rounded-t-sm" />
                <div className="w-3 h-2 bg-zinc-300 absolute -bottom-2 rounded-b-sm" />
                <span className="text-[8px] font-mono text-zinc-800 absolute top-1 font-black">MCB</span>
                <span className="text-[5px] font-mono text-zinc-500 absolute top-4 font-bold tracking-wider">32A DC_ISO</span>
                
                <div className={`w-1.5 h-1.5 rounded-full absolute top-7 transition-colors duration-1000 ${isCircuitActive ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-red-500'}`} />

                <div className="w-5 h-8 mt-6 bg-zinc-100 rounded-sm shadow-inner relative flex justify-center p-1 border border-zinc-200">
                   <div className="w-1 h-full bg-zinc-300 rounded-full"></div>
                   <div className={`w-full h-3 rounded-sm absolute bottom-0.5 transition-all duration-500 shadow-sm flex items-center justify-center ${isCircuitActive ? 'bg-cyan-500 -translate-y-[14px]' : 'bg-red-500'}`}>
                      <div className="w-full h-[1px] bg-white/50"></div>
                   </div>
                </div>
             </div>

             {/* Horizontal MCB Line */}
             <div className={`h-[4px] flex-grow z-10 ${posWire}`}></div>
          </div>

          {/* Battery Stack */}
          <div className="flex flex-col gap-10 w-full">
             {education.map((edu, idx) => {
               const theme = isCircuitActive ? edu.active : edu.inactive;
               const isLast = idx === education.length - 1;

               return (
                <div key={`mob-${idx}`} className="flex items-stretch w-full relative">
                   
                   {/* Left Vertical Segments */}
                   {/* 1. Top half (connects from gap above down to horizontal wire) */}
                   <div className={`absolute left-0 top-0 w-[4px] h-[calc(50%+2px)] z-20 rounded-none ${negWire}`}></div>
                   {/* 2. Bottom half (bridges the gap down to the NEXT element, omitted if it's the last item!) */}
                   {!isLast && (
                      <div className={`absolute left-0 top-[calc(50%-2px)] w-[4px] h-[calc(50%+42px)] z-20 rounded-none ${negWire}`}></div>
                   )}
                   
                   <div className={`h-[4px] self-center flex-grow z-10 ${negWire}`}></div>
                   
                   {/* Negative Terminal */}
                   <div className="w-5 sm:w-6 flex items-center justify-center rounded-l-md border z-30 shadow-sm relative bg-zinc-300 border-zinc-400">
                      <span className="text-xs font-black text-zinc-100">-</span>
                   </div>

                   {/* Battery Card */}
                   <Card className={`flex-grow h-auto max-w-[260px] flex flex-col bg-white border-y-2 transition-all duration-1000 z-30 shadow-sm relative overflow-hidden ${theme.border} ${theme.shadow}`}>
                      <div className={`absolute bottom-0 left-0 w-full transition-all duration-1000 ${edu.chargeHeight} ${theme.energyFill}`}></div>
                      
                      <div className="p-3 sm:p-4 relative z-10 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                           <div className="flex flex-col gap-0.5">
                              <Badge variant="outline" className={`font-mono text-[8px] font-bold tracking-widest transition-colors duration-1000 shadow-sm px-1 py-0 ${theme.badge}`}>{edu.status}</Badge>
                              <span className="font-mono text-[7px] text-zinc-400 font-bold ml-0.5">12V_100Ah_CELL</span>
                           </div>
                           <edu.icon className={`w-4 h-4 transition-colors duration-1000 ${theme.text}`} />
                        </div>
                        <h3 className={`font-mono text-xs sm:text-sm font-bold transition-colors duration-1000 mb-0.5 leading-tight ${theme.text}`}>{edu.title}</h3>
                        <div className="text-[9px] font-mono text-zinc-500 leading-tight mb-2">
                           {edu.institution} <span className="text-zinc-600 font-bold">[{edu.timeline}]</span>
                        </div>
                        <p className="text-[10px] sm:text-xs font-mono text-zinc-600 leading-snug mb-3">
                           {edu.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-auto">
                           {edu.modules.map((mod, modIdx) => (
                             <Badge key={modIdx} variant="secondary" className={`border px-1 py-0 font-mono text-[8px] transition-colors duration-1000 ${theme.badge}`}>{mod}</Badge>
                           ))}
                        </div>
                      </div>
                   </Card>

                   {/* Positive Terminal */}
                   <div className={`w-5 sm:w-6 flex items-center justify-center rounded-r-md border z-30 shadow-sm transition-all duration-1000 relative ${theme.termBg} ${theme.termBorder}`}>
                      <span className="text-xs font-black text-zinc-600">+</span>
                   </div>

                   <div className={`h-[4px] self-center flex-grow z-10 ${posWire}`}></div>

                   {/* Right Vertical Segments */}
                   <div className={`absolute right-0 top-0 w-[4px] h-[calc(50%+2px)] z-20 rounded-none ${posWire}`}></div>
                   {!isLast && (
                      <div className={`absolute right-0 top-[calc(50%-2px)] w-[4px] h-[calc(50%+42px)] z-20 rounded-none ${posWire}`}></div>
                   )}
                </div>
               );
             })}
          </div>

        </div>

      </div>
    </section>
  );
}