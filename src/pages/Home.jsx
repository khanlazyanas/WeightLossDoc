import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DrAbubakarImg from '../assets/drabubakarkhan.png'; 

const Home = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const [counter, setCounter] = useState(15420);

  // Live Counter Simulation (Smooth increment for premium feel)
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + Math.floor(Math.random() * 3));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const calculateBMI = (e) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (w > 0 && h > 0) {
      const hMetres = h / 100;
      const bmiValue = (w / (hMetres * hMetres)).toFixed(1);
      
      let status = '';
      let colorClass = '';

      if (bmiValue < 18.5) {
        status = 'Under-optimized Biomarkers';
        colorClass = 'text-blue-400';
      } else if (bmiValue < 25) {
        status = 'Peak Metabolic Condition';
        colorClass = 'text-[#10b9bd]'; // Brand Teal
      } else if (bmiValue < 30) {
        status = 'Mild Metabolic Strain Detected';
        colorClass = 'text-amber-500'; // Warning Orange
      } else {
        status = 'Clinical Intervention Required';
        colorClass = 'text-rose-500'; // Critical Red
      }

      setBmiResult({ value: bmiValue, status, colorClass });
    }
  };

  return (
    <div className="font-sans text-[#0f172a] bg-[#fafafa] selection:bg-[#10b9bd] selection:text-white min-h-screen relative overflow-hidden">
      
      {/* Global Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}></div>
      </div>

      {/* ================= ULTRA PREMIUM HERO SECTION ================= */}
      <section className="relative pt-24 md:pt-32 pb-24 md:pb-32 px-4 sm:px-6">
        
        {/* Ambient Clinical Glow */}
        <div className="absolute top-[-10%] left-[-10%] md:top-[-20%] w-[30rem] md:w-[50rem] h-[30rem] md:h-[50rem] bg-gradient-to-br from-[#10b9bd]/15 to-transparent rounded-full blur-[100px] md:blur-[150px] pointer-events-none -z-10"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            
            {/* Left Content */}
            <div className="w-full lg:w-3/5 text-center lg:text-left mt-8 lg:mt-0">
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-md border border-slate-200/60 text-[#0f172a] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-8 sm:mb-10 shadow-sm">
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#10b9bd] animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
                Next-Gen Metabolic Engineering
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[7.5rem] font-black tracking-tighter leading-[1] md:leading-[0.9] mb-6 sm:mb-8">
                Forget Diets. <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#334155] to-[#10b9bd] pr-2">
                  Fix Biology.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-slate-500 font-medium mb-10 sm:mb-12 max-w-xl md:max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Precision medicine and metabolic data applied to reverse obesity at the cellular level. <strong className="text-[#0f172a] border-b border-slate-300 pb-0.5">Private. Clinical. Guaranteed.</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                <Link to="/apply" className="group relative overflow-hidden w-full sm:w-auto text-center bg-[#0f172a] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-[0_20px_40px_-15px_rgba(15,23,42,0.5)] hover:shadow-[0_20px_40px_-15px_rgba(16,185,189,0.5)] active:scale-95 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#10b9bd] to-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Apply For Evaluation
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </span>
                </Link>
                <Link to="/transformations" className="group flex items-center justify-center w-full sm:w-auto gap-3 sm:gap-4 py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl hover:bg-slate-50 transition-all duration-300">
                   <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:border-[#10b9bd] group-hover:bg-[#10b9bd]/5 group-hover:shadow-md transition-all duration-300">
                      <svg className="w-4 sm:w-5 h-4 sm:h-5 text-[#0f172a] group-hover:text-[#10b9bd] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                   </div>
                   <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#0f172a] group-hover:text-[#10b9bd] transition-colors">The Data Lab</span>
                </Link>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="w-full lg:w-2/5 relative mt-8 lg:mt-0 px-4 sm:px-0">
               <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border-[6px] sm:border-[12px] border-white aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] bg-slate-100 group mx-auto max-w-md sm:max-w-none">
                  <div className="absolute inset-0 bg-slate-200 animate-pulse -z-10"></div>
                  <img 
                    src={DrAbubakarImg} 
                    alt="Dr. Abubakar Khan" 
                    className="relative w-full h-full object-cover object-top z-10 grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-[20%] transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/10 to-transparent z-20"></div>
                  
                  <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 text-white z-30">
                    <p className="text-2xl sm:text-4xl font-black tracking-tighter mb-1 leading-none">Dr. Abubakar<br/>Khan</p>
                    <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#10b9bd] mt-2">Chief Medical Officer</p>
                  </div>
               </div>
               
               {/* Floating Glassmorphism Stats Badge */}
               <div className="absolute -left-2 sm:-left-8 md:-left-12 top-10 sm:top-16 bg-white/85 backdrop-blur-xl p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white/60 z-40 animate-[bounce_4s_ease-in-out_infinite]">
                  <div className="flex items-center gap-3 sm:gap-4">
                     <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#10b9bd]/10 border border-[#10b9bd]/20 flex items-center justify-center text-[#10b9bd]">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                     </div>
                     <div>
                        <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-slate-500 mb-0.5 sm:mb-1">Bio-Mass Reduced</p>
                        <p className="text-xl sm:text-3xl font-black tracking-tighter text-[#0f172a] leading-none">{counter.toLocaleString()} <span className="text-xs sm:text-sm font-bold text-slate-400">kg</span></p>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CLINICAL AFFILIATIONS & PRESS ================= */}
      <section className="py-8 sm:py-10 bg-white border-y border-slate-100 overflow-hidden relative z-10 shadow-[0_5px_15px_-10px_rgba(0,0,0,0.05)]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-center text-[8px] sm:text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 sm:mb-8">
            Clinical Affiliations & Media Recognition
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16 md:gap-24 opacity-60 grayscale">
            <div className="text-lg sm:text-xl font-black tracking-tighter text-slate-800 hover:text-[#10b9bd] hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">APOLLO CLINIC</div>
            <div className="text-lg sm:text-xl font-black tracking-widest text-slate-800 hover:text-[#10b9bd] hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">MEDANTA</div>
            <div className="text-lg sm:text-xl font-bold font-serif text-slate-800 hover:text-[#10b9bd] hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">The Health Times</div>
            <div className="text-lg sm:text-xl font-black tracking-tighter text-slate-800 hover:text-[#10b9bd] hover:grayscale-0 hover:opacity-100 transition-all duration-300 uppercase cursor-default">Fortis</div>
            <div className="text-lg sm:text-xl font-black tracking-widest text-slate-800 hover:text-[#10b9bd] hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">PRACTO</div>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE CLINICAL DIAGNOSTIC (BMI) ================= */}
      <section className="py-20 md:py-32 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
           <div className="flex flex-col lg:flex-row bg-white rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
             
             {/* Left Input Form */}
             <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-20 flex flex-col justify-center relative z-10">
               <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                 <div className="w-6 sm:w-8 h-[2px] bg-[#10b9bd]"></div>
                 <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.4em] text-[#10b9bd]">Diagnostic Tool</span>
               </div>
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter mb-3 sm:mb-4 text-[#0f172a] leading-[1.05]">Metabolic <br className="hidden sm:block"/>Baseline.</h2>
               <p className="text-slate-500 text-xs sm:text-sm font-medium mb-8 sm:mb-12 leading-relaxed max-w-md">
                 Enter your current biological metrics to initiate a preliminary algorithmic assessment of your metabolic state.
               </p>

               <form onSubmit={calculateBMI} className="space-y-6 sm:space-y-8">
                  <div className="space-y-6 sm:space-y-8">
                     <div className="group relative border-b-2 border-slate-200 focus-within:border-[#10b9bd] transition-colors pb-1 sm:pb-2">
                       <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#10b9bd] transition-colors block mb-1">Current Weight (KG)</label>
                       <input type="number" step="0.1" required value={weight} onChange={(e)=>setWeight(e.target.value)} className="w-full pt-1 sm:pt-2 text-3xl sm:text-4xl font-black outline-none bg-transparent text-[#0f172a] placeholder:text-slate-200 transition-all" placeholder="00.0" />
                     </div>
                     <div className="group relative border-b-2 border-slate-200 focus-within:border-[#10b9bd] transition-colors pb-1 sm:pb-2">
                       <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#10b9bd] transition-colors block mb-1">Height (CM)</label>
                       <input type="number" required value={height} onChange={(e)=>setHeight(e.target.value)} className="w-full pt-1 sm:pt-2 text-3xl sm:text-4xl font-black outline-none bg-transparent text-[#0f172a] placeholder:text-slate-200 transition-all" placeholder="000" />
                     </div>
                  </div>
                  <button type="submit" className="bg-white border-2 border-[#0f172a] text-[#0f172a] px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-widest hover:bg-[#0f172a] hover:text-white transition-all duration-300 w-full lg:w-auto shadow-sm hover:shadow-xl mt-4 sm:mt-0 active:scale-95">
                    Compute Analysis
                  </button>
               </form>
             </div>

             {/* Right Result Panel */}
             <div className="w-full lg:w-1/2 bg-[#0f172a] p-8 sm:p-12 lg:p-20 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[350px] sm:min-h-[400px]">
               {/* Animated Background Mesh */}
               <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#10b9bd]/20 via-[#0f172a] to-[#0f172a] opacity-80"></div>
               
               {!bmiResult ? (
                 <div className="text-slate-400 space-y-4 sm:space-y-6 relative z-10 flex flex-col items-center">
                    <div className="w-16 sm:w-20 h-16 sm:h-20 border-[3px] border-slate-700/50 border-t-[#10b9bd] rounded-full animate-spin"></div>
                    <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Awaiting Telemetry</p>
                 </div>
               ) : (
                 <div className="animate-in fade-in zoom-in-95 duration-500 relative z-10 flex flex-col items-center w-full">
                    <p className="text-slate-400 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.5em] mb-2 sm:mb-4">Assessment Complete</p>
                    <h3 className={`text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-black leading-none mb-4 sm:mb-6 tracking-tighter ${bmiResult.colorClass} drop-shadow-lg`}>
                      {bmiResult.value}
                    </h3>
                    <div className="inline-block bg-slate-800/50 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-slate-700/50 mb-8 sm:mb-10 w-full max-w-[80%]">
                      <p className={`text-[10px] sm:text-xs font-black tracking-widest uppercase ${bmiResult.colorClass} truncate`}>{bmiResult.status}</p>
                    </div>
                    <Link to="/apply" className="group inline-flex items-center gap-2 text-white font-black text-[9px] sm:text-[10px] uppercase tracking-widest hover:text-[#10b9bd] transition-colors border-b border-transparent hover:border-[#10b9bd] pb-1">
                      Start Qualification Protocol 
                      <svg className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </Link>
                 </div>
               )}
             </div>

           </div>
        </div>
      </section>

      {/* ================= REFINED CLINICAL SUCCESS STATS ================= */}
      <section className="py-16 sm:py-24 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 sm:gap-y-16 gap-x-6 sm:gap-x-8 md:divide-x divide-slate-800/80">
             {[
               { val: "98.2%", label: "Metabolic Success" },
               { val: "10Y+", label: "R&D Experience" },
               { val: "15k+", label: "Patients Optimized" },
               { val: "24/7", label: "Medical Monitoring" }
             ].map((stat, i) => (
               <div key={i} className="text-center px-2 sm:px-4 group cursor-default">
                  <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-2 sm:mb-3 text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 group-hover:to-[#10b9bd] transition-colors duration-500">{stat.val}</p>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] text-slate-500 group-hover:text-white transition-colors duration-300">{stat.label}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* ================= THE SCIENCE SECTION ================= */}
      <section className="py-20 sm:py-32 lg:py-40 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
            
            <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8">
                <div className="w-6 sm:w-8 h-[2px] bg-[#10b9bd]"></div>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-[#10b9bd]">Clinical Authority</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 sm:mb-8 leading-[1] sm:leading-[0.95] text-[#0f172a]">
                Precision Care. <br className="hidden sm:block" />
                <span className="text-slate-300">No Guesswork.</span>
              </h2>
              <div className="space-y-4 sm:space-y-6 text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                <p>We treat weight resistance as a <strong className="text-[#0f172a] border-b border-[#10b9bd]/30 pb-0.5">biological dysfunction</strong>, not a lack of willpower. Led by Dr. Abubakar Khan, our protocols are meticulously engineered to solve Insulin Resistance and Hormonal Imbalance at their root.</p>
                <p>This is not a temporary diet plan. This is a complete metabolic reset utilizing the latest advancements in clinical nutrition and science-backed pharmacotherapy.</p>
              </div>
              <Link to="/about" className="group inline-flex items-center gap-3 mt-8 sm:mt-10 font-black text-[10px] sm:text-xs uppercase tracking-widest text-[#0f172a] hover:text-[#10b9bd] transition-colors">
                Read Our Methodology 
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-[#10b9bd]/10 group-hover:border-[#10b9bd]/30 transition-colors shadow-sm">
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </div>
              </Link>
            </div>

            <div className="w-full lg:w-1/2 relative group order-1 lg:order-2 px-4 sm:px-0">
              <div className="relative z-10 rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)] aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[600px] border-[6px] sm:border-[8px] border-white">
                 <div className="absolute inset-0 bg-slate-200 animate-pulse -z-10"></div>
                 <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" alt="Tech Lab" className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-1000" />
                 <div className="absolute inset-0 bg-[#0f172a]/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              {/* Decorative Accent Pattern */}
              <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-24 sm:w-40 h-24 sm:h-40 bg-[radial-gradient(#10b9bd_2px,transparent_0)] [background-size:12px_12px] sm:[background-size:16px_16px] opacity-30 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700 hidden sm:block"></div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ================= CORE PROGRAMS CARDS ================= */}
      <section className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 bg-white border-t border-slate-100 rounded-[3rem] sm:rounded-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.02)] relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24 space-y-3 sm:space-y-4">
            <p className="text-[#10b9bd] font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-[9px] sm:text-[10px]">Core Protocols</p>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-[#0f172a] leading-none">Standardized <br className="hidden sm:block"/>Optimization.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Metabolic Nutrition", desc: "Targeted macronutrient engineering to force lipid oxidation and stabilize insulin spikes safely.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { title: "Pharmacotherapy", desc: "FDA-approved biological intervention for appetite regulation and metabolic control.", icon: "M19.428 15.428a2 2 0 00-1.022-.547" },
              { title: "Bariatric Care", desc: "Comprehensive pre and post-operative clinical management for severe obesity cases.", icon: "M9 12l2 2 4-4" }
            ].map((p, i) => (
              <div key={i} className="bg-[#f8fafc] p-8 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-200/50 hover:bg-white shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(16,185,189,0.15)] hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#10b9bd]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 sm:w-16 h-14 sm:h-16 bg-white border border-slate-200 text-[#0f172a] rounded-2xl sm:rounded-[1.2rem] mb-6 sm:mb-8 flex items-center justify-center group-hover:bg-[#10b9bd] group-hover:text-white group-hover:border-[#10b9bd] transition-colors duration-500 shadow-sm">
                    <svg className="w-6 sm:w-7 h-6 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path d={p.icon} strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-[#0f172a] tracking-tight">{p.title}</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium mb-8 sm:mb-10 flex-grow">{p.desc}</p>
                </div>
                <Link to="/services" className="relative z-10 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-[#10b9bd] transition-colors mt-auto flex items-center gap-2">
                  View Protocol <svg className="w-3 sm:w-4 h-3 sm:h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= METABOLIC BLUEPRINT LEAD MAGNET (NEW SECTION) ================= */}
      <section className="py-20 md:py-32 px-4 sm:px-6 bg-[#10b9bd] relative z-10 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 bg-[#0f172a] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-2xl border border-slate-700/50">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-4 bg-white/10 px-3 py-1.5 rounded-md border border-white/20">
                <svg className="w-4 h-4 text-[#10b9bd]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/></svg>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#10b9bd]">Free Clinical Resource</span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter mb-4 leading-tight">Download The 7-Day Metabolic Reset.</h3>
              <p className="text-slate-400 text-sm font-medium mb-6">Discover the exact biological protocols Dr. Khan uses to reverse insulin resistance and force lipid oxidation. No calorie counting required.</p>
              
              <ul className="space-y-2 text-left inline-block lg:block">
                {['The Truth About Insulin Receptors', '14-Hour Biological Fasting Window', 'Clinical Macro-Nutrient Mapping'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-slate-300 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b9bd]"></span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-2xl p-6 sm:p-8">
                <h4 className="text-lg font-black text-[#0f172a] mb-6 text-center">Secure Your Blueprint</h4>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Data Captured! PDF Downloading..."); }}>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <input type="text" required className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl mt-1 outline-none focus:border-[#10b9bd] focus:bg-white transition-all text-sm font-medium" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">WhatsApp Number</label>
                    <input type="tel" required className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl mt-1 outline-none focus:border-[#10b9bd] focus:bg-white transition-all text-sm font-medium" placeholder="+91 00000 00000" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                    <input type="email" required className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl mt-1 outline-none focus:border-[#10b9bd] focus:bg-white transition-all text-sm font-medium" placeholder="your@email.com" />
                  </div>
                  <button type="submit" className="w-full bg-[#0f172a] text-white py-4 rounded-xl font-black uppercase tracking-widest text-[10px] sm:text-xs mt-2 hover:bg-[#10b9bd] transition-colors shadow-lg hover:shadow-xl active:scale-95">
                    Unlock & Download PDF
                  </button>
                </form>
                <p className="text-[8px] text-center text-slate-400 font-medium uppercase tracking-widest mt-4">Your data is cryptographically secured.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PINNACLE FAQ ================= */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-24 space-y-3 sm:space-y-4">
          <p className="text-[#10b9bd] font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-[9px] sm:text-[10px]">Knowledge Base</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-[#0f172a]">Common Queries.</h2>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          {[
            { q: "Is this medically supervised?", a: "Every protocol is managed directly by Board Certified specialists. We monitor blood biomarkers and hormonal profiles throughout to ensure absolute clinical safety." },
            { q: "How fast are the results?", a: "Biological optimization begins within 48 hours. Visible physical transformation and significant metabolic shifts typically scale after 14 days of strict adherence." },
            { q: "Do you treat PCOD and Thyroid issues?", a: "Yes. Our specialty lies in managing metabolic weight gain caused by hormonal imbalances like PCOD, Hypothyroidism, and Insulin Resistance." },
            { q: "Is the weight loss permanent?", a: "Our goal is 'Metabolic Set-Point' shifting. By correcting the root hormonal cause, we help your body maintain its new weight naturally without crash dieting." }
          ].map((f, i) => (
            <details key={i} className="group bg-white rounded-2xl sm:rounded-[2rem] border border-slate-200 hover:border-[#10b9bd]/50 hover:shadow-md transition-all duration-300 overflow-hidden">
              <summary className="list-none p-5 sm:p-6 md:p-8 flex items-center justify-between cursor-pointer focus:outline-none select-none">
                <span className="text-sm sm:text-base md:text-lg font-bold text-[#0f172a] pr-4">{f.q}</span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#10b9bd] group-open:bg-[#0f172a] group-open:text-white transition-colors duration-300 shadow-sm">
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                </span>
              </summary>
              <div className="px-5 sm:px-6 md:px-8 pb-6 sm:pb-8 text-slate-500 text-xs sm:text-sm md:text-base leading-relaxed border-t border-slate-50 pt-3 sm:pt-4 mt-1">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ================= FINAL CALL TO ACTION (Ultra Clean) ================= */}
      <section className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 bg-[#0f172a] text-white mx-4 sm:mx-6 md:mx-8 mb-6 sm:mb-8 rounded-[2.5rem] sm:rounded-[4rem] shadow-2xl relative overflow-hidden text-center group">
        {/* Subtle geometric animated background */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] group-hover:scale-105 transition-transform duration-[3000ms]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#10b9bd]/20 via-transparent to-transparent opacity-80 pointer-events-none"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#10b9bd] animate-ping"></div>
            <p className="text-[#10b9bd] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[8px] sm:text-[10px]">Take Action</p>
          </div>
          
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[1.05] sm:leading-[0.95] mb-10 sm:mb-12">
            Initiate Your <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Biological Shift.</span>
          </h2>
          
          <Link to="/apply" className="group relative overflow-hidden bg-white text-[#0f172a] px-10 sm:px-14 py-4 sm:py-6 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-widest shadow-[0_15px_30px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,189,0.4)] transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Reserve Diagnostic</span>
              <svg className="w-3 sm:w-4 h-3 sm:h-4 relative z-10 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              {/* Button Hover Fill Effect */}
              <div className="absolute inset-0 h-full w-0 bg-[#10b9bd] transition-all duration-300 ease-out group-hover:w-full z-0"></div>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;