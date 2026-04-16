"use client";

import { useEffect, useState } from "react";
import { Zap, Database, Activity, Wifi, Terminal, Cpu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const [isStable, setIsStable] = useState(false);

  useEffect(() => {
    // Reduced calibrating time from 1500ms to 600ms for a snappier boot sequence
    const timer = setTimeout(() => setIsStable(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-[100svh] flex items-center justify-center p-2 sm:p-4 md:p-6 pt-2 sm:pt-10 overflow-visible bg-transparent">
      
      <div className="w-full max-w-6xl flex flex-col relative z-10 h-auto sm:h-[85vh]">
        
        {/* DESKTOP POWER ASSEMBLY (Hidden on Mobile) */}
        <div className="hidden sm:flex absolute top-[60%] -left-[70px] md:-left-[90px] lg:-left-[120px] flex-row items-center z-[-1] drop-shadow-md">
           
           {/* DC Power Supply Box */}
           <div className="w-14 h-16 lg:w-16 lg:h-16 bg-zinc-100 border-2 border-zinc-300 rounded-md flex flex-col items-center justify-center relative z-20 shadow-[inset_0_0_10px_rgba(0,0,0,0.05),-5px_5px_15px_rgba(0,0,0,0.1)]">
              <div className="flex flex-col items-center justify-center mb-1">
                 <span className="font-mono text-[16px] lg:text-[18px] font-black text-zinc-400 leading-none">DC</span>
                 <span className="font-mono text-[7px] lg:text-[8px] font-bold text-zinc-500 mt-0.5 tracking-wider">24V 5A</span>
              </div>
              <div className="absolute bottom-1 lg:bottom-1.5 flex items-center gap-1">
                <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isStable ? 'bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]' : 'bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)] animate-pulse'}`}></div>
                <span className={`text-[4px] lg:text-[5px] font-mono font-bold ${isStable ? 'text-zinc-500' : 'text-red-500'}`}>
                   {isStable ? '24V' : 'BOOT'}
                </span>
              </div>
           </div>

           {/* Plug */}
           <div className="w-6 h-8 lg:w-8 lg:h-10 bg-zinc-300 border-2 border-zinc-400 border-l-0 rounded-r-md flex flex-col items-start justify-center pl-1 shadow-md relative z-10 translate-x-[-4px]">
              <div className="w-[1px] h-3 lg:h-4 bg-zinc-500 mb-[2px]"></div>
              <div className="w-[1px] h-3 lg:h-4 bg-zinc-500 mb-[2px]"></div>
              <div className="w-[1px] h-3 lg:h-4 bg-zinc-500"></div>
           </div>

           {/* Wire */}
           <svg width="45" height="20" viewBox="0 0 45 20" className="opacity-90 -ml-[6px]">
              <path d="M 0 10 L 45 10" fill="none" stroke="#27272a" strokeWidth="6" />
              <path d="M 0 10 L 45 10" fill="none" stroke="#52525b" strokeWidth="2" />
           </svg>
        </div>

        {/* Top DIN Rail */}
        <div aria-hidden="true" className="w-[90%] mx-auto h-3 sm:h-4 bg-zinc-300 border-x-4 border-t-4 border-zinc-400 rounded-t-lg flex justify-between items-center px-4 sm:px-12 shadow-sm shrink-0 z-0">
           <div className="w-8 sm:w-12 h-1 bg-zinc-400 rounded-full shadow-inner border border-zinc-300"></div>
           <div className="w-8 sm:w-12 h-1 bg-zinc-400 rounded-full shadow-inner border border-zinc-300"></div>
        </div>

        {/* MAIN CHASSIS */}
        <div className="flex-grow flex flex-col bg-white border-[4px] sm:border-[6px] border-zinc-300 border-b-zinc-400 border-r-zinc-400 p-2 sm:p-3 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10 overflow-hidden h-auto">
          <div className="flex-grow flex flex-col bg-zinc-100 border border-zinc-300 rounded-lg p-2 sm:p-3 md:p-4 relative shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] gap-2 sm:gap-3 md:gap-4 overflow-hidden h-auto">
            
            {/* Corner Screws */}
            <div aria-hidden="true" className="absolute top-2 left-2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-zinc-300 flex items-center justify-center shadow-inner"><div className="w-1.5 h-[1px] bg-zinc-500 rotate-45"></div></div>
            <div aria-hidden="true" className="absolute top-2 right-2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-zinc-300 flex items-center justify-center shadow-inner"><div className="w-1.5 h-[1px] bg-zinc-500 -rotate-12"></div></div>
            <div aria-hidden="true" className="absolute bottom-2 left-2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-zinc-300 flex items-center justify-center shadow-inner"><div className="w-1.5 h-[1px] bg-zinc-500 rotate-90"></div></div>
            <div aria-hidden="true" className="absolute bottom-2 right-2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-zinc-300 flex items-center justify-center shadow-inner"><div className="w-1.5 h-[1px] bg-zinc-500 rotate-0"></div></div>

            {/* ROW 1: HEADER STRIP */}
            <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3 md:gap-4 items-stretch h-auto shrink-0 z-20">
              <div className="w-full lg:flex-grow order-1 lg:order-2 bg-white border-2 border-zinc-200 p-3 sm:p-2 rounded-sm shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] relative overflow-hidden flex flex-col justify-center">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-mono font-black tracking-tighter text-cyan-600 text-center relative z-20">
                  BIPIN_KUMAR
                </h1>
                <div className="mt-2 sm:mt-1 flex items-center gap-2 relative z-20 max-w-xl mx-auto w-full px-2">
                   <div className="h-1 flex-grow bg-zinc-200 border border-zinc-300 overflow-hidden">
                      {/* Reduced animation duration here from 1500ms to 800ms */}
                      <div className={`h-full transition-all duration-[800ms] ease-out ${isStable ? 'bg-cyan-500 w-full shadow-[0_0_8px_rgba(34,211,238,0.5)]' : 'bg-amber-400 w-[20%]'}`}></div>
                   </div>
                   <span className={`font-mono text-[8px] sm:text-[9px] md:text-[10px] uppercase transition-colors duration-300 min-w-[90px] sm:min-w-[120px] text-right shrink-0 whitespace-nowrap ${isStable ? 'text-cyan-600' : 'text-amber-500 animate-pulse'}`}>
                      {isStable ? 'LOGIC_LOCKED' : 'CALIBRATING...'}
                   </span>
                </div>
              </div>

              {/* Status LEDs */}
              <div className="bg-white border border-zinc-200 rounded-sm shadow-sm p-2 flex flex-row lg:flex-col justify-around items-center w-[48%] lg:w-20 order-2 lg:order-1 shrink-0">
                 <div className="flex flex-row lg:flex-col items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full border border-zinc-200 transition-colors duration-300 ${isStable ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-zinc-300'}`}></div>
                    <span className="text-[7px] sm:text-[6px] font-mono text-zinc-500 font-bold tracking-widest block">SYS_OK</span>
                 </div>
                 <div className="flex flex-row lg:flex-col items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full border border-zinc-200 transition-colors duration-300 ${isStable ? 'bg-zinc-300' : 'bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)] animate-pulse'}`}></div>
                    <span className="text-[7px] sm:text-[6px] font-mono text-zinc-500 font-bold tracking-widest block">DIAG</span>
                 </div>
              </div>

              {/* Model Info */}
              <div className="bg-white border border-zinc-200 rounded-sm shadow-sm p-2 flex flex-row lg:flex-col justify-between lg:justify-center items-center lg:items-end w-[48%] lg:w-32 xl:w-40 order-3 lg:order-3 shrink-0 ml-auto lg:ml-0">
                 <div className="flex flex-col items-start lg:items-end">
                   <div className="text-[8px] sm:text-[9px] font-mono text-zinc-800 font-bold leading-tight mb-0.5">UNIT: BK-INT-X9</div>
                   <div className="text-[6px] sm:text-[7px] font-mono text-zinc-500">FW: BIT.SINDRI.v6</div>
                 </div>
                 <Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-400 hidden sm:block" />
              </div>
            </div>

            {/* ROW 2: MAIN 3-PANEL DASHBOARD */}
            <div className="w-full flex-grow grid grid-cols-2 lg:grid-cols-12 gap-2 sm:gap-3 h-auto z-20 min-h-0">
              
              {/* CENTER PANEL (Screen) */}
              <div className="col-span-2 lg:col-span-6 order-1 lg:order-2 bg-white border border-zinc-200 rounded-sm p-1.5 sm:p-2 shadow-sm flex flex-col h-[200px] sm:h-auto lg:h-full relative min-h-0">
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-30 flex items-center gap-2 bg-white/80 px-2 py-1 rounded border border-zinc-200 backdrop-blur-sm shadow-sm">
                  <span className="font-mono text-[6px] sm:text-[8px] text-zinc-600 font-bold tracking-widest">TELEMETRY_FEED</span>
                  <div className={`w-1.5 h-1.5 rounded-full ${isStable ? 'bg-cyan-500 shadow-[0_0_5px_rgba(34,211,238,0.5)]' : 'bg-amber-400 animate-pulse'}`}></div>
                </div>
                
                <div className="flex-grow bg-zinc-900 border-[3px] border-zinc-300 rounded-md shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] relative overflow-hidden flex items-center justify-center min-h-0">
                  <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:10px_10px] sm:bg-[size:20px_20px] pointer-events-none z-10 mix-blend-screen"></div>

                  <div className="relative w-full h-full bg-zinc-900 overflow-hidden">
                    <Image 
                      src="/profile.jpg" 
                      alt="Bipin Kumar, Electrical Engineer and Founder of VyaparLens" 
                      fill
                      priority
                      className={`object-cover object-center transition-all duration-700 ease-in-out
                        ${isStable ? 'opacity-100 grayscale-0 brightness-110 blur-0' : 'opacity-40 grayscale brightness-75 blur-[2px]'}
                      `}
                    />

                    {/* Signal Trace */}
                    <div className="absolute bottom-2 left-2 right-2 h-[25%] sm:h-1/4 z-20 overflow-hidden flex items-end">
                      <svg viewBox="0 0 400 40" className="w-full h-full" preserveAspectRatio="none">
                        {isStable ? (
                          <g>
                            <animateTransform attributeName="transform" type="translate" from="0 0" to="-100 0" dur="2s" repeatCount="indefinite" />
                            <path d="M 0 20 Q 25 0, 50 20 T 100 20 T 150 20 T 200 20 T 250 20 T 300 20 T 350 20 T 400 20 T 450 20 T 500 20" className="fill-none stroke-[2px] stroke-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]" />
                          </g>
                        ) : (
                          <g>
                            <animateTransform attributeName="transform" type="translate" from="0 0" to="-100 0" dur="0.5s" repeatCount="indefinite" />
                            <path d="M 0 20 Q 12.5 -5, 25 20 T 50 20 T 75 20 T 100 20 T 125 20 T 150 20 T 175 20 T 200 20 T 225 20 T 250 20 T 275 20 T 300 20 T 325 20 T 350 20 T 375 20 T 400 20 T 425 20 T 450 20 T 475 20 T 500 20" className="fill-none stroke-[1.5] stroke-amber-400 opacity-80 drop-shadow-[0_0_4px_rgba(251,191,36,0.8)]" />
                          </g>
                        )}
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Knobs */}
                <div className="h-5 sm:h-8 shrink-0 flex justify-center items-center gap-6 sm:gap-10 pt-1.5 sm:pt-2">
                   <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-zinc-200 border border-zinc-300 shadow-sm relative">
                         <div className={`absolute top-0.5 left-1/2 -translate-x-1/2 w-0.5 h-1 rounded-sm transition-colors duration-500 ${isStable ? 'bg-emerald-500' : 'bg-zinc-400'}`}></div>
                      </div>
                      <span className="text-[6px] sm:text-[7px] font-mono text-zinc-500">CH_1</span>
                   </div>
                   <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-zinc-200 border border-zinc-300 shadow-sm relative transition-transform duration-300 ${isStable ? 'rotate-0' : 'animate-[spin_1s_linear_infinite]'}`}>
                         <div className={`absolute top-0.5 left-1/2 -translate-x-1/2 w-0.5 h-1 rounded-sm transition-colors duration-300 ${isStable ? 'bg-cyan-500' : 'bg-amber-400'}`}></div>
                      </div>
                      <span className="text-[6px] sm:text-[7px] font-mono text-zinc-500">SYNC</span>
                   </div>
                </div>
              </div>

              {/* LEFT PANEL (Terminal) */}
              <div className="col-span-1 lg:col-span-3 order-2 lg:order-1 bg-white border border-zinc-200 rounded-sm shadow-sm flex flex-col h-auto lg:h-full overflow-hidden min-h-[160px]">
                <div className="bg-zinc-100 border-b border-zinc-200 px-2 sm:px-3 py-1.5 flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <Terminal className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-600" />
                  <span className="font-mono text-[7px] sm:text-[8px] text-zinc-600 font-bold tracking-widest truncate">SYSTEM_LOG</span>
                </div>
                
                <div className="p-2 sm:p-3 font-mono text-[8px] sm:text-[11px] text-zinc-600 space-y-2 lg:space-y-4 leading-relaxed overflow-y-auto custom-scrollbar flex-grow">
                  <div>
                    <span className="text-emerald-500">{">"}</span> <strong className="text-zinc-900">ID:</strong>
                    <p className="pl-2 mt-0.5">6th-Semester EE Student @ BIT Sindri & Founder of VyaparLens.</p>
                  </div>
                  <div>
                    <span className="text-emerald-500">{">"}</span> <strong className="text-zinc-900">CORE:</strong>
                    <p className="pl-2 mt-0.5">Bridging hardware with scalable software. I leverage AI as a primary development tool to rapidly architect, write, and deploy production-ready applications.</p>
                  </div>
                </div>
              </div>

              {/* RIGHT PANEL (Specs) */}
              <div className="col-span-1 lg:col-span-3 order-3 lg:order-3 flex flex-col gap-2 sm:gap-3 h-auto lg:h-full overflow-hidden min-h-[160px]">
                <div className="flex-grow bg-white border border-zinc-200 rounded-sm p-1.5 sm:p-3 shadow-sm flex flex-col min-h-0">
                  <div className="flex items-center gap-1.5 sm:gap-2 border-b border-zinc-200 pb-1.5 mb-1.5 sm:mb-2 shrink-0">
                    <Activity className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-600 block" />
                    <h3 className="font-mono text-[7px] sm:text-[8px] font-bold text-zinc-800 tracking-widest truncate">SPECS</h3>
                  </div>
                  
                  <div className="flex flex-col gap-1.5 sm:gap-2 flex-grow justify-around overflow-y-auto custom-scrollbar pr-1">
                    <div className="flex flex-col border-b border-zinc-100 pb-0.5 sm:pb-1">
                      <span className="font-mono text-[6px] sm:text-[8px] text-zinc-400 mb-[1px]">ROLE</span>
                      <span className="font-mono text-[7px] sm:text-[10px] text-zinc-700 font-bold tracking-wide">ELECTRICAL_ENG</span>
                    </div>
                    <div className="flex flex-col border-b border-zinc-100 pb-0.5 sm:pb-1">
                      <span className="font-mono text-[6px] sm:text-[8px] text-zinc-400 mb-[1px]">FOCUS</span>
                      <span className="font-mono text-[7px] sm:text-[10px] text-cyan-600 font-bold tracking-wide">IoT & STARTUPS</span>
                    </div>
                    <div className="flex flex-col border-b border-zinc-100 pb-0.5 sm:pb-1 flex">
                      <span className="font-mono text-[6px] sm:text-[8px] text-zinc-400 mb-[1px]">DEV_APPROACH</span>
                      <span className="font-mono text-[7px] sm:text-[10px] text-amber-500 font-bold tracking-wide">AI_ASSISTED</span>
                    </div>
                    <div className="flex items-center justify-between mt-0.5 sm:mt-1">
                      <span className="font-mono text-[6px] sm:text-[8px] text-zinc-400">NET_I/O</span>
                      <span className="font-mono text-[7px] sm:text-[10px] font-bold flex items-center gap-1 sm:gap-1.5">
                        <Wifi className={`w-2 h-2 sm:w-3 sm:h-3 ${isStable ? 'text-emerald-500' : 'text-amber-500 animate-pulse'}`} /> 
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Ports */}
                <div className="flex flex-col gap-1.5 shrink-0">
                  <Link href="#projects" className="flex items-center justify-center gap-1.5 bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-[7px] sm:text-[10px] font-bold px-2 sm:px-3 py-1.5 sm:py-2 rounded-sm transition-all duration-300 shadow-md">
                    <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> VIEW_PROJECTS
                  </Link>
                  <Link href="/resume.pdf" target="_blank" className="flex items-center justify-center gap-1.5 bg-white border border-zinc-300 hover:bg-zinc-50 text-zinc-600 font-mono text-[7px] sm:text-[10px] font-bold px-2 sm:px-3 py-1.5 sm:py-2 rounded-sm transition-all duration-300 shadow-sm">
                    <Database className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> DOWNLOAD_RESUME
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom DIN Rail Mount */}
        <div aria-hidden="true" className="w-[60%] mx-auto h-4 sm:h-5 bg-zinc-300 border-x-4 border-b-4 border-zinc-400 rounded-b-md relative flex items-center justify-center shadow-sm shrink-0 z-0">
          <div className="absolute inset-x-0 h-1.5 sm:h-2 bg-zinc-200 top-1/2 -translate-y-1/2 border-y border-zinc-300 shadow-inner"></div>
          <div className="px-2 sm:px-3 py-0.5 bg-white border border-zinc-300 text-[5px] sm:text-[7px] font-mono text-zinc-500 z-10 rounded-sm shadow-sm flex truncate max-w-[90%]">MOUNTING_RAIL: DIN_EN_50022</div>
        </div>

        {/* MOBILE POWER ASSEMBLY (Hidden on Desktop) */}
        <div className="flex sm:hidden flex-col items-center mt-[-4px] relative z-[-1] shrink-0">
           <svg width="20" height="35" viewBox="0 0 20 35" className="opacity-90 -mb-[6px]">
              <path d="M 10 0 L 10 35" fill="none" stroke="#27272a" strokeWidth="6" />
              <path d="M 10 0 L 10 35" fill="none" stroke="#52525b" strokeWidth="2" />
           </svg>
           
           <div className="w-8 h-6 bg-zinc-300 border-2 border-zinc-400 border-b-0 rounded-t-md flex flex-col items-center justify-start pt-[3px] shadow-md relative z-10 translate-y-[4px]">
              <div className="w-4 h-[1px] bg-zinc-500 mb-[2px]"></div>
              <div className="w-4 h-[1px] bg-zinc-500 mb-[2px]"></div>
              <div className="w-4 h-[1px] bg-zinc-500"></div>
           </div>
           
           <div className="w-16 h-16 bg-zinc-100 border-2 border-zinc-300 rounded-md shadow-inner flex flex-col items-center justify-center relative z-20">
              <div className="flex flex-col items-center justify-center mb-1">
                 <span className="font-mono text-[16px] font-black text-zinc-400 leading-none">DC</span>
                 <span className="font-mono text-[7px] font-bold text-zinc-500 mt-0.5 tracking-wider">24V 5A</span>
              </div>
              <div className="absolute bottom-1.5 flex items-center gap-1">
                <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isStable ? 'bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]' : 'bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)] animate-pulse'}`}></div>
                <span className={`text-[5px] font-mono font-bold ${isStable ? 'text-zinc-500' : 'text-red-500'}`}>
                   {isStable ? '24V' : 'BOOT'}
                </span>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}