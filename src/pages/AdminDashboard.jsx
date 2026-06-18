import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

// Apne backend endpoints
const VERIFY_URL = 'https://weigtlossbackend.onrender.com/api/verify-owner';
const LEADS_API_URL = 'https://weigtlossbackend.onrender.com/api/leads'; 

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [attemptedKey, setAttemptedKey] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [leads, setLeads] = useState([]);
  const [isLoadingLeads, setIsLoadingLeads] = useState(false);

  // Check if already authenticated via token
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
    const loginToast = toast.loading('Authenticating secure terminal...');

    try {
      const response = await axios.post(VERIFY_URL, { secretKey: attemptedKey });
      if (response.data.success) {
        localStorage.setItem('ownerToken', response.data.token);
        toast.success('Access Granted.', { id: loginToast });
        setIsAuthenticated(true);
        fetchLeads(response.data.token);
      }
    } catch (error) {
       toast.error('Authentication Failed. Unauthorized.', { id: loginToast });
    } finally {
      setIsVerifying(false);
    }
  };

  const fetchLeads = async (token) => {
    setIsLoadingLeads(true);
    try {
      // API call to real MongoDB database
      const response = await axios.get(LEADS_API_URL, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      
      // Sometimes backend sends { data: [...] } instead of just array
      const actualLeads = response.data.data || response.data;
      setLeads(actualLeads);

    } catch (error) {
      console.error('Failed to fetch real leads:', error);
      toast.error('Failed to sync live data. Please check backend connection.');
      // Dummy data removed. Now it will enforce an empty array on error.
      setLeads([]); 
    } finally {
      setIsLoadingLeads(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('ownerToken');
    setIsAuthenticated(false);
    setLeads([]);
  };

  // ================= LOGIN SCREEN =================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 relative overflow-hidden">
        <Toaster />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#10b9bd 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        
        <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-12 rounded-[2rem] shadow-2xl relative z-10 text-center">
          <div className="w-16 h-16 bg-[#10b9bd]/10 border border-[#10b9bd]/30 rounded-2xl mx-auto mb-6 flex items-center justify-center text-[#10b9bd]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Command Center</h2>
          <p className="text-slate-400 text-sm mb-8">Restricted Medical Database Access</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              type="password" 
              placeholder="Enter Master Key" 
              className="w-full bg-[#0f172a] border border-slate-700 rounded-xl px-4 py-4 text-center text-white font-black tracking-widest outline-none focus:border-[#10b9bd] transition-colors"
              value={attemptedKey}
              onChange={(e) => setAttemptedKey(e.target.value)}
              required
            />
            <button type="submit" disabled={isVerifying} className="w-full bg-[#10b9bd] text-[#0f172a] font-black uppercase tracking-widest py-4 rounded-xl hover:bg-white transition-colors active:scale-95">
              {isVerifying ? 'Authenticating...' : 'Unlock Database'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ================= DASHBOARD SCREEN =================
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans pb-20">
      <Toaster />
      <header className="bg-[#0f172a] text-white px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse"></div>
          <span className="font-black uppercase tracking-[0.3em] text-[10px] sm:text-xs text-slate-300">Live Lead Pipeline</span>
        </div>
        <button onClick={handleLogout} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors border border-slate-700 px-4 py-2 rounded-lg">
          Secure Logout
        </button>
      </header>

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 pt-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-[#0f172a] mb-2">Metabolic Leads</h1>
            <p className="text-slate-500 font-medium text-sm">Data from Blueprint Downloads & Contact Forms</p>
          </div>
          <div className="bg-white border border-slate-200 px-6 py-3 rounded-xl shadow-sm">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Total Captured</p>
            <p className="text-3xl font-black text-[#10b9bd] leading-none">{leads.length}</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <th className="p-5">Date Acquired</th>
                  <th className="p-5">Patient Alias</th>
                  <th className="p-5">WhatsApp Contact</th>
                  <th className="p-5">Email Address</th>
                  <th className="p-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {isLoadingLeads ? (
                  <tr><td colSpan="5" className="p-10 text-center text-slate-400 font-medium animate-pulse">Synchronizing securely...</td></tr>
                ) : leads.length === 0 ? (
                  <tr><td colSpan="5" className="p-10 text-center text-slate-400 font-medium">Pipeline is currently empty. No leads captured yet.</td></tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead._id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-5 text-sm font-medium text-slate-500 whitespace-nowrap">{lead.date || lead.createdAt?.substring(0, 10) || 'N/A'}</td>
                      <td className="p-5 text-sm font-bold text-[#0f172a] whitespace-nowrap">{lead.name}</td>
                      <td className="p-5 text-sm font-medium text-slate-600 whitespace-nowrap">{lead.phone}</td>
                      <td className="p-5 text-sm font-medium text-slate-600 whitespace-nowrap">{lead.email}</td>
                      <td className="p-5 text-right whitespace-nowrap">
                        <a href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#25D366]/10 text-[#25D366] px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-colors">
                          Message
                        </a>
                      </td>
                    </tr>
                  ))
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