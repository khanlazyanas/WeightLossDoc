import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Service';
import Transformations from './pages/Transformation';
import Booking from './pages/Booking';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Term';
import CookiePolicy from './pages/CookiePolicy';
import ScrollToTop from './components/ScrollToTop';
import Assessment from './pages/Assessment';
import FloatingNode from './components/FloatingNode';
import Journal from './pages/Journal';
import PageWrapper from './components/PageWrapper'; // <-- Naya wrapper import kiya hai

function App() {
  const location = useLocation();
  
  // Check kar rahe hain ki kya user Assessment (Candidacy Quiz) wale page par hai
  const isAssessmentPage = location.pathname === '/apply';

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <ScrollToTop />
      
      {/* Header ke andar humne already logic lagaya hua hai isko hide karne ka */}
      <Header />
      
      {/* Yahan conditional padding lagayi hai. 
          Agar user /apply page par hai toh humein extra padding ki zaroorat nahi hai.
      */}
      <main className={`flex-grow ${isAssessmentPage ? '' : 'pt-24 lg:pt-32'}`}>
        
        {/* AnimatePresence framer-motion ko allow karta hai ki wo page leave/enter animations handle kare */}
        <AnimatePresence mode="wait">
          {/* CRITICAL: Routes ko location aur key dena zaroori hai animation detect karne ke liye */}
          <Routes location={location} key={location.pathname}>
            
            {/* Saare main routes ko PageWrapper ke andar daal diya gaya hai */}
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
            <Route path="/transformations" element={<PageWrapper><Transformations /></PageWrapper>} />
            <Route path="/book-appointment" element={<PageWrapper><Booking /></PageWrapper>} />
            <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
            <Route path="/terms" element={<PageWrapper><Terms /></PageWrapper>} />
            <Route path="/cookie-policy" element={<PageWrapper><CookiePolicy /></PageWrapper>} />
            <Route path="/journal" element={<PageWrapper><Journal /></PageWrapper>} />
            
            {/* Assessment page khud mein ek full-screen overlay hai, usko wrapper ki zaroorat nahi hai */}
            <Route path="/apply" element={<Assessment />} />
            
          </Routes>
        </AnimatePresence>
      </main>

      {/* ================= CRITICAL FIX ================= */}
      {/* FloatingNode aur Footer sirf tabhi dikhenge jab user /apply page par NAHI hoga */}
      {!isAssessmentPage && (
        <>
          <FloatingNode />
          <Footer />
        </>
      )}
      
    </div>
  );
}

export default App;