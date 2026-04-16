"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Cpu, Network } from "lucide-react";

// Update your internship data here
const internshipData = [
  {
    id: "SYS_02",
    role: "Vocational Trainee",
    company: "JBVNL",
    timeline: "JUL_2025",
    tech: ["Transformers", "Relay Testing", "Metering"],
    details: [
      "Trained at Transformer Repair Workshop (TRW).",
      "Gained hands-on experience in Metering & Relay Testing.",
      "Completed intensive 4-week core electrical training."
    ],
    theme: "cyan"
  },
  {
    id: "SYS_01",
    role: "VLSI Intern",
    company: "CodTech IT Solutions",
    timeline: "JUN_2024 - JUL_2024",
    tech: ["VLSI Design", "Hardware", "Remote"],
    details: [
      "Completed intensive 4-week remote VLSI program.",
      "Gained hands-on knowledge in VLSI architecture.",
      "Executed and delivered core hardware design tasks."
    ],
    theme: "emerald"
  }
];

function ControlLoopInternship({ data }: { data: typeof internshipData[0] }) {
  const [isActive, setIsActive] = useState(false);
  
  // Theme Variables
  const isCyan = data.theme === "cyan";
  const activeColor = isCyan ? 'cyan' : 'emerald';
  const wireBg = isActive ? (isCyan ? 'bg-cyan-500 shadow-[0_0_8px_#06b6d4]' : 'bg-emerald-500 shadow-[0_0_8px_#10b981]') : 'bg-zinc-300';
  const nodeBorder = isActive ? (isCyan ? 'border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.15)]' : 'border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.15)]') : 'border-zinc-300';
  const textActive = isActive ? (isCyan ? 'text-cyan-600' : 'textemerald-600') : 'text-zinc-400';
  const textNormal = isActive ? 'text-zinc-800' : 'text-zinc-400';
  const takeoffBg = isActive ? (isCyan ? 'bg-cyan-500' : 'bg-emerald-500') : 'bg-zinc-400';
  
  // Arrow Colors (Using CSS borders)
  const arrowRight = isActive ? (isCyan ? 'border-l-cyan-500' : 'border-l-emerald-500') : 'border-l-zinc-400';
  const arrowLeft = isActive ? (isCyan ? 'border-r-cyan-500' : 'border-r-emerald-500') : 'border-r-zinc-400';
  const arrowDown = isActive ? (isCyan ? 'border-t-cyan-500' : 'border-t-emerald-500') : 'border-t-zinc-400';
  const arrowUp = isActive ? (isCyan ? 'border-b-cyan-500' : 'border-b-emerald-500') : 'border-b-zinc-400';

  return (
    <div 
      className="relative w-full py-4 group"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
    >
      {/* ========================================================= */}
      {/* DESKTOP CIRCUIT LAYOUT */}
      {/* ========================================================= */}
      <div className="hidden lg:block relative w-full h-[400px] max-w-5xl mx-auto"> 
        
        {/* --- WIRES LAYER --- */}
        <div className={`absolute top-[25%] left-0 w-full h-[2px] -translate-y-1/2 transition-all duration-500 ${wireBg}`}></div>
        <div className={`absolute top-[25%] left-[15%] w-[2px] h-[50%] -translate-x-1/2 transition-all duration-500 ${wireBg}`}></div>
        <div className={`absolute top-[25%] left-[85%] w-[2px] h-[50%] -translate-x-1/2 transition-all duration-500 ${wireBg}`}></div>
        <div className={`absolute top-[75%] left-[15%] w-[70%] h-[2px] -translate-y-1/2 transition-all duration-500 ${wireBg}`}></div>

        {/* --- SIGNAL ARROWS --- */}
        <div className={`absolute top-[25%] left-[25%] -translate-y-1/2 w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] transition-colors duration-500 ${arrowRight}`}></div>
        <div className={`absolute top-[25%] left-[75%] -translate-y-1/2 w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] transition-colors duration-500 ${arrowRight}`}></div>
        <div className={`absolute top-[25%] right-0 -translate-y-1/2 w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] transition-colors duration-500 ${arrowRight}`}></div>
        <div className={`absolute top-[50%] left-[85%] -translate-x-1/2 w-0 h-0 border-x-[5px] border-x-transparent border-t-[8px] transition-colors duration-500 ${arrowDown}`}></div>
        <div className={`absolute top-[75%] left-[50%] -translate-y-1/2 w-0 h-0 border-y-[5px] border-y-transparent border-r-[8px] transition-colors duration-500 ${arrowLeft}`}></div>
        <div className={`absolute top-[50%] left-[15%] -translate-x-1/2 w-0 h-0 border-x-[5px] border-x-transparent border-b-[8px] transition-colors duration-500 ${arrowUp}`}></div>

        {/* --- NODES LAYER --- */}
        <div className={`absolute top-[25%] left-[2%] -translate-y-[20px] text-[9px] font-mono font-bold transition-colors ${textNormal}`}>
          R(s) In
        </div>

        {/* Summing Junction @ 15% */}
        <div className={`absolute top-[25%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-[3px] bg-white flex items-center justify-center transition-all duration-300 z-10 ${nodeBorder}`}>
          <span className={`text-xl font-light ${textNormal}`}>∑</span>
          <span className={`absolute -bottom-4 text-[12px] font-mono font-bold ${textNormal}`}>-</span>
          <span className={`absolute -left-4 text-[12px] font-mono font-bold ${textNormal}`}>+</span>
        </div>

        <div className={`absolute top-[25%] left-[22%] -translate-y-[20px] text-[9px] font-mono font-bold tracking-widest transition-colors ${textActive}`}>
          E(s) ERROR
        </div>

        {/* Main Plant G(s) @ 50% */}
        <div className={`absolute top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[42%] bg-white border-[3px] rounded-md p-6 transition-all duration-300 z-10 ${nodeBorder} ${isActive ? '-translate-y-[calc(50%+4px)]' : ''}`}>
          <div className="flex justify-between items-start border-b border-zinc-100 pb-3 mb-3">
            <div>
              <span className={`text-[10px] font-mono font-bold mb-1 block transition-colors ${textActive}`}>G(s) FORWARD GAIN</span>
              <h3 className={`text-xl font-mono font-bold transition-colors ${isActive ? 'text-zinc-900' : 'text-zinc-700'}`}>
                {data.role}
              </h3>
              <p className="text-zinc-500 font-mono text-sm mt-1 flex items-center gap-2">
                <Cpu className="w-4 h-4" /> {data.company}
              </p>
            </div>
            <Badge variant="outline" className={`font-mono transition-colors ${isActive ? `border-${activeColor}-300 bg-${activeColor}-50 text-${activeColor}-700` : 'bg-zinc-50 border-zinc-200 text-zinc-500'}`}>
              {data.timeline}
            </Badge>
          </div>
          
          <div className="flex gap-2 flex-wrap pt-1">
            {data.tech.map((t: string) => (
              <Badge key={t} variant="secondary" className={`font-mono text-[10px] transition-colors ${isActive ? `bg-${activeColor}-50 text-${activeColor}-700` : 'bg-zinc-100 text-zinc-500'}`}>
                {t}
              </Badge>
            ))}
          </div>
        </div>

        {/* Takeoff Dot @ 85% */}
        <div className={`absolute top-[25%] left-[85%] -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full transition-colors duration-500 z-10 ${takeoffBg}`}></div>

        <div className={`absolute top-[25%] right-[2%] -translate-y-[20px] text-[9px] font-mono font-bold transition-colors ${textNormal}`}>
          C(s) Out
        </div>

        <div className={`absolute top-[50%] left-[15%] -translate-x-[36px] text-[9px] font-mono font-bold tracking-widest transition-colors ${textActive}`}>
          B(s)
        </div>

        {/* Feedback Blocks H(s) - Centered horizontally */}
        <div className="absolute top-[75%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60%] flex flex-row-reverse justify-between items-center z-10">
          {data.details.map((detail, index) => (
            <div key={index} className={`w-[30%] bg-white border-2 p-5 text-center transition-all duration-300 flex flex-col items-center justify-center min-h-[100px] ${isActive ? `${nodeBorder} -translate-y-1` : 'border-zinc-200'}`}>
              <span className={`text-[9px] font-mono font-bold mb-2 tracking-widest transition-colors ${textActive}`}>H_{index + 1}(s) SENSOR</span>
              <p className="font-mono text-[12px] leading-snug text-zinc-600">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* MOBILE LAYOUT (Wider Boxes + Transparent Signal Labels) */}
      {/* ========================================================= */}
      <div className="lg:hidden relative w-full mt-4 mb-4 py-2 px-0 overflow-visible">
        
        {/* Adjusted margins: ml-76px and mr-64px unlocks 40px MORE horizontal space for the boxes! */}
        <div className="ml-[76px] mr-[64px] mt-[20px] flex flex-col gap-5 relative">
          
          {/* ======================================= */}
          {/* 1. MAIN PLANT G(s) */}
          {/* ======================================= */}
          <div className="relative w-full z-10">
            
            {/* EXTENDED R(s) INPUT LINE (starts at -76px, connects to node at -30px) */}
            <div className={`absolute top-1/2 -translate-y-1/2 -left-[76px] w-[46px] h-[2px] transition-colors duration-500 z-0 ${wireBg}`}></div>
            <div className={`absolute top-1/2 -translate-y-1/2 -left-[46px] w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] transition-colors duration-500 z-10 ${arrowRight}`}></div>

            {/* EXTENDED C(s) OUTPUT LINE (starts from right edge of box to -64px) */}
            <div className={`absolute top-1/2 -translate-y-1/2 -right-[64px] w-[64px] h-[2px] transition-colors duration-500 z-0 ${wireBg}`}></div>
            <div className={`absolute top-1/2 -translate-y-1/2 -right-[64px] w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] transition-colors duration-500 z-10 ${arrowRight}`}></div>

            {/* Internal Left Tap */}
            <div className={`absolute top-1/2 -translate-y-1/2 -left-[30px] w-[30px] h-[2px] transition-colors duration-500 z-0 ${wireBg}`}></div>
            
            {/* Summing Junction Node (∑) - Locked securely at -30px to clear the text space */}
            <div className={`absolute top-1/2 -translate-y-1/2 -left-[30px] -translate-x-1/2 w-7 h-7 rounded-full border-[2px] bg-white flex items-center justify-center transition-all duration-300 z-30 ${nodeBorder}`}>
              <span className={`text-[14px] font-light ${textNormal}`}>∑</span>
            </div>

            {/* Labels - Perfectly spaced, totally transparent backgrounds */}
            <div className={`absolute bottom-[calc(50%+4px)] -left-[60px] -translate-x-1/2 text-[9px] font-mono font-bold transition-colors whitespace-nowrap z-40 ${textNormal}`}>
              R(s) In
            </div>
            <div className={`absolute bottom-[calc(50%+4px)] -left-[10px] -translate-x-1/2 text-[9px] font-mono font-bold transition-colors tracking-widest z-40 ${textActive}`}>
              E(s)
            </div>
            <div className={`absolute bottom-[calc(50%+4px)] -right-[52px] translate-x-1/2 text-[9px] font-mono font-bold transition-colors whitespace-nowrap z-40 ${textNormal}`}>
              C(s) Out
            </div>

            {/* Vertical Buses Extending Downwards */}
            <div className={`absolute top-1/2 bottom-[-20px] -left-[30px] w-[2px] -translate-x-1/2 transition-colors duration-500 z-0 ${wireBg}`}></div>
            
            <div className={`absolute top-1/2 bottom-[-20px] -right-[20px] w-[2px] translate-x-1/2 transition-colors duration-500 z-0 ${wireBg}`}></div>
            <div className={`absolute top-1/2 -translate-y-1/2 -right-[20px] w-2.5 h-2.5 rounded-full translate-x-1/2 transition-colors duration-500 z-20 ${takeoffBg}`}></div>

            <div className={`absolute top-1/2 bottom-[-20px] -right-[40px] w-[2px] translate-x-1/2 transition-colors duration-500 z-0 ${wireBg}`}></div>
            <div className={`absolute top-1/2 -translate-y-1/2 -right-[40px] w-2.5 h-2.5 rounded-full translate-x-1/2 transition-colors duration-500 z-20 ${takeoffBg}`}></div>

            {/* Card Body - WIDER AND BIGGER */}
            <div className={`w-full bg-white border-2 rounded-sm p-5 transition-all duration-300 relative z-10 ${isActive ? nodeBorder : 'border-zinc-200'}`}>
              <span className={`text-[10px] font-mono font-bold mb-1.5 block transition-colors tracking-widest ${textActive}`}>G(s) FORWARD GAIN</span>
              <h3 className={`text-[18px] leading-tight font-mono font-bold transition-colors mb-1.5 ${isActive ? 'text-zinc-900' : 'text-zinc-700'}`}>
                {data.role}
              </h3>
              <p className="text-zinc-500 font-mono text-[13px] mb-3 flex items-center gap-1.5">
                <Cpu className="w-4 h-4" /> {data.company}
              </p>
              <div className="flex gap-1.5 flex-wrap">
                {data.tech.map((t: string) => (
                  <Badge key={t} variant="secondary" className={`font-mono text-[10px] px-2 py-0 transition-colors ${isActive ? `bg-${activeColor}-50 text-${activeColor}-700` : 'bg-zinc-100 text-zinc-500'}`}>
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          {/* ======================================= */}
          {/* 2. FEEDBACK BLOCKS H(s) */}
          {/* ======================================= */}
          {data.details.map((detail, index) => {
            const isLast = index === data.details.length - 1;
            
            return (
            <div key={index} className="relative w-full z-10">
              
              {/* LEFT BUS (Common Return) */}
              <div className={`absolute top-1/2 -translate-y-1/2 -left-[30px] w-[30px] h-[2px] transition-colors duration-500 z-0 ${wireBg}`}></div>
              <div className={`absolute top-0 bottom-1/2 -left-[30px] w-[2px] -translate-x-1/2 transition-colors duration-500 z-0 ${wireBg}`}></div>
              {!isLast && (
                <div className={`absolute top-1/2 bottom-[-20px] -left-[30px] w-[2px] -translate-x-1/2 transition-colors duration-500 z-0 ${wireBg}`}></div>
              )}
              
              {/* B(s) Label cleanly attached to final block, transparent bg */}
              {isLast && (
                <div className={`absolute bottom-[calc(50%+4px)] -left-[14px] -translate-x-1/2 text-[9px] font-mono font-bold transition-colors tracking-widest z-40 ${textActive}`}>
                  B(s)
                </div>
              )}

              {/* === H1 & H2 LOGIC (Inner Bus) === */}
              {(index === 0 || index === 1) && (
                <>
                  <div className={`absolute top-1/2 -translate-y-1/2 -right-[20px] w-[20px] h-[2px] transition-colors duration-500 z-0 ${wireBg}`}></div>
                  <div className={`absolute top-0 bottom-1/2 -right-[20px] w-[2px] translate-x-1/2 transition-colors duration-500 z-0 ${wireBg}`}></div>
                  <div className={`absolute top-1/2 -translate-y-1/2 -right-[20px] w-2.5 h-2.5 rounded-full translate-x-1/2 transition-colors duration-500 z-20 ${takeoffBg}`}></div>
                  
                  {/* H1 passes the inner bus down to H2 */}
                  {index === 0 && data.details.length > 1 && (
                    <div className={`absolute top-1/2 bottom-[-20px] -right-[20px] w-[2px] translate-x-1/2 transition-colors duration-500 z-0 ${wireBg}`}></div>
                  )}

                  {/* Outer Bus cleanly passes straight through H1 and H2 bounds */}
                  {data.details.length > 2 && (
                    <div className={`absolute top-0 bottom-[-20px] -right-[40px] w-[2px] translate-x-1/2 transition-colors duration-500 z-0 ${wireBg}`}></div>
                  )}
                </>
              )}

              {/* === H3 LOGIC (Outer Bus) === */}
              {index >= 2 && (
                <>
                  <div className={`absolute top-1/2 -translate-y-1/2 -right-[40px] w-[40px] h-[2px] transition-colors duration-500 z-0 ${wireBg}`}></div>
                  <div className={`absolute top-0 bottom-1/2 -right-[40px] w-[2px] translate-x-1/2 transition-colors duration-500 z-0 ${wireBg}`}></div>
                  <div className={`absolute top-1/2 -translate-y-1/2 -right-[40px] w-2.5 h-2.5 rounded-full translate-x-1/2 transition-colors duration-500 z-20 ${takeoffBg}`}></div>
                  
                  {/* If more than 3 blocks somehow exist, continue the pass-down */}
                  {!isLast && (
                    <div className={`absolute top-1/2 bottom-[-20px] -right-[40px] w-[2px] translate-x-1/2 transition-colors duration-500 z-0 ${wireBg}`}></div>
                  )}
                </>
              )}

              {/* Box UI - Increased Padding for H(s) */}
              <div className={`w-full bg-white border-2 p-4 transition-colors duration-300 relative z-10 min-h-[70px] flex flex-col justify-center ${isActive ? nodeBorder : 'border-zinc-200'}`}>
                <span className={`absolute left-2 -top-[7px] text-[9px] font-bold bg-white px-1 tracking-widest ${textActive}`}>
                  H_{index + 1}(s) SENSOR
                </span>
                <div className="flex items-start gap-2">
                  <span className={`text-[10px] mt-[2px] transition-colors ${textActive}`}>▶</span>
                  <p className="text-[12px] leading-snug font-mono text-zinc-600">{detail}</p>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function InternshipSection() {
  return (
    <section id="internships" className="w-full flex flex-col justify-center relative py-6 sm:py-12 px-4 sm:px-8 bg-transparent">
      <div className="flex items-center gap-3 mb-4 sm:mb-8 border-b border-zinc-200 pb-3 max-w-6xl mx-auto w-full">
        <Network className="w-6 h-6 text-cyan-600" />
        <h2 className="text-xl sm:text-2xl font-mono font-bold text-zinc-800 tracking-wider">
          [INTERNSHIPS]
        </h2>
      </div>

      <div className="flex flex-col w-full gap-4">
        {internshipData.map((data) => (
          <ControlLoopInternship key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
}