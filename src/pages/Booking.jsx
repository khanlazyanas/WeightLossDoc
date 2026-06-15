import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader2 } from 'lucide-react'; // Ensure this is installed: npm i lucide-react

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Metabolic Optimization', // Match initial value with options
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Show a loading toast that we can update later
    const toastId = toast.loading("Initializing clinical protocol...", {
      theme: "dark",
      position: "bottom-right",
      style: { borderRadius: '16px', border: '1px solid #1e293b' }
    });

    try {
      // Connecting to your Live Render Backend
      const response = await fetch('https://weigtlossbackend.onrender.com/api/bookings/initialize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Update toast to Success
        toast.update(toastId, { 
          render: "Protocol Request Sent! Dr. Khan's office will contact you.", 
          type: "success", 
          isLoading: false, 
          autoClose: 5000,
          theme: "dark"
        });

        // Clear the form
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: 'Metabolic Optimization',
          message: ''
        });
      } else {
        // Handle Server side errors
        throw new Error(data.error || "System rejected the request.");
      }
    } catch (error) {
      // Update toast to Error
      toast.update(toastId, { 
        render: error.message || "Connection Error. Please try again later.", 
        type: "error", 
        isLoading: false, 
        autoClose: 5000,
        theme: "dark"
      });
      console.error("Booking Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans text-[#0f172a] bg-[#fafafa] selection:bg-[#10b9bd] selection:text-white min-h-screen relative">
      
      {/* Toast Notification Container */}
      <ToastContainer />

      {/* Ambient Global Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
         <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-gradient-to-bl from-[#10b9bd]/5 to-transparent rounded-full blur-[140px]"></div>
         <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}></div>
      </div>

      {/* ================= ELITE BANNER: THE INTAKE ================= */}
      <section className="relative pt-24 md:pt-32 pb-48 md:pb-64 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-md border border-[#0f172a]/5 text-[#0f172a] px-5 py-2.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] mb-10 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#10b9bd] animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
              Secure Clinical Intake
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-[6.5rem] font-black tracking-tighter leading-[0.95] mb-8">
              Initiate Your <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#334155] to-[#10b9bd] pr-2">
                Evaluation.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed md:leading-loose">
              Your biological data is strictly private. Provide your details below to request a prioritized metabolic diagnostic with Dr. Abubakar Khan.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTAKE PORTAL (FORM) ================= */}
      <section className="px-4 sm:px-6 relative -mt-32 md:-mt-48 pb-32">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100/50">
            
            {/* Left Column: Direct Access (Dark High-Tech) */}
            <div className="lg:col-span-5 bg-[#0f172a] p-10 sm:p-12 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden group">
               {/* Decorative Background Animations */}
               <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#10b9bd]/20 to-transparent opacity-80 group-hover:scale-110 transition-transform duration-1000 blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
               
               <div className="relative z-10 space-y-16">
                 <div className="space-y-4">
                    <p className="text-[#10b9bd] font-black uppercase tracking-[0.5em] text-[10px] flex items-center gap-3">
                       <span className="w-4 h-px bg-[#10b9bd]"></span> Headquarters
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">Direct <br/>Access.</h2>
                 </div>

                 <div className="space-y-10">
                    <div className="group/item cursor-pointer">
                       <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">Location</p>
                       <p className="text-lg md:text-xl font-bold group-hover/item:text-[#10b9bd] transition-colors flex items-center gap-3">
                         Lucknow, UP • India 
                         <svg className="w-4 h-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                       </p>
                    </div>
                    <div className="group/item cursor-pointer">
                       <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">Direct Terminal</p>
                       <p className="text-lg md:text-xl font-bold group-hover/item:text-[#10b9bd] transition-colors flex items-center gap-3">
                         +91 9651237672
                         <svg className="w-4 h-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                       </p>
                    </div>
                    <div className="group/item cursor-pointer">
                       <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">Official Email</p>
                       <p className="text-lg md:text-xl font-bold group-hover/item:text-[#10b9bd] transition-colors flex items-center gap-3">
                         care@weightlossdoc.com
                         <svg className="w-4 h-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                       </p>
                    </div>
                 </div>
               </div>

               <div className="relative z-10 pt-12 mt-12 border-t border-slate-800/50 italic text-slate-400 font-serif text-lg leading-relaxed pr-8">
                 "Precision medicine requires precision data. We look forward to analyzing your biology."
               </div>
            </div>

            {/* Right Column: The Diagnostic Form */}
            <div className="lg:col-span-7 p-8 sm:p-12 md:p-16 lg:p-20 bg-white">
              <form onSubmit={handleSubmit} className="space-y-12 sm:space-y-16">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
                  <div className="space-y-2 border-b-2 border-slate-100 focus-within:border-[#10b9bd] transition-colors pb-2 group/input">
                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within/input:text-[#10b9bd] transition-colors">Biological Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Cooper" 
                      className="w-full bg-transparent text-xl sm:text-2xl font-black text-[#0f172a] outline-none placeholder:text-slate-200 transition-all"
                    />
                  </div>
                  <div className="space-y-2 border-b-2 border-slate-100 focus-within:border-[#10b9bd] transition-colors pb-2 group/input">
                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within/input:text-[#10b9bd] transition-colors">Communication Node</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@clinical.io" 
                      className="w-full bg-transparent text-xl sm:text-2xl font-black text-[#0f172a] outline-none placeholder:text-slate-200 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
                  <div className="space-y-2 border-b-2 border-slate-100 focus-within:border-[#10b9bd] transition-colors pb-2 group/input">
                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within/input:text-[#10b9bd] transition-colors">Contact Number</label>
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000" 
                      className="w-full bg-transparent text-xl sm:text-2xl font-black text-[#0f172a] outline-none placeholder:text-slate-200 transition-all"
                    />
                  </div>
                  <div className="space-y-2 border-b-2 border-slate-100 focus-within:border-[#10b9bd] transition-colors pb-2 group/input">
                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within/input:text-[#10b9bd] transition-colors">Protocol Interest</label>
                    <select 
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full bg-transparent text-lg sm:text-xl font-black text-[#0f172a] outline-none appearance-none cursor-pointer transition-all pb-1"
                    >
                      <option value="Metabolic Optimization">Metabolic Optimization</option>
                      <option value="Hormonal Engineering (PCOS)">Hormonal Engineering (PCOS)</option>
                      <option value="Bariatric Clinical Case">Bariatric Clinical Case</option>
                      <option value="Precision Nutrition Lab">Precision Nutrition Lab</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2 border-b-2 border-slate-100 focus-within:border-[#10b9bd] transition-colors pb-2 group/input">
                  <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within/input:text-[#10b9bd] transition-colors">Biological Context (Optional)</label>
                  <textarea 
                    rows="2"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly state your metabolic objectives or past medical history..." 
                    className="w-full bg-transparent text-lg sm:text-xl font-medium text-[#0f172a] outline-none placeholder:text-slate-200 resize-none transition-all leading-relaxed"
                  ></textarea>
                </div>

                <div className="pt-8 sm:pt-12">
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className={`group relative w-full bg-[#0f172a] text-white py-6 sm:py-8 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(16,185,189,0.5)] active:scale-[0.98] ${isLoading ? 'opacity-90 cursor-not-allowed' : ''}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#10b9bd] to-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] flex items-center justify-center gap-3 sm:gap-4">
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing Data...
                        </>
                      ) : (
                        <>
                          Initialize Diagnostic Protocol
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </>
                      )}
                    </span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-3 opacity-60">
                   <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                   <p className="text-center text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
                     By submitting, you consent to HIPAA-compliant data processing.
                   </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DATA PRIVACY BADGE ================= */}
      <section className="pb-24 sm:pb-32 px-4 text-center opacity-40 hover:opacity-100 transition-opacity duration-500">
         <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-12">
            <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] border-2 border-slate-200 text-slate-400 px-4 py-2 sm:px-6 sm:py-3 rounded-xl flex items-center gap-2">
               <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
               Encrypted Protocol
            </span>
            <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] border-2 border-slate-200 text-slate-400 px-4 py-2 sm:px-6 sm:py-3 rounded-xl flex items-center gap-2">
               <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
               Clinical Privacy
            </span>
            <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] border-2 border-slate-200 text-slate-400 px-4 py-2 sm:px-6 sm:py-3 rounded-xl flex items-center gap-2">
               <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
               Board Verified
            </span>
         </div>
      </section>

    </div>
  );
};

export default Booking;