import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const VERIFY_URL = 'https://weigtlossbackend.onrender.com/api/verify-owner';
const LEADS_API_URL = 'https://weigtlossbackend.onrender.com/api/leads'; 

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [attemptedKey, setAttemptedKey] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [leads, setLeads] = useState([]);
  const [isLoadingLeads, setIsLoadingLeads] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('ownerToken');
    if (token) {
      setIsAuthenticated(true);
      fetchLeads(token);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsVerifying(true);
    const loginToast = toast.loading('Authenticating secure terminal...', {
      style: { background: '#0f172a', color: '#fff', borderRadius: '12px' }
    });

    try {
      const response = await axios.post(VERIFY_URL, { secretKey: attemptedKey });
      if (response.data.success) {
        localStorage.setItem('ownerToken', response.data.token);
        toast.success('Access Granted. Welcome Dr. Khan.', { id: loginToast, style: { background: '#0f172a', color: '#10b9bd', borderRadius: '12px' } });
        setIsAuthenticated(true);
        fetchLeads(response.data.token);
      }
    } catch (error) {
       toast.error('Authentication Failed. Unauthorized.', { id: loginToast, style: { background: '#0f172a', color: '#ef4444', borderRadius: '12px' } });
    } finally {
      setIsVerifying(false);
    }
  };

  const fetchLeads = async (token) => {
    setIsLoadingLeads(true);
    try {
      const response = await axios.get(LEADS_API_URL, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const actualLeads = response.data.data || response.data;
      setLeads(actualLeads);
    } catch (error) {
      console.error('Failed to fetch leads:', error);
      toast.error('Sync Error. Checking fallback protocols.', {
        style: { background: '#0f172a', color: '#ef4444', borderRadius: '12px' }
      });
      setLeads([]); 
    } finally {
      setIsLoadingLeads(false);
    }
  };

  // === NEW: Delete Protocol ===
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to permanently purge this patient record?")) return;

    const token = localStorage.getItem('ownerToken');
    const deleteToast = toast.loading('Purging record from secure database...', {
      style: { background: '#0f172a', color: '#fff', borderRadius: '12px' }
    });

    try {
      await axios.delete(`${LEADS_API_URL}/${id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      
      // Update UI immediately
      setLeads(leads.filter((lead) => lead._id !== id));
      
      toast.success('Record purged successfully.', { id: deleteToast, style: { background: '#0f172a', color: '#ef4444', borderRadius: '12px' } });
    } catch (error) {
      console.error("Delete failed", error);
      toast.error('Failed to purge record.', { id: deleteToast, style: { background: '#0f172a', color: '#ef4444', borderRadius: '12px' } });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('ownerToken');
    setIsAuthenticated(false);
    setLeads([]);
    toast.success('Terminal Locked.', { style: { background: '#0f172a', color: '#10b9bd', borderRadius: '12px' } });
  };

  // ================= TIER-1 SECURE LOGIN GATEWAY =================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 relative overflow-hidden font-sans selection:bg-[#10b9bd] selection:text-white">
        <Toaster position="bottom-center" />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#10b9bd 1px, transparent 1px), linear-gradient(90deg, #10b9bd 1px, transparent 1px)', backgroundSize: '3rem 3rem' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#10b9bd]/10 blur-[120px] rounded-full pointer-events-none"></div>
        </div>
        
        <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 p-8 sm:p-12 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative z-10 text-center transform transition-all duration-700 hover:border-white/20 hover:bg-white/10">
          <div className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white">Restricted Perimeter</span>
          </div>
          <div className="w-20 h-20 bg-gradient-to-br from-[#10b9bd] to-[#0ea5e9] rounded-[1.5rem] mx-auto mb-6 flex items-center justify-center shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-500">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-2 tracking-tighter">Command Center</h2>
          <p className="text-slate-400 text-xs font-medium mb-10 tracking-wide">Enter master key to access clinical data.</p>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative group">
              <input 
                type="password" 
                placeholder="ENCRYPTION KEY" 
                className="w-full bg-[#0f172a]/50 border-2 border-slate-700/50 rounded-2xl px-6 py-4 text-center text-white text-sm font-black uppercase tracking-[0.3em] outline-none focus:border-[#10b9bd] focus:bg-[#0f172a] transition-all duration-300 placeholder:text-slate-600"
                value={attemptedKey}
                onChange={(e) => setAttemptedKey(e.target.value)}
                required
              />
            </div>
            <button type="submit" disabled={isVerifying} className="w-full relative overflow-hidden bg-white text-[#0f172a] font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs py-5 rounded-2xl hover:shadow-[0_15px_30px_-10px_rgba(16,185,189,0.4)] transition-all duration-300 active:scale-95 group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#10b9bd] to-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                {isVerifying ? 'Decrypting...' : 'Initialize Uplink'}
              </span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ================= CLINICAL COMMAND DASHBOARD =================
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#0f172a] font-sans pb-20 selection:bg-[#10b9bd] selection:text-white">
      <Toaster position="bottom-center" />
      
      <header className="bg-[#0f172a] text-white sticky top-0 z-50 shadow-xl border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-10 h-10 bg-[#10b9bd] rounded-xl flex items-center justify-center transform -rotate-3">
               <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <h1 className="font-black text-lg sm:text-xl tracking-tighter leading-none">WeightLossDoc</h1>
              <div className="flex items-center gap-2 mt-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></div>
                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-400">Secure Protocol Active</span>
              </div>
            </div>
          </div>
          <button onClick={handleLogout} className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-xl transition-all duration-300 active:scale-95">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-300 group-hover:text-white">Lock Terminal</span>
            <svg className="w-3.5 h-3.5 text-[#10b9bd]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          </button>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#0f172a] mb-3">Live Lead Pipeline.</h2>
            <p className="text-slate-500 font-medium text-sm max-w-lg">Real-time synchronization with the Metabolic Blueprint and Candidate Evaluation systems.</p>
          </div>
          <div className="bg-white border border-slate-200 p-6 rounded-[1.5rem] shadow-[0_15px_30px_-15px_rgba(0,0,0,0.05)] min-w-[200px] flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#10b9bd]/10 to-transparent rounded-bl-full pointer-events-none"></div>
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Total Prospects</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-black text-[#0f172a] leading-none tracking-tighter group-hover:text-[#10b9bd] transition-colors">{leads.length}</span>
              <span className="text-xs font-bold text-[#25D366]">Live</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] overflow-hidden relative z-10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-slate-200">
                  <th className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Prospect Identity</th>
                  <th className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Acquisition Date</th>
                  <th className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Direct Contact</th>
                  <th className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Electronic Mail</th>
                  <th className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">Action Protocol</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {isLoadingLeads ? (
                  <tr>
                    <td colSpan="5" className="p-16 text-center">
                      <div className="flex flex-col items-center justify-center gap-4">
                        <div className="w-10 h-10 border-4 border-slate-100 border-t-[#10b9bd] rounded-full animate-spin"></div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Synchronizing Telemetry...</p>
                      </div>
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-20 text-center">
                      <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
                        <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                      </div>
                      <p className="text-sm font-bold text-slate-600 mb-1">Pipeline Empty</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Awaiting new patient acquisitions.</p>
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => {
                    const initials = lead.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
                    
                    return (
                      <tr key={lead._id} className="group hover:bg-slate-50/50 transition-colors duration-300">
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#10b9bd]/10 text-[#10b9bd] flex items-center justify-center font-black text-sm border border-[#10b9bd]/20 group-hover:bg-[#10b9bd] group-hover:text-white transition-colors duration-300">
                              {initials || '?'}
                            </div>
                            <span className="font-bold text-[#0f172a] tracking-tight">{lead.name}</span>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <span className="inline-flex items-center bg-slate-100 text-slate-600 px-3 py-1.5 rounded-md text-[10px] font-black uppercase tracking-widest border border-slate-200">
                            {lead.date || lead.createdAt?.substring(0, 10) || 'N/A'}
                          </span>
                        </td>
                        <td className="px-8 py-5">
                          <span className="font-medium text-slate-600 tracking-wider">{lead.phone}</span>
                        </td>
                        <td className="px-8 py-5">
                          <span className="font-medium text-slate-500">{lead.email}</span>
                        </td>
                        
                        {/* Actions (WhatsApp & Delete) */}
                        <td className="px-8 py-5 text-right">
                          <div className="flex items-center justify-end gap-3">
                            <a 
                              href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-center gap-2 bg-white border border-[#25D366]/30 text-[#25D366] px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] shadow-sm hover:bg-[#25D366] hover:text-white transition-all duration-300 active:scale-95"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.327.101.144.447.712.988 1.176.697.596 1.258.784 1.403.849.145.065.231.058.318-.043.087-.101.376-.433.477-.582.101-.144.202-.121.332-.072.13.05 .823.39 .965.462.143.072.238.108.273.166.036.058.036.332-.108.737z"/></svg>
                              Dispatch
                            </a>

                            <button 
                              onClick={() => handleDelete(lead._id)}
                              className="group flex items-center justify-center bg-white border border-rose-500/20 text-rose-500 w-9 h-9 rounded-xl shadow-sm hover:bg-rose-500 hover:text-white transition-all duration-300 active:scale-95"
                              aria-label="Delete Lead"
                            >
                              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;