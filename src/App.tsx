// App.tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import AboutUs from './components/AboutUs';
import HeroCarousel from './components/HeroCarousel';
import PackageSelector from './components/ChoosePackage';
import WhatWeDo from './components/whatwedo';
import FAQSection from './components/faqSection';
import Footer from './components/footer';
import PackageCarousel from './components/PackageCarousel';
import { PackageProvider } from './components/UserContext';
import Testimonials from './components/Testimonials';
import BookAppointmentSection from './components/BookApointment';

const Home = () => (
  <div>
    <HeroCarousel />
    <WhatWeDo />
    <PackageProvider>
    <PackageSelector />
    <PackageCarousel />
    </PackageProvider>
    <Testimonials />
    <BookAppointmentSection />
    <FAQSection />
  </div>
);

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
