import React, { useState, useEffect } from 'react';

const FloatingNode = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // Delayed entry animation for premium feel
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasMounted(true);
    }, 1500); // Appears 1.5s after page load
    return () => clearTimeout(timer);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[100] flex flex-col items-end gap-4 pointer-events-none">
      
      {/* ================= CHAT WINDOW (THE TERMINAL) ================= */}
      <div 
        className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] origin-bottom-right ${
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10 pointer-events-none"
        }`}
      >
        <div className="w-[calc(100vw-3rem)] sm:w-80 md:w-96 bg-[#0f172a]/95 backdrop-blur-2xl rounded-[2rem] border border-slate-700/50 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden relative group">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#10b9bd]/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>

          {/* Header */}
          <div className="px-6 py-5 border-b border-slate-800/80 flex items-center justify-between relative z-10 bg-white/5">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b9bd] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10b9bd]"></span>
              </span>
              <div>
                <h4 className="text-white text-[10px] sm:text-xs font-black uppercase tracking-widest leading-none mb-1">Clinical Support Node</h4>
                <p className="text-[#10b9bd] text-[8px] font-bold uppercase tracking-[0.3em] leading-none">System Online</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Body / Message */}
          <div className="p-6 relative z-10">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl rounded-tl-none p-4 mb-6 shadow-sm">
              <p className="text-slate-300 text-sm font-medium leading-relaxed">
                Welcome to WeightLossDoc. Connect with Dr. Khan's clinical team to initiate your metabolic diagnostic process.
              </p>
              <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-3 text-right">Automated Dispatch</p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <a 
                href="https://wa.me/919651237672?text=Hello,%20I%20would%20like%20to%20inquire%20about%20the%20Metabolic%20Optimization%20Protocol." 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-full bg-[#10b9bd] text-[#0f172a] py-3.5 sm:py-4 rounded-xl font-black uppercase tracking-widest text-[9px] sm:text-[10px] overflow-hidden transition-all duration-300 hover:shadow-[0_10px_20px_-5px_rgba(16,185,189,0.4)] active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  Encrypted WhatsApp Chat
                </span>
              </a>
              
              <a 
                href="tel:+919651237672" 
                className="group flex items-center justify-center w-full bg-slate-800/50 border border-slate-700 text-white py-3.5 sm:py-4 rounded-xl font-black uppercase tracking-widest text-[9px] sm:text-[10px] transition-all duration-300 hover:bg-slate-700 hover:border-slate-500 active:scale-[0.98]"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 5z"></path></svg>
                  Voice Terminal (+91)
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ================= TOGGLE BUTTON (THE NODE) ================= */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-[1.2rem] sm:rounded-[1.5rem] shadow-[0_15px_30px_-5px_rgba(16,185,189,0.4)] hover:shadow-[0_20px_40px_-5px_rgba(16,185,189,0.6)] transition-all duration-500 hover:-translate-y-1 active:scale-95 outline-none"
      >
        {/* Background Layers */}
        <div className="absolute inset-0 bg-[#0f172a] rounded-[1.2rem] sm:rounded-[1.5rem] transition-colors duration-500"></div>
        <div className={`absolute inset-0 bg-[#10b9bd] rounded-[1.2rem] sm:rounded-[1.5rem] transition-opacity duration-500 ${isOpen ? "opacity-10" : "opacity-100"}`}></div>
        
        {/* Ping Animation behind button when closed */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-[1.2rem] sm:rounded-[1.5rem] bg-[#10b9bd] animate-ping opacity-20 pointer-events-none"></div>
        )}

        {/* Icons */}
        <div className="relative z-10 text-white flex items-center justify-center">
          {/* Chat Icon (shows when closed) */}
          <svg 
            className={`absolute w-6 h-6 sm:w-7 sm:h-7 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
              isOpen ? "opacity-0 scale-50 -rotate-90" : "opacity-100 scale-100 rotate-0"
            }`} 
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          
          {/* X Icon (shows when open) */}
          <svg 
            className={`absolute w-6 h-6 sm:w-7 sm:h-7 text-[#10b9bd] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
              isOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 rotate-90"
            }`} 
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </button>

    </div>
  );
};

export default FloatingNode;