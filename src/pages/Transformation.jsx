import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

// Setup Base URLs
const API_BASE_URL = 'https://weigtlossbackend.onrender.com/api/transformations';
const VERIFY_URL = 'https://weigtlossbackend.onrender.com/api/verify-owner';

// Custom Premium Toast Styling
const toastOptions = {
  style: {
    background: '#0f172a',
    color: '#fff',
    border: '1px solid #1e293b',
    borderRadius: '16px',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '0.05em',
  },
  success: { iconTheme: { primary: '#10b9bd', secondary: '#0f172a' } },
};

// === GUEST GATEKEEPER MODAL (Secure Backend Verification) ===
const DoctorGatekeeperModal = ({ onClose, onUnlock }) => {
  const [attemptedKey, setAttemptedKey] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const handleUnlock = async (e) => {
    e.preventDefault();
    setIsVerifying(true);
    const loginToast = toast.loading('Verifying secure credentials...', toastOptions);

    try {
      const response = await axios.post(VERIFY_URL, { secretKey: attemptedKey });
      if (response.data.success) {
        localStorage.setItem('ownerToken', response.data.token);
        toast.success('Access Granted.', { id: loginToast, ...toastOptions });
        onUnlock();
      }
    } catch (error) {
       const errorMsg = error.response?.data?.message || 'Verification Failed. Incorrect Key.';
       toast.error(errorMsg, { id: loginToast, ...toastOptions });
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0f172a]/80 backdrop-blur-xl z-[150] flex items-center justify-center p-4 sm:p-6 transition-all duration-500">
      <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] w-full max-w-lg p-8 sm:p-12 border border-slate-100/20 text-center flex flex-col items-center gap-8 relative overflow-hidden animate-in fade-in zoom-in-95 duration-500">
        
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b9bd]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#10b9bd 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
        
        <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl text-[#10b9bd] flex items-center justify-center relative z-10 shadow-sm">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
        </div>

        <div className="space-y-3 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight">Authorized Access.</h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto font-medium">This zone is cryptographically secured. Please authenticate to access the Transformation Lab.</p>
        </div>

        <form onSubmit={handleUnlock} className="w-full space-y-6 relative z-10">
          <div className="border-b-2 border-slate-200 focus-within:border-[#10b9bd] transition-colors pb-2">
            <input 
              type="password" 
              placeholder="Enter Access Key" 
              required 
              autoFocus
              className="w-full py-2 text-center text-xl sm:text-2xl font-black tracking-[0.2em] outline-none text-[#0f172a] placeholder:text-slate-300 placeholder:tracking-normal placeholder:font-medium bg-transparent" 
              value={attemptedKey}
              onChange={(e) => setAttemptedKey(e.target.value)} 
            />
          </div>
          
          <button type="submit" disabled={isVerifying} className={`group relative w-full text-center bg-[#0f172a] text-white py-5 sm:py-6 rounded-2xl font-black uppercase tracking-widest text-[10px] sm:text-xs transition-all duration-300 overflow-hidden active:scale-95 ${isVerifying ? 'opacity-80 cursor-not-allowed' : 'hover:shadow-[0_15px_30px_-10px_rgba(16,185,189,0.4)]'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#10b9bd] to-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10">{isVerifying ? 'Verifying...' : 'Unlock Transformation Lab'}</span>
          </button>
        </form>

        <button onClick={onClose} className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-[#0f172a] transition-colors relative z-10">Abort Login</button>
      </div>
    </div>
  );
};


// === THE MASTER FORM MODAL ===
const AddTransformationModal = ({ onClose, onRefresh, API_URL }) => {
  const [formData, setFormData] = useState({ name: '', tag: '', lostMass: '', duration: '' });
  const [beforeFile, setBeforeFile] = useState(null);
  const [afterFile, setAfterFile] = useState(null);
  const [beforePreview, setBeforePreview] = useState(null);
  const [afterPreview, setAfterPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e, setFile, setPreview) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setFile(file);
      setPreview(URL.createObjectURL(file)); // Generate preview URL
    } else {
      toast.error('Please upload a valid image file (jpg/png).', toastOptions);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!beforeFile || !afterFile) return toast.error('Both Before and After images are mandatory.', toastOptions);

    setIsSubmitting(true);
    const premiumToast = toast.loading('Uploading biometric proof securely...', toastOptions);

    const formToSubmit = new FormData();
    Object.keys(formData).forEach(key => formToSubmit.append(key, formData[key]));
    formToSubmit.append('beforeImg', beforeFile); 
    formToSubmit.append('afterImg', afterFile);   

    try {
      const token = localStorage.getItem('ownerToken');
      const response = await axios.post(`${API_URL}/upload`, formToSubmit, {
        headers: { 'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${token}` },
      });

      toast.success(response.data.message || 'Data committed successfully!', { id: premiumToast, ...toastOptions });
      onRefresh(); 
      onClose();   
    } catch (error) {
      console.error('Upload error:', error);
      const errorMessage = error.response?.data?.message || 'Upload failed. Session expired.';
      toast.error(errorMessage, { id: premiumToast, ...toastOptions });
      if (error.response?.status === 401) localStorage.removeItem('ownerToken');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0f172a]/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto transition-all duration-500">
      <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] w-full max-w-3xl p-6 sm:p-10 lg:p-14 border border-slate-100 my-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        <div className="flex justify-between items-center mb-8 sm:mb-12 border-b border-slate-100 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
               <div className="w-4 h-[2px] bg-[#10b9bd]"></div>
               <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.4em] text-[#10b9bd]">Data Entry</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a] tracking-tight">Record Biometric Proof</h2>
          </div>
          <button onClick={onClose} className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-full hover:bg-[#0f172a] hover:text-white transition-colors flex items-center justify-center text-slate-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            <div className="space-y-2 border-b-2 border-slate-100 focus-within:border-[#10b9bd] transition-colors pb-1">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Patient Alias</label>
              <input type="text" placeholder="e.g., Rahul S." required className="w-full pt-1 text-xl font-black outline-none text-[#0f172a] placeholder:text-slate-200" onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>
            <div className="space-y-2 border-b-2 border-slate-100 focus-within:border-[#10b9bd] transition-colors pb-1">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Protocol Tag</label>
              <input type="text" placeholder="e.g., Metabolic Reset" required className="w-full pt-1 text-xl font-black outline-none text-[#0f172a] placeholder:text-slate-200" onChange={(e) => setFormData({...formData, tag: e.target.value})} />
            </div>
            <div className="space-y-2 border-b-2 border-slate-100 focus-within:border-[#10b9bd] transition-colors pb-1">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Mass Reduced</label>
              <input type="text" placeholder="e.g., 15 kg" required className="w-full pt-1 text-xl font-black outline-none text-[#0f172a] placeholder:text-slate-200" onChange={(e) => setFormData({...formData, lostMass: e.target.value})} />
            </div>
            <div className="space-y-2 border-b-2 border-slate-100 focus-within:border-[#10b9bd] transition-colors pb-1">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Time Window</label>
              <input type="text" placeholder="e.g., 4 Months" required className="w-full pt-1 text-xl font-black outline-none text-[#0f172a] placeholder:text-slate-200" onChange={(e) => setFormData({...formData, duration: e.target.value})} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-50">
            {/* Before Image Input */}
            <label className="relative overflow-hidden border-2 border-dashed border-slate-200 rounded-3xl h-48 sm:h-56 flex flex-col items-center justify-center cursor-pointer hover:border-[#10b9bd] bg-slate-50 hover:bg-slate-100 transition-all group">
              {beforePreview ? (
                <>
                  <img src={beforePreview} alt="Before preview" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="relative z-10 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/20">Replace Base Data</div>
                </>
              ) : (
                <>
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 mb-4 group-hover:text-[#10b9bd] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#0f172a]">Base Data (Before)</span>
                </>
              )}
              <input type="file" required accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, setBeforeFile, setBeforePreview)} />
            </label>

            {/* After Image Input */}
            <label className="relative overflow-hidden border-2 border-dashed border-slate-200 rounded-3xl h-48 sm:h-56 flex flex-col items-center justify-center cursor-pointer hover:border-[#10b9bd] bg-slate-50 hover:bg-slate-100 transition-all group">
              {afterPreview ? (
                <>
                  <img src={afterPreview} alt="After preview" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-60 transition-opacity duration-300" />
                  <div className="relative z-10 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/20">Replace Optimized Data</div>
                </>
              ) : (
                <>
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 mb-4 group-hover:text-[#10b9bd] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#0f172a]">Optimized (After)</span>
                </>
              )}
              <input type="file" required accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, setAfterFile, setAfterPreview)} />
            </label>
          </div>

          <button type="submit" disabled={isSubmitting} className={`group relative w-full text-center bg-[#0f172a] text-white py-6 rounded-[1.5rem] font-black uppercase tracking-[0.3em] text-[10px] sm:text-xs transition-all duration-300 overflow-hidden active:scale-[0.98] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-[0_15px_30px_-10px_rgba(16,185,189,0.4)]'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#10b9bd] to-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10">{isSubmitting ? 'Processing Upload...' : 'Commit Transformation Story'}</span>
          </button>
        </form>
      </div>
    </div>
  );
};


const Transformations = () => {
  const [showGatekeeper, setShowGatekeeper] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [successStories, setSuccessStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTransformations = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_BASE_URL);
      setSuccessStories(response.data); 
    } catch (error) {
      console.error('Fetch error:', error);
      toast.error('Failed to load transformations.', toastOptions);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTransformations();
  }, []);

  const handleOpenAdd = () => {
    const token = localStorage.getItem('ownerToken');
    if (token) {
      setIsAddModalOpen(true);
    } else {
      setShowGatekeeper(true);
    }
  };

  const handleSuccessfulUnlock = () => {
    setShowGatekeeper(false);
    setIsAddModalOpen(true); 
  };

  return (
    <div className="font-sans text-[#0f172a] bg-white selection:bg-[#10b9bd] selection:text-white relative min-h-screen">
      
      <Toaster />

      {/* Dynamic Modals */}
      {showGatekeeper && <DoctorGatekeeperModal onClose={() => setShowGatekeeper(false)} onUnlock={handleSuccessfulUnlock} />}
      {isAddModalOpen && <AddTransformationModal onClose={() => setIsAddModalOpen(false)} onRefresh={fetchTransformations} API_URL={API_BASE_URL} />}

      {/* ================= PINNACLE BANNER ================= */}
      <section className="relative pt-24 md:pt-32 pb-24 md:pb-40 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '64px 64px' }}></div>
        <div className="absolute top-[-10%] left-[-10%] md:top-[-20%] w-[30rem] md:w-[50rem] h-[30rem] md:h-[50rem] bg-[#10b9bd]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className="max-w-3xl lg:max-w-4xl">
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm border border-slate-200/60 text-[#0f172a] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-8 sm:mb-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#10b9bd] animate-pulse"></span>
                The Transformation Lab
              </div>
              
              <h1 className="text-5xl sm:text-7xl md:text-[6.5rem] lg:text-[7.5rem] font-black tracking-tighter leading-[0.95] mb-6 sm:mb-8">
                Biometric <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#334155] to-[#10b9bd] pr-2">
                  Proof.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                We don't believe in stories. We believe in immutable data. Explore our archive of clinical metabolic resets.
              </p>
            </div>

            {/* Lock/Unlock Button UI */}
            <button onClick={handleOpenAdd} className="group relative overflow-hidden flex items-center justify-center sm:justify-start gap-3 bg-[#0f172a] text-white px-8 sm:px-10 py-5 sm:py-6 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_20px_40px_-15px_rgba(15,23,42,0.4)] hover:shadow-[0_20px_40px_-15px_rgba(16,185,189,0.4)] active:scale-95 whitespace-nowrap w-full sm:w-auto mt-6 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-[#10b9bd] to-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg className="w-4 sm:w-5 h-4 sm:h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              <span className="relative z-10">Record Data</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= CLINICAL TRANSFORMATIONS GRID ================= */}
      <section className="py-20 md:py-32 px-4 sm:px-6 min-h-[50vh] bg-white relative">
        <div className="container mx-auto max-w-7xl relative">
          
          {isLoading ? (
            // Premium Loading Skeletons
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-6 sm:space-y-8 animate-pulse">
                  <div className="w-full aspect-[4/3] sm:aspect-[16/10] rounded-[2rem] sm:rounded-[3rem] bg-slate-100 border-[8px] sm:border-[12px] border-slate-50"></div>
                  <div className="px-4 sm:px-6 space-y-4">
                      <div className="w-24 h-2 bg-slate-200 rounded-full"></div>
                      <div className="w-48 h-6 sm:h-8 bg-slate-200 rounded-xl"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : successStories.length === 0 ? (
            // Premium Empty State
            <div className="w-full text-center py-20 sm:py-32 bg-slate-50 rounded-[2rem] sm:rounded-[4rem] border border-slate-100 flex flex-col items-center justify-center gap-6 px-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-300">
                 <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] mb-2">No Visual Data Yet</h3>
                <p className="text-slate-400 text-sm font-medium">The transformation archive is currently empty.</p>
              </div>
            </div>
          ) : (
            // Ultra-Premium Data Grid
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-20 lg:gap-24 relative z-10">
              {successStories.map((story) => (
                <div key={story._id} className="group space-y-8 sm:space-y-10">
                  
                  {/* Image Frame Container */}
                  <div className="relative flex w-full aspect-[4/3] sm:aspect-[16/10] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)] border-[8px] sm:border-[12px] border-white bg-slate-50 transition-shadow duration-700">
                    
                    {/* Before Frame */}
                    <div className="w-1/2 h-full relative overflow-hidden bg-slate-200 border-r border-white/50">
                        <img src={story.beforeImg} alt="Initial Data" className="w-full h-full object-cover object-center grayscale opacity-80 transition-all duration-[1500ms] group-hover:grayscale-[20%] group-hover:opacity-100 group-hover:scale-105"/>
                        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#0f172a]/60 backdrop-blur-md text-white text-[7px] sm:text-[8px] font-black px-3 py-1.5 sm:py-2 rounded-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] z-20 shadow-sm border border-white/10">Base Data</div>
                    </div>

                    {/* After Frame */}
                    <div className="w-1/2 h-full relative overflow-hidden bg-white">
                        <img src={story.afterImg} alt="Optimized Result" className="w-full h-full object-cover object-center transition-transform duration-[1500ms] group-hover:scale-105"/>
                        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#10b9bd]/90 backdrop-blur-sm text-white text-[7px] sm:text-[8px] font-black px-3 py-1.5 sm:py-2 rounded-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] z-20 shadow-sm">Optimized</div>
                    </div>

                    {/* Central VS Badge (Frosted Glass) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-white/70 backdrop-blur-xl rounded-full sm:rounded-[1.2rem] flex items-center justify-center shadow-lg z-40 border border-white/50 pointer-events-none group-hover:scale-110 group-hover:bg-white transition-all duration-500">
                      <span className="text-[9px] sm:text-[11px] font-black text-[#0f172a] uppercase tracking-wider">VS</span>
                    </div>
                  </div>

                  {/* Case Details */}
                  <div className="px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative">
                    <div>
                      <p className="text-[#10b9bd] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[8px] sm:text-[10px] mb-2 sm:mb-3">{story.tag}</p>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-[#0f172a]">{story.name}</h3>
                    </div>
                    
                    <div className="flex gap-3 sm:gap-4 w-full sm:w-auto">
                       <div className="flex-1 sm:flex-none bg-slate-50 p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-100 text-center min-w-[90px] sm:min-w-[110px] group-hover:border-[#10b9bd]/30 transition-colors duration-500">
                          <p className="text-2xl sm:text-3xl font-black text-[#0f172a] leading-none mb-1">{story.lostMass}</p>
                          <p className="text-[7px] sm:text-[8px] font-bold text-slate-400 uppercase tracking-widest sm:tracking-[0.2em]">Mass Lost</p>
                       </div>
                       <div className="flex-1 sm:flex-none bg-slate-50 p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-100 text-center min-w-[90px] sm:min-w-[110px] group-hover:border-[#10b9bd]/30 transition-colors duration-500">
                          <p className="text-2xl sm:text-3xl font-black text-[#0f172a] leading-none mb-1">{story.duration}</p>
                          <p className="text-[7px] sm:text-[8px] font-bold text-slate-400 uppercase tracking-widest sm:tracking-[0.2em]">Window</p>
                       </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ================= FINAL CALL TO ACTION (Ultra Clean) ================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 bg-[#0f172a] text-white mx-4 sm:mx-6 md:mx-8 mb-6 sm:mb-8 rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden text-center group">
        {/* Subtle geometric animated background */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] group-hover:scale-105 transition-transform duration-1000"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#10b9bd]/20 via-transparent to-transparent opacity-80"></div>
        
        <div className="container mx-auto max-w-3xl relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-6 sm:mb-8">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#10b9bd] animate-ping"></div>
            <p className="text-[#10b9bd] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[8px] sm:text-[10px]">Bio-Data Systems</p>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] sm:leading-none mb-10 sm:mb-12">
            Initiate Your <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Biological Shift.</span>
          </h2>
          
          <Link to="/book-appointment" className="relative overflow-hidden group/btn bg-white text-[#0f172a] px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(16,185,189,0.3)] transition-all duration-300 active:scale-95 flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
              <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">Reserve Diagnostic</span>
              <svg className="w-3 sm:w-4 h-3 sm:h-4 relative z-10 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              <div className="absolute inset-0 h-full w-0 bg-[#10b9bd] transition-all duration-300 ease-out group-hover/btn:w-full z-0"></div>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Transformations;