
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 py-4 md:py-6 px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-charcoal/5' : 'bg-transparent'
      }`}
    >
      <div className="flex flex-col">
        <span className="text-xl md:text-2xl font-serif font-bold text-charcoal tracking-tight">
          Confident <span className="text-gold italic">Dental</span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold -mt-1">
          Clinic • Indore
        </span>
      </div>

      <div className="hidden md:flex items-center space-x-10 text-xs font-bold uppercase tracking-widest text-charcoal/60">
        <a href="#" className="hover:text-gold transition-colors relative group">
          Treatments
          <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" className="hover:text-gold transition-colors relative group">
          Dr. Anamika
          <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" className="hover:text-gold transition-colors relative group">
          Case Studies
          <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" className="hover:text-gold transition-colors relative group">
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden lg:flex flex-col items-end mr-4">
          <span className="text-[10px] text-charcoal/40 uppercase tracking-[0.2em] font-bold">Appointment</span>
          <span className="text-sm font-bold text-charcoal">+91 98765 43210</span>
        </div>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 bg-charcoal text-white rounded-full hover:bg-gold transition-all duration-300 shadow-lg shadow-charcoal/10"
        >
          <Phone className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;