import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Advanced scroll detection for the premium dynamic pill effect
  useEffect(() => {
    const handleScroll = () => {
      // Small threshold for immediate premium response
      setScrolled(window.scrollY > 40); 
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure menu closes strictly on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is active to prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Introduction', path: '/' },
    { name: 'Philosophy', path: '/about' },
    { name: 'Protocols', path: '/services' },
    { name: 'Visual Proof', path: '/transformations' },
  ];

  return (
    <>
      {/* ================= ELITE ANNOUNCEMENT BAR (TOP LEVEL TIER) ================= */}
      <div 
        className={`fixed top-0 left-0 w-full z-[120] bg-[#0f172a] text-white overflow-hidden transition-all duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
          scrolled ? "h-0 opacity-0 pointer-events-none" : "h-10 opacity-100"
        }`}
      >
        <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">
          
          {/* Left Side: System Branding */}
          <div className="flex items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2 sm:gap-3 group cursor-default">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b9bd] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#10b9bd]"></span>
              </span>
              <span className="text-slate-200 group-hover:text-white transition-colors duration-300">Board Certified Excellence</span>
            </div>
            <span className="hidden md:inline text-slate-600 border-l border-slate-700 pl-8 font-bold">Priority Metabolic Access</span>
          </div>

          {/* Right Side: Direct Terminal Contact */}
          <div className="flex items-center gap-6">
            <a href="tel:+919651237672" className="hover:text-[#10b9bd] transition-colors duration-300 flex items-center gap-2 group">
              <span className="text-slate-500 group-hover:text-[#10b9bd] transition-colors hidden sm:inline">Direct Terminal:</span>
              <span className="tracking-widest group-hover:tracking-[0.25em] transition-all duration-300">+91 9651237672</span>
            </a>
          </div>
        </div>
      </div>

      {/* ================= MAIN FLOATING HEADER (DYNAMIC PILL ARCHITECTURE) ================= */}
      <header 
        className={`fixed left-0 w-full z-[110] transition-all duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
          scrolled ? "top-4 sm:top-6" : "top-10"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <nav 
            className={`flex items-center justify-between transition-all duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] relative ${
              scrolled 
                ? "bg-white/85 backdrop-blur-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-slate-200/50 rounded-full px-4 sm:px-6 py-3 sm:py-3.5" 
                : "bg-transparent border-transparent rounded-none px-2 py-6 sm:py-8"
            }`}
          >
            
            {/* Logo Section */}
            <Link to="/" className="group flex items-center gap-3 sm:gap-4 relative z-[160] outline-none">
              <div className="relative">
                <div className={`flex items-center justify-center rounded-[1rem] shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:bg-[#10b9bd] group-hover:-rotate-6 group-hover:scale-105 ${
                  scrolled ? "w-10 h-10 bg-[#0f172a]" : "w-12 h-12 bg-[#0f172a]"
                }`}>
                  <svg className={`text-white transition-all duration-500 ${scrolled ? "w-5 h-5" : "w-6 h-6"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`font-black tracking-tighter leading-none transition-all duration-500 ${
                  isOpen ? 'text-white' : 'text-[#0f172a]'
                } ${scrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'}`}>
                  Weight<span className={isOpen ? 'text-[#10b9bd]' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#10b9bd] to-[#0ea5e9]'}>Loss</span>Doc
                </span>
                <span className={`font-black uppercase text-slate-400 mt-1 transition-all duration-500 ${
                  scrolled ? 'text-[6px] tracking-[0.4em]' : 'text-[7px] tracking-[0.5em]'
                }`}>
                  Clinical Systems
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Floating Core) */}
            <div className={`hidden lg:flex items-center gap-1.5 absolute left-1/2 -translate-x-1/2 transition-all duration-700 ${
              scrolled ? "bg-slate-100/60 border border-slate-200/60 p-1.5 rounded-full" : ""
            }`}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className={`relative px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 group overflow-hidden outline-none ${
                      isActive ? "text-white" : "text-slate-500 hover:text-[#0f172a]"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-[#0f172a] rounded-full -z-10 shadow-md transition-all duration-500"></div>
                    )}
                    {!isActive && (
                      <div className="absolute inset-0 bg-slate-200/50 rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100"></div>
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Action Cluster (CTA & Ultra-Premium Hamburger) */}
            <div className="flex items-center gap-4 sm:gap-6 relative z-[160]">
              <Link 
                to="/apply" 
                className={`hidden md:flex group relative items-center justify-center rounded-xl shadow-[0_10px_20px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_-10px_rgba(16,185,189,0.4)] overflow-hidden transition-all duration-500 active:scale-95 outline-none ${
                  scrolled ? "h-10 w-44" : "h-12 w-52"
                }`}
              >
                <div className="absolute inset-0 bg-[#0f172a] transition-colors duration-500"></div>
                {/* Swipe hover effect */}
                <div className="absolute inset-0 bg-[#10b9bd] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
                
                <div className={`relative text-white font-black uppercase flex items-center gap-2 transition-all duration-300 ${
                  scrolled ? "text-[8px] tracking-[0.2em]" : "text-[9px] tracking-[0.3em]"
                }`}>
                  Am I a Candidate?
                  <svg className="w-3 h-3 transform transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </Link>

              {/* Ultra-Premium Hamburger Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                aria-label="Toggle Menu"
                className={`relative w-12 h-12 lg:hidden rounded-2xl flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] outline-none ${
                  isOpen 
                  ? "bg-white/10" 
                  : scrolled 
                    ? "bg-slate-50 border border-slate-200 hover:bg-slate-100" 
                    : "bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-slate-100"
                }`}
              >
                <div className="flex flex-col items-center justify-center w-6 h-6 gap-1.5 relative">
                  <span className={`block w-6 h-[2px] rounded-full transition-all duration-500 origin-center ${
                    isOpen ? "absolute bg-white rotate-45" : "bg-[#0f172a]"
                  }`}></span>
                  <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${
                    isOpen ? "opacity-0 bg-white" : "opacity-100 bg-[#0f172a]"
                  }`}></span>
                  <span className={`block w-6 h-[2px] rounded-full transition-all duration-500 origin-center ${
                    isOpen ? "absolute bg-white -rotate-45" : "bg-[#0f172a]"
                  }`}></span>
                </div>
              </button>
            </div>

          </nav>
        </div>
      </header>

      {/* ================= REFINED MOBILE OVERLAY (FULL SCREEN MATRIX) ================= */}
      <div 
        className={`fixed inset-0 z-[150] lg:hidden transition-all duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark Background with subtle blur/gradient */}
        <div className={`absolute inset-0 bg-[#0f172a] transition-transform duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}>
           <div className="absolute bottom-0 right-0 w-[150vw] h-[150vw] bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#10b9bd]/15 via-transparent to-transparent opacity-80 pointer-events-none translate-x-1/4 translate-y-1/4"></div>
           <div className="absolute top-1/4 left-0 w-full h-full opacity-[0.02] text-white font-black text-[25vw] leading-none select-none pointer-events-none flex items-center justify-center -rotate-12">
             CLINICAL
           </div>
        </div>

        {/* Menu Content */}
        <div className="relative h-full flex flex-col justify-between p-8 sm:p-12 overflow-y-auto pt-32 pb-12">
          
          <div className="space-y-10 sm:space-y-12">
            <div className="flex items-center gap-4 transition-all duration-700 delay-300" style={{ opacity: isOpen ? 1 : 0, transform: isOpen ? 'translateY(0)' : 'translateY(20px)' }}>
              <div className="w-8 h-[2px] bg-[#10b9bd]"></div>
              <p className="text-[#10b9bd] font-black uppercase tracking-[0.5em] text-[9px] sm:text-[10px]">Navigation</p>
            </div>
            
            <div className="flex flex-col gap-6 sm:gap-8">
              {navLinks.map((link, i) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="group relative inline-block w-max outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  <span 
                    className={`text-4xl sm:text-5xl md:text-6xl font-black text-slate-300 group-hover:text-white tracking-tighter block transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
                      isOpen ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
                    }`}
                    style={{ transitionDelay: `${isOpen ? i * 80 + 400 : 0}ms` }}
                  >
                    {link.name}
                  </span>
                  <div className="absolute -bottom-2 left-0 w-0 h-[3px] bg-[#10b9bd] transition-all duration-500 ease-out group-hover:w-full"></div>
                </Link>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] transform mt-16 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`} style={{ transitionDelay: isOpen ? '800ms' : '0ms' }}>
            
            <Link 
              to="/apply" 
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between w-full bg-white text-[#0f172a] p-3 pl-8 sm:p-4 sm:pl-10 rounded-[1.5rem] hover:bg-[#10b9bd] hover:text-white transition-all duration-500 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] outline-none active:scale-[0.98]"
            >
              <span className="font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-[11px]">Am I a Candidate?</span>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0f172a] rounded-full flex items-center justify-center text-white group-hover:scale-95 transition-transform duration-500 shadow-md">
                 <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </Link>
            
            <div className="flex justify-center gap-10 mt-12 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              <a href="#" className="hover:text-white hover:tracking-[0.4em] transition-all duration-500 outline-none">Instagram</a>
              <a href="#" className="hover:text-white hover:tracking-[0.4em] transition-all duration-500 outline-none">LinkedIn</a>
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default Header;