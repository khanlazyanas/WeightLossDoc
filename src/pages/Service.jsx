import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="font-sans text-[#0f172a] bg-white selection:bg-[#10b9bd] selection:text-white">
      
      {/* ================= ELITE BANNER: THE CAPABILITIES ================= */}
      <section className="relative pt-32 pb-40 px-6 overflow-hidden bg-[#f8fafc]">
        {/* Modern Tech Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 bg-[#0f172a] text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-[#10b9bd]"></span>
              Clinical Capabilities
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.9] mb-10">
              Advanced <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b9bd] via-[#0ea5e9] to-[#0f172a]">
                Protocols.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
              We don't just provide services; we engineer biological outcomes. Our protocols are built on metabolic data and clinical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* ================= DETAILED SERVICES: THE DIAGNOSTIC SUITE ================= */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-[3rem] overflow-hidden shadow-2xl">
            
            {/* Service 1: Metabolic Nutrition */}
            <div className="group bg-white p-12 lg:p-16 hover:bg-[#f8fafc] transition-all duration-500 flex flex-col justify-between min-h-[500px]">
              <div>
                <div className="w-16 h-16 bg-[#f0f9ff] text-[#10b9bd] rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                </div>
                <h3 className="text-3xl font-black tracking-tighter mb-6 uppercase">Metabolic <br/> Nutrition</h3>
                <p className="text-slate-500 text-lg leading-relaxed font-medium mb-10">
                  Targeted macronutrient engineering to bypass insulin resistance and force lipid oxidation. 
                </p>
              </div>
              <div className="pt-8 border-t border-slate-100 flex items-center justify-between group-hover:text-[#10b9bd] transition-colors">
                 <span className="text-[10px] font-black uppercase tracking-widest">Biological Reset</span>
                 <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="3"/></svg>
              </div>
            </div>

            {/* Service 2: Pharmacotherapy */}
            <div className="group bg-white p-12 lg:p-16 hover:bg-[#f8fafc] transition-all duration-500 flex flex-col justify-between min-h-[500px]">
              <div>
                <div className="w-16 h-16 bg-[#fff1f2] text-[#0ea5e9] rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <h3 className="text-3xl font-black tracking-tighter mb-6 uppercase">Clinical <br/> Pharma</h3>
                <p className="text-slate-500 text-lg leading-relaxed font-medium mb-10">
                  FDA-approved biological interventions to regulate appetite hormones and improve satiety signaling.
                </p>
              </div>
              <div className="pt-8 border-t border-slate-100 flex items-center justify-between group-hover:text-[#0ea5e9] transition-colors">
                 <span className="text-[10px] font-black uppercase tracking-widest">Hormonal Balance</span>
                 <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="3"/></svg>
              </div>
            </div>

            {/* Service 3: Bariatric */}
            <div className="group bg-white p-12 lg:p-16 hover:bg-[#f8fafc] transition-all duration-500 flex flex-col justify-between min-h-[500px]">
              <div>
                <div className="w-16 h-16 bg-[#f0fdf4] text-[#0f172a] rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 21V5a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 5z"></path></svg>
                </div>
                <h3 className="text-3xl font-black tracking-tighter mb-6 uppercase">Bariatric <br/> Management</h3>
                <p className="text-slate-500 text-lg leading-relaxed font-medium mb-10">
                  Comprehensive pre-operative evaluations and precision post-operative dietary stabilization.
                </p>
              </div>
              <div className="pt-8 border-t border-slate-100 flex items-center justify-between group-hover:text-[#0f172a] transition-colors">
                 <span className="text-[10px] font-black uppercase tracking-widest">Surgical Support</span>
                 <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="3"/></svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= THE SYSTEM: ARCHITECTURE (PROCESS) ================= */}
      <section className="py-32 px-6 bg-[#0f172a] text-white rounded-[4rem] lg:mx-6 shadow-2xl relative overflow-hidden">
        {/* Ghost Watermark */}
        <div className="absolute inset-0 opacity-[0.02] text-white font-black text-[15vw] leading-none select-none pointer-events-none flex items-center justify-center">
          ARCHITECTURE
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="max-w-2xl">
              <p className="text-[#10b9bd] font-black uppercase tracking-[0.6em] text-[10px] mb-6">The Workflow</p>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">Standardized <br/>Care System.</h2>
            </div>
            <div className="flex items-center gap-4 text-[#10b9bd]">
               <span className="text-xs font-black uppercase tracking-widest">Scientific Method</span>
               <div className="w-12 h-px bg-[#10b9bd]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: "01", title: "Diagnostic Intake", desc: "Deep discussion regarding metabolic history and biometric markers." },
              { id: "02", idColor: "text-[#10b9bd]", title: "Bio-Evaluation", desc: "Clinical blood panels to identify underlying hormonal blocks." },
              { id: "03", title: "System Design", desc: "Engineering your custom pharmacotherapy and nutrition protocol." },
              { id: "04", title: "Scaling Health", desc: "Weekly biometric monitoring and real-time protocol adjustments." }
            ].map((step, i) => (
              <div key={i} className="p-10 rounded-[3rem] border border-slate-800 hover:bg-[#1e293b] transition-all group">
                <p className={`text-5xl font-black mb-10 transition-all ${step.idColor || 'text-slate-700'} group-hover:text-white`}>{step.id}</p>
                <h4 className="text-xl font-black uppercase tracking-tight mb-4">{step.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION: THE FINAL PITCH ================= */}
      <section className="py-40 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#0f172a] mb-12 leading-[0.95]">
            Integrate Your <br/>
            <span className="text-slate-300 italic font-serif">Success Protocol.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/book-appointment" className="w-full sm:w-auto bg-[#0f172a] text-white px-12 py-6 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-[#10b9bd] transition-all shadow-2xl active:scale-95">
              Request Evaluation
            </Link>
            <Link to="/" className="w-full sm:w-auto px-12 py-6 rounded-2xl text-xs font-black uppercase tracking-widest border border-slate-200 hover:bg-slate-50 transition-all">
              Home Office
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;