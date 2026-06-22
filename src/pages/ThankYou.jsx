import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  // Page load hote hi automatically top par scroll karne ke liye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] font-sans text-white selection:bg-[#10b9bd] selection:text-white pt-24 pb-20 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[30rem] md:w-[50rem] h-[30rem] md:h-[50rem] bg-[#10b9bd]/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 relative z-10 text-center">
        
        {/* Success Indicator */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl mx-auto mb-6 flex items-center justify-center text-[#25D366] animate-[bounce_2s_ease-in-out_infinite]">
          <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
        </div>

        <div className="inline-flex items-center gap-2 mb-4 bg-white/10 px-4 py-2 rounded-full border border-white/10 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-[#10b9bd] animate-pulse"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-200">Step 1 Complete: Blueprint Sent</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 leading-tight">
          Wait! You're Almost <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b9bd] to-[#0ea5e9]">Finished.</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base font-medium mb-12 max-w-2xl mx-auto">
          Your 7-Day Metabolic Reset PDF is downloading. <strong className="text-white">Step 2:</strong> Secure your 15-Minute Priority Clinical Evaluation with Dr. Abubakar Khan to discuss your specific biomarkers.
        </p>

        {/* Calendly Inline Widget Integration */}
        <div className="bg-white rounded-[2rem] p-2 sm:p-4 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-[#10b9bd] to-[#0ea5e9]"></div>
          
          {/* REPLACE THE SRC LINK BELOW WITH DR. KHAN'S ACTUAL CALENDLY LINK */}
          <iframe 
            src="https://calendly.com/your-calendly-link-here?hide_gdpr_banner=1&background_color=ffffff&text_color=0f172a&primary_color=10b9bd" 
            width="100%" 
            height="700" 
            frameBorder="0" 
            title="Schedule Clinical Evaluation"
            className="rounded-[1.5rem]"
          ></iframe>
        </div>

        <Link to="/" className="inline-flex items-center gap-2 mt-10 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;