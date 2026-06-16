import { Routes, Route, useLocation } from 'react-router-dom';
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
import FloatingNode from './components/FloatingNode'; // <-- Naya component yahan import kiya hai
import Journal from './pages/Journal';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/transformations" element={<Transformations />} />
          <Route path="/book-appointment" element={<Booking />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/apply" element={<Assessment />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
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