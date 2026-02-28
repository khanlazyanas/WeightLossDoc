import React from 'react';

const Terms = () => (
  <div className="font-sans text-[#0f172a] bg-white selection:bg-[#10b9bd] selection:text-white min-h-screen">
    
    {/* ================= PINNACLE BANNER ================= */}
    <section className="relative pt-32 pb-40 px-6 overflow-hidden bg-[#f8fafc]">
      {/* Technical Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 bg-[#0f172a] text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-[#10b9bd]"></span>
            Legal Infrastructure
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.9] mb-10">
            Service <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b9bd] via-[#0ea5e9] to-[#0f172a]">
              Agreement.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            Clinical protocols and governance framework for patients entering the WeightLossDoc ecosystem.
          </p>
        </div>
      </div>
    </section>

    {/* ================= CONTENT AREA: THE PROTOCOL ================= */}
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-32">
          
          {/* Article 01 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-slate-100 pt-16 group">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#10b9bd] mb-4">Article 01</p>
              <h2 className="text-2xl font-black uppercase tracking-tighter">Medical <br/>Jurisdiction</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                All digital content, including metabolic insights and protocol previews, is for <strong>Informational Architecture</strong> only. While Dr. Abubakar Khan is a board-certified specialist, digital interaction does not constitute a physical clinical diagnosis. Professional medical guidance is strictly reserved for private, authenticated consultations.
              </p>
            </div>
          </div>

          {/* Article 02 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-slate-100 pt-16 group">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#10b9bd] mb-4">Article 02</p>
              <h2 className="text-2xl font-black uppercase tracking-tighter">Scheduling <br/>Governance</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                Evaluations must be confirmed within a 24-hour window prior to the appointment node. WeightLossDoc reserves the clinical authority to reschedule sessions based on surgeon availability and emergency triage protocols to ensure peak patient safety.
              </p>
            </div>
          </div>

          {/* Article 03 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-slate-100 pt-16 group">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#10b9bd] mb-4">Article 03</p>
              <h2 className="text-2xl font-black uppercase tracking-tighter">Bio-Metric <br/>Variability</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                Metabolic optimization results are subject to individual biological markers, genetic predisposition, and adherence to the <strong>Core Action Plan</strong>. We provide the highest tier of clinical engineering, but patient input is the primary variable for successful biological shifting.
              </p>
            </div>
          </div>

          {/* Final Statement */}
          <div className="mt-20 p-12 lg:p-20 bg-[#0f172a] rounded-[4rem] text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#10b9bd]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <p className="text-white text-xl md:text-2xl font-black tracking-tight leading-relaxed max-w-3xl mx-auto">
                "By engaging with this platform or initializing a diagnostic evaluation, you acknowledge and integrate these professional clinical terms into your journey."
              </p>
              <div className="mt-10 flex flex-col items-center gap-4">
                 <div className="w-12 h-px bg-[#10b9bd]"></div>
                 <p className="text-[#10b9bd] text-[10px] font-black uppercase tracking-[0.5em]">WeightLossDoc Legal Terminal</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
);

export default Terms;