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
import PageWrapper from './components/PageWrapper';
import AdminDashboard from './pages/AdminDashboard'; // <-- Admin Dashboard Import Kiya
import ThankYou from './pages/ThankYou';

function App() {
  const location = useLocation();
  
  // Routes check kar rahe hain taaki special pages par unwanted elements hide kar sakein
  const isAssessmentPage = location.pathname === '/apply';
  const isAdminPage = location.pathname === '/command-center';
  
  // Agar user in dono me se kisi page par hai, toh standard layout hide hoga
  const hideStandardLayout = isAssessmentPage || isAdminPage;

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <ScrollToTop />
      
      {/* Header ko Admin Page par hide kar diya gaya hai */}
      {!isAdminPage && <Header />}
      
      {/* Conditional Padding: Assessment aur Admin par extra top padding nahi chahiye */}
      <main className={`flex-grow ${hideStandardLayout ? '' : 'pt-24 lg:pt-32'}`}>
        
        {/* AnimatePresence framer-motion ko allow karta hai ki wo page leave/enter animations handle kare */}
        <AnimatePresence mode="wait">
          {/* CRITICAL: Routes ko location aur key dena zaroori hai animation detect karne ke liye */}
          <Routes location={location} key={location.pathname}>
            
            {/* Saare main website routes */}
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
            <Route path="/transformations" element={<PageWrapper><Transformations /></PageWrapper>} />
            <Route path="/book-appointment" element={<PageWrapper><Booking /></PageWrapper>} />
            <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
            <Route path="/terms" element={<PageWrapper><Terms /></PageWrapper>} />
            <Route path="/cookie-policy" element={<PageWrapper><CookiePolicy /></PageWrapper>} />
            <Route path="/journal" element={<PageWrapper><Journal /></PageWrapper>} />
            
            {/* Assessment Full-Screen Funnel */}
            <Route path="/apply" element={<Assessment />} />
            
            {/* ================= SECURE ADMIN PORTAL ================= */}
            <Route path="/command-center" element={<AdminDashboard />} />
            <Route path="/thank-you" element={<ThankYou />} />
            
          </Routes>
        </AnimatePresence>
      </main>

      {/* FloatingNode aur Footer Admin aur Assessment pages par HIDE rahenge */}
      {!hideStandardLayout && (
        <>
          <FloatingNode />
          <Footer />
        </>
      )}
      
    </div>
  );
}

export default App;