import { Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <ScrollToTop />
      <Header />
      
      {/* Yahan 'pt-24' (padding-top) add kiya gaya hai. 
          Ye padding content ko Header ke neeche se shuru karegi taaki 
          pages header ke andar na dhassein.
      */}
      <main className="flex-grow pt-24 lg:pt-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/transformations" element={<Transformations />} />
          <Route path="/book-appointment" element={<Booking />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;