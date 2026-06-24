import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  // Page load hote hi top par scroll karega
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Aapka original Calendly link jisme ads/details hide karne ki settings add ki gayi hain
  const calendlyUrl = "https://calendly.com/anaskhan995620/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=0f172a&primary_color=10b9bd";

  return (
    <div className="min-h-screen bg-[#0f172a] font-sans text-white selection:bg-[#10b9bd] selection:text-white pb-20 relative overflow-hidden">
      
      {/* Top Urgency Bar */}
      <div className="bg-rose-500/10 border-b border-rose-500/20 text-rose-400 py-3 text-center px-4 pt-6 sm:pt-3">
        <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
          Action Required: Your registration is incomplete. Please complete Step 2 below.
        </p>
      </div>

      {/* Ambient Clinical Glow */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[40rem] md:w-[60rem] h-[40rem] bg-[#10b9bd]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 pt-12 relative z-10 text-center">
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 leading-tight">
          Blueprint <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b9bd] to-[#0ea5e9]">Acquired.</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base font-medium mb-10 max-w-2xl mx-auto">
          Your 7-Day Metabolic Reset PDF has been downloaded. To ensure these protocols work for your specific body type, you must complete the final step.
        </p>

        {/* Clinical Checklist Panel */}
        <div className="bg-white/5 border border-white/10 rounded-[1.5rem] p-6 sm:p-8 max-w-2xl mx-auto mb-12 text-left backdrop-blur-sm shadow-xl">
          <div className="flex flex-col gap-6">
            
            {/* Step 1: Completed */}
            <div className="flex items-start gap-4 opacity-50">
              <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-300 line-through">Step 1: Metabolic Blueprint</h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">Successfully generated and delivered to your device.</p>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="w-0.5 h-6 bg-white/10 ml-4 -my-4"></div>

            {/* Step 2: Pending (Active) */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#10b9bd]/20 border border-[#10b9bd]/50 flex items-center justify-center flex-shrink-0 mt-1 relative">
                <div className="absolute inset-0 rounded-full border border-[#10b9bd] animate-ping opacity-20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#10b9bd]"></div>
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest text-[#10b9bd]">Step 2: Priority Clinical Evaluation</h3>
                <p className="text-xs text-slate-300 mt-1 font-medium leading-relaxed">
                  Select a time below for a 30-minute qualification call. We will review your current biomarkers and determine if you are a fit for the full clinical program.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Secure Calendly Portal */}
        <div className="bg-white rounded-[2rem] p-2 sm:p-4 shadow-[0_20px_50px_-15px_rgba(16,185,189,0.3)] relative overflow-hidden group border-4 border-transparent hover:border-[#10b9bd]/20 transition-all duration-500">
          <div className="absolute top-0 right-0 w-full h-1.5 bg-gradient-to-r from-[#10b9bd] to-[#0ea5e9]"></div>
          
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Live Scheduling Matrix</span>
            </div>
            <svg className="w-4 h-4 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg>
          </div>

          <iframe 
            src={calendlyUrl}
            width="100%" 
            height="700" 
            frameBorder="0" 
            title="Schedule Clinical Evaluation"
            className="rounded-[1rem]"
          ></iframe>
        </div>

        <Link to="/" className="inline-flex items-center gap-2 mt-12 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors border border-slate-800 px-6 py-3 rounded-xl hover:bg-slate-800/50">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;