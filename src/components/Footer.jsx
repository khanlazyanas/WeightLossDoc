import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-24 md:pt-32 pb-12 px-4 sm:px-6 relative overflow-hidden z-0">
      
      {/* ================= AMBIENT BACKGROUND EFFECTS ================= */}
      {/* Ghost Background Text (Scales with viewport) */}
      <div className="absolute top-0 right-0 opacity-[0.02] text-white font-black text-[20vw] leading-none select-none pointer-events-none translate-x-1/4 -translate-y-1/4 hidden sm:block">
        METABOLIC
      </div>
      
      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#10b9bd]/5 to-transparent pointer-events-none -z-10"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* ================= TOP SECTION: SYSTEM IDENTITY & NEWSLETTER ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 lg:pb-24 border-b border-slate-800/50">
          
          {/* Brand Identity Pane */}
          <div className="lg:col-span-5 space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="group inline-flex items-center gap-4">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#10b9bd] to-[#0ea5e9] rounded-[1.2rem] flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(16,185,189,0.4)] group-hover:shadow-[0_10px_40px_-5px_rgba(16,185,189,0.6)] group-hover:rotate-12 transition-all duration-500">
                <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-3xl lg:text-4xl font-black tracking-tighter">
                Weight<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b9bd] to-[#0ea5e9]">Loss</span>Doc
              </span>
            </Link>
            
            <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed max-w-md">
              Bio-Medical Optimization systems engineered by <span className="text-white font-bold">Dr. Abubakar Khan</span>. Reversing obesity through clinical data and precision metabolic resets.
            </p>

            <div className="flex gap-4 pt-4">
              {[
                { name: 'IG', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z' },
                { name: 'LI', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
                { name: 'TW', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' }
              ].map((icon, idx) => (
                <a key={idx} href="#" aria-label={icon.name} className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-[#10b9bd] hover:bg-[#10b9bd]/10 hover:text-[#10b9bd] transition-all duration-300 group">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-slate-500 group-hover:text-[#10b9bd] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={icon.path}></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="lg:col-span-3 space-y-6 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
            <h4 className="text-[#10b9bd] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[9px] sm:text-[10px]">Directory</h4>
            <ul className="flex flex-col gap-4 text-slate-400 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-widest">
              <li><Link to="/about" className="hover:text-white hover:tracking-[0.3em] transition-all duration-300">Philosophy</Link></li>
              <li><Link to="/services" className="hover:text-white hover:tracking-[0.3em] transition-all duration-300">Protocols</Link></li>
              <li><Link to="/transformations" className="hover:text-white hover:tracking-[0.3em] transition-all duration-300">Data Lab</Link></li>
              <li><Link to="/book-appointment" className="hover:text-white hover:tracking-[0.3em] transition-all duration-300">Evaluation</Link></li>
            </ul>
          </div>

          {/* Newsletter / System Access */}
          <div className="lg:col-span-4 space-y-6 flex flex-col items-center md:items-start text-center md:text-left md:col-span-2 lg:col-span-4 mt-8 lg:mt-0">
            <div className="space-y-3">
              <h4 className="text-white font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[9px] sm:text-[10px]">System Updates</h4>
              <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">Subscribe to receive secure metabolic engineering insights directly to your terminal.</p>
            </div>
            <form className="relative group w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                required
                placeholder="communication@node.io" 
                className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 sm:py-5 lg:py-6 pl-5 sm:pl-6 pr-24 lg:pr-32 text-[10px] lg:text-xs font-black uppercase tracking-widest text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10b9bd] focus:shadow-[0_0_20px_rgba(16,185,189,0.1)] transition-all duration-300"
              />
              <button type="submit" className="absolute right-2 top-2 bottom-2 bg-[#10b9bd] text-[#0f172a] px-4 sm:px-6 lg:px-8 rounded-xl text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-widest hover:bg-white transition-all duration-300 active:scale-95">
                Join
              </button>
            </form>
          </div>

        </div>

        {/* ================= BOTTOM BAR: SYSTEM LOGS & CREDITS ================= */}
        <div className="pt-10 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-10">
          
          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8 w-full lg:w-auto text-center md:text-left">
            <p className="text-slate-600 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em]">
              &copy; {new Date().getFullYear()} WeightLossDoc Protocol
            </p>
            
            {/* SYSTEM ARCHITECT LINK (Premium Developer Credit) */}
            <div className="group flex items-center gap-2 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em]">
              <span className="text-slate-600">System Architect:</span>
              <a 
                href="https://portfolio-frontend-ruby-rho.vercel.app" // Keep your portfolio link here
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 group-hover:text-[#10b9bd] transition-all duration-300 tracking-[0.3em] lg:tracking-[0.4em] relative overflow-hidden"
              >
                ANAS KHAN
                {/* Underline animated effect */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#10b9bd] -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </a>
            </div>
          </div>
          
          {/* RESPONSIVE LEGAL LINKS & SYSTEM STATUS */}
          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8 w-full lg:w-auto">
            <div className="flex flex-wrap justify-center sm:justify-end gap-x-4 sm:gap-x-6 gap-y-3 text-slate-500 text-[8px] sm:text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-widest">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              <span className="opacity-20 hidden sm:inline">|</span>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
              <span className="opacity-20 hidden sm:inline">|</span>
              <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookies</Link>
            </div>

            {/* System Status Node */}
            <div className="flex items-center gap-3 py-2 px-4 bg-slate-900/50 rounded-full border border-slate-800 shadow-inner">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
               </span>
               <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Clinic Status: Active</span>
            </div>
          </div>
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;