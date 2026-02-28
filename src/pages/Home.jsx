import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Image ko yahan import karein (Ensure the path is correct based on your folder structure)
import DrAbubakarImg from '../assets/drabubakarkhan.png'; 

const Home = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');
  const [counter, setCounter] = useState(15420);

  // Live Counter Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + Math.floor(Math.random() * 2));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const hMetres = height / 100;
      const bmiValue = (weight / (hMetres * hMetres)).toFixed(1);
      setBmi(bmiValue);
      if (bmiValue < 18.5) setMessage('Under-optimized');
      else if (bmiValue < 25) setMessage('Peak Condition');
      else if (bmiValue < 30) setMessage('Metabolic Strain');
      else setMessage('Clinical Intervention Required');
    }
  };

  return (
    <div className="font-sans text-[#0f172a] bg-white selection:bg-[#10b9bd] selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-40 px-6 overflow-hidden bg-[#f8fafc]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 bg-[#0f172a] text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-2xl">
                <span className="w-2 h-2 rounded-full bg-[#10b9bd] animate-pulse"></span>
                Next-Gen Metabolic Engineering
              </div>

              <h1 className="text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.9] mb-10">
                Forget Diets. <br/>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#10b9bd] via-[#0ea5e9] to-[#0f172a]">
                  Fix Biology.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-500 font-medium mb-12 max-w-2xl leading-relaxed">
                We use precision medicine and metabolic data to reverse obesity at the cellular level. Private. Clinical. Guaranteed.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                <Link to="/services" className="w-full sm:w-auto bg-[#0f172a] text-white px-12 py-6 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-[#10b9bd] transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(15,23,42,0.3)] active:scale-95">
                  Start Evaluation
                </Link>
                <Link to="/transformations" className="group flex items-center gap-4 py-4">
                   <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:border-[#10b9bd] transition-all">
                      <svg className="w-5 h-5 text-[#0f172a] group-hover:text-[#10b9bd]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/></svg>
                   </div>
                   <span className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-[#0f172a]">The Data Lab</span>
                </Link>
              </div>
            </div>

            {/* HERO IMAGE SECTION WITH YOUR IMAGE */}
            <div className="w-full lg:w-2/5 relative">
               <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-12 border-white aspect-4/5">
                  <img 
                    src={DrAbubakarImg} 
                    alt="Dr. Abubakar Khan" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0f172a]/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-10 left-10 text-white">
                    <p className="text-3xl md:text-4xl font-black tracking-tighter leading-tight">Dr. Abubakar <br/> Khan</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.4em] text-[#10b9bd] mt-2">Chief Medical Officer</p>
                  </div>
               </div>
               
               {/* --- CHANGED POSITION FROM TOP TO BOTTOM TO AVOID COVERING FACE --- */}
               <div className="absolute -right-10 bottom-20 bg-white p-8 rounded-4xl shadow-2xl border border-slate-100 hidden xl:block">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Total Bio-Mass Lost</p>
                  <p className="text-4xl font-black tracking-tighter text-[#0f172a]">{counter.toLocaleString()} kg</p>
                  <div className="w-full h-1 bg-slate-100 mt-4 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-[#10b9bd]"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= METABOLIC INTELLIGENCE (BMI) ================= */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 bg-[#0f172a] rounded-[4rem] overflow-hidden shadow-2xl border-16 border-[#0f172a]">
             
             <div className="bg-white p-12 lg:p-20 flex flex-col justify-center rounded-[3rem]">
               <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-8">Bio-Data <br/>Analysis.</h2>
               <p className="text-slate-500 text-lg font-medium mb-12 leading-relaxed">
                 Our system evaluates your current biological state before designing your personalized metabolic protocol.
               </p>
               <form onSubmit={calculateBMI} className="space-y-8">
                  <div className="flex gap-8">
                     <div className="w-1/2 space-y-2 border-b-2 border-slate-100 focus-within:border-[#10b9bd] transition-all">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Weight / KG</label>
                       <input type="number" required value={weight} onChange={(e)=>setWeight(e.target.value)} className="w-full py-4 text-3xl font-black outline-none bg-transparent" placeholder="00" />
                     </div>
                     <div className="w-1/2 space-y-2 border-b-2 border-slate-100 focus-within:border-[#10b9bd] transition-all">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Height / CM</label>
                       <input type="number" required value={height} onChange={(e)=>setHeight(e.target.value)} className="w-full py-4 text-3xl font-black outline-none bg-transparent" placeholder="000" />
                     </div>
                  </div>
                  <button type="submit" className="bg-[#0f172a] text-white px-10 py-5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-[#10b9bd] transition-all w-full lg:w-auto">Run Diagnostic</button>
               </form>
             </div>

             <div className="bg-[#0f172a] p-12 lg:p-20 flex flex-col items-center justify-center text-center">
                {!bmi ? (
                  <div className="text-slate-500 space-y-4">
                     <div className="w-20 h-20 border-4 border-slate-800 border-t-[#10b9bd] rounded-full animate-spin mx-auto"></div>
                     <p className="text-[10px] font-black uppercase tracking-[0.4em]">Waiting for Input</p>
                  </div>
                ) : (
                  <div className="animate-in zoom-in duration-700">
                     <p className="text-[#10b9bd] text-[10px] font-black uppercase tracking-[0.5em] mb-4">Diagnostic Complete</p>
                     <h3 className="text-8xl lg:text-[10rem] font-black text-white leading-none mb-6">{bmi}</h3>
                     <p className="text-2xl font-bold text-slate-400 italic">"{message}"</p>
                     <Link to="/book-appointment" className="mt-12 inline-block border-b-2 border-[#10b9bd] text-white pb-2 font-black uppercase tracking-widest text-[10px] hover:text-[#10b9bd] transition-all">Request Clinical Protocol</Link>
                  </div>
                )}
             </div>
           </div>
        </div>
      </section>

      {/* ================= CLINICAL SUCCESS STATS ================= */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto max-w-7xl px-6">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
             {[
               { val: "98.2%", label: "Metabolic Success" },
               { val: "10Y+", label: "R&D Experience" },
               { val: "15k+", label: "Patients Optimized" },
               { val: "24/7", label: "Medical Monitoring" }
             ].map((stat, i) => (
               <div key={i} className="space-y-2">
                  <p className="text-5xl font-black tracking-tighter">{stat.val}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* ================= THE SCIENCE SECTION ================= */}
      <section className="py-40 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="w-full lg:w-1/2 relative group">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-1000">
                 <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" alt="Tech Lab" className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-all" />
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b9bd] rounded-full blur-[120px] -z-10 opacity-20"></div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-0.5 bg-[#10b9bd]"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#10b9bd]">Clinical Authority</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.95]">Precision Care. <br/><span className="text-slate-300">No Character Flaws.</span></h2>
              <div className="space-y-8 text-slate-500 text-xl leading-relaxed font-medium max-w-xl">
                <p>We treat obesity as a <strong>biological dysfunction</strong>, not a lack of willpower. Led by Dr. Abubakar Khan, our protocols are engineered to solve Insulin Resistance and Hormonal Imbalance.</p>
                <p>This is not a diet. This is a complete metabolic reset using the latest in clinical nutrition and pharmacotherapy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE PROGRAMS ================= */}
      <section className="py-40 px-6 bg-[#0f172a] text-white rounded-[4rem] lg:mx-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="max-w-2xl">
              <p className="text-[#10b9bd] font-black uppercase tracking-[0.6em] text-[10px] mb-6">The Lab</p>
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">Standardized <br/>Optimization.</h3>
            </div>
            <Link to="/services" className="px-10 py-5 border border-slate-700 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#0f172a] transition-all">All Protocols</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Metabolic Nutrition", desc: "Targeted macronutrient engineering to force lipid oxidation.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { title: "Pharmacotherapy", desc: "FDA-approved biological intervention for appetite regulation.", icon: "M19.428 15.428a2 2 0 00-1.022-.547" },
              { title: "Bariatric Care", desc: "Pre and post-operative clinical management for severe obesity.", icon: "M9 12l2 2 4-4" }
            ].map((p, i) => (
              <div key={i} className="p-12 rounded-[3rem] border border-slate-800 hover:bg-[#1e293b] transition-all group">
                <div className="w-16 h-16 bg-[#10b9bd] rounded-2xl mb-10 flex items-center justify-center text-[#0f172a] group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d={p.icon} strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">{p.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium mb-10">{p.desc}</p>
                <Link to="/services" className="text-[10px] font-black uppercase tracking-[0.3em] text-[#10b9bd] hover:text-white transition-colors">Integrate →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PINNACLE FAQ & CLINICAL INTAKE ================= */}
      <section className="py-40 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <h3 className="text-[10px] font-black uppercase tracking-[0.8em] text-slate-300">Support / FAQ</h3>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#0f172a]">Common Queries.</h2>
        </div>
        
        <div className="space-y-6">
          {[
            { 
              q: "Is this medically supervised?", 
              a: "Every protocol is managed directly by Board Certified specialists. We monitor blood biomarkers and hormonal profiles throughout to ensure absolute clinical safety." 
            },
            { 
              q: "How fast are the results?", 
              a: "Biological optimization begins within 48 hours. Visible physical transformation and significant metabolic shifts typically scale after 14 days of strict adherence." 
            },
            { 
              q: "Do you treat PCOD and Thyroid issues?", 
              a: "Yes. Our specialty lies in managing metabolic weight gain caused by hormonal imbalances like PCOD, Hypothyroidism, and Insulin Resistance using FDA-approved clinical paths." 
            },
            { 
              q: "Is the weight loss permanent?", 
              a: "Our goal is 'Metabolic Set-Point' shifting. By correcting the root hormonal cause, we help your body maintain its new weight without the typical 'yo-yo' effect of crash diets." 
            },
            { 
              q: "Can I consult online (Tele-Medicine)?", 
              a: "We offer secure, end-to-end encrypted video consultations for patients globally, providing the same level of diagnostic precision as our physical clinic." 
            }
          ].map((f, i) => (
            <details key={i} className="group bg-[#f8fafc] rounded-[2.5rem] border border-transparent hover:border-slate-200 transition-all duration-700 overflow-hidden">
              <summary className="list-none p-10 flex items-center justify-between cursor-pointer focus:outline-none">
                <span className="text-lg font-black uppercase tracking-tight text-[#0f172a]">{f.q}</span>
                <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[#10b9bd] group-open:rotate-45 group-open:bg-[#0f172a] group-open:text-white transition-all duration-700 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6v12m6-6H6" strokeWidth="2.5" strokeLinecap="round"/></svg>
                </div>
              </summary>
              <div className="px-10 pb-10 text-slate-500 font-medium leading-relaxed text-lg animate-in fade-in slide-in-from-top-4 duration-700">
                {f.a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-32 text-center">
          <Link 
            to="/book-appointment" 
            className="group relative inline-flex items-center justify-center px-16 py-9 rounded-full border border-slate-200 bg-white overflow-hidden transition-all duration-1000 hover:border-[#0f172a] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] active:scale-95"
          >
            <div className="absolute inset-0 top-full bg-[#0f172a] transition-all duration-[600ms] ease-[cubic-bezier(0.85,0,0.15,1)] group-hover:top-0"></div>
            
            <div className="relative flex items-center gap-8">
              <span className="text-[11px] font-black uppercase tracking-[0.6em] text-[#0f172a] group-hover:text-white transition-colors duration-500">
                Begin Clinical Intake
              </span>
              
              <div className="relative flex items-center justify-center">
                <svg 
                  className="w-5 h-5 text-[#0f172a] group-hover:text-white group-hover:translate-x-2 transition-all duration-500 ease-out" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
          
          <div className="mt-12 flex items-center justify-center gap-6 opacity-30">
             <div className="w-12 h-px bg-slate-400"></div>
             <p className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-500">Protocol v4.0</p>
             <div className="w-12 h-px bg-slate-400"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;