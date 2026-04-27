"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, FileText, Github, Activity, 
  Terminal, ShieldAlert, Cpu, Settings, ChevronLeft, ChevronRight, Linkedin, Maximize,
  Zap, CircuitBoard, PlugZap, ExternalLink
} from "lucide-react";
import { projectsData } from "@/lib/projects-data"; 

const getYouTubeEmbedUrl = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}?rel=0&modestbranding=1`;
  }
  return url;
};

// --- Wires Extended Off-Screen and Heavily Populated Right Side ---
const CleanWireBackground = () => (
  <div className="fixed top-0 left-0 w-full h-[100svh] pointer-events-none z-0 overflow-hidden bg-[#f4f4f5]">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
    {/* VCC / POWER BUS (Amber) */}
    <div className="absolute top-0 left-[8vw] w-[100vw] h-[15svh] border-b-[6px] border-l-[6px] border-amber-500 rounded-bl-[2rem]"></div>
    <div className="absolute top-0 left-[9.5vw] w-[100vw] h-[17svh] border-b-[6px] border-l-[6px] border-amber-500 rounded-bl-[2.2rem]"></div>
    <div className="absolute top-0 left-[11vw] w-[100vw] h-[19svh] border-b-[6px] border-l-[6px] border-amber-500 rounded-bl-[2.4rem]"></div>
    <div className="absolute top-[19svh] left-[11vw] w-4 h-4 rounded-full border-[5px] border-amber-500 bg-[#f4f4f5] shadow-inner translate-x-[-5px] translate-y-[-5px]"></div>
    {/* DATA BUS (Blue) */}
    <div className="absolute top-[30svh] left-0 w-[12vw] h-[80svh] border-t-[6px] border-r-[6px] border-blue-600 rounded-tr-[2rem]"></div>
    <div className="absolute top-[32svh] left-0 w-[13.5vw] h-[80svh] border-t-[6px] border-r-[6px] border-blue-600 rounded-tr-[2.2rem]"></div>
    <div className="absolute top-[34svh] left-0 w-[15vw] h-[80svh] border-t-[6px] border-r-[6px] border-blue-600 rounded-tr-[2.4rem]"></div>
    <div className="absolute top-[36svh] left-0 w-[16.5vw] h-[80svh] border-t-[6px] border-r-[6px] border-blue-600 rounded-tr-[2.6rem]"></div>
    <div className="absolute top-[36svh] left-[16.5vw] w-4 h-4 rounded-full border-[5px] border-blue-600 bg-[#f4f4f5] shadow-inner translate-x-[-5px] translate-y-[-5px]"></div>
    {/* NEUTRAL / GROUND BUS (Zinc) */}
    <div className="absolute bottom-0 right-[-5vw] w-[45vw] h-[40svh] border-t-[6px] border-l-[6px] border-zinc-500 rounded-tl-[2rem]"></div>
    <div className="absolute bottom-0 right-[-5vw] w-[43.5vw] h-[42svh] border-t-[6px] border-l-[6px] border-zinc-500 rounded-tl-[2.2rem]"></div>
    <div className="absolute bottom-0 right-[-5vw] w-[42vw] h-[44svh] border-t-[6px] border-l-[6px] border-zinc-500 rounded-tl-[2.4rem]"></div>
    {/* SENSOR BUS (Emerald) */}
    <div className="absolute top-[-5svh] right-0 w-[15vw] h-[55svh] border-b-[4px] border-l-[4px] border-emerald-500 rounded-bl-[2rem]"></div>
    <div className="absolute top-[-5svh] right-0 w-[13.5vw] h-[53svh] border-b-[4px] border-l-[4px] border-emerald-500 rounded-bl-[1.8rem]"></div>
    <div className="absolute top-[-5svh] right-0 w-[12vw] h-[51svh] border-b-[4px] border-l-[4px] border-emerald-500 rounded-bl-[1.6rem]"></div>
    <div className="absolute top-[-5svh] right-0 w-[10.5vw] h-[49svh] border-b-[4px] border-l-[4px] border-emerald-500 rounded-bl-[1.4rem]"></div>
    <div className="absolute top-[49svh] right-[10.5vw] w-3 h-3 rounded-full border-[4px] border-emerald-500 bg-[#f4f4f5] shadow-inner translate-x-[-3.5px] translate-y-[-3.5px]"></div>
  </div>
);

const MountingHole = ({ className }: { className: string }) => (
  <div className={`absolute w-5 h-5 bg-zinc-200 rounded-full border-2 border-zinc-400 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] z-30 ${className}`}>
    <div className="w-3 h-[2px] bg-zinc-500 rotate-45"></div>
  </div>
);

export default function SCADAProjectPage() {
  const params = useParams();
  const router = useRouter();
  const id = typeof params.id === "string" ? params.id : "";
  
  const project = projectsData.find((p) => p.id === id) || projectsData[0];
  
  const [sysTime, setSysTime] = useState("");
  const [currentMedia, setCurrentMedia] = useState(0);
  const mediaContainerRef = useRef<HTMLDivElement>(null);

const sortedMediaList = useMemo(() => {
    const mediaList: { type: string, url: string }[] = [];
    if (project.details?.media) {
      
      // Tell TypeScript to treat media as 'any' to bypass strict checking
      const mediaObj = project.details.media as any;
      
      // Now it won't throw an error when looking for 'videos'
      const videoLinks = mediaObj.videos || (mediaObj.video ? [mediaObj.video] : []);
      
      videoLinks.forEach((videoUrl: string) => {
         const isYoutube = videoUrl.includes('youtube') || videoUrl.includes('youtu.be');
         const isLinkedin = videoUrl.includes('linkedin.com/embed');
         
         let mediaType = 'video';
         if (isYoutube) mediaType = 'youtube';
         else if (isLinkedin) mediaType = 'linkedin';

         mediaList.push({ type: mediaType, url: videoUrl });
      });

      if (Array.isArray(mediaObj.images)) {
         mediaObj.images.forEach((imgUrl: string) => {
           mediaList.push({ type: 'image', url: imgUrl });
         });
      }
    } else if (Array.isArray((project as any).media)) {
      return [...(project as any).media];
    }
    return mediaList;
  }, [project]);

  useEffect(() => {
    const interval = setInterval(() => {
      const d = new Date();
      setSysTime(`${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')} IST`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const nextMedia = () => setCurrentMedia((prev) => (prev + 1) % Math.max(1, sortedMediaList.length));
  const prevMedia = () => setCurrentMedia((prev) => (prev - 1 + sortedMediaList.length) % Math.max(1, sortedMediaList.length));

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      mediaContainerRef.current?.requestFullscreen().catch(err => console.error(err));
    } else {
      document.exitFullscreen();
    }
  };

  const displayTechStack = project.details?.techStack || project.tags;

  // --- REUSABLE CONNECTIONS BLOCK FOR RESPONSIVE PLACEMENT ---
  const renderExternalConnections = (className: string) => (
    <div className={`bg-zinc-200 border-2 border-zinc-400 p-3 sm:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.1)] ${className}`}>
      <h3 className="text-[10px] sm:text-xs font-black tracking-widest text-zinc-600 mb-3 flex items-center gap-2">
        <PlugZap className="w-3.5 h-3.5" /> EXTERNAL_CONNECTIONS
      </h3>
      
      <div className="flex flex-col gap-3">
        {/* @ts-expect-error fallback */}
        {project.whitePaperLink && (
          <Link 
            /* @ts-expect-error fallback */
            href={project.whitePaperLink} 
            target="_blank"
            className="w-full relative group bg-blue-700 hover:bg-blue-800 border-b-4 border-blue-900 p-4 flex items-center justify-center gap-3 transition-all active:translate-y-1 active:border-b-0 shadow-md rounded-sm"
          >
            <FileText className="w-5 h-5 text-white" />
            <span className="text-xs sm:text-sm font-black tracking-widest text-white">
              EXTRACT TECHNICAL DATASHEET
            </span>
          </Link>
        )}

        <div className="grid grid-cols-2 gap-3">
          {project.github ? (
            <Link 
              href={project.github} 
              target="_blank"
              className="bg-white hover:bg-zinc-50 border-b-4 border-zinc-400 p-3 flex flex-col items-center justify-center gap-1 transition-all active:translate-y-1 active:border-b-0 shadow-sm rounded-sm"
            >
              <Github className="w-5 h-5 text-zinc-800" />
              <span className="text-[10px] font-black tracking-widest text-zinc-700 mt-1">SOURCE.REPO</span>
            </Link>
          ) : (
            <div className="bg-zinc-300 border-b-4 border-zinc-400 p-3 flex flex-col items-center justify-center gap-1 shadow-sm rounded-sm opacity-60 cursor-not-allowed">
               <Github className="w-5 h-5 text-zinc-500" />
               <span className="text-[10px] font-black tracking-widest text-zinc-500 mt-1">N/A</span>
            </div>
          )}

          {project.live ? (
            <Link 
              href={project.live} 
              target="_blank"
              className="bg-white hover:bg-zinc-50 border-b-4 border-zinc-400 p-3 flex flex-col items-center justify-center gap-1 transition-all active:translate-y-1 active:border-b-0 shadow-sm rounded-sm"
            >
              <ExternalLink className="w-5 h-5 text-emerald-600" />
              <span className="text-[10px] font-black tracking-widest text-zinc-700 mt-1">LIVE.DEPL</span>
            </Link>
          ) : project.linkedin ? (
            <Link 
              href={project.linkedin} 
              target="_blank"
              className="bg-white hover:bg-zinc-50 border-b-4 border-zinc-400 p-3 flex flex-col items-center justify-center gap-1 transition-all active:translate-y-1 active:border-b-0 shadow-sm rounded-sm"
            >
              <Linkedin className="w-5 h-5 text-blue-700" />
              <span className="text-[10px] font-black tracking-widest text-zinc-700 mt-1">NET.LINKEDIN</span>
            </Link>
          ) : (
            <div className="bg-zinc-300 border-b-4 border-zinc-400 p-3 flex flex-col items-center justify-center gap-1 shadow-sm rounded-sm opacity-60 cursor-not-allowed">
               <ExternalLink className="w-5 h-5 text-zinc-500" />
               <span className="text-[10px] font-black tracking-widest text-zinc-500 mt-1">N/A</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-[100svh] bg-transparent text-zinc-900 font-mono select-none overflow-x-hidden pb-12 relative">
      
      <CleanWireBackground />

      {/* 1. TOP POWER RAIL */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-4 border-blue-700 flex items-center justify-between px-3 sm:px-6 py-2 shadow-md">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-1 bg-zinc-100 hover:bg-zinc-200 border-2 border-zinc-300 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-black transition-colors text-zinc-700 shadow-sm active:translate-y-px"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" /> <span className="hidden sm:inline">DISCONNECT</span>
          </button>
          <div className="hidden sm:flex items-center gap-2 px-3 border-l-2 border-zinc-300">
            <Zap className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
            <span className="text-[10px] tracking-widest text-zinc-700 font-black">VCC (5V) ONLINE</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-[10px] sm:text-xs tracking-widest font-bold">
          <div className="hidden sm:block text-zinc-500">BUS: {project.id}</div>
          <div className="bg-zinc-900 px-3 py-1 text-emerald-400 font-black shadow-inner border-2 border-zinc-700 flex items-center gap-2">
            <Activity className="w-3 h-3" />
            {sysTime || "SYNCING..."}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 relative z-10">
        
        {/* 2. SCHEMATIC, MEDIA & LINKS (LEFT COLUMN) */}
        <div className="col-span-1 lg:col-span-7 flex flex-col gap-6">
          
          <div className="bg-white border-2 border-zinc-400 p-5 sm:p-7 relative shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
            <div className="absolute top-0 right-12 w-0.5 h-4 bg-blue-600"></div>
            <div className="absolute top-4 right-10 w-4 h-0.5 bg-blue-600"></div>
            <div className="absolute top-3 right-8 w-2.5 h-2.5 rounded-full border-[3px] border-blue-600 bg-white"></div>
            
            <div className="absolute top-0 right-0 bg-blue-50 px-3 py-1 text-[8px] sm:text-[10px] border-b-2 border-l-2 border-blue-200 text-blue-800 font-black flex items-center gap-1">
              <CircuitBoard className="w-3 h-3" /> REV: 1.0.0
            </div>

            <h2 className="text-[10px] sm:text-xs text-blue-700 font-black mb-1 tracking-[0.2em] flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-sm inline-block"></span>
              ENGINEERING DEPLOYMENT
            </h2>
            <h1 className="text-2xl sm:text-4xl font-black text-zinc-900 uppercase tracking-tight mb-2">
              {project.title}
            </h1>
            
            <div className="flex gap-4 text-[10px] sm:text-xs text-zinc-600 mt-5 border-t-2 border-dashed border-zinc-300 pt-3 font-bold">
              <span className="flex items-center gap-1"><Cpu className="w-3.5 h-3.5 text-zinc-400" /> LEAD: BIPIN_KUMAR</span>
              <span className="flex items-center gap-1 px-4 border-l-2 border-zinc-300"><Settings className="w-3.5 h-3.5 text-zinc-400" /> DEPLOYED</span>
            </div>
          </div>

          <div className="bg-zinc-300 p-2 sm:p-3 relative shadow-[0_10px_40px_rgba(0,0,0,0.1)] border-b-4 border-r-4 border-zinc-400">
            <MountingHole className="-top-2 -left-2" />
            <MountingHole className="-top-2 -right-2" />
            <MountingHole className="-bottom-2 -left-2" />
            <MountingHole className="-bottom-2 -right-2" />

            <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 bg-yellow-400 border-2 border-black px-2 py-1 shadow-sm">
                <ShieldAlert className="w-3 h-3 text-black" />
                <span className="text-[8px] sm:text-[10px] tracking-widest text-black font-black">
                  CH_OUT [{sortedMediaList.length > 0 ? currentMedia + 1 : 0}/{sortedMediaList.length}]
                </span>
              </div>
              
              <button 
                onClick={toggleFullScreen}
                className="pointer-events-auto bg-black hover:bg-zinc-800 text-white border-2 border-zinc-600 px-2 py-1 shadow-sm flex items-center gap-1 transition-colors active:scale-95"
              >
                <Maximize className="w-3 h-3 text-blue-400" />
                <span className="text-[8px] sm:text-[10px] font-black tracking-widest hidden sm:inline">MAXIMIZE</span>
              </button>
            </div>

            <div 
              ref={mediaContainerRef}
              className="relative w-full aspect-video overflow-hidden bg-black border-4 border-zinc-800 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] group/fs flex items-center justify-center"
            >
              {sortedMediaList.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-zinc-600 animate-pulse">
                  <Activity className="w-12 h-12 mb-2" />
                  <p className="text-xs font-black tracking-widest">NO SIGNAL / NO MEDIA</p>
                </div>
              ) : (
                sortedMediaList.map((media, idx) => (
                  <div 
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out bg-black ${
                      idx === currentMedia ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    {media.type === "youtube" ? (
                      <iframe 
                        src={getYouTubeEmbedUrl(media.url)}
                        title={`${project.title} YouTube Video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full object-cover"
                      />
                    ) : media.type === "linkedin" ? (
                      <iframe 
                        src={media.url}
                        title={`${project.title} LinkedIn Video`}
                        allowFullScreen
                        className="w-full h-full object-contain"
                      />
                    ) : media.type === "video" ? (
                      <video 
                        src={media.url} 
                        autoPlay 
                        controls
                        muted 
                        loop 
                        playsInline
                        className="w-full h-full object-contain bg-black"
                      />
                    ) : (
                      <img 
                        src={media.url} 
                        alt={`${project.title} media ${idx + 1}`} 
                        className="w-full h-full object-contain bg-zinc-900"
                      />
                    )}
                  </div>
                ))
              )}
            </div>

            {sortedMediaList.length > 1 && (
              <div className="flex justify-between items-center mt-3 z-20 px-2">
                <button onClick={prevMedia} className="bg-zinc-100 hover:bg-white border-2 border-zinc-400 p-1.5 shadow-sm active:translate-y-px">
                  <ChevronLeft className="w-5 h-5 text-zinc-700" />
                </button>
                
                <div className="flex gap-1 items-center px-2 bg-zinc-200 p-1 border-2 border-zinc-400 rounded-sm shadow-inner flex-wrap justify-center">
                  <span className="text-[8px] font-black tracking-widest text-zinc-500 mr-1 sm:mr-2">MUX SEL:</span>
                  {sortedMediaList.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentMedia(idx)}
                      className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-[9px] sm:text-[10px] font-black border-2 transition-all ${
                        idx === currentMedia 
                          ? "bg-amber-400 text-black border-amber-600 shadow-sm" 
                          : "bg-zinc-100 text-zinc-400 border-zinc-300 hover:bg-zinc-50"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>

                <button onClick={nextMedia} className="bg-zinc-100 hover:bg-white border-2 border-zinc-400 p-1.5 shadow-sm active:translate-y-px">
                  <ChevronRight className="w-5 h-5 text-zinc-700" />
                </button>
              </div>
            )}
          </div>

          {/* HIDDEN ON MOBILE: Renders here on Desktop for Symmetry */}
          {renderExternalConnections("hidden lg:block")}
          
        </div>

        {/* 3. LOGIC & TERMINALS (RIGHT COLUMN) */}
        <div className="col-span-1 lg:col-span-5 flex flex-col gap-6">
          
          {/* --- SCROLL-FREE STRUCTURED ABSTRACT SECTION --- */}
          <div className="bg-white border-2 border-zinc-400 flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.05)] relative overflow-hidden">
             <div className="h-8 w-full bg-[repeating-linear-gradient(45deg,#facc15,#facc15_10px,#000_10px,#000_20px)] border-b-2 border-zinc-400 flex items-center justify-center shrink-0">
                <span className="bg-black px-2 text-[10px] font-black text-yellow-400 tracking-widest">SYSTEM_ABSTRACT & LOGIC</span>
             </div>
             
             <div className="p-4 sm:p-5 flex flex-col gap-5">
                
                {/* 1. Problem Statement (Red Accent) */}
                {(project.details?.problem || project.description) && (
                  <div className="relative pl-4 border-l-2 border-rose-400">
                     <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-rose-500"></span>
                     <h4 className="text-[10px] font-black text-rose-600 mb-1.5 tracking-widest">THE_PROBLEM</h4>
                     <p className="text-sm text-zinc-800 leading-relaxed font-sans font-medium">
                        {project.details?.problem || project.description}
                     </p>
                  </div>
                )}

                {/* 2. Solution (Blue Accent) */}
                {project.details?.solution && (
                  <div className="relative pl-4 border-l-2 border-blue-400">
                     <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-blue-500"></span>
                     <h4 className="text-[10px] font-black text-blue-600 mb-1.5 tracking-widest">THE_SOLUTION</h4>
                     <p className="text-sm text-zinc-800 leading-relaxed font-sans font-medium">
                        {project.details.solution}
                     </p>
                  </div>
                )}

                {/* 3. Key Features (Emerald Accent) */}
                {project.details?.features && project.details.features.length > 0 && (
                  <div className="relative pl-4 border-l-2 border-emerald-400">
                     <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-emerald-500"></span>
                     <h4 className="text-[10px] font-black text-emerald-600 mb-2 tracking-widest">KEY_FEATURES</h4>
                     <ul className="flex flex-col gap-2">
                       {project.details.features.map((feature, idx) => (
                         <li key={idx} className="text-sm text-zinc-700 font-sans font-medium flex items-start gap-2">
                           <span className="text-emerald-500 mt-[3px] text-[10px]">▶</span>
                           <span className="leading-snug">{feature}</span>
                         </li>
                       ))}
                     </ul>
                  </div>
                )}

                {/* 4. Hardware Requirements (Amber Accent) */}
                {project.details?.hardware && project.details.hardware.length > 0 && (
                   <div className="relative pl-4 border-l-2 border-amber-400">
                     <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-amber-500"></span>
                     <h4 className="text-[10px] font-black text-amber-600 mb-2 tracking-widest">HARDWARE_SPECS</h4>
                     <div className="flex flex-wrap gap-2">
                        {project.details.hardware.map((hw, idx) => (
                          <span key={idx} className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-black px-2 py-1 rounded-sm shadow-sm">
                            {hw}
                          </span>
                        ))}
                     </div>
                   </div>
                )}
             </div>
          </div>

          {/* --- WIRING / TECH STACK SECTION --- */}
          <div className="bg-white border-2 border-zinc-400 p-4 sm:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-2 mb-3 border-b-2 border-zinc-800 pb-2">
              <Terminal className="w-4 h-4 text-zinc-800" />
              <h3 className="text-xs sm:text-sm font-black tracking-widest text-zinc-900">STACK_WIRING_LIST</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {displayTechStack.map((tag, i) => (
                <div key={tag} className="flex justify-between items-center bg-zinc-50 border border-zinc-200 p-2">
                  <span className="bg-zinc-800 text-white text-[8px] font-black px-1.5 py-0.5 rounded-sm shrink-0">
                    PIN 0{i+1}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-black text-blue-700 text-right uppercase ml-2 truncate">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* HIDDEN ON DESKTOP: Renders here at the absolute bottom for Mobile */}
          {renderExternalConnections("block lg:hidden")}

        </div>
      </div>
    </main>
  );
}