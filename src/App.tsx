// App.tsx
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutUs = lazy(() => import('./components/AboutUs'));
const HeroCarousel = lazy(() => import('./components/HeroCarousel'));
const PackageSelector = lazy(() => import('./components/ChoosePackage'));
const WhatWeDo = lazy(() => import('./components/whatwedo'));
const FAQSection = lazy(() => import('./components/faqSection'));
const PackageCarousel = lazy(() => import('./components/PackageCarousel'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const BookAppointmentSection = lazy(() => import('./components/BookApointment'));
const BabyImpressionsExplore = lazy(() => import('./components/Services/BabyImpressionsExplore'));
const BookingPopup = lazy(() => import('./components/BookingPopup'));
import { PackageProvider } from './components/UserContext';
import CoupleImpressionsExplore from './components/Services/CoupleImpressionsExplore';

const Home = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <HeroCarousel />
    <WhatWeDo />
    <PackageProvider>
      <PackageSelector />
      <PackageCarousel />
    </PackageProvider>
    <Testimonials />
    <BookAppointmentSection />
    <FAQSection />
  </Suspense>
);

const App = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/baby-impressions" element={<BabyImpressionsExplore />} />
          <Route path="/couple-impressions" element={<CoupleImpressionsExplore />} />
          <Route path="/booking" element={<BookingPopup />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
