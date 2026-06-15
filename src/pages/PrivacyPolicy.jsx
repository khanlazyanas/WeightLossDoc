import React from 'react';

const PrivacyPolicy = () => (
  <div className="font-sans text-[#0f172a] bg-[#fafafa] selection:bg-[#10b9bd] selection:text-white min-h-screen relative overflow-hidden">
    
    {/* Global Ambient Background */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-gradient-to-tr from-[#10b9bd]/10 to-transparent rounded-full blur-[120px]"></div>
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}></div>
    </div>

    {/* ================= PINNACLE BANNER ================= */}
    <section className="relative pt-32 md:pt-40 pb-24 md:pb-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto md:mx-0 text-center md:text-left">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-md border border-slate-200/60 text-[#0f172a] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-8 sm:mb-10 shadow-sm">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#10b9bd] animate-pulse"></span>
            Data Security Directive
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-[6.5rem] font-black tracking-tighter leading-[0.95] mb-6 sm:mb-10">
            Privacy <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#334155] to-[#10b9bd] pr-2">
              Protocol.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed mx-auto md:mx-0">
            The authoritative framework for clinical data protection, cryptographic security, and absolute patient confidentiality. Updated 2026.
          </p>
        </div>
      </div>
    </section>

    {/* ================= CONTENT AREA: THE DIRECTIVES ================= */}
    <section className="py-16 md:py-32 px-4 sm:px-6 bg-white border-t border-slate-100 rounded-t-[2.5rem] sm:rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.02)] relative z-10">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-4 sm:space-y-8">
          
          {/* Directive 01 */}
          <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 p-6 sm:p-10 rounded-[2rem] hover:bg-slate-50 transition-colors duration-500 border border-transparent hover:border-slate-100">
            <div className="md:col-span-4 relative">
              <div className="absolute left-[-1.5rem] sm:left-[-2.5rem] top-0 bottom-0 w-1 bg-[#10b9bd] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block"></div>
              <p className="text-[#10b9bd] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-3 sm:mb-4">Directive 01</p>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-[#0f172a] leading-[1.1]">Clinical <br className="hidden md:block"/>Confidentiality</h2>
            </div>
            <div className="md:col-span-8 flex items-center">
              <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                At <strong className="text-[#0f172a]">WeightLossDoc</strong>, under the authority of Dr. Abubakar Khan, we maintain a zero-compromise stance on biological data. We utilize heavily encrypted systems to ensure your medical markers, hormonal profiles, and personal identifiers are handled with the highest tier of clinical integrity.
              </p>
            </div>
          </div>

          {/* Directive 02 */}
          <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 p-6 sm:p-10 rounded-[2rem] hover:bg-slate-50 transition-colors duration-500 border border-transparent hover:border-slate-100">
            <div className="md:col-span-4 relative">
              <div className="absolute left-[-1.5rem] sm:left-[-2.5rem] top-0 bottom-0 w-1 bg-[#10b9bd] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block"></div>
              <p className="text-[#10b9bd] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-3 sm:mb-4">Directive 02</p>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-[#0f172a] leading-[1.1]">Intake <br className="hidden md:block"/>Parameters</h2>
            </div>
            <div className="md:col-span-8 flex flex-col justify-center">
              <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed font-medium mb-6">
                Our diagnostic engine strictly collects only the essential bio-data necessary to construct your metabolic roadmap, including:
              </p>
              <ul className="space-y-4">
                {[
                  'Biometric Identifiers (Age, Mass, Gender)', 
                  'Clinical Bio-markers (Medical History, Lab Reports)', 
                  'Communication Nodes (Verified Email, Phone)'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-[#0f172a] font-bold text-xs sm:text-sm uppercase tracking-widest bg-white/50 p-3 sm:p-4 rounded-xl border border-slate-100 group-hover:border-slate-200 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-[#10b9bd] shadow-[0_0_8px_#10b9bd]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Directive 03 */}
          <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 p-6 sm:p-10 rounded-[2rem] hover:bg-slate-50 transition-colors duration-500 border border-transparent hover:border-slate-100">
            <div className="md:col-span-4 relative">
              <div className="absolute left-[-1.5rem] sm:left-[-2.5rem] top-0 bottom-0 w-1 bg-[#10b9bd] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block"></div>
              <p className="text-[#10b9bd] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-3 sm:mb-4">Directive 03</p>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-[#0f172a] leading-[1.1]">System <br className="hidden md:block"/>Utilization</h2>
            </div>
            <div className="md:col-span-8 flex items-center">
              <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                Data is exclusively utilized for metabolic engineering, protocol prescription, and real-time biometric monitoring. We categorically refuse to engage with third-party data marketplaces. Your information remains permanently within the secure clinical perimeter of our ecosystem.
              </p>
            </div>
          </div>

          {/* Contact Terminal (Dark Secure Vault UI) */}
          <div className="mt-16 sm:mt-24 p-10 sm:p-16 md:p-20 bg-[#0f172a] rounded-[2rem] sm:rounded-[3rem] relative overflow-hidden group/box shadow-2xl">
            {/* Animated Glow & Security Pattern */}
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#10b9bd]/20 to-transparent rounded-full -mr-20 -mt-20 blur-3xl group-hover/box:scale-110 transition-transform duration-1000"></div>
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>

            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#10b9bd] animate-ping"></div>
                <p className="text-[#10b9bd] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em]">Privacy Terminal</p>
              </div>
              
              <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter leading-tight mb-8">
                Initiate Biological Data Inquiries <br className="hidden sm:block"/> or System Removal Requests.
              </h3>
              
              <a 
                href="mailto:privacy@weightlossdoc.com" 
                className="group/link flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-slate-700/50 hover:border-[#10b9bd]/50 px-6 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl transition-all duration-300"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover/link:text-[#10b9bd] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span className="text-sm sm:text-base md:text-xl font-black tracking-widest text-white group-hover/link:text-[#10b9bd] transition-colors">
                  privacy@weightlossdoc.com
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
);

export default PrivacyPolicy;