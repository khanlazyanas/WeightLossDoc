import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="font-sans text-[#0f172a] bg-white selection:bg-[#10b9bd] selection:text-white">
      
      {/* ================= ELITE BANNER: THE CAPABILITIES ================= */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-20 md:py-32 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-white">
        {/* Modern Tech Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '64px 64px' }}></div>
        
        {/* Ambient Top Glow */}
        <div className="absolute top-[-10%] right-[-10%] w-[30rem] md:w-[50rem] h-[30rem] md:h-[50rem] bg-[#10b9bd]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-4xl lg:max-w-5xl mx-auto text-center md:text-left">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm border border-slate-200/60 text-[#0f172a] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-8 sm:mb-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#10b9bd] animate-pulse shadow-[0_0_10px_rgba(16,185,189,0.8)]"></span>
              Clinical Capabilities
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.95] md:leading-[0.9] mb-8 sm:mb-10">
              Advanced <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#334155] to-[#10b9bd] pr-2">
                Protocols.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-500 font-medium max-w-2xl md:max-w-3xl leading-relaxed mx-auto md:mx-0">
              We don't just provide services; we engineer biological outcomes. Our core protocols are strictly built on metabolic data, precision science, and absolute clinical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* ================= DETAILED SERVICES: THE DIAGNOSTIC SUITE ================= */}
      <section className="py-20 md:py-32 px-4 sm:px-6 bg-white relative">
        <div className="container mx-auto max-w-7xl relative z-10">
          
          <div className="flex items-center justify-center md:justify-start gap-3 mb-12 md:mb-16">
            <div className="w-8 h-[2px] bg-[#10b9bd]"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#10b9bd]">The Suite</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Service 1: Metabolic Nutrition */}
            <div className="group relative bg-white p-8 sm:p-12 lg:p-14 rounded-[2rem] sm:rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(16,185,189,0.15)] transition-all duration-700 flex flex-col justify-between hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-slate-50 border border-slate-100 text-[#0f172a] rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#10b9bd] group-hover:text-white group-hover:border-[#10b9bd] transition-all duration-500 shadow-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black tracking-tighter mb-6 leading-[1.1] text-[#0f172a]">Metabolic <br/> Nutrition</h3>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium mb-12">
                  Targeted macronutrient engineering designed specifically to bypass insulin resistance, regulate glucose, and force lipid oxidation (fat burning).
                </p>
              </div>
              <div className="relative z-10 pt-8 border-t border-slate-100 flex items-center justify-between text-slate-400 group-hover:text-[#10b9bd] transition-colors duration-500">
                 <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest">Biological Reset</span>
                 <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2.5"/></svg>
              </div>
            </div>

            {/* Service 2: Pharmacotherapy */}
            <div className="group relative bg-white p-8 sm:p-12 lg:p-14 rounded-[2rem] sm:rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(16,185,189,0.15)] transition-all duration-700 flex flex-col justify-between hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-slate-50 border border-slate-100 text-[#0f172a] rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#10b9bd] group-hover:text-white group-hover:border-[#10b9bd] transition-all duration-500 shadow-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black tracking-tighter mb-6 leading-[1.1] text-[#0f172a]">Clinical <br/> Pharma</h3>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium mb-12">
                  Implementation of strictly FDA-approved biological interventions to regulate appetite hormones, improve satiety signaling, and enhance weight loss.
                </p>
              </div>
              <div className="relative z-10 pt-8 border-t border-slate-100 flex items-center justify-between text-slate-400 group-hover:text-[#10b9bd] transition-colors duration-500">
                 <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest">Hormonal Balance</span>
                 <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2.5"/></svg>
              </div>
            </div>

            {/* Service 3: Bariatric */}
            <div className="group relative bg-white p-8 sm:p-12 lg:p-14 rounded-[2rem] sm:rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(16,185,189,0.15)] transition-all duration-700 flex flex-col justify-between hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-slate-50 border border-slate-100 text-[#0f172a] rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#10b9bd] group-hover:text-white group-hover:border-[#10b9bd] transition-all duration-500 shadow-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path d="M19 21V5a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 5z"></path></svg>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black tracking-tighter mb-6 leading-[1.1] text-[#0f172a]">Bariatric <br/> Management</h3>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium mb-12">
                  Comprehensive pre-operative medical evaluations coupled with precision post-operative dietary stabilization for maximum retention.
                </p>
              </div>
              <div className="relative z-10 pt-8 border-t border-slate-100 flex items-center justify-between text-slate-400 group-hover:text-[#10b9bd] transition-colors duration-500">
                 <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest">Surgical Support</span>
                 <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2.5"/></svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= THE SYSTEM: ARCHITECTURE (PROCESS) ================= */}
      <section className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 bg-[#0f172a] text-white mx-2 sm:mx-6 md:mx-8 mb-8 rounded-[2rem] sm:rounded-[4rem] shadow-2xl relative overflow-hidden group/section">
        {/* Ghost Watermark */}
        <div className="absolute inset-0 opacity-[0.02] text-white font-black text-[18vw] leading-none select-none pointer-events-none flex items-center justify-center group-hover/section:scale-105 transition-transform duration-1000">
          ARCHITECTURE
        </div>
        
        {/* Subtle Ambient Glow */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#10b9bd]/15 via-transparent to-transparent opacity-80 pointer-events-none"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 sm:mb-24 gap-6 sm:gap-10 text-center md:text-left">
            <div className="max-w-2xl">
              <p className="text-[#10b9bd] font-black uppercase tracking-[0.4em] sm:tracking-[0.6em] text-[9px] sm:text-[10px] mb-4 sm:mb-6">The Workflow</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05]">Standardized <br className="hidden sm:block"/>Care System.</h2>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-[#10b9bd]">
               <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest hidden sm:block">Scientific Method</span>
               <div className="w-16 sm:w-24 h-px bg-[#10b9bd]/50"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { id: "01", title: "Diagnostic Intake", desc: "Deep clinical discussion regarding metabolic history and biometric markers." },
              { id: "02", title: "Bio-Evaluation", desc: "Advanced clinical blood panels to identify underlying hormonal blocks." },
              { id: "03", title: "System Design", desc: "Engineering your custom pharmacotherapy and nutrition protocol." },
              { id: "04", title: "Scaling Health", desc: "Weekly biometric monitoring and real-time algorithmic protocol adjustments." }
            ].map((step, i) => (
              <div key={i} className="p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-[#1e293b]/40 backdrop-blur-md border border-slate-700/50 hover:bg-[#1e293b]/80 hover:border-[#10b9bd]/50 transition-all duration-500 group relative overflow-hidden">
                {/* Number Glow */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-[#10b9bd] rounded-full blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <p className="relative z-10 text-4xl sm:text-5xl font-black mb-8 sm:mb-10 text-slate-600 group-hover:text-[#10b9bd] transition-colors duration-500 font-mono tracking-tighter">{step.id}</p>
                <h4 className="relative z-10 text-lg sm:text-xl font-black uppercase tracking-tight mb-3 sm:mb-4 text-white">{step.title}</h4>
                <p className="relative z-10 text-slate-400 leading-relaxed font-medium text-xs sm:text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION: THE FINAL PITCH ================= */}
      <section className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 text-center bg-white relative">
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-6">
             <div className="w-2 h-2 rounded-full bg-[#10b9bd] animate-ping"></div>
             <p className="text-[#10b9bd] font-black uppercase tracking-[0.4em] text-[10px]">Your Blueprint</p>
          </div>
          
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-[#0f172a] mb-10 sm:mb-12 leading-[1.05] sm:leading-[0.95]">
            Integrate Your <br className="hidden sm:block"/>
            <span className="text-slate-400 italic font-serif">Success Protocol.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            <Link to="/book-appointment" className="relative overflow-hidden group/btn bg-[#0f172a] text-white px-10 py-5 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-[0_15px_30px_-10px_rgba(15,23,42,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,189,0.4)] transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto">
              <span className="relative z-10">Request Evaluation</span>
              <svg className="w-3 sm:w-4 h-3 sm:h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              {/* Hover Fill Effect */}
              <div className="absolute inset-0 h-full w-0 bg-[#10b9bd] transition-all duration-300 ease-out group-hover/btn:w-full z-0"></div>
            </Link>
            
            <Link to="/" className="w-full sm:w-auto text-center px-10 py-5 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest border-2 border-slate-200 text-slate-600 hover:border-[#0f172a] hover:text-[#0f172a] hover:bg-slate-50 transition-all duration-300 active:scale-95">
              Home Office
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;