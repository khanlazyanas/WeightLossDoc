import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-20 lg:pt-32 pb-12 px-6 relative overflow-hidden">
      
      {/* ================= GHOST BACKGROUND TEXT ================= */}
      <div className="absolute top-0 right-0 opacity-[0.02] text-white font-black text-[15vw] leading-none select-none pointer-events-none translate-x-1/4 -translate-y-1/4 hidden lg:block">
        METABOLIC
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* TOP SECTION: SYSTEM IDENTITY & NEWSLETTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 lg:pb-24 border-b border-slate-800/50">
          
          {/* Brand Identity Pane */}
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="group flex items-center gap-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#10b9bd] to-[#0ea5e9] rounded-2xl flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(16,185,189,0.5)] group-hover:rotate-12 transition-all duration-500">
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-2xl lg:text-3xl font-black tracking-tighter">
                Weight<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b9bd] to-[#0ea5e9]">Loss</span>Doc
              </span>
            </Link>
            
            <p className="text-slate-400 text-base lg:text-lg font-medium leading-relaxed max-w-md">
              Bio-Medical Optimization systems engineered by <span className="text-white">Dr. Abubakar Khan</span>. Reversing obesity through clinical data and precision metabolic resets.
            </p>

            <div className="flex gap-4">
              {[
                { name: 'IG', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z' },
                { name: 'LI', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
                { name: 'TW', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' }
              ].map((icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-[#10b9bd] hover:text-[#10b9bd] transition-all group">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-slate-500 group-hover:text-[#10b9bd] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={icon.path}></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[#10b9bd] font-black uppercase tracking-[0.4em] text-[10px]">Directory</h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-4 text-slate-400 text-xs font-black uppercase tracking-widest">
              <li><Link to="/about" className="hover:text-white transition-colors">Philosophy</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Protocols</Link></li>
              <li><Link to="/transformations" className="hover:text-white transition-colors">Data Lab</Link></li>
              <li><Link to="/book-appointment" className="hover:text-white transition-colors">Evaluation</Link></li>
            </ul>
          </div>

          {/* Newsletter / System Access */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-2">
              <h4 className="text-white font-black uppercase tracking-[0.4em] text-[10px]">System Updates</h4>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">Subscribe to receive metabolic engineering insights directly to your terminal.</p>
            </div>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="communication@node.io" 
                className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-5 lg:py-6 px-6 lg:px-8 text-[10px] lg:text-xs font-black uppercase tracking-widest text-white focus:outline-none focus:border-[#10b9bd] transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#10b9bd] text-[#0f172a] px-4 lg:px-8 rounded-xl text-[9px] lg:text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all active:scale-95">
                Join
              </button>
            </form>
          </div>

        </div>

        {/* BOTTOM BAR: SYSTEM LOGS & CREDITS */}
        <div className="pt-12 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-8">
          
          <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-auto text-center lg:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-8 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em]">
              <p>&copy; {new Date().getFullYear()} WeightLossDoc Protocol</p>
              
              {/* SYSTEM ARCHITECT LINK */}
              <div className="group flex items-center gap-2">
                <span className="opacity-40">System Architect:</span>
                <a 
                  href="https://portfolio-frontend-ruby-rho.vercel.app" // Change this to your link (GitHub/LinkedIn/Portfolio)
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-500 group-hover:text-[#10b9bd] transition-all duration-300 tracking-[0.4em] border-b border-transparent group-hover:border-[#10b9bd]"
                >
                  ANAS KHAN
                </a>
              </div>
            </div>
            
            {/* RESPONSIVE LEGAL LINKS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-slate-500 text-[9px] lg:text-[10px] font-black uppercase tracking-widest">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              <span className="hidden md:inline opacity-20">|</span>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
              <span className="hidden md:inline opacity-20">|</span>
              <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-10 w-full lg:w-auto">
            <div className="flex items-center gap-3 py-2 px-4 bg-slate-900/50 rounded-full border border-slate-800">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
               </span>
               <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Clinic Status: Active</span>
            </div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-700">Clinical Excellence v4.0</p>
          </div>
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;