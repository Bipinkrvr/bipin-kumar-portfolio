"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck } from "lucide-react";

function LogicGateCard({ 
  title, 
  subtitle,
  description, 
  tags 
}: { 
  title: string, 
  subtitle: string,
  description: string, 
  tags: string[]
}) {
  // Advanced state logic for multi-modal interactions
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  // The circuit conducts if hovered, touched (scrolling), or explicitly toggled (tapped)
  const isActive = isHovered || isTouched || isToggled;

  return (
    <div 
      className="relative w-full flex flex-col cursor-pointer sm:cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setIsTouched(false)}
      onTouchCancel={() => setIsTouched(false)}
      onClick={() => setIsToggled(!isToggled)} // Tap to permanently toggle
    >
      <Card className={`bg-white border-2 transition-all duration-500 rounded-xl overflow-visible flex flex-col h-full ${isActive ? 'border-emerald-400 shadow-[0_10px_30px_rgba(16,185,129,0.15)]' : 'border-zinc-200 shadow-sm'}`}>
        
        {/* Logic Gate SVG - Centered on top border and scaled slightly on mobile to prevent overlap */}
        <div className="absolute top-0 right-4 sm:right-6 -translate-y-1/2 bg-white px-2 z-10 flex items-center scale-[0.75] sm:scale-100 origin-center transition-transform">
          <svg width="60" height="30" viewBox="0 0 75 40" className="overflow-visible">
            {/* Input 0/1 Top */}
            <text x="-5" y="15" className={`text-[10px] font-mono transition-all duration-500 ${isActive ? 'opacity-0 fill-cyan-500' : 'opacity-100 fill-zinc-400'}`}>0</text>
            <text x="-5" y="15" className={`text-[10px] font-mono transition-all duration-500 fill-cyan-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>1</text>
            
            {/* Input 0/1 Bottom */}
            <text x="-5" y="31" className={`text-[10px] font-mono transition-all duration-500 ${isActive ? 'opacity-0 fill-cyan-500' : 'opacity-100 fill-zinc-400'}`}>0</text>
            <text x="-5" y="31" className={`text-[10px] font-mono transition-all duration-500 fill-cyan-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>1</text>
            
            {/* Input Wires */}
            <line x1="5" y1="12" x2="20" y2="12" className={`stroke-2 transition-colors duration-500 ${isActive ? 'stroke-cyan-400' : 'stroke-zinc-300'}`} />
            <line x1="5" y1="28" x2="20" y2="28" className={`stroke-2 transition-colors duration-500 ${isActive ? 'stroke-cyan-400' : 'stroke-zinc-300'}`} />
            
            {/* AND Gate Body */}
            <path d="M 20 4 L 30 4 Q 48 4 48 20 Q 48 36 30 36 L 20 36 Z" className={`stroke-2 transition-all duration-500 ${isActive ? 'stroke-emerald-500 fill-emerald-100' : 'stroke-zinc-400 fill-zinc-50'}`} />
            
            {/* Output Wire */}
            <line x1="48" y1="20" x2="65" y2="20" className={`stroke-2 transition-colors duration-500 ${isActive ? 'stroke-emerald-400' : 'stroke-zinc-300'}`} />
            
            {/* Output Q Text */}
            <text x="70" y="23" className={`text-[12px] font-mono font-bold transition-colors duration-500 ${isActive ? 'fill-emerald-500' : 'fill-zinc-400'}`}>Q</text>
          </svg>
        </div>

        <CardHeader className="pt-6 sm:pt-8 pb-2 px-5 sm:px-6 shrink-0">
          <div className="font-mono text-[9px] sm:text-[10px] text-emerald-600 tracking-widest mb-1">{subtitle}</div>
          <CardTitle className={`text-base sm:text-lg font-mono transition-colors duration-300 uppercase leading-tight ${isActive ? 'text-emerald-600' : 'text-zinc-800'}`}>
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex flex-col flex-grow gap-3 pb-5 px-5 sm:px-6">
          <p className="text-[11px] sm:text-sm font-mono text-zinc-600 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-zinc-100 shrink-0">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className={`bg-zinc-50 border font-mono text-[9px] sm:text-[10px] px-1.5 py-0 transition-colors ${isActive ? 'border-emerald-300 text-emerald-700' : 'border-zinc-200 text-zinc-600'}`}>
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function AchievementsSection() {
  const achievements = [
    {
      title: "Front-End Architecture",
      subtitle: "// GLYNAC WMS INTERNSHIP",
      description: "Successfully integrated high-performance React 19 & Next.js 15 dashboards. Calibrated analytics telemetry using Recharts.",
      tags: ["React 19", "Next.js 15", "Recharts"]
    },
    {
      title: "Startup Initiative",
      subtitle: "// VYAPARLENS FOUNDER",
      description: "Engineered a Flutter-based mobile app utilizing custom Server-Driven UI (JSON). Implemented on-device AI for dynamic rendering.",
      tags: ["Flutter", "Server-Driven UI", "AI"]
    },
    {
      title: "Hardware Upcycling",
      subtitle: "// IOT SENSOR HUB",
      description: "Repurposed abandoned mobile hardware via Termux and Ubuntu environments to stream real-time sensor telemetry to a UI.",
      tags: ["Termux", "Ubuntu", "Plotly.js"]
    },
    {
      title: "Core Engineering",
      subtitle: "// BIT SINDRI ACADEMICS",
      description: "Mastered electrical paradigms including Power Electronics, Synchronous Machines, and ZPF methods. Bridging high-voltage and software.",
      tags: ["Power Electronics", "ZPF Methods", "AC/DC Logic"]
    }
  ];

  return (
    // Cleaned up section padding, removed min-h-screen logic that causes scroll jerks
    <section id="achievements" className="relative w-full flex flex-col justify-center px-4 sm:px-8 py-8 sm:py-16 bg-transparent overflow-visible">
      <div className="max-w-6xl mx-auto w-full flex flex-col">
        
        <div className="flex items-center gap-3 mb-8 border-b border-zinc-200 pb-4 shrink-0 w-full">
          <ShieldCheck className="w-6 h-6 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-mono font-bold text-zinc-800 tracking-wider">
            [CAPABILITY_LOG]
          </h2>
        </div>

        {/* Increased gap-y-8 on mobile to ensure logic gates don't overlap upper cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 sm:gap-y-8 w-full">
          {achievements.map((item, index) => (
            <LogicGateCard 
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              tags={item.tags}
            />
          ))}
        </div>

      </div>
    </section>
  );
}