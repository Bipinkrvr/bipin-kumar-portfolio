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
    // overflow-hidden absolutely locks this to 100dvh to stop overlapping
    <section id="contact" className="w-full min-h-screen flex flex-col justify-center px-4 sm:px-6 relative overflow-hidden py-20">
      <div className="w-full max-w-4xl mx-auto relative z-10 flex flex-col items-center flex-grow min-h-0 justify-center">
        
        <div className="w-3/4 max-w-lg h-3 bg-zinc-200 border-x-4 border-t-4 border-zinc-300 rounded-t-lg shadow-sm z-0 shrink-0"></div>

        <div className="w-full bg-white border-[6px] border-zinc-300 border-b-zinc-400 border-r-zinc-400 p-3 sm:p-5 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10 relative overflow-hidden flex flex-col min-h-0 flex-grow max-h-[75vh]">
          
          <div className="absolute top-0 left-0 right-0 h-2 bg-[repeating-linear-gradient(45deg,#fbbf24,#fbbf24_10px,#fff_10px,#fff_20px)] border-b border-amber-300 shadow-sm shrink-0"></div>

          <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-zinc-200 border border-zinc-300 flex items-center justify-center shadow-inner hidden sm:flex"><div className="w-1.5 h-[1px] bg-zinc-400 rotate-45"></div></div>
          <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-zinc-200 border border-zinc-300 flex items-center justify-center shadow-inner hidden sm:flex"><div className="w-1.5 h-[1px] bg-zinc-400 -rotate-12"></div></div>

          <div className="mt-4 mb-4 flex flex-col sm:flex-row items-center justify-between border-b border-zinc-200 pb-3 gap-3 px-2 sm:px-6 shrink-0">
            <div className="flex items-center gap-3">
              <Radio className="w-6 h-6 text-amber-500 animate-pulse" />
              <div>
                <h2 className="font-mono text-xl sm:text-2xl font-black text-zinc-800 tracking-widest">TELEMETRY_UPLINK</h2>
                <p className="font-mono text-[9px] sm:text-xs text-amber-600 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" /> SECURE DIRECT-TO-SERVER CONNECTION
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 bg-zinc-50 px-3 py-1.5 rounded-sm border border-zinc-200 shadow-sm">
              <Lock className="w-3 h-3 text-emerald-500" />
              <span className="font-mono text-[10px] text-zinc-600 tracking-wider">E2E_ENCRYPTION: <span className="text-emerald-600 font-bold">ACTIVE</span></span>
            </div>
          </div>

          {/* internal scrolling on mobile prevents height blow-out */}
          <div className="flex-grow overflow-y-auto custom-scrollbar min-h-0">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 px-2 sm:px-6 pb-2 h-full">
              
              <div className="md:col-span-5 flex flex-col gap-3 min-h-0">
                <div className="bg-zinc-900 border-[3px] border-zinc-300 rounded-md p-3 sm:p-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] relative flex flex-col flex-grow min-h-[120px] md:min-h-0 md:h-full">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:4px_4px] pointer-events-none"></div>
                  
                  <div className="flex justify-between items-center border-b border-emerald-900/50 pb-2 mb-2 shrink-0 relative z-10">
                    <span className="font-mono text-[9px] text-emerald-500 tracking-widest">UPLINK_LOG</span>
                    <Activity className="w-3 h-3 text-emerald-500 animate-pulse" />
                  </div>

                  <div className="flex-grow flex flex-col justify-end font-mono text-[10px] sm:text-xs text-emerald-400 space-y-1 relative z-10 overflow-hidden">
                    <p>{`> AWAITING_PAYLOAD...`}</p>
                    {status !== "idle" && <p>{`> INITIATING_HANDSHAKE... [OK]`}</p>}
                    {(status === "encrypting" || status === "sending" || status === "success") && (
                      <p className="text-amber-400">{`> GENERATING_RSA_KEYS... [SECURE]`}</p>
                    )}
                    {(status === "sending" || status === "success") && (
                      <p className="animate-pulse text-cyan-400">{`> TRANSMITTING_PACKETS...`}</p>
                    )}
                    {status === "success" && (
                      <p className="text-emerald-400 font-bold mt-1 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> {`> ACK_RECEIVED`}
                      </p>
                    )}
                    <p className="mt-1 flex items-center gap-1">
                      <span className="opacity-50">_</span>
                      {status === "idle" && <span className="animate-pulse bg-emerald-500/50 w-1.5 h-3"></span>}
                    </p>
                  </div>
                </div>

                <div className="bg-zinc-50 border border-zinc-200 rounded-sm p-3 shadow-sm shrink-0">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="font-mono text-[8px] text-zinc-500">TARGET_NODE</span>
                      <span className="font-mono text-[10px] text-zinc-800 font-bold">BIPIN_SERVER_01</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[8px] text-zinc-500">PROTOCOL</span>
                      <span className="font-mono text-[10px] text-cyan-600 font-bold">HTTPS/TLS</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[8px] text-zinc-500">PORT</span>
                      <span className="font-mono text-[10px] text-zinc-800 font-bold">443_SECURE</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[8px] text-zinc-500">UPLINK_STATUS</span>
                      <span className="font-mono text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div> READY
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              <form onSubmit={handleSubmit} className="md:col-span-7 flex flex-col gap-3 min-h-0 md:h-full">
                <div className="bg-white border border-zinc-300 rounded-sm p-2 flex flex-col relative focus-within:border-cyan-500 focus-within:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all duration-300 shrink-0">
                  <label className="font-mono text-[9px] text-zinc-500 flex items-center gap-2 mb-1 px-1">
                    <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div> [REG_01] SENDER_ALIAS
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status !== "idle"}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded px-3 py-1.5 font-mono text-xs sm:text-sm text-cyan-700 focus:outline-none focus:border-cyan-400 disabled:opacity-50"
                  />
                </div>

                <div className="bg-white border border-zinc-300 rounded-sm p-2 flex flex-col relative focus-within:border-cyan-500 focus-within:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all duration-300 shrink-0">
                  <label className="font-mono text-[9px] text-zinc-500 flex items-center gap-2 mb-1 px-1">
                    <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div> [REG_02] ROUTING_NODE_IP (Email)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status !== "idle"}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded px-3 py-1.5 font-mono text-xs sm:text-sm text-cyan-700 focus:outline-none focus:border-cyan-400 disabled:opacity-50"
                  />
                </div>

                <div className="bg-white border border-zinc-300 rounded-sm p-2 flex flex-col relative focus-within:border-amber-500 focus-within:shadow-[0_0_10px_rgba(251,191,36,0.2)] transition-all duration-300 flex-grow min-h-[100px]">
                  <label className="font-mono text-[9px] text-zinc-500 flex items-center gap-2 mb-1 px-1">
                    <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div> [REG_03] RAW_PAYLOAD
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status !== "idle"}
                    className="w-full h-full bg-zinc-50 border border-zinc-200 rounded px-3 py-1.5 font-mono text-xs sm:text-sm text-amber-700 focus:outline-none focus:border-amber-400 resize-none disabled:opacity-50 custom-scrollbar"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="relative w-full shrink-0 overflow-hidden rounded-sm font-mono font-black text-sm tracking-widest uppercase transition-all duration-300 disabled:cursor-not-allowed group shadow-sm"
                >
                  <div className={`absolute inset-0 bg-[repeating-linear-gradient(-45deg,#fbbf24,#fbbf24_15px,#f59e0b_15px,#f59e0b_30px)] transition-opacity duration-300 ${status === "idle" ? "opacity-100" : "opacity-0"}`}></div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300"></div>
                  <div className={`absolute inset-0 bg-cyan-600 transition-opacity duration-300 ${(status === "handshake" || status === "encrypting" || status === "sending") ? "opacity-100" : "opacity-0"}`}></div>
                  <div className={`absolute inset-0 bg-emerald-500 transition-opacity duration-300 ${status === "success" ? "opacity-100" : "opacity-0"}`}></div>

                  <div className="relative border-2 border-transparent group-hover:border-white/50 m-1 py-2 px-4 flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm shadow-inner">
                    {status === "idle" && (
                      <><Zap className="w-4 h-4 text-zinc-900 group-hover:animate-pulse" /> <span className="text-zinc-900">ENGAGE_TRANSMIT</span></>
                    )}
                    {status === "handshake" && <><Activity className="w-4 h-4 text-white animate-spin" /> <span className="text-white">HANDSHAKE...</span></>}
                    {status === "encrypting" && <><Lock className="w-4 h-4 text-white animate-pulse" /> <span className="text-white">ENCRYPTING...</span></>}
                    {status === "sending" && <><Send className="w-4 h-4 text-white animate-bounce" /> <span className="text-white">UPLINKING...</span></>}
                    {status === "success" && <><ShieldCheck className="w-4 h-4 text-white" /> <span className="text-white">SECURE</span></>}
                  </div>
                </button>

              </form>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-white border border-zinc-200 rounded-sm px-6 py-2 flex flex-col items-center justify-center shadow-sm relative z-10 shrink-0">
          <div className="flex gap-1 mb-1">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-1 h-1.5 bg-zinc-300"></div>
            ))}
          </div>
          <p className="font-mono text-[9px] text-zinc-500 tracking-widest text-center">
            {`// ENGINEERED BY BIPIN_KUMAR // © ${new Date().getFullYear()} // SYS_UPTIME: 99.9%`}
          </p>
        </div>

      </div>
    </section>
  )
}