import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader2 } from 'lucide-react';

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
      position: "bottom-right"
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
    <div className="font-sans text-[#0f172a] bg-white selection:bg-[#10b9bd] selection:text-white min-h-screen">
      
      {/* Toast Notification Container */}
      <ToastContainer />

      {/* ================= ELITE BANNER: THE INTAKE ================= */}
      <section className="relative pt-32 pb-40 px-6 overflow-hidden bg-[#f8fafc]">
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 bg-[#0f172a] text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-[#10b9bd] animate-pulse"></span>
              Secure Clinical Intake
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.9] mb-10">
              Initiate Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b9bd] via-[#0ea5e9] to-[#0f172a]">
                Evaluation.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
              Your biological data is private. Provide your details below to request a prioritized metabolic diagnostic with Dr. Abubakar Khan.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTAKE PORTAL (FORM) ================= */}
      <section className="py-32 px-6 relative -mt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden border border-slate-100">
            
            {/* Left Column: Direct Access (Dark High-Tech) */}
            <div className="lg:col-span-4 bg-[#0f172a] p-12 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
               {/* Decorative Bio-hazard style circle */}
               <div className="absolute top-0 right-0 w-80 h-80 bg-[#10b9bd] opacity-10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
               
               <div className="relative z-10 space-y-16">
                 <div className="space-y-4">
                    <p className="text-[#10b9bd] font-black uppercase tracking-[0.5em] text-[10px]">Headquarters</p>
                    <h2 className="text-4xl font-black tracking-tighter">Direct <br/>Access.</h2>
                 </div>

                 <div className="space-y-10">
                    <div className="group cursor-pointer">
                       <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Location</p>
                       <p className="text-xl font-bold group-hover:text-[#10b9bd] transition-colors">Lucknow, UP • India</p>
                    </div>
                    <div className="group cursor-pointer">
                       <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Direct Terminal</p>
                       <p className="text-xl font-bold group-hover:text-[#10b9bd] transition-colors">+91 9651237672</p>
                    </div>
                    <div className="group cursor-pointer">
                       <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Official Email</p>
                       <p className="text-xl font-bold group-hover:text-[#10b9bd] transition-colors">care@weightlossdoc.com</p>
                    </div>
                 </div>
               </div>

               <div className="relative z-10 pt-16 border-t border-slate-800 italic text-slate-400 font-serif text-lg leading-relaxed">
                 "Precision medicine requires precision data. We look forward to analyzing your biology."
               </div>
            </div>

            {/* Right Column: The Diagnostic Form */}
            <div className="lg:col-span-8 p-12 lg:p-24">
              <form onSubmit={handleSubmit} className="space-y-12">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4 border-b-2 border-slate-100 focus-within:border-[#10b9bd] transition-all pb-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Biological Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Cooper" 
                      className="w-full bg-transparent text-2xl font-black outline-none placeholder:text-slate-200"
                    />
                  </div>
                  <div className="space-y-4 border-b-2 border-slate-100 focus-within:border-[#10b9bd] transition-all pb-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Communication Node (Email)</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@clinical.io" 
                      className="w-full bg-transparent text-2xl font-black outline-none placeholder:text-slate-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4 border-b-2 border-slate-100 focus-within:border-[#10b9bd] transition-all pb-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Contact Number</label>
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000" 
                      className="w-full bg-transparent text-2xl font-black outline-none placeholder:text-slate-200"
                    />
                  </div>
                  <div className="space-y-4 border-b-2 border-slate-100 focus-within:border-[#10b9bd] transition-all pb-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Protocol Interest</label>
                    <select 
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full bg-transparent text-xl font-black outline-none appearance-none cursor-pointer"
                    >
                      <option value="Metabolic Optimization">Metabolic Optimization</option>
                      <option value="Hormonal Engineering (PCOS)">Hormonal Engineering (PCOS)</option>
                      <option value="Bariatric Clinical Case">Bariatric Clinical Case</option>
                      <option value="Precision Nutrition Lab">Precision Nutrition Lab</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4 border-b-2 border-slate-100 focus-within:border-[#10b9bd] transition-all pb-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Biological Context (Optional)</label>
                  <textarea 
                    rows="2"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly state your metabolic objectives..." 
                    className="w-full bg-transparent text-xl font-medium outline-none placeholder:text-slate-200 resize-none"
                  ></textarea>
                </div>

                <div className="pt-10">
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className={`group relative w-full bg-[#0f172a] text-white py-8 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(16,185,189,0.5)] active:scale-[0.98] ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#10b9bd] to-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10 text-xs font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4">
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing Biological Data...
                        </>
                      ) : (
                        <>
                          Initialize Diagnostic Protocol
                          <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </>
                      )}
                    </span>
                  </button>
                </div>

                <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                  By submitting, you consent to HIPAA-compliant data processing.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DATA PRIVACY BADGE ================= */}
      <section className="pb-32 text-center opacity-40">
         <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12 grayscale">
            <span className="text-[10px] font-black uppercase tracking-widest border border-slate-300 px-4 py-2 rounded-lg">Encrypted Protocol</span>
            <span className="text-[10px] font-black uppercase tracking-widest border border-slate-300 px-4 py-2 rounded-lg">Clinical Privacy</span>
            <span className="text-[10px] font-black uppercase tracking-widest border border-slate-300 px-4 py-2 rounded-lg">Board Verified</span>
         </div>
      </section>

    </div>
  );
};

export default Booking;