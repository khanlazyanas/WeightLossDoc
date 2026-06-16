import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Assessment = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  
  // Force scroll to top when entering this funnel
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Store user answers
  const [answers, setAnswers] = useState({
    goal: '',
    duration: '',
    condition: '',
    commitment: ''
  });

  const totalSteps = 4;

  const questions = [
    {
      id: 'goal',
      title: "What is your primary biological objective?",
      subtitle: "Select the outcome that best matches your clinical goals.",
      options: [
        "Metabolic Weight Loss (10kg+)",
        "Hormonal Balance (PCOS/Thyroid)",
        "Post-Bariatric Stabilization",
        "Cellular Muscle Recomposition"
      ]
    },
    {
      id: 'duration',
      title: "How long have you experienced metabolic resistance?",
      subtitle: "This helps our algorithm understand your metabolic set-point.",
      options: [
        "Less than 1 Year",
        "1 to 3 Years",
        "3 to 5 Years",
        "Over 5 Years (Chronic)"
      ]
    },
    {
      id: 'condition',
      title: "Do you have any known clinical conditions?",
      subtitle: "Select the most prominent condition if applicable.",
      options: [
        "Insulin Resistance / Pre-Diabetes",
        "PCOD / PCOS",
        "Hypothyroidism",
        "None / Unknown"
      ]
    },
    {
      id: 'commitment',
      title: "Are you prepared for a strict clinical protocol?",
      subtitle: "Our system requires absolute adherence to medical guidelines.",
      options: [
        "Yes, I am fully committed.",
        "I need more information first.",
        "I am looking for a quick fix." 
      ]
    }
  ];

  const handleSelect = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
    
    // Automatically go to next step after a short delay for premium feel
    setTimeout(() => {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      } else {
        runClinicalAnalysis();
      }
    }, 400); // 400ms delay feels smooth and deliberate
  };

  const runClinicalAnalysis = () => {
    setIsAnalyzing(true);
    
    // Fake analysis delay to build psychological value (3.5 seconds)
    setTimeout(() => {
      setIsAnalyzing(false);
      setIsApproved(true);
    }, 3500);
  };

  // Progress Bar Width Calculation
  const progressPercentage = ((currentStep - 1) / totalSteps) * 100;

  return (
    // CRITICAL FIX: Added `fixed inset-0 z-[9999] overflow-y-auto`
    // This forces the Assessment page to sit ON TOP of everything (Header/Footer)
    <div className="fixed inset-0 z-[9999] overflow-y-auto font-sans text-white bg-[#0f172a] selection:bg-[#10b9bd] flex flex-col">
      
      {/* Ambient Tech Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-gradient-to-bl from-[#10b9bd]/10 to-transparent rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-gradient-to-tr from-[#0ea5e9]/10 to-transparent rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#10b9bd 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* Internal Navigation Header specifically for the Assessment Page */}
      <header className="relative z-10 w-full p-6 sm:p-10 flex justify-between items-center shrink-0">
        <Link to="/" className="flex items-center gap-3 group outline-none">
          <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-[1rem] flex items-center justify-center border border-white/10 group-hover:bg-[#10b9bd] transition-colors duration-500 shadow-xl">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <span className="font-black text-xl tracking-tighter">Weight<span className="text-[#10b9bd]">Loss</span>Doc</span>
        </Link>
        <Link to="/" className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors outline-none border-b border-transparent hover:border-white pb-1">
          Abort System &times;
        </Link>
      </header>

      {/* Main Assessment Area */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 sm:px-6 w-full max-w-4xl mx-auto py-10 min-h-[500px]">
        
        {/* State 1: Answering Questions */}
        {!isAnalyzing && !isApproved && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
            
            {/* Progress Bar */}
            <div className="w-full mb-12 sm:mb-16">
              <div className="flex justify-between text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-4">
                <span>Phase 0{currentStep}</span>
                <span className="text-[#10b9bd]">Diagnostic Intake</span>
              </div>
              <div className="w-full h-1 sm:h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#10b9bd] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_10px_#10b9bd]"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Question UI */}
            <div className="mb-10 sm:mb-16 text-center md:text-left">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 leading-[1.1]">
                {questions[currentStep - 1].title}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto md:mx-0">
                {questions[currentStep - 1].subtitle}
              </p>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {questions[currentStep - 1].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(questions[currentStep - 1].id, option)}
                  className={`text-left p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border transition-all duration-300 group flex items-center justify-between outline-none active:scale-[0.98] ${
                    answers[questions[currentStep - 1].id] === option 
                    ? "bg-[#10b9bd]/10 border-[#10b9bd] shadow-[0_0_30px_rgba(16,185,189,0.2)]" 
                    : "bg-white/5 border-white/10 hover:border-[#10b9bd]/50 hover:bg-white/10"
                  }`}
                >
                  <span className={`text-base sm:text-lg lg:text-xl font-bold tracking-tight pr-4 ${answers[questions[currentStep - 1].id] === option ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                    {option}
                  </span>
                  <div className={`shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                     answers[questions[currentStep - 1].id] === option 
                     ? "border-[#10b9bd] bg-[#10b9bd]" 
                     : "border-slate-600 group-hover:border-[#10b9bd]/50"
                  }`}>
                    {answers[questions[currentStep - 1].id] === option && (
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full shadow-sm"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Back Button */}
            {currentStep > 1 && (
              <div className="mt-12 text-center md:text-left">
                <button 
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-colors flex items-center gap-2 mx-auto md:mx-0 outline-none"
                >
                  &larr; Previous Parameter
                </button>
              </div>
            )}
          </div>
        )}

        {/* State 2: Fake Analyzing Loader (Hype Builder) */}
        {isAnalyzing && (
          <div className="flex flex-col items-center justify-center w-full animate-in fade-in duration-1000">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-10">
              <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-[#10b9bd] border-t-transparent rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
              <div className="absolute inset-0 flex items-center justify-center text-[#10b9bd]">
                 <svg className="w-10 h-10 sm:w-12 sm:h-12 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-[0.2em] mb-4 text-center text-white">Processing Bio-Data</h3>
            <p className="text-slate-400 font-medium text-center max-w-sm text-sm sm:text-base leading-relaxed">Cross-referencing your parameters with Dr. Khan's clinical framework...</p>
          </div>
        )}

        {/* State 3: Approved & Proceed to Booking */}
        {isApproved && (
          <div className="w-full text-center animate-in zoom-in-95 duration-700">
            <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 bg-[#10b9bd]/10 border-2 border-[#10b9bd] rounded-full text-[#10b9bd] mb-10 shadow-[0_0_50px_rgba(16,185,189,0.3)]">
              <svg className="w-10 h-10 sm:w-14 sm:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            
            <p className="text-[#10b9bd] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-xs mb-4">Candidacy Confirmed</p>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter mb-8 leading-[1.05] sm:leading-[1] text-white">
              You Qualify For <br className="hidden sm:block"/> Our Protocol.
            </h2>
            
            <p className="text-slate-400 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto mb-12 sm:mb-16">
              Based on your biometric inputs, our system indicates a high probability of success using our targeted metabolic engineering framework.
            </p>
            
            <button 
              onClick={() => navigate('/book-appointment')}
              className="group relative inline-flex items-center justify-center px-8 sm:px-14 py-5 sm:py-6 bg-white text-[#0f172a] rounded-xl sm:rounded-[1.5rem] font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs overflow-hidden transition-all duration-500 shadow-[0_20px_50px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_50px_-10px_rgba(16,185,189,0.5)] active:scale-95 outline-none w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-[#10b9bd] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Proceed to Clinical Intake</span>
              <svg className="w-4 h-4 ml-3 relative z-10 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>
        )}

      </main>
    </div>
  );
};

export default Assessment;