import React from 'react';

const CookiePolicy = () => (
  <div className="font-sans text-[#0f172a] bg-white selection:bg-[#10b9bd] selection:text-white min-h-screen">
    
    {/* ================= PINNACLE BANNER ================= */}
    <section className="relative pt-32 pb-40 px-6 overflow-hidden bg-[#f8fafc]">
      {/* Technical Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 bg-[#0f172a] text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-[#10b9bd]"></span>
            System Preference Node
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.9] mb-10">
            Cookie <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b9bd] via-[#0ea5e9] to-[#0f172a]">
              Protocol.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            Technical documentation on how we utilize data packets to optimize your clinical digital interface.
          </p>
        </div>
      </div>
    </section>

    {/* ================= CONTENT AREA: THE PARAMETERS ================= */}
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-32">
          
          {/* Parameter 01 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-slate-100 pt-16">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#10b9bd] mb-4">Parameter 01</p>
              <h2 className="text-2xl font-black uppercase tracking-tighter">Packet <br/>Definition</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                Cookies are small data packets stored on your local hardware to assist our system in recognizing your session. At <strong>WeightLossDoc</strong>, we utilize these packets to streamline your consultation flow and remember your biological diagnostic preferences.
              </p>
            </div>
          </div>

          {/* Parameter 02 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-slate-100 pt-16">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#10b9bd] mb-4">Parameter 02</p>
              <h2 className="text-2xl font-black uppercase tracking-tighter">System <br/>Optimization</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                We employ essential packets for core system functionality and analytical nodes (via encrypted monitoring) to identify which metabolic programs are providing the most value to our community. This allows us to scale our clinical content based on real user interaction.
              </p>
            </div>
          </div>

          {/* Parameter 03 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-slate-100 pt-16">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#10b9bd] mb-4">Parameter 03</p>
              <h2 className="text-2xl font-black uppercase tracking-tighter">User <br/>Governance</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                You maintain total authority over your local data. Packet storage can be restricted through your browser terminal settings. However, disabling essential clinical cookies may impact the performance of our high-precision intake forms.
              </p>
            </div>
          </div>

          {/* Diagnostic Status Box */}
          <div className="mt-20 p-12 lg:p-16 bg-[#0f172a] rounded-[3rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b9bd] opacity-5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <p className="text-[#10b9bd] text-[10px] font-black uppercase tracking-[0.4em] mb-2">Technical Support</p>
                <p className="text-white text-xl font-bold">Have questions about your data packets?</p>
              </div>
              <a 
                href="mailto:support@weightlossdoc.com" 
                className="px-10 py-5 bg-white text-[#0f172a] rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#10b9bd] hover:text-white transition-all shadow-2xl"
              >
                Contact System Admin
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
);

export default CookiePolicy;