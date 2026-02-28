import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <>
      {/* ================= ELITE ANNOUNCEMENT BAR (MOBILE OPTIMIZED) ================= */}
      <div 
        className={`fixed top-0 left-0 w-full z-[120] bg-[#0f172a] text-white overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          scrolled ? "h-0 opacity-0" : "h-10 opacity-100"
        }`}
      >
        <div className="container mx-auto h-full px-4 lg:px-12 flex justify-between items-center text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">
          
          {/* Left Side: Branding */}
          <div className="flex items-center gap-3 md:gap-10">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b9bd] shadow-[0_0_10px_#10b9bd] animate-pulse"></span>
              <span className="text-[#10b9bd] whitespace-nowrap">Board Certified Excellence</span>
            </div>
            {/* Hidden on small mobile to keep it in one line */}
            <span className="hidden sm:inline text-slate-500 border-l border-slate-800 pl-4 md:pl-10">Priority Metabolic Access</span>
          </div>

          {/* Right Side: Contact */}
          <div className="flex items-center gap-4 md:gap-8">
            <a href="tel:+919651237672" className="hover:text-[#10b9bd] transition-all duration-500 flex items-center gap-2 group">
              <span className="opacity-50 group-hover:opacity-100 hidden xs:inline">Contact</span>
              <span className="tracking-widest whitespace-nowrap">+91 9651237672</span>
            </a>
          </div>
        </div>
      </div>

      <header 
        className={`fixed left-0 w-full z-[110] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          scrolled 
          ? "top-0 bg-white/70 backdrop-blur-3xl py-3 border-b border-slate-200/20 shadow-xl" 
          : "top-10 bg-transparent py-7"
        }`}
      >
        <nav className="container mx-auto px-6 lg:px-12 flex items-center justify-between relative">
          
          {/* Logo Section */}
          <Link to="/" className="group flex items-center gap-4 relative z-[160]">
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0f172a] rounded-[1.2rem] flex items-center justify-center shadow-2xl group-hover:bg-[#10b9bd] transition-all duration-700 group-hover:-rotate-6 group-hover:scale-105">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg md:text-xl font-black tracking-tighter leading-none transition-colors duration-500 ${isOpen ? 'text-white' : 'text-[#0f172a]'}`}>
                Weight<span className={isOpen ? 'text-[#10b9bd]' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#10b9bd] to-[#0ea5e9]'}>Loss</span>Doc
              </span>
              <span className="text-[6px] md:text-[7px] font-black uppercase tracking-[0.5em] text-slate-400 mt-1.5">Clinical Systems</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center p-1 bg-[#0f172a]/5 backdrop-blur-xl rounded-[2rem] border border-white/50 shadow-sm relative">
            {[
              { name: 'Home', path: '/' },
              { name: 'Philosophy', path: '/about' },
              { name: 'Programs', path: '/services' },
              { name: 'Results', path: '/transformations' },
            ].map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`px-8 py-2.5 rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 relative z-10 ${
                  location.pathname === link.path ? "text-white shadow-lg" : "text-slate-500 hover:text-[#0f172a]"
                }`}
              >
                {location.pathname === link.path && (
                  <div className="absolute inset-0 bg-[#0f172a] rounded-[1.5rem] -z-10 animate-in fade-in zoom-in duration-500"></div>
                )}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Cluster */}
          <div className="flex items-center gap-6 relative z-[160]">
            <Link to="/book-appointment" className="hidden md:flex group relative items-center justify-center h-11 w-48 lg:w-56 rounded-xl shadow-2xl overflow-hidden active:scale-95 transition-all">
              <div className="absolute inset-0 bg-[#0f172a] group-hover:bg-[#10b9bd] transition-colors duration-500"></div>
              <div className="relative text-white text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                Reserve Evaluation
                <svg className="w-3 h-3 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </Link>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-700 border lg:hidden ${
                isOpen 
                ? "bg-white/10 border-white/20 rotate-90 shadow-none" 
                : scrolled ? "bg-white border-slate-100 shadow-xl" : "bg-white/40 border-transparent shadow-none"
              }`}
            >
              <div className={`w-6 h-[2px] rounded-full transition-all duration-700 ${isOpen ? "rotate-45 translate-y-[4.5px] bg-white" : "bg-[#0f172a]"}`}></div>
              <div className={`w-6 h-[2px] rounded-full transition-all duration-700 ${isOpen ? "-rotate-45 -translate-y-[4.5px] bg-white" : "bg-[#0f172a]"}`}></div>
            </button>
          </div>
        </nav>

        {/* ================= REFINED MOBILE OVERLAY ================= */}
        <div 
          className={`fixed inset-0 z-[150] lg:hidden transition-all duration-[1100ms] ease-[cubic-bezier(0.8,0,0.2,1)] ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-x-full"
          }`}
        >
          <div className="absolute inset-0 bg-[#0f172a] overflow-hidden">
             <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] text-white font-black text-[25vw] leading-none select-none pointer-events-none flex items-center justify-center -rotate-12">
               CLINICAL
             </div>
          </div>

          <div className="relative h-full flex flex-col justify-between p-10 overflow-y-auto pt-32">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-[#10b9bd]"></div>
                <p className="text-[#10b9bd] font-black uppercase tracking-[0.5em] text-[9px]">Menu</p>
              </div>
              <div className="flex flex-col gap-5">
                {[
                  { name: 'Introduction', path: '/' },
                  { name: 'Our Philosophy', path: '/about' },
                  { name: 'Medical Services', path: '/services' },
                  { name: 'Results Lab', path: '/transformations' },
                ].map((link, i) => (
                  <Link key={link.name} to={link.path} className="group relative inline-block">
                    <span 
                      className={`text-4xl md:text-5xl font-black text-white tracking-tighter block transition-all duration-[800ms] ${
                        isOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                      }`}
                      style={{ transitionDelay: `${isOpen ? i * 100 + 300 : 0}ms` }}
                    >
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className={`transition-all duration-1000 transform ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: '900ms' }}>
              <Link to="/book-appointment" className="group flex items-center justify-between w-full bg-white text-[#0f172a] p-2 pl-10 rounded-[1.2rem] hover:bg-[#10b9bd] transition-all duration-500 shadow-2xl">
                <span className="font-black uppercase tracking-[0.2em] text-[10px]">Start Consultation</span>
                <div className="w-12 h-12 bg-[#0f172a] rounded-full flex items-center justify-center text-white group-hover:scale-95 transition-transform">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </Link>
              <div className="flex justify-center gap-10 mt-10 text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">
                <span className="hover:text-white transition-all">Instagram</span>
                <span className="hover:text-white transition-all">LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;