import React from 'react';
import { Link } from 'react-router-dom';
import drabubakar from "../assets/drabubakarkhan.png";

const About = () => {
  return (
    <div className="font-sans text-[#0f172a] bg-white selection:bg-[#10b9bd] selection:text-white">
      
      {/* ================= ELITE BANNER: THE MANIFESTO ================= */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-20 md:py-32 px-4 sm:px-6 overflow-hidden bg-[#fafafa]">
        {/* Abstract Ambient Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-gradient-to-bl from-[#10b9bd]/10 to-transparent rounded-full blur-[100px] md:blur-[140px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[1000px] max-h-[1000px] bg-gradient-to-tr from-[#0ea5e9]/5 to-transparent rounded-full blur-[100px] md:blur-[140px]"></div>
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-4xl lg:max-w-5xl mx-auto text-center md:text-left">
            <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-md border border-[#0f172a]/5 text-[#0f172a] px-5 py-2.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-12 shadow-sm">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#10b9bd] animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
              The Clinical Philosophy
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.95] md:leading-[0.9] mb-10">
              Biology Over <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#334155] to-[#10b9bd] pr-2">
                Pure Willpower.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed md:leading-loose mx-auto md:mx-0">
              We operate at the precise intersection of advanced medical science and deep data intelligence. Led by Dr. Abubakar Khan, we are redefining bariatric and metabolic care for the modern age.
            </p>
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP: THE ARCHITECT (EDITORIAL STYLE) ================= */}
      <section className="py-24 md:py-40 px-4 sm:px-6 bg-white relative">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-16 lg:gap-24 xl:gap-32">
            
            {/* Left Side: High-End Editorial Portrait */}
            <div className="w-full lg:w-5/12 relative group px-4 sm:px-0">
              <div className="relative w-full max-w-md mx-auto lg:max-w-none aspect-[3/4] sm:aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] bg-slate-100">
                <div className="absolute inset-0 bg-slate-200 animate-pulse -z-10"></div>
                <img 
                  src={drabubakar} 
                  alt="Dr. Abubakar Khan" 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-[20%] transition-all duration-1000 group-hover:scale-105 origin-center"
                />
                {/* Elegant gradient overlay for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/95 via-[#0f172a]/10 to-transparent"></div>
                
                <div className="absolute bottom-8 sm:bottom-12 left-8 sm:left-10 text-white z-20">
                   <p className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter leading-none mb-2">Dr. Abubakar<br/>Khan</p>
                   <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.4em] text-[#10b9bd]">Chief Medical Officer</p>
                </div>
              </div>
              
              {/* Decorative minimal lines */}
              <div className="hidden lg:block absolute -left-12 top-1/4 w-24 h-[1px] bg-slate-200"></div>
              <div className="hidden lg:block absolute -bottom-12 right-1/4 w-[1px] h-24 bg-slate-200"></div>
            </div>

            {/* Right Side: Scientific Narrative */}
            <div className="w-full lg:w-7/12 flex flex-col justify-center text-center sm:text-left pt-8 lg:pt-0">
              <div className="space-y-6 sm:space-y-8 mb-16">
                <div className="flex items-center justify-center sm:justify-start gap-4">
                  <div className="w-8 sm:w-16 h-[2px] bg-[#10b9bd]"></div>
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.5em] text-[#10b9bd]">The Architect</span>
                </div>
                
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tighter text-[#0f172a] leading-[1] md:leading-[0.95]">
                  Precision Engineering <br className="hidden md:block"/> For Your Body.
                </h3>
                
                <div className="space-y-6 text-slate-500 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mx-auto sm:mx-0">
                  <p>
                    With over a decade of intensive clinical immersion, <strong className="text-[#0f172a] border-b border-slate-300 pb-0.5">Dr. Abubakar Khan</strong> has pioneered a system that treats obesity exclusively as a cellular and hormonal dysfunction, not a lifestyle choice. 
                  </p>
                  <p>
                    His expertise in Bariatric and Metabolic care ensures that every patient's roadmap is built on immutable data—blood markers, metabolic rate, and insulin response—eliminating guesswork entirely from the equation.
                  </p>
                </div>
              </div>

              {/* Ultra Clean Stats */}
              <div className="flex flex-row justify-center sm:justify-start gap-12 sm:gap-20 pt-8 sm:pt-12 border-t border-slate-100">
                 <div className="text-center sm:text-left group">
                    <p className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-[#0f172a] group-hover:text-[#10b9bd] transition-colors duration-500">10Y+</p>
                    <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mt-2 sm:mt-3">Clinical Research</p>
                 </div>
                 <div className="text-center sm:text-left group">
                    <p className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-[#0f172a] group-hover:text-[#10b9bd] transition-colors duration-500">5k+</p>
                    <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mt-2 sm:mt-3">Success Stories</p>
                 </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ================= CORE PILLARS: DATA-DRIVEN CARDS (DARK GLASSMORPHISM) ================= */}
      <section className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 bg-[#0f172a] text-white mx-2 sm:mx-6 md:mx-8 mb-8 rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden group/section">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] group-hover/section:scale-105 transition-transform duration-[3000ms]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#10b9bd]/15 via-transparent to-transparent opacity-80 pointer-events-none"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16 md:mb-24 space-y-4 sm:space-y-6">
            <p className="text-[#10b9bd] font-black uppercase tracking-[0.4em] sm:tracking-[0.6em] text-[9px] sm:text-[10px]">The Foundation</p>
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none">Why It Works.</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 relative">
            {/* Decorative background line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-800/50 -translate-y-1/2 z-0"></div>

            {[
              { 
                title: "Biological Diagnostics", 
                desc: "We deeply analyze comprehensive blood profiles and hormone levels to identify the exact metabolic blocks preventing your progress.",
                label: "01"
              },
              { 
                title: "Targeted Protocols", 
                desc: "Custom-engineered precision pharmacotherapy and clinical nutrition paths designed exclusively to reverse insulin resistance.",
                label: "02"
              },
              { 
                title: "Scalable Results", 
                desc: "We focus intensely on building a permanent metabolic ceiling that effectively prevents the typical 'rebound' weight gain effect.",
                label: "03"
              }
            ].map((pillar, i) => (
              <div key={i} className="group relative p-8 sm:p-10 xl:p-14 bg-[#1e293b]/40 backdrop-blur-xl hover:bg-[#1e293b]/80 transition-all duration-700 border border-slate-700/50 hover:border-[#10b9bd]/40 flex flex-col justify-between aspect-auto md:aspect-square lg:aspect-[4/5] min-h-[320px] rounded-3xl z-10 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(16,185,189,0.2)]">
                <div className="relative z-10">
                   <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-700 group-hover:text-[#10b9bd]/60 transition-colors duration-700 mb-8 sm:mb-12 font-mono tracking-tighter">{pillar.label}</p>
                   <h4 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight mb-4 sm:mb-6 text-white">{pillar.title}</h4>
                   <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">{pillar.desc}</p>
                </div>
                <div className="relative z-10 w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-slate-700 flex items-center justify-center text-slate-500 group-hover:bg-[#10b9bd] group-hover:border-[#10b9bd] group-hover:text-[#0f172a] transition-all duration-500 mt-8">
                   <svg className="w-4 sm:w-5 h-4 sm:h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION: THE FINAL PITCH ================= */}
      <section className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 text-center bg-white relative">
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-3 mb-8 sm:mb-10">
             <div className="w-2 h-2 rounded-full bg-[#10b9bd] animate-ping"></div>
             <p className="text-[#10b9bd] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[9px] sm:text-[10px]">Take Action</p>
          </div>
          
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-[#0f172a] mb-12 sm:mb-16 leading-[1.05] sm:leading-[0.95]">
            Ready to Integrate <br className="hidden sm:block"/>
            <span className="text-slate-400 italic font-serif">the New Science?</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            <Link to="/services" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#0f172a] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest hover:bg-[#10b9bd] transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(15,23,42,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,189,0.4)] active:scale-95 group">
              View Protocols
              <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </Link>
            <Link to="/book-appointment" className="w-full sm:w-auto text-center px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest border-2 border-slate-200 text-slate-600 hover:border-[#0f172a] hover:text-[#0f172a] hover:bg-slate-50 transition-all duration-300 active:scale-95">
              Schedule Diagnostic
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default About;