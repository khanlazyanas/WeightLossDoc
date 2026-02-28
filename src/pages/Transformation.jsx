import React from 'react';
import { Link } from 'react-router-dom';

const Transformations = () => {
  // Data array - Image variables are null for your local imports
  const successStories = [
    { id: 1, beforeImg: null, afterImg: null, name: "Rahul S.", lost: "15 kg", duration: "4 Months", tag: "Metabolic Reset" },
    { id: 2, beforeImg: null, afterImg: null, name: "Priya K.", lost: "12 kg", duration: "3 Months", tag: "PCOD Optimization" },
    { id: 3, beforeImg: null, afterImg: null, name: "Anil D.", lost: "10 kg", duration: "3 Months", tag: "Clinical Nutrition" },
    { id: 4, beforeImg: null, afterImg: null, name: "Neha W.", lost: "14 kg", duration: "5 Months", tag: "Post-Pregnancy" },
    { id: 5, beforeImg: null, afterImg: null, name: "Kavita R.", lost: "08 kg", duration: "2 Months", tag: "Diabetes Control" },
    { id: 6, beforeImg: null, afterImg: null, name: "Vikram J.", lost: "20 kg", duration: "6 Months", tag: "Bariatric Support" }
  ];

  return (
    <div className="font-sans text-[#0f172a] bg-white selection:bg-[#10b9bd] selection:text-white">
      
      {/* ================= PINNACLE BANNER ================= */}
      <section className="relative pt-32 pb-40 px-6 overflow-hidden bg-[#f8fafc]">
        {/* Technical Silicon Valley Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 bg-[#0f172a] text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-[#10b9bd] animate-pulse"></span>
              The Transformation Lab
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.9] mb-10">
              Biometric <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b9bd] via-[#0ea5e9] to-[#0f172a]">
                Proof.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
              We don't believe in stories. We believe in data. Explore our archive of clinical metabolic resets.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CLINICAL TRANSFORMATIONS GRID ================= */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {successStories.map((story) => (
              <div key={story.id} className="group space-y-10">
                
                {/* Image Frame Container */}
                <div className="relative flex w-full aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white bg-slate-50">
                  
                  {/* Before Frame */}
                  <div className="w-1/2 h-full relative overflow-hidden bg-slate-200 border-r-2 border-white/50">
                    {story.beforeImg ? (
                      <img src={story.beforeImg} alt="Before" className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"/>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2 opacity-20">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                        <span className="text-[10px] font-black uppercase tracking-widest">Base Data</span>
                      </div>
                    )}
                    <div className="absolute top-6 left-6 bg-[#0f172a]/80 backdrop-blur-md text-white text-[8px] font-black px-3 py-1.5 rounded-lg uppercase tracking-[0.2em]">Initial</div>
                  </div>

                  {/* After Frame */}
                  <div className="w-1/2 h-full relative overflow-hidden bg-white">
                    {story.afterImg ? (
                      <img src={story.afterImg} alt="After" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"/>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2 opacity-40">
                         <svg className="w-8 h-8 text-[#10b9bd]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                         <span className="text-[10px] font-black uppercase tracking-widest text-[#10b9bd]">Optimized</span>
                      </div>
                    )}
                    <div className="absolute top-6 right-6 bg-[#10b9bd] text-white text-[8px] font-black px-3 py-1.5 rounded-lg uppercase tracking-[0.2em]">Result</div>
                  </div>

                  {/* Central VS Badge */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl z-20 border border-slate-100">
                    <span className="text-[10px] font-black text-[#0f172a] italic">VS</span>
                  </div>
                </div>

                {/* Case Details */}
                <div className="px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div>
                    <p className="text-[#10b9bd] font-black uppercase tracking-[0.5em] text-[10px] mb-3">{story.tag}</p>
                    <h3 className="text-4xl font-black tracking-tighter text-[#0f172a]">{story.name}</h3>
                  </div>
                  
                  <div className="flex gap-4">
                     <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center min-w-[100px]">
                        <p className="text-2xl font-black text-[#0f172a] leading-none">{story.lost}</p>
                        <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">Mass Lost</p>
                     </div>
                     <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center min-w-[100px]">
                        <p className="text-2xl font-black text-[#0f172a] leading-none">{story.duration}</p>
                        <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">Window</p>
                     </div>
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= FINAL CALL TO ACTION ================= */}
      <section className="py-40 px-6 bg-[#0f172a] text-white rounded-[4rem] lg:mx-6 shadow-2xl relative overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,#10b9bd_0,transparent_70%)]"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <p className="text-[#10b9bd] font-black uppercase tracking-[0.8em] text-[10px] mb-12">Bio-Data Systems</p>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-12">
            Initiate Your <br/>
            <span className="italic font-serif text-slate-400">Biological Shift.</span>
          </h2>
          <Link to="/book-appointment" className="inline-block bg-white text-[#0f172a] px-16 py-8 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#10b9bd] hover:text-white transition-all duration-500 shadow-2xl active:scale-95">
             Reserve Evaluation Diagnostic
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Transformations;