
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutDoctor from './components/AboutDoctor';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import TreatmentProcess from './components/TreatmentProcess';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-charcoal selection:bg-gold-light selection:text-charcoal bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <AboutDoctor />
        <Services />
        <WhyChooseUs />
        <TreatmentProcess />
        <Gallery />
        <Testimonials />
        <Appointment />
      </main>
      <Footer />
    </div>
  );
};

export default App;
