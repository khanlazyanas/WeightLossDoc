import React from 'react';

const CookiePolicy = () => (
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
            System Preference Node
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-[6.5rem] font-black tracking-tighter leading-[0.95] mb-6 sm:mb-10">
            Cookie <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#334155] to-[#10b9bd] pr-2">
              Protocol.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed mx-auto md:mx-0">
            Technical documentation detailing how we utilize localized data packets to optimize your clinical digital interface.
          </p>
        </div>
      </div>
    </section>

    {/* ================= CONTENT AREA: THE PARAMETERS ================= */}
    <section className="py-16 md:py-32 px-4 sm:px-6 bg-white border-t border-slate-100 rounded-t-[2.5rem] sm:rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.02)] relative z-10">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-4 sm:space-y-8">
          
          {/* Parameter 01 */}
          <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 p-6 sm:p-10 rounded-[2rem] hover:bg-slate-50 transition-colors duration-500 border border-transparent hover:border-slate-100">
            <div className="md:col-span-4 relative">
              <div className="absolute left-[-1.5rem] sm:left-[-2.5rem] top-0 bottom-0 w-1 bg-[#10b9bd] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block"></div>
              <p className="text-[#10b9bd] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-3 sm:mb-4">Parameter 01</p>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-[#0f172a] leading-[1.1]">Packet <br className="hidden md:block"/>Definition</h2>
            </div>
            <div className="md:col-span-8 flex items-center">
              <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                Cookies are strictly regulated data packets stored on your local hardware to assist our system in recognizing your secure session. At <strong className="text-[#0f172a]">WeightLossDoc</strong>, we exclusively utilize these packets to streamline your consultation flow and retain your biological diagnostic preferences.
              </p>
            </div>
          </div>

          {/* Parameter 02 */}
          <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 p-6 sm:p-10 rounded-[2rem] hover:bg-slate-50 transition-colors duration-500 border border-transparent hover:border-slate-100">
            <div className="md:col-span-4 relative">
              <div className="absolute left-[-1.5rem] sm:left-[-2.5rem] top-0 bottom-0 w-1 bg-[#10b9bd] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block"></div>
              <p className="text-[#10b9bd] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-3 sm:mb-4">Parameter 02</p>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-[#0f172a] leading-[1.1]">System <br className="hidden md:block"/>Optimization</h2>
            </div>
            <div className="md:col-span-8 flex items-center">
              <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                We employ essential packets for core system functionality and analytical nodes (via end-to-end encrypted monitoring) to identify which metabolic programs provide the highest value. This intelligence allows us to scale our clinical protocols based on real, anonymized user interaction.
              </p>
            </div>
          </div>

          {/* Parameter 03 */}
          <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 p-6 sm:p-10 rounded-[2rem] hover:bg-slate-50 transition-colors duration-500 border border-transparent hover:border-slate-100">
            <div className="md:col-span-4 relative">
              <div className="absolute left-[-1.5rem] sm:left-[-2.5rem] top-0 bottom-0 w-1 bg-[#10b9bd] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block"></div>
              <p className="text-[#10b9bd] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-3 sm:mb-4">Parameter 03</p>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-[#0f172a] leading-[1.1]">User <br className="hidden md:block"/>Governance</h2>
            </div>
            <div className="md:col-span-8 flex items-center">
              <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                You maintain total sovereign authority over your local data. Packet storage can be permanently restricted through your browser's terminal settings. However, be advised that disabling essential clinical cookies will degrade the performance of our high-precision intake portals.
              </p>
            </div>
          </div>

          {/* Diagnostic Status Box (Call to Action) */}
          <div className="mt-16 sm:mt-24 p-8 sm:p-12 md:p-16 bg-[#0f172a] rounded-[2rem] sm:rounded-[3rem] relative overflow-hidden group/box shadow-2xl">
            {/* Animated Glow */}
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#10b9bd]/20 to-transparent rounded-full -mr-20 -mt-20 blur-3xl group-hover/box:scale-110 transition-transform duration-1000"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
              <div className="text-left flex-1">
                <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#10b9bd] animate-ping"></div>
                  <p className="text-[#10b9bd] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em]">Technical Support</p>
                </div>
                <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter leading-tight">
                  Queries regarding your <br className="hidden sm:block"/> data packets?
                </h3>
              </div>
              
              <a 
                href="mailto:care@weightlossdoc.com" 
                className="group/btn relative overflow-hidden w-full md:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#0f172a] rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-[0_15px_30px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,189,0.4)] transition-all duration-300 active:scale-95 text-center flex items-center justify-center gap-3 shrink-0"
              >
                <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">Contact System Admin</span>
                <svg className="w-3 sm:w-4 h-3 sm:h-4 relative z-10 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                {/* Fill Effect */}
                <div className="absolute inset-0 h-full w-0 bg-[#10b9bd] transition-all duration-300 ease-out group-hover/btn:w-full z-0"></div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
);

export default CookiePolicy;