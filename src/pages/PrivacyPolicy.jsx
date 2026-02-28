import React from 'react';

const PrivacyPolicy = () => (
  <div className="font-sans text-[#0f172a] bg-white selection:bg-[#10b9bd] selection:text-white min-h-screen">
    
    {/* ================= PINNACLE BANNER ================= */}
    <section className="relative pt-32 pb-40 px-6 overflow-hidden bg-[#f8fafc]">
      {/* Technical Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 bg-[#0f172a] text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-[#10b9bd]"></span>
            Data Security Directive
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.9] mb-10">
            Privacy <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b9bd] via-[#0ea5e9] to-[#0f172a]">
              Protocol.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            The WeightLossDoc framework for clinical data protection and patient confidentiality. Updated February 2026.
          </p>
        </div>
      </div>
    </section>

    {/* ================= CONTENT AREA: THE DIRECTIVE ================= */}
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-32">
          
          {/* Directive 01 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-slate-100 pt-16">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#10b9bd] mb-4">Directive 01</p>
              <h2 className="text-2xl font-black uppercase tracking-tighter">Clinical <br/>Confidentiality</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                At <strong>WeightLossDoc</strong>, under the authority of Dr. Abubakar Khan, we maintain a zero-compromise stance on biological data. We utilize encrypted systems to ensure your medical markers, hormonal profiles, and personal identifiers are handled with the highest tier of clinical integrity.
              </p>
            </div>
          </div>

          {/* Directive 02 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-slate-100 pt-16">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#10b9bd] mb-4">Directive 02</p>
              <h2 className="text-2xl font-black uppercase tracking-tighter">Intake <br/>Parameters</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-slate-500 text-lg leading-relaxed font-medium mb-6">
                Our diagnostic engine collects only essential bio-data necessary to construct your metabolic roadmap, including:
              </p>
              <ul className="space-y-4">
                {['Biometric Identifiers (Age, Mass, Gender)', 'Clinical Bio-markers (Medical History, Lab Reports)', 'Communication Nodes (Verified Email, Phone)'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-800 font-bold text-sm uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b9bd]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Directive 03 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-slate-100 pt-16">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#10b9bd] mb-4">Directive 03</p>
              <h2 className="text-2xl font-black uppercase tracking-tighter">System <br/>Utilization</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                Data is exclusively utilized for metabolic engineering, protocol prescription, and real-time biometric monitoring. We do not engage with third-party data marketplaces. Your information remains within the secure clinical perimeter of our ecosystem.
              </p>
            </div>
          </div>

          {/* Contact Terminal */}
          <div className="mt-20 p-12 lg:p-20 bg-[#f8fafc] rounded-[4rem] border border-slate-100 relative overflow-hidden group">
            <div className="relative z-10 text-center">
              <p className="text-slate-400 text-sm font-black uppercase tracking-[0.4em] mb-6">Privacy Terminal</p>
              <p className="text-[#0f172a] text-2xl font-black tracking-tight mb-8">
                For biological data inquiries or system removal requests:
              </p>
              <a 
                href="mailto:privacy@weightlossdoc.com" 
                className="text-2xl font-black text-[#10b9bd] border-b-4 border-[#10b9bd]/20 hover:border-[#10b9bd] transition-all"
              >
                privacy@weightlossdoc.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
);

export default PrivacyPolicy;