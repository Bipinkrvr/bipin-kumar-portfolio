"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Cpu, Download, Network } from "lucide-react";

// Helper to generate silver IC pins
const renderPins = (count: number, position: "top" | "bottom") => (
  <div className={`absolute left-2 right-2 flex justify-between px-2 ${position === "top" ? "-top-[6px]" : "-bottom-[6px]"}`}>
    {[...Array(count)].map((_, i) => (
      <div key={i} className="w-1.5 h-2 bg-gradient-to-b from-zinc-300 to-zinc-500 border border-zinc-600 rounded-sm shadow-sm"></div>
    ))}
  </div>
);

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false); 
    
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const navOffset = 60;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // 1 & 2. Simplified Nav Links & Added Internship
  const navLinks = [
    { name: "HOME", href: "#hero" },
    { name: "EXPERIENCE", href: "#experience" }, 
    { name: "INTERNSHIPS", href: "#internships" }, 
    { name: "PROJECTS", href: "#projects" },
    { name: "SKILLS", href: "#skills" },   
    { name: "EDUCATION", href: "#education" }, 
    { name: "ACHIEVEMENTS", href: "#achievements" },
    { name: "CONTACT", href: "#contact" }, 
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 border-b-8 border-zinc-400 bg-[#f4f4ec] shadow-inner ${
          isScrolled || mobileMenuOpen ? "shadow-[0_10px_30px_rgba(0,0,0,0.15)] py-2" : "py-3"
        }`}
      >
        {/* --- Breadboard Grid & Rails --- */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_center,#52525b_1.5px,transparent_1.5px)] bg-[size:14px_14px]"></div>
        <div className="absolute top-1.5 left-0 w-full h-[2px] bg-red-500/70 z-0"></div>
        <div className="absolute bottom-1.5 left-0 w-full h-[2px] bg-blue-500/70 z-0"></div>

        {/* --- NavBar Jumper Wires --- */}
        <svg className="absolute top-0 left-[20%] w-32 h-16 pointer-events-none z-0 drop-shadow-md hidden md:block" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 10 80 C 10 10, 90 10, 90 80" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
          <circle cx="10" cy="80" r="2.5" fill="#3f3f46" />
          <circle cx="90" cy="80" r="2.5" fill="#3f3f46" />
        </svg>
        <svg className="absolute top-0 right-[35%] w-24 h-14 pointer-events-none z-0 drop-shadow-md hidden lg:block" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 10 80 C 10 20, 90 20, 90 80" fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
          <circle cx="10" cy="80" r="2.5" fill="#3f3f46" />
          <circle cx="90" cy="80" r="2.5" fill="#3f3f46" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24">
          <div className="flex items-center justify-between relative z-10">
            
            {/* 3. Updated Branding for Left Module */}
            <Link 
              href="#hero" 
              onClick={(e) => scrollToSection(e, "#hero")} 
              className="flex items-center gap-2 bg-zinc-900 p-1.5 border-2 border-zinc-700 shadow-[0_4px_10px_rgba(0,0,0,0.3)] rounded-sm shrink-0 group hover:border-emerald-500 transition-colors relative z-10"
            >
              {renderPins(3, "top")}
              {renderPins(3, "bottom")}
              
              <div className="relative flex items-center justify-center w-6 h-6 bg-zinc-950 border border-zinc-800 rounded-sm shrink-0">
                <Cpu className="w-3.5 h-3.5 text-emerald-500" />
                <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
              </div>
              <div className="flex flex-col pr-2">
                <span className="font-mono text-[9px] sm:text-[10px] font-black text-zinc-300 tracking-widest leading-none group-hover:text-white transition-colors">BIPIN KUMAR</span>
                <span className="font-mono text-[6px] sm:text-[7px] text-zinc-500 tracking-[0.1em] mt-0.5 leading-none">EE @ BIT SINDRI</span>
              </div>
            </Link>

            <div className="flex items-center gap-4 relative z-10">
              
              {/* Desktop Nav Links: Long IC Chip */}
              <div className="hidden lg:flex items-center gap-0.5 bg-zinc-900 p-1.5 border-2 border-zinc-700 shadow-[0_4px_10px_rgba(0,0,0,0.3)] rounded-sm relative">
                {renderPins(8, "top")}
                {renderPins(8, "bottom")}
                
                <div className="px-2 border-r border-zinc-700 mr-1 flex items-center shrink-0">
                  <Network className="w-3.5 h-3.5 text-zinc-500" />
                </div>
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={(e) => scrollToSection(e, link.href)} 
                    className="px-2 py-1 font-mono text-[8px] xl:text-[9px] text-zinc-400 font-bold tracking-widest rounded-sm hover:bg-zinc-800 hover:text-emerald-400 transition-colors uppercase relative z-10"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Resume Button: IC Chip */}
              <a 
                href="/resume.pdf" 
                target="_blank" 
                className="flex items-center gap-1.5 bg-zinc-900 px-3 py-2 border-2 border-zinc-700 rounded-sm shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:border-cyan-500 transition-colors group shrink-0 relative"
              >
                {renderPins(2, "top")}
                {renderPins(2, "bottom")}
                <Download className="w-3.5 h-3.5 text-cyan-500 group-hover:-translate-y-0.5 transition-transform" />
                <span className="font-mono text-[8px] sm:text-[9px] text-zinc-300 group-hover:text-white font-bold tracking-widest">
                  RESUME
                </span>
              </a>

              {/* Mobile Menu Toggle Button: IC Chip */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(prev => !prev)}
                className="lg:hidden w-10 h-10 flex items-center justify-center bg-zinc-900 border-2 border-zinc-700 rounded-sm text-zinc-400 shadow-[0_4px_10px_rgba(0,0,0,0.3)] active:bg-zinc-800 relative"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {renderPins(2, "top")}
                {renderPins(2, "bottom")}
                {mobileMenuOpen ? <X className="w-5 h-5 text-red-500" /> : <Menu className="w-5 h-5 text-emerald-500" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MOBILE OVERLAY BREADBOARD --- */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed top-0 left-0 w-screen h-[100dvh] bg-[#f4f4ec] border-x-8 border-zinc-300 z-[9998] pt-[85px] pb-6 px-6 overflow-y-auto block shadow-inner"
          style={{ overscrollBehavior: 'contain' }}
        >
          {/* Vertical Power Rails */}
          <div className="absolute top-0 bottom-0 left-3 w-[2px] bg-red-500/70 z-0 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-3 w-[2px] bg-blue-500/70 z-0 pointer-events-none"></div>
          
          {/* Grid */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_center,#52525b_1.5px,transparent_1.5px)] bg-[size:14px_14px]"></div>

          {/* Jumper Wire on Mobile */}
          <svg className="absolute top-[100px] right-2 w-16 h-32 pointer-events-none z-0 drop-shadow-md" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 80 10 C 10 10, 10 90, 80 90" fill="none" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
            <circle cx="80" cy="10" r="3.5" fill="#3f3f46" />
            <circle cx="80" cy="90" r="3.5" fill="#3f3f46" />
          </svg>

          <div className="flex flex-col gap-5 h-full relative z-10 w-full max-w-sm mx-auto">
            
            {/* 4. Simplified Mobile Menu Header */}
            <div className="bg-zinc-900 border-2 border-zinc-700 px-3 py-2 rounded-sm shadow-[0_4px_10px_rgba(0,0,0,0.3)] relative w-max mx-auto">
              {renderPins(2, "top")}
              {renderPins(2, "bottom")}
              <div className="font-mono text-[9px] text-zinc-400 tracking-widest flex items-center justify-center gap-2">
                <Network className="w-3.5 h-3.5 text-emerald-500" /> NAVIGATION
              </div>
            </div>
            
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => scrollToSection(e as any, link.href)}
                className="relative flex items-center justify-between px-5 py-4 w-full bg-zinc-900 border-2 border-zinc-700 rounded-sm shadow-[0_5px_15px_rgba(0,0,0,0.4)] group active:border-emerald-500 transition-colors"
              >
                {/* Side Pins for mobile breadboard */}
                <div className="absolute -left-[6px] top-2 bottom-2 flex flex-col justify-between py-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2 h-1.5 bg-gradient-to-r from-zinc-400 to-zinc-300 border border-zinc-500 rounded-sm"></div>
                  ))}
                </div>
                <div className="absolute -right-[6px] top-2 bottom-2 flex flex-col justify-between py-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2 h-1.5 bg-gradient-to-l from-zinc-400 to-zinc-300 border border-zinc-500 rounded-sm"></div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-zinc-700 group-active:bg-emerald-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] transition-colors"></div>
                  <span className="font-mono text-sm text-zinc-300 font-bold tracking-wider group-active:text-white transition-colors">{link.name}</span>
                </div>
                <span className="font-mono text-[8px] text-zinc-600">0{navLinks.indexOf(link) + 1}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}