import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import FractionalTalentPage from './pages/FractionalTalentPage';
import HrAdvisoryPage from './pages/HrAdvisoryPage';
import CoachingPage from './pages/CoachingPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import AboutUsPage from './pages/AboutUsPage';
import OurPhilosophyPage from './pages/OurPhilosophyPage';
import ContactUsPage from './pages/ContactUsPage';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/fractional-talent" element={<FractionalTalentPage />} />
            <Route path="/services/hr-advisory" element={<HrAdvisoryPage />} />
            <Route path="/services/coaching" element={<CoachingPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/philosophy" element={<OurPhilosophyPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;