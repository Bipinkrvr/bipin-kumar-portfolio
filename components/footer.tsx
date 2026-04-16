"use client"

import { Github, Linkedin, Twitter, Mail, Network, Terminal, Activity } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialPorts = [
    { name: "GITHUB", label: "GH", icon: Github, link: "https://github.com/bipin-kumar", color: "hover:text-emerald-400 hover:border-emerald-500 text-zinc-400 border-zinc-600" },
    { name: "LINKEDIN", label: "IN", icon: Linkedin, link: "https://linkedin.com/in/bipin-kumar", color: "hover:text-cyan-400 hover:border-cyan-500 text-zinc-400 border-zinc-600" },
    { name: "TWITTER", label: "X", icon: Twitter, link: "https://twitter.com/bipin-kumar", color: "hover:text-white hover:border-white text-zinc-400 border-zinc-600" },
    { name: "MAIL", label: "SMTP", icon: Mail, link: "mailto:your.email@example.com", color: "hover:text-amber-400 hover:border-amber-500 text-zinc-400 border-zinc-600" },
  ];

  // Helper to generate the silver IC pins
  const renderPins = (count: number, position: "top" | "bottom") => (
    <div className={`absolute left-3 right-3 flex justify-between px-1 ${position === "top" ? "-top-[10px]" : "-bottom-[10px]"}`}>
      {[...Array(count)].map((_, i) => (
        <div key={i} className="w-[3px] h-[10px] bg-gradient-to-b from-zinc-300 to-zinc-500 border-x border-zinc-600 shadow-sm z-0"></div>
      ))}
    </div>
  );

  return (
    // Outer Breadboard Container
    <footer className="w-full relative mt-8 bg-[#f4f4ec] border-y-8 border-zinc-400 overflow-hidden flex flex-col py-16 px-4 sm:px-8 shadow-inner z-0">
      
      {/* ========================================= */}
      {/* 1. BREADBOARD GRID & POWER RAILS          */}
      {/* ========================================= */}
      
      {/* 16px Grid Tie Points */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.35] bg-[radial-gradient(circle_at_center,#52525b_1.5px,transparent_1.5px)] bg-[size:16px_16px]"></div>
      
      {/* Top Power Rails (16px and 32px from top) */}
      <div className="absolute top-[16px] left-0 w-full h-[3px] bg-red-500/80 z-0 shadow-[0_1px_2px_rgba(239,68,68,0.3)]"></div>
      <div className="absolute top-[32px] left-0 w-full h-[3px] bg-blue-500/80 z-0 shadow-[0_1px_2px_rgba(59,130,246,0.3)]"></div>
      
      {/* Bottom Power Rails (32px and 16px from bottom) */}
      <div className="absolute bottom-[32px] left-0 w-full h-[3px] bg-blue-500/80 z-0 shadow-[0_1px_2px_rgba(59,130,246,0.3)]"></div>
      <div className="absolute bottom-[16px] left-0 w-full h-[3px] bg-red-500/80 z-0 shadow-[0_1px_2px_rgba(239,68,68,0.3)]"></div>

      {/* ========================================= */}
      {/* 2. DATA BUS JUMPER WIRES                  */}
      {/* ========================================= */}
      <div className="absolute inset-0 max-w-6xl mx-auto pointer-events-none z-10 hidden lg:block">
        <div className="absolute top-[40px] left-[18%] right-[55%] h-[24px] border-t-[3px] border-x-[3px] border-emerald-500 rounded-t-sm shadow-sm"></div>
        <div className="absolute top-[48px] left-[20%] right-[53%] h-[16px] border-t-[3px] border-x-[3px] border-amber-500 rounded-t-sm shadow-sm"></div>
        <div className="absolute bottom-[40px] left-[55%] right-[20%] h-[24px] border-b-[3px] border-x-[3px] border-cyan-500 rounded-b-sm shadow-sm"></div>
        <div className="absolute bottom-[48px] left-[53%] right-[22%] h-[16px] border-b-[3px] border-x-[3px] border-orange-500 rounded-b-sm shadow-sm"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-20 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-6">
        
        {/* ========================================= */}
        {/* IC CHIP 1: IDENTIFICATION                 */}
        {/* ========================================= */}
        <div className="relative bg-zinc-900 border-2 border-zinc-700 rounded-sm shadow-[0_5px_15px_rgba(0,0,0,0.5)] p-4 w-full max-w-[240px] flex flex-col items-center md:items-start group shrink-0 z-20">
          
          {/* Vertical Power Jumpers */}
          <div className="absolute -top-[48px] left-[15%] w-[3px] h-[48px] bg-red-500 shadow-sm z-[-1]"></div>
          <div className="absolute -top-[32px] right-[25%] w-[3px] h-[32px] bg-blue-500 shadow-sm z-[-1]"></div>

          {/* MOBILE ONLY: Vertical Data Buses bridging the 48px gap to Chip 2 */}
          <div className="absolute -bottom-[48px] left-[20%] w-[3px] h-[48px] bg-emerald-500 shadow-sm z-[-1] lg:hidden"></div>
          <div className="absolute -bottom-[48px] right-[20%] w-[3px] h-[48px] bg-amber-500 shadow-sm z-[-1] lg:hidden"></div>

          {renderPins(5, "top")}
          {renderPins(5, "bottom")}
          
          <div className="flex items-center gap-2 border-b border-zinc-700 pb-2 w-full justify-center md:justify-start">
            <Terminal className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
            <span className="font-mono text-[10px] font-bold text-zinc-400 tracking-widest">SYS_IDENT</span>
          </div>
          
          <div className="flex items-end gap-4 mt-2">
            <div className="flex flex-col font-mono">
              <span className="text-[9px] text-zinc-500">ENGINEER</span>
              <span className="text-sm font-black text-zinc-200 tracking-wider">BIPIN KUMAR</span>
            </div>
            <div className="flex h-6 gap-[1.5px] opacity-60 bg-zinc-300 p-0.5 rounded-sm">
              {[2,1,3,1,1,4,1,2].map((w, i) => (
                <div key={i} className="bg-zinc-900 h-full" style={{ width: `${w * 1.5}px` }}></div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* IC CHIP 2: I/O INTERFACES                 */}
        {/* ========================================= */}
        <div className="relative bg-zinc-900 border-2 border-zinc-700 rounded-sm shadow-[0_5px_15px_rgba(0,0,0,0.5)] p-4 w-full max-w-[320px] z-20">
          
          {/* MOBILE ONLY: Vertical Data Buses bridging the 48px gap to Chip 3 */}
          <div className="absolute -bottom-[48px] left-[25%] w-[3px] h-[48px] bg-cyan-500 shadow-sm z-[-1] lg:hidden"></div>
          <div className="absolute -bottom-[48px] right-[25%] w-[3px] h-[48px] bg-orange-500 shadow-sm z-[-1] lg:hidden"></div>

          {renderPins(8, "top")}
          {renderPins(8, "bottom")}

          <span className="font-mono text-[10px] text-zinc-400 tracking-widest mb-3 flex items-center justify-center gap-2 border-b border-zinc-700 pb-2">
            <Network className="w-4 h-4 text-zinc-500" /> I/O_INTERFACES
          </span>
          
          <div className="flex justify-center gap-4 relative w-full pt-1">
            <div className="absolute top-1/2 left-2 right-2 h-[1px] bg-zinc-700 -translate-y-1/2 z-0"></div>

            {socialPorts.map((port) => {
              const Icon = port.icon;
              return (
                <a 
                  key={port.label}
                  href={port.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center gap-1.5 group cursor-pointer relative z-10`}
                >
                  <div className={`w-10 h-10 bg-zinc-950 border-2 flex items-center justify-center rounded-sm transition-all duration-300 shadow-inner ${port.color}`}>
                    <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </div>
                  <div className="font-mono text-[8px] bg-zinc-900 px-1 text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    {port.label}
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* ========================================= */}
        {/* DIAGNOSTICS & HARDWARE LED MODULE         */}
        {/* ========================================= */}
        {/* Gap-0 on mobile ensures the zero-width wrapper doesn't break centering. Gap-6 restores spacing on desktop */}
        <div className="flex items-end justify-center w-full lg:w-auto gap-0 lg:gap-6 relative z-20">
          
          {/* IC CHIP 3: DIAGNOSTICS */}
          <div className="relative bg-zinc-900 border-2 border-zinc-700 rounded-sm shadow-[0_5px_15px_rgba(0,0,0,0.5)] p-4 w-full max-w-[200px] flex flex-col items-center lg:items-end group shrink-0">
            
            {/* Bottom Power Jumpers */}
            <div className="absolute -bottom-[32px] left-[15%] w-[3px] h-[32px] bg-blue-500 shadow-sm z-[-1]"></div>
            <div className="absolute -bottom-[48px] right-[25%] w-[3px] h-[48px] bg-red-500 shadow-sm z-[-1]"></div>

            {renderPins(4, "top")}
            {renderPins(4, "bottom")}

            <div className="flex items-center gap-2 border-b border-zinc-700 pb-2 w-full justify-center lg:justify-end mb-2">
              <span className="font-mono text-[10px] font-bold text-zinc-400 tracking-widest">STATUS</span>
            </div>
            
            <div className="bg-zinc-950 px-3 py-1.5 rounded-sm border border-zinc-700 shadow-inner flex items-center gap-2 mb-2 w-full justify-center lg:justify-end">
              <div className="relative flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full z-10"></div>
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full absolute animate-ping opacity-75"></div>
              </div>
              <span className="font-mono text-[10px] text-emerald-400 font-bold tracking-widest">ONLINE</span>
            </div>
            
            <div className="flex items-center gap-2 w-full justify-center lg:justify-end">
              <Activity className="w-3.5 h-3.5 text-cyan-500" />
              <span className="font-mono text-[9px] text-zinc-400 tracking-wider">UPTIME: 99.9%</span>
            </div>
          </div>

          {/* PHYSICAL BREADBOARD LED - ZERO WIDTH WRAPPER FIX */}
          {/* This wrapper takes 0 pixels of width on mobile, meaning it cannot push the Diagnostic Chip off-center! */}
          <div className="relative w-0 lg:w-auto flex items-end mb-[3px] shrink-0 z-10">
            
            {/* LED is placed exactly 24px to the right of the wrapper via absolute positioning on mobile */}
            <div className="absolute left-[24px] bottom-0 lg:static flex flex-col items-center shrink-0">
              
              {/* Control Wire connected directly from Diagnostics Chip to LED */}
              <div className="absolute top-[8px] -left-[24px] w-[24px] h-[3px] bg-emerald-500 shadow-sm z-0"></div>
              
              {/* Ground Wire from LED Cathode down to Bottom Blue Rail */}
              <div className="absolute -bottom-[35px] right-[4px] w-[3px] h-[35px] bg-blue-500 shadow-sm z-0"></div>

              {/* LED Plastic Bulb */}
              <div className="w-6 h-8 bg-emerald-500/90 rounded-t-full border-b-[3px] border-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.8)] relative flex justify-center backdrop-blur-md z-10">
                 {/* Internal Anode/Cathode */}
                 <div className="absolute bottom-1 w-[2px] h-3 bg-emerald-800/60 -ml-[2px]"></div>
                 <div className="absolute bottom-1 w-[3px] h-4 bg-emerald-800/60 ml-[3px]"></div>
                 {/* Light Reflection Curve */}
                 <div className="w-1.5 h-3 bg-white/80 rounded-full mt-1 absolute left-1 animate-pulse"></div>
              </div>
              
              {/* LED Base Ring */}
              <div className="w-7 h-1.5 bg-emerald-700 rounded-sm shadow-md z-10"></div>
              
              {/* LED Metallic Legs plunging into the board */}
              <div className="flex justify-between w-3 h-3 z-0 mt-[1px]">
                <div className="w-[2.5px] h-full bg-gradient-to-b from-zinc-300 to-zinc-500"></div>
                <div className="w-[2.5px] h-full bg-gradient-to-b from-zinc-300 to-zinc-500"></div>
              </div>
              
              {/* Tie Point Holes below the LED */}
              <div className="flex justify-between w-[18px] mt-[1px]">
                <div className="w-2.5 h-2.5 bg-zinc-800 rounded-full shadow-inner"></div>
                <div className="w-2.5 h-2.5 bg-zinc-800 rounded-full shadow-inner"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================= */}
      {/* 3. PLASTIC ENGRAVING (COPYRIGHT)          */}
      {/* ========================================= */}
      <div className="absolute bottom-2 left-0 right-0 w-full flex justify-center z-30 pointer-events-none">
        <p className="font-mono text-[8px] text-zinc-500/90 font-bold tracking-[0.25em] mix-blend-multiply text-center">
          © {currentYear} BIPIN_KUMAR • HARDWARE_ENGINEER
        </p>
      </div>
    </footer>
  )
}