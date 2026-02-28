import React from 'react';
import { Link } from 'react-router-dom';
import drabubakar from "../assets/drabubakarkhan.png"

const About = () => {
  return (
    <div className="font-sans text-[#0f172a] bg-white selection:bg-[#10b9bd] selection:text-white">
      
      {/* ================= ELITE BANNER: THE MANIFESTO ================= */}
      <section className="relative pt-32 pb-40 px-6 overflow-hidden bg-[#f8fafc]">
        {/* Modern Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 bg-[#0f172a] text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-[#10b9bd]"></span>
              The Clinical Philosophy
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.9] mb-10">
              Biology Over <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b9bd] via-[#0ea5e9] to-[#0f172a]">
                Pure Willpower.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
              We operate at the intersection of medical science and data intelligence. Led by Dr. Abubakar Khan, we are redefining bariatric and metabolic care for the modern age.
            </p>
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP: THE FOUNDER (SILICON VALLEY STYLE) ================= */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
            
            {/* Left Side: Grayscale High-End Portrait */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#f0f9ff] rounded-full -z-10 blur-3xl opacity-60"></div>
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border-[16px] border-white">
                <img 
                  src={drabubakar} 
                  alt="Dr. Abubakar Khan" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-12 left-12 text-white">
                   <p className="text-4xl font-black tracking-tighter">Dr. Abubakar Khan</p>
                   <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#10b9bd] mt-2">Specialist Physician • Board Certified</p>
                </div>
              </div>
            </div>

            {/* Right Side: Scientific Narrative */}
            <div className="w-full lg:w-1/2 space-y-12 text-left">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[2px] bg-[#10b9bd]"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#10b9bd]">The Architect</span>
                </div>
                <h3 className="text-5xl font-black tracking-tight text-[#0f172a] leading-none">
                  Precision Engineering <br/> For Your Body.
                </h3>
                <p className="text-xl text-slate-500 font-medium leading-relaxed">
                  With over a decade of clinical immersion, <strong>Dr. Abubakar Khan</strong> has pioneered a system that treats obesity as a cellular and hormonal dysfunction. 
                </p>
                <p className="text-lg text-slate-400 font-medium leading-relaxed">
                  His expertise in Bariatric and Metabolic care ensures that every patient's roadmap is built on hard data—blood markers, metabolic rate, and insulin response—not guesswork or generic charts.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12 pt-10 border-t border-slate-100">
                 <div>
                    <p className="text-4xl font-black tracking-tighter">10Y+</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Clinical Research</p>
                 </div>
                 <div>
                    <p className="text-4xl font-black tracking-tighter">5000+</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Success Stories</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE PILLARS: DATA-DRIVEN CARDS ================= */}
      <section className="py-32 px-6 bg-[#0f172a] text-white rounded-[4rem] lg:mx-6 shadow-2xl relative overflow-hidden">
        {/* Ghost Watermark */}
        <div className="absolute inset-0 opacity-[0.02] text-white font-black text-[20vw] leading-none select-none pointer-events-none flex items-center justify-center">
          SYSTEMS
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-24 space-y-4">
            <p className="text-[#10b9bd] font-black uppercase tracking-[0.6em] text-[10px]">The Foundation</p>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">Why It Works.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { 
                title: "Biological Diagnostics", 
                desc: "We analyze blood profiles and hormone levels to identify the metabolic blocks preventing your progress.",
                label: "01"
              },
              { 
                title: "Targeted Protocols", 
                desc: "Custom-engineered pharmacotherapy and clinical nutrition designed to reverse insulin resistance.",
                label: "02"
              },
              { 
                title: "Scalable Results", 
                desc: "We focus on building a permanent metabolic ceiling that prevents the 'rebound' weight gain effect.",
                label: "03"
              }
            ].map((pillar, i) => (
              <div key={i} className="group p-12 bg-[#1e293b]/30 hover:bg-[#1e293b]/60 transition-all border border-slate-800 flex flex-col justify-between aspect-square md:aspect-auto min-h-[400px]">
                <div>
                   <p className="text-4xl font-black text-[#10b9bd]/20 group-hover:text-[#10b9bd]/40 transition-colors mb-10">{pillar.label}</p>
                   <h4 className="text-2xl font-black uppercase tracking-tight mb-6">{pillar.title}</h4>
                   <p className="text-slate-400 text-lg leading-relaxed font-medium">{pillar.desc}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:bg-[#10b9bd] group-hover:border-[#10b9bd] transition-all">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION: THE FINAL PITCH ================= */}
      <section className="py-40 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#0f172a] mb-12 leading-[0.95]">
            Ready to Integrate <br/>
            <span className="text-slate-300 italic font-serif">the New Science?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/services" className="w-full sm:w-auto bg-[#0f172a] text-white px-12 py-6 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-[#10b9bd] transition-all shadow-2xl">
              View Protocols
            </Link>
            <Link to="/book-appointment" className="w-full sm:w-auto px-12 py-6 rounded-2xl text-xs font-black uppercase tracking-widest border border-slate-200 hover:bg-slate-50 transition-all">
              Schedule Diagnostic
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default About;