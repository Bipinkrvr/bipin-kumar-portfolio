"use client"

import { useState } from "react"
import { AlertTriangle, Lock, Radio, Activity, Send, ShieldCheck, Zap } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [status, setStatus] = useState<"idle" | "handshake" | "encrypting" | "sending" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    setStatus("handshake")
    setTimeout(() => {
      setStatus("encrypting")
      setTimeout(() => {
        setStatus("sending")
        setTimeout(() => {
          setStatus("success")
          setFormData({ name: "", email: "", message: "" })
          setTimeout(() => setStatus("idle"), 4000)
        }, 1200)
      }, 1000)
    }, 800)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="relative w-full flex flex-col justify-center px-4 sm:px-8 py-4 sm:py-12 bg-transparent">
      <div className="w-full max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center">
        
        {/* Top Connector Ribbon */}
        <div className="w-3/4 max-w-lg h-2 sm:h-3 bg-zinc-200 border-x-4 border-t-4 border-zinc-300 rounded-t-lg shadow-sm z-0"></div>

        {/* Main Card */}
        <div className="w-full bg-white border-[6px] border-zinc-300 border-b-zinc-400 border-r-zinc-400 p-2 sm:p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10 relative overflow-hidden flex flex-col h-auto">
          
          <div className="absolute top-0 left-0 right-0 h-1.5 sm:h-2 bg-[repeating-linear-gradient(45deg,#fbbf24,#fbbf24_10px,#fff_10px,#fff_20px)] border-b border-amber-300 shadow-sm shrink-0"></div>

          <div className="absolute top-3 left-3 w-3 h-3 rounded-full bg-zinc-200 border border-zinc-300 flex items-center justify-center shadow-inner hidden sm:flex"><div className="w-1.5 h-[1px] bg-zinc-400 rotate-45"></div></div>
          <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-zinc-200 border border-zinc-300 flex items-center justify-center shadow-inner hidden sm:flex"><div className="w-1.5 h-[1px] bg-zinc-400 -rotate-12"></div></div>

          {/* Header */}
          <div className="mt-3 mb-3 flex flex-col sm:flex-row items-center justify-between border-b border-zinc-200 pb-2 gap-2 px-1 sm:px-4 shrink-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <Radio className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 animate-pulse" />
              <div>
                <h2 className="font-mono text-lg sm:text-2xl font-black text-zinc-800 tracking-widest leading-tight">TELEMETRY_UPLINK</h2>
                <p className="font-mono text-[8px] sm:text-[10px] text-amber-600 flex items-center gap-1">
                  <AlertTriangle className="w-2.5 h-2.5" /> SECURE CONNECTION
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 bg-zinc-50 px-2 py-1 rounded-sm border border-zinc-200 shadow-sm">
              <Lock className="w-3 h-3 text-emerald-500" />
              <span className="font-mono text-[8px] sm:text-[9px] text-zinc-600 tracking-wider">E2E_ENCRYPT: <span className="text-emerald-600 font-bold">ON</span></span>
            </div>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 px-1 sm:px-4 pb-1">
              
              <div className="md:col-span-5 flex flex-col gap-2">
                {/* TERMINAL WINDOW FIX: 
                  - Switched from min-h-[90px] to a strict fixed h-[110px] on mobile to stop layout jerks.
                  - Added an absolute bottom-0 wrapper to force old text to slide upwards and hide natively.
                */}
                <div className="bg-zinc-900 border-[3px] border-zinc-300 rounded-md p-2 sm:p-3 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] relative flex flex-col h-[110px] md:h-full shrink-0">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:4px_4px] pointer-events-none"></div>
                  
                  <div className="flex justify-between items-center border-b border-emerald-900/50 pb-1 mb-1 shrink-0 relative z-10">
                    <span className="font-mono text-[8px] text-emerald-500 tracking-widest">UPLINK_LOG</span>
                    <Activity className="w-3 h-3 text-emerald-500 animate-pulse" />
                  </div>

                  {/* Absolute positioning anchors text to the bottom. Overflow hidden clips the top. */}
                  <div className="relative flex-grow z-10 overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end font-mono text-[9px] sm:text-[10px] text-emerald-400 space-y-0.5">
                      <p className="animate-in fade-in slide-in-from-bottom-2 duration-300">{`> AWAITING_PAYLOAD...`}</p>
                      
                      {status !== "idle" && (
                        <p className="animate-in fade-in slide-in-from-bottom-2 duration-300">{`> HANDSHAKE... [OK]`}</p>
                      )}
                      
                      {(status === "encrypting" || status === "sending" || status === "success") && (
                        <p className="text-amber-400 animate-in fade-in slide-in-from-bottom-2 duration-300">{`> RSA_KEYS... [SECURE]`}</p>
                      )}
                      
                      {(status === "sending" || status === "success") && (
                        <p className="animate-pulse text-cyan-400 animate-in fade-in slide-in-from-bottom-2 duration-300">{`> TRANSMITTING...`}</p>
                      )}
                      
                      {status === "success" && (
                        <p className="text-emerald-400 font-bold mt-1 flex items-center gap-1 animate-in fade-in slide-in-from-bottom-2 duration-300">
                          <ShieldCheck className="w-3 h-3" /> {`> ACK_RECEIVED`}
                        </p>
                      )}
                      
                      <p className="mt-0.5 flex items-center gap-1">
                        <span className="opacity-50">_</span>
                        {status === "idle" && <span className="animate-pulse bg-emerald-500/50 w-1.5 h-2.5"></span>}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Server Status */}
                <div className="bg-zinc-50 border border-zinc-200 rounded-sm p-2 shadow-sm shrink-0 hidden sm:block">
                  <div className="grid grid-cols-2 gap-y-2 gap-x-2">
                    <div className="flex flex-col">
                      <span className="font-mono text-[7px] text-zinc-500">TARGET</span>
                      <span className="font-mono text-[9px] text-zinc-800 font-bold">BIPIN_SERVER</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[7px] text-zinc-500">PORT</span>
                      <span className="font-mono text-[9px] text-zinc-800 font-bold">443_TLS</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="md:col-span-7 flex flex-col gap-2">
                <div className="bg-white border border-zinc-300 rounded-sm p-1.5 flex flex-col relative focus-within:border-cyan-500 focus-within:shadow-[0_0_8px_rgba(34,211,238,0.2)] transition-all duration-300">
                  <label className="font-mono text-[8px] sm:text-[9px] text-zinc-500 flex items-center gap-1.5 mb-0.5 px-1">
                    <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div> [01] ALIAS
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status !== "idle"}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded px-2 py-1.5 font-mono text-xs sm:text-sm text-cyan-700 focus:outline-none focus:border-cyan-400 disabled:opacity-50"
                  />
                </div>

                <div className="bg-white border border-zinc-300 rounded-sm p-1.5 flex flex-col relative focus-within:border-cyan-500 focus-within:shadow-[0_0_8px_rgba(34,211,238,0.2)] transition-all duration-300">
                  <label className="font-mono text-[8px] sm:text-[9px] text-zinc-500 flex items-center gap-1.5 mb-0.5 px-1">
                    <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div> [02] ROUTING_IP (Email)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status !== "idle"}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded px-2 py-1.5 font-mono text-xs sm:text-sm text-cyan-700 focus:outline-none focus:border-cyan-400 disabled:opacity-50"
                  />
                </div>

                <div className="bg-white border border-zinc-300 rounded-sm p-1.5 flex flex-col relative focus-within:border-amber-500 focus-within:shadow-[0_0_8px_rgba(251,191,36,0.2)] transition-all duration-300">
                  <label className="font-mono text-[8px] sm:text-[9px] text-zinc-500 flex items-center gap-1.5 mb-0.5 px-1">
                    <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div> [03] PAYLOAD
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status !== "idle"}
                    className="w-full min-h-[60px] sm:min-h-[100px] bg-zinc-50 border border-zinc-200 rounded px-2 py-1.5 font-mono text-xs sm:text-sm text-amber-700 focus:outline-none focus:border-amber-400 resize-none disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="relative w-full overflow-hidden rounded-sm font-mono font-black text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 disabled:cursor-not-allowed group shadow-sm mt-0.5"
                >
                  <div className={`absolute inset-0 bg-[repeating-linear-gradient(-45deg,#fbbf24,#fbbf24_15px,#f59e0b_15px,#f59e0b_30px)] transition-opacity duration-300 ${status === "idle" ? "opacity-100" : "opacity-0"}`}></div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300"></div>
                  <div className={`absolute inset-0 bg-cyan-600 transition-opacity duration-300 ${(status === "handshake" || status === "encrypting" || status === "sending") ? "opacity-100" : "opacity-0"}`}></div>
                  <div className={`absolute inset-0 bg-emerald-500 transition-opacity duration-300 ${status === "success" ? "opacity-100" : "opacity-0"}`}></div>

                  <div className="relative border-2 border-transparent group-hover:border-white/50 m-1 py-1.5 sm:py-2 px-4 flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm shadow-inner">
                    {status === "idle" && (
                      <><Zap className="w-3.5 h-3.5 text-zinc-900 group-hover:animate-pulse" /> <span className="text-zinc-900">TRANSMIT</span></>
                    )}
                    {status === "handshake" && <><Activity className="w-3.5 h-3.5 text-white animate-spin" /> <span className="text-white">HANDSHAKE</span></>}
                    {status === "encrypting" && <><Lock className="w-3.5 h-3.5 text-white animate-pulse" /> <span className="text-white">ENCRYPTING</span></>}
                    {status === "sending" && <><Send className="w-3.5 h-3.5 text-white animate-bounce" /> <span className="text-white">UPLINKING</span></>}
                    {status === "success" && <><ShieldCheck className="w-3.5 h-3.5 text-white" /> <span className="text-white">SECURE</span></>}
                  </div>
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}