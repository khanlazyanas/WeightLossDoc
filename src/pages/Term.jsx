import React from 'react';

const Terms = () => (
  <div className="font-sans text-[#0f172a] bg-[#fafafa] selection:bg-[#10b9bd] selection:text-white min-h-screen relative overflow-hidden">
    
    {/* Global Ambient Background */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
      <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-gradient-to-bl from-[#10b9bd]/10 to-transparent rounded-full blur-[120px]"></div>
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}></div>
    </div>

    {/* ================= PINNACLE BANNER ================= */}
    <section className="relative pt-32 md:pt-40 pb-24 md:pb-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto md:mx-0 text-center md:text-left">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-md border border-slate-200/60 text-[#0f172a] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-8 sm:mb-10 shadow-sm">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#10b9bd] animate-pulse"></span>
            Legal Infrastructure
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-[6.5rem] font-black tracking-tighter leading-[0.95] mb-6 sm:mb-10">
            Service <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#334155] to-[#10b9bd] pr-2">
              Agreement.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed mx-auto md:mx-0">
            The definitive clinical protocols and governance framework established for patients entering the WeightLossDoc ecosystem.
          </p>
        </div>
      </div>
    </section>

    {/* ================= CONTENT AREA: THE PROTOCOL ================= */}
    <section className="py-16 md:py-32 px-4 sm:px-6 bg-white border-t border-slate-100 rounded-t-[2.5rem] sm:rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.02)] relative z-10">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-4 sm:space-y-8">
          
          {/* Article 01 */}
          <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 p-6 sm:p-10 rounded-[2rem] hover:bg-slate-50 transition-colors duration-500 border border-transparent hover:border-slate-100">
            <div className="md:col-span-4 relative">
              <div className="absolute left-[-1.5rem] sm:left-[-2.5rem] top-0 bottom-0 w-1 bg-[#10b9bd] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block"></div>
              <p className="text-[#10b9bd] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-3 sm:mb-4">Article 01</p>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-[#0f172a] leading-[1.1]">Medical <br className="hidden md:block"/>Jurisdiction</h2>
            </div>
            <div className="md:col-span-8 flex items-center">
              <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                All digital content, including metabolic insights and protocol previews, is intended for <strong className="text-[#0f172a]">Informational Architecture</strong> only. While Dr. Abubakar Khan is a board-certified specialist, digital interaction does not constitute a physical clinical diagnosis. Professional medical guidance is strictly reserved for private, authenticated consultations.
              </p>
            </div>
          </div>

          {/* Article 02 */}
          <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 p-6 sm:p-10 rounded-[2rem] hover:bg-slate-50 transition-colors duration-500 border border-transparent hover:border-slate-100">
            <div className="md:col-span-4 relative">
              <div className="absolute left-[-1.5rem] sm:left-[-2.5rem] top-0 bottom-0 w-1 bg-[#10b9bd] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block"></div>
              <p className="text-[#10b9bd] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-3 sm:mb-4">Article 02</p>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-[#0f172a] leading-[1.1]">Scheduling <br className="hidden md:block"/>Governance</h2>
            </div>
            <div className="md:col-span-8 flex items-center">
              <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                Diagnostic evaluations must be confirmed within a strict 24-hour window prior to the appointment node. WeightLossDoc reserves the clinical authority to reschedule sessions based on surgeon availability and emergency triage protocols to ensure peak patient safety and focus.
              </p>
            </div>
          </div>

          {/* Article 03 */}
          <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 p-6 sm:p-10 rounded-[2rem] hover:bg-slate-50 transition-colors duration-500 border border-transparent hover:border-slate-100">
            <div className="md:col-span-4 relative">
              <div className="absolute left-[-1.5rem] sm:left-[-2.5rem] top-0 bottom-0 w-1 bg-[#10b9bd] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block"></div>
              <p className="text-[#10b9bd] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-3 sm:mb-4">Article 03</p>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-[#0f172a] leading-[1.1]">Bio-Metric <br className="hidden md:block"/>Variability</h2>
            </div>
            <div className="md:col-span-8 flex items-center">
              <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                Metabolic optimization results are dynamically subject to individual biological markers, genetic predisposition, and unwavering adherence to the <strong className="text-[#0f172a]">Core Action Plan</strong>. We provide the highest tier of clinical engineering, but patient compliance is the primary variable for successful biological shifting.
              </p>
            </div>
          </div>

          {/* Final Statement / Legal Terminal */}
          <div className="mt-16 sm:mt-24 p-10 sm:p-16 md:p-20 bg-[#0f172a] rounded-[2rem] sm:rounded-[3rem] text-center relative overflow-hidden group/box shadow-2xl">
            {/* Animated Glow & Security Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#10b9bd]/20 via-[#0f172a] to-[#0f172a] opacity-0 group-hover/box:opacity-100 transition-opacity duration-1000"></div>
            <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#10b9bd]/15 to-transparent rounded-full -ml-20 -mt-20 blur-3xl group-hover/box:scale-110 transition-transform duration-1000"></div>
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>

            <div className="relative z-10 flex flex-col items-center">
              <p className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-relaxed max-w-3xl mx-auto italic font-serif">
                "By engaging with this platform or initializing a diagnostic evaluation, you acknowledge and integrate these professional clinical terms into your journey."
              </p>
              
              <div className="mt-12 flex flex-col items-center gap-4">
                 <div className="w-16 h-px bg-[#10b9bd]/50"></div>
                 <div className="inline-flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#10b9bd] animate-ping"></div>
                   <p className="text-[#10b9bd] text-[8px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em]">WeightLossDoc Legal Terminal</p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
);

export default Terms;