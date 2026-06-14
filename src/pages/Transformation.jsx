import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

// Setup Base URLs
const API_BASE_URL = 'https://weigtlossbackend.onrender.com/api/transformations';
const VERIFY_URL = 'https://weigtlossbackend.onrender.com/api/verify-owner';

// === GUEST GATEKEEPER MODAL (Secure Backend Verification) ===
const DoctorGatekeeperModal = ({ onClose, onUnlock }) => {
  const [attemptedKey, setAttemptedKey] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const handleUnlock = async (e) => {
    e.preventDefault();
    setIsVerifying(true);
    
    const loginToast = toast.loading('Verifying secure credentials...');

    try {
      // Backend ko password bhejo check karne ke liye (Secure approach)
      const response = await axios.post(VERIFY_URL, {
        secretKey: attemptedKey
      });

      if (response.data.success) {
        // Token browser mein save karo taaki upload request me bhej sakein
        localStorage.setItem('ownerToken', response.data.token);
        toast.success('Access Granted.', { id: loginToast });
        onUnlock();
      }
    } catch (error) {
       const errorMsg = error.response?.data?.message || 'Verification Failed. Incorrect Key.';
       toast.error(errorMsg, { id: loginToast });
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0f172a]/95 backdrop-blur-md z-[150] flex items-center justify-center p-6 selection:bg-[#10b9bd] selection:text-white">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-12 border border-slate-100 text-center flex flex-col items-center gap-8 relative overflow-hidden">
        
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#10b9bd 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
        
        <div className="p-4 bg-slate-100 rounded-full text-slate-500 relative z-10">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
        </div>

        <div className="space-y-3 relative z-10">
          <h2 className="text-3xl font-black text-[#0f172a] uppercase tracking-wider">Authorized Access</h2>
          <p className="text-sm text-slate-500 max-w-sm">This zone is secured. Please authenticate to access the Transformation Lab.</p>
        </div>

        <form onSubmit={handleUnlock} className="w-full space-y-5 relative z-10">
          <input 
            type="password" 
            placeholder="Enter Doctor Secret Key" 
            required 
            autoFocus
            className="w-full p-5 border border-slate-200 rounded-xl text-center font-mono tracking-widest bg-slate-50" 
            value={attemptedKey}
            onChange={(e) => setAttemptedKey(e.target.value)} 
          />
          
          <button type="submit" disabled={isVerifying} className={`w-full text-center bg-[#0f172a] text-white py-5 rounded-xl font-black uppercase tracking-widest text-xs transition-all ${isVerifying ? 'opacity-50' : 'hover:bg-[#10b9bd] hover:shadow-xl'}`}>
            {isVerifying ? 'Verifying...' : 'Unlock Transformation Lab'}
          </button>
        </form>

        <button onClick={onClose} className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600 relative z-10">Cancel</button>

      </div>
    </div>
  );
};


// === THE MASTER FORM MODAL ===
const AddTransformationModal = ({ onClose, onRefresh, API_URL }) => {
  const [formData, setFormData] = useState({
    name: '',
    tag: '',
    lostMass: '',
    duration: '',
  });
  const [beforeFile, setBeforeFile] = useState(null);
  const [afterFile, setAfterFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e, setFile) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setFile(file);
    } else {
      toast.error('Please upload a valid image file (jpg/png).');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!beforeFile || !afterFile) {
      return toast.error('Both Before and After images are mandatory.');
    }

    setIsSubmitting(true);
    const premiumToast = toast.loading('Uploading biometric proof securely...');

    const formToSubmit = new FormData();
    formToSubmit.append('name', formData.name);
    formToSubmit.append('tag', formData.tag);
    formToSubmit.append('lostMass', formData.lostMass);
    formToSubmit.append('duration', formData.duration);
    formToSubmit.append('beforeImg', beforeFile); 
    formToSubmit.append('afterImg', afterFile);   

    try {
      // Get the secure token we saved during login
      const token = localStorage.getItem('ownerToken');

      const response = await axios.post(`${API_URL}/upload`, formToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}` // Passing token for backend security
        },
      });

      toast.success(response.data.message || 'Upload successful!', { id: premiumToast });
      onRefresh(); 
      onClose();   
    } catch (error) {
      console.error('Upload error:', error);
      const errorMessage = error.response?.data?.message || 'Upload failed. Your session might have expired.';
      toast.error(errorMessage, { id: premiumToast });
      
      // If token is invalid/expired, remove it so they have to login again
      if (error.response?.status === 401) {
        localStorage.removeItem('ownerToken');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0f172a]/80 backdrop-blur-sm z-[100] flex items-center justify-center p-6 selection:bg-[#10b9bd] selection:text-white">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-10 border border-slate-100 overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-black text-[#0f172a] uppercase tracking-wider">Record Biometric Proof</h2>
          <button onClick={onClose} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors text-slate-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="text" placeholder="Patient Full Name (e.g., Rahul S.)" required className="w-full p-4 border border-slate-200 rounded-xl" onChange={(e) => setFormData({...formData, name: e.target.value})} />
          <input type="text" placeholder="Transformation Tag (e.g., Metabolic Reset)" required className="w-full p-4 border border-slate-200 rounded-xl" onChange={(e) => setFormData({...formData, tag: e.target.value})} />
          
          <div className="grid grid-cols-2 gap-6">
            <input type="text" placeholder="Mass Lost (e.g., 15 kg)" required className="w-full p-4 border border-slate-200 rounded-xl" onChange={(e) => setFormData({...formData, lostMass: e.target.value})} />
            <input type="text" placeholder="Duration (e.g., 4 Months)" required className="w-full p-4 border border-slate-200 rounded-xl" onChange={(e) => setFormData({...formData, duration: e.target.value})} />
          </div>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <label className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center cursor-pointer hover:border-[#10b9bd] hover:bg-slate-50 transition-all flex flex-col items-center gap-3">
              <svg className={`w-8 h-8 ${beforeFile ? 'text-[#10b9bd]' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
              <span className="text-sm font-semibold text-[#0f172a]">{beforeFile ? beforeFile.name : 'Upload Base Data (Before)'}</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest">Accepts Image Files</span>
              <input type="file" required accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, setBeforeFile)} />
            </label>
            <label className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center cursor-pointer hover:border-[#10b9bd] hover:bg-slate-50 transition-all flex flex-col items-center gap-3">
              <svg className={`w-8 h-8 ${afterFile ? 'text-[#10b9bd]' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
              <span className="text-sm font-semibold text-[#0f172a]">{afterFile ? afterFile.name : 'Upload Optimized Result (After)'}</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest">Accepts Image Files</span>
              <input type="file" required accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, setAfterFile)} />
            </label>
          </div>

          <button type="submit" disabled={isSubmitting} className={`w-full text-center bg-[#0f172a] text-white py-5 rounded-xl font-black uppercase tracking-widest text-xs transition-all ${isSubmitting ? 'opacity-50' : 'hover:bg-[#10b9bd] hover:shadow-xl'}`}>
            {isSubmitting ? 'Processing Upload...' : 'Commit Transformation Story'}
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
      toast.error('Failed to load transformations. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTransformations();
  }, []);

  const handleOpenAdd = () => {
    // Check if token exists in local storage
    const token = localStorage.getItem('ownerToken');
    if (token) {
      // Already unlocked, open the form directly
      setIsAddModalOpen(true);
    } else {
      // No token, show the password modal
      setShowGatekeeper(true);
    }
  };

  const handleSuccessfulUnlock = () => {
    setShowGatekeeper(false);
    setIsAddModalOpen(true); 
  };

  return (
    <div className="font-sans text-[#0f172a] bg-white selection:bg-[#10b9bd] selection:text-white relative">
      
      {/* Dynamic Modals */}
      {showGatekeeper && <DoctorGatekeeperModal onClose={() => setShowGatekeeper(false)} onUnlock={handleSuccessfulUnlock} />}
      {isAddModalOpen && <AddTransformationModal onClose={() => setIsAddModalOpen(false)} onRefresh={fetchTransformations} API_URL={API_BASE_URL} />}

      {/* ================= PINNACLE BANNER ================= */}
      <section className="relative pt-32 pb-40 px-6 overflow-hidden bg-[#f8fafc]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 bg-[#0f172a] text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-2xl">
                <span className="w-2 h-2 rounded-full bg-[#10b9bd] animate-pulse"></span>
                The Transformation Lab
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.9] mb-10">
                Biometric <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b9bd] via-[#0ea5e9] to-[#0f172a]">
                  Proof.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                We don't believe in stories. We believe in data. Explore our archive of clinical metabolic resets.
              </p>
            </div>

            {/* Lock/Unlock Button UI */}
            <button onClick={handleOpenAdd} className="flex items-center gap-3 bg-[#10b9bd] text-white px-8 py-5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-[#0f172a] transition-colors shadow-2xl active:scale-95 whitespace-nowrap">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              Record Biometric Proof
            </button>
          </div>
        </div>
      </section>

      {/* ================= CLINICAL TRANSFORMATIONS GRID ================= */}
      <section className="py-24 px-6 min-h-[50vh]">
        <div className="container mx-auto max-w-7xl relative">
          
          {isLoading ? (
            // Loading Skeletons
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="space-y-10 animate-pulse">
                  <div className="relative flex w-full aspect-[16/10] rounded-[3rem] bg-slate-100 border-[12px] border-slate-50 shadow-inner"></div>
                  <div className="px-6 space-y-4">
                      <div className="w-24 h-3 bg-slate-100 rounded-full"></div>
                      <div className="w-48 h-8 bg-slate-100 rounded-xl"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : successStories.length === 0 ? (
            // Empty State
            <div className="w-full text-center py-24 bg-slate-50 rounded-[3rem] border border-slate-100 text-slate-400 flex flex-col items-center gap-6">
              <svg className="w-16 h-16 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              <div className="font-black uppercase tracking-widest text-sm">Transformation archive empty. Click above to record the first proof.</div>
            </div>
          ) : (
            // Real Data Grid
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
              {successStories.map((story) => (
                <div key={story._id} className="group space-y-10">
                  <div className="relative flex w-full aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white bg-slate-50">
                    <div className="w-1/2 h-full relative overflow-hidden bg-slate-200 border-r-2 border-white/50">
                        <img src={story.beforeImg} alt="Initial Data" className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"/>
                        <div className="absolute top-6 left-6 bg-[#0f172a]/80 backdrop-blur-md text-white text-[8px] font-black px-3 py-1.5 rounded-lg uppercase tracking-[0.2em] z-20">Base Data</div>
                    </div>
                    <div className="w-1/2 h-full relative overflow-hidden bg-white">
                        <img src={story.afterImg} alt="Optimized Result" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"/>
                        <div className="absolute top-6 right-6 bg-[#10b9bd] text-white text-[8px] font-black px-3 py-1.5 rounded-lg uppercase tracking-[0.2em] z-20">Optimized</div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl z-40 border border-slate-100 pointer-events-none">
                      <span className="text-[10px] font-black text-[#0f172a] italic">VS</span>
                    </div>
                  </div>
                  <div className="px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative">
                    <div>
                      <p className="text-[#10b9bd] font-black uppercase tracking-[0.5em] text-[10px] mb-3">{story.tag}</p>
                      <h3 className="text-4xl font-black tracking-tighter text-[#0f172a]">{story.name}</h3>
                    </div>
                    <div className="flex gap-4">
                       <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center min-w-[100px]">
                          <p className="text-2xl font-black text-[#0f172a] leading-none">{story.lostMass}</p>
                          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">Mass Lost</p>
                       </div>
                       <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center min-w-[100px]">
                          <p className="text-2xl font-black text-[#0f172a] leading-none">{story.duration}</p>
                          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">Window</p>
                       </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ================= FINAL CALL TO ACTION ================= */}
      <section className="py-40 px-6 bg-[#0f172a] text-white rounded-[4rem] lg:mx-6 shadow-2xl relative overflow-hidden text-center mb-10 z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,#10b9bd_0,transparent_70%)]"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <p className="text-[#10b9bd] font-black uppercase tracking-[0.8em] text-[10px] mb-12">Bio-Data Systems</p>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-12">
            Initiate Your <br/>
            <span className="italic font-serif text-slate-400">Biological Shift.</span>
          </h2>
          <Link to="/book-appointment" className="inline-block bg-white text-[#0f172a] px-16 py-8 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#10b9bd] hover:text-white transition-all duration-500 shadow-2xl active:scale-95">
              Reserve Evaluation Diagnostic
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Transformations;