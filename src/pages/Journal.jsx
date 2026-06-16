import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  // Mock Database for Articles (Backend se connect hone tak)
  const articles = [
    {
      id: 1,
      title: "The Truth About Insulin Resistance and Stubborn Fat.",
      category: "Metabolic Science",
      readTime: "6 Min Read",
      date: "Oct 12, 2026",
      excerpt: "Understanding why caloric deficits fail when cellular insulin receptors are blocked, and how clinical pharmacology reverses this cycle.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000",
      featured: true
    },
    {
      id: 2,
      title: "Why Crash Diets Fail Biologically: The Set-Point Theory.",
      category: "Clinical Research",
      readTime: "4 Min Read",
      date: "Sep 28, 2026",
      excerpt: "Your body defends its weight. Discover how metabolic adaptation sabotages rapid weight loss and how to outsmart your biology.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1000",
      featured: false
    },
    {
      id: 3,
      title: "GLP-1 Agonists: A New Era in Obesity Management.",
      category: "Pharmacotherapy",
      readTime: "8 Min Read",
      date: "Sep 15, 2026",
      excerpt: "A deep dive into how modern biological interventions are rewriting the rules of appetite regulation and gastric emptying.",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=1000",
      featured: false
    },
    {
      id: 4,
      title: "Post-Bariatric Metabolic Stabilization.",
      category: "Surgical Recovery",
      readTime: "5 Min Read",
      date: "Aug 30, 2026",
      excerpt: "Surgery is just the first step. Here is the clinical roadmap to preventing weight regain and stabilizing hormonal output post-op.",
      // FIXED: New premium medical/research image link that definitely works
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1000",
      featured: false
    }
  ];

  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <div className="font-sans text-[#0f172a] bg-white selection:bg-[#10b9bd] selection:text-white min-h-screen relative overflow-hidden">
      
      {/* Global Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-gradient-to-bl from-[#10b9bd]/10 to-transparent rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}></div>
      </div>

      {/* ================= PINNACLE BANNER ================= */}
      <section className="relative pt-32 md:pt-40 pb-24 md:pb-32 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto md:mx-0 text-center md:text-left">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-md border border-slate-200/60 text-[#0f172a] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-8 sm:mb-10 shadow-sm">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#10b9bd] animate-pulse"></span>
              Research & Insights
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-[6.5rem] font-black tracking-tighter leading-[0.95] mb-6 sm:mb-10">
              The Clinical <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#334155] to-[#10b9bd] pr-2">
                Journal.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed mx-auto md:mx-0">
              Authoritative medical literature, metabolic data studies, and clinical protocols published by our medical engineering board.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FEATURED ARTICLE ================= */}
      <section className="py-12 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="group relative w-full bg-[#0f172a] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] hover:shadow-[0_40px_80px_-20px_rgba(16,185,189,0.2)] border-[8px] sm:border-[12px] border-white flex flex-col lg:flex-row cursor-pointer transition-all duration-700">
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2 h-80 sm:h-96 lg:h-[600px] relative overflow-hidden bg-slate-900 border-b lg:border-b-0 lg:border-r border-slate-800">
               <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent lg:bg-gradient-to-r opacity-80"></div>
               <div className="absolute top-6 left-6 bg-[#10b9bd] text-[#0f172a] px-4 py-2 rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest shadow-lg">
                 Featured Publication
               </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">
               <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#10b9bd]/10 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
               
               <div className="flex items-center gap-4 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 relative z-10">
                 <span className="text-[#10b9bd]">{featuredArticle.category}</span>
                 <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                 <span>{featuredArticle.readTime}</span>
               </div>
               
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6 relative z-10 group-hover:text-[#10b9bd] transition-colors duration-500">
                 {featuredArticle.title}
               </h2>
               
               <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-medium mb-10 relative z-10 max-w-xl">
                 {featuredArticle.excerpt}
               </p>
               
               <div className="relative z-10 flex items-center gap-3 text-white font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] group-hover:tracking-[0.25em] transition-all duration-300">
                 Read Clinical Paper
                 <svg className="w-4 h-4 text-[#10b9bd] group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ARTICLE GRID ================= */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 bg-[#f8fafc] border-t border-slate-100 rounded-t-[3rem] sm:rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.02)] relative z-10 mt-10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16 sm:mb-20">
            <div>
              <p className="text-[#10b9bd] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[9px] sm:text-[10px] mb-3">Archive</p>
              <h3 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#0f172a] leading-none">Latest Research.</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {regularArticles.map((article) => (
              <div key={article.id} className="group flex flex-col bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(16,185,189,0.15)] hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                <div className="w-full aspect-[4/3] relative overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0f172a] px-3 py-1.5 rounded-lg text-[8px] font-black uppercase tracking-widest border border-white shadow-sm">
                    {article.category}
                  </div>
                </div>
                
                <div className="p-8 sm:p-10 flex flex-col flex-grow relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#10b9bd]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="flex items-center gap-3 text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-slate-400 mb-4 relative z-10">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h4 className="text-xl sm:text-2xl font-black text-[#0f172a] tracking-tight leading-[1.2] mb-4 relative z-10 group-hover:text-[#10b9bd] transition-colors duration-300">
                    {article.title}
                  </h4>
                  
                  <p className="text-slate-500 text-sm leading-relaxed font-medium mb-8 flex-grow relative z-10">
                    {article.excerpt}
                  </p>
                  
                  <div className="mt-auto relative z-10 flex items-center gap-2 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-[#0f172a] group-hover:text-[#10b9bd] transition-colors">
                    Access File <svg className="w-3 sm:w-4 h-3 sm:h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER / RESEARCH ALERT CTA ================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 bg-[#0f172a] text-white mx-4 sm:mx-6 md:mx-8 mb-6 sm:mb-8 rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden text-center group">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#10b9bd]/20 via-transparent to-transparent opacity-80 pointer-events-none"></div>
        
        <div className="container mx-auto max-w-3xl relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#10b9bd] animate-ping"></div>
            <p className="text-[#10b9bd] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[8px] sm:text-[10px]">Medical Dispatch</p>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[1.1] sm:leading-none mb-8">
            Receive Clinical Updates.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-medium max-w-lg mx-auto mb-10">
            Join our private medical dispatch list to receive the latest metabolic research directly to your terminal. No spam.
          </p>
          
          <form className="relative w-full max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
             <input 
               type="email" 
               required
               placeholder="Enter your email address" 
               className="w-full bg-slate-900/80 border border-slate-700/80 rounded-2xl py-5 sm:py-6 pl-6 pr-32 text-[10px] sm:text-xs font-black uppercase tracking-widest text-white placeholder:text-slate-500 focus:outline-none focus:border-[#10b9bd] focus:shadow-[0_0_20px_rgba(16,185,189,0.1)] transition-all backdrop-blur-md"
             />
             <button type="submit" className="absolute right-2 top-2 bottom-2 bg-[#10b9bd] text-[#0f172a] px-6 sm:px-8 rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all active:scale-95">
               Subscribe
             </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Journal;