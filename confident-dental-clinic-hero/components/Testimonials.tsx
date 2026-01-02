
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ArrowLeft, ArrowRight, Calendar } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Ritu Sharma",
    treatment: "Dental Implants",
    quote: "Dr. Anamika made my dental implant experience completely painless. The attention to detail and the clinical standards are world-class. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "Ankit Verma",
    treatment: "Smile Makeover",
    quote: "Clean clinic, very polite staff, and excellent treatment. I finally smile confidently after years of being conscious. Truly life-changing care.",
    rating: 5
  },
  {
    id: 3,
    name: "Neha Jain",
    treatment: "Root Canal Treatment",
    quote: "Best dental clinic in Indore. Very professional and caring approach. I was terrified of root canals, but Dr. Sinha made it feel like a breeze.",
    rating: 5
  },
  {
    id: 4,
    name: "Vikram Singh",
    treatment: "Clear Aligners",
    quote: "The digital scanning and the whole process for aligners was so futuristic. Dr. Anamika explains everything clearly. Very happy with my progress.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    // Replaced 'section' with 'div' to avoid potential "Cannot find name 'section'" errors in some TSX environments
    <div className="py-24 md:py-40 bg-[#FAF9F6] relative overflow-hidden">
      <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 md:mb-32">
          <div className="space-y-6 max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-gold"
            >
              Success Stories
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-serif font-bold text-charcoal leading-tight"
            >
              Hear it from our <span className="text-gold italic">Happy Patients</span>
            </motion.h2>
          </div>
          
          <div className="flex gap-4">
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: '#2D2D2D', color: '#FFF' }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-16 h-16 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal transition-all"
            >
              <ArrowLeft className="w-6 h-6" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: '#2D2D2D', color: '#FFF' }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
              className="w-16 h-16 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal transition-all"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div 
          className="relative h-[450px] md:h-[400px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <div className="bg-white p-10 md:p-16 rounded-[40px] border border-charcoal/5 shadow-2xl shadow-charcoal/5 flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-[32px] overflow-hidden shadow-xl">
                    <img 
                      src={`https://picsum.photos/seed/${testimonials[index].id + 100}/200/200`} 
                      alt={testimonials[index].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-grow space-y-8">
                  <div className="flex justify-between items-start">
                    <div className="p-4 bg-ivory rounded-2xl text-gold shadow-sm">
                      <Quote className="w-6 h-6 fill-gold" />
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xl md:text-2xl text-charcoal italic leading-relaxed font-serif">
                    "{testimonials[index].quote}"
                  </p>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-charcoal/5">
                    <div>
                      <h4 className="text-lg font-bold text-charcoal">{testimonials[index].name}</h4>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mt-1">{testimonials[index].treatment}</p>
                    </div>
                    <div className="flex gap-2">
                       {testimonials.map((_, i) => (
                         <button 
                           key={i} 
                           onClick={() => setIndex(i)}
                           className={`h-1.5 rounded-full transition-all duration-500 ${index === i ? 'w-10 bg-gold' : 'w-2 bg-charcoal/10'}`}
                         />
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-32 flex flex-col items-center gap-10"
        >
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-12 py-6 bg-charcoal text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-2xl shadow-charcoal/20 hover:bg-gold transition-all duration-500 flex items-center gap-4"
          >
            <Calendar className="w-5 h-5" />
            Book Your Free Consultation
          </motion.button>
          
          <p className="text-[10px] font-bold text-charcoal/30 uppercase tracking-[0.4em]">100% Genuine Clinical Testimonials</p>
        </motion.div>

      </div>
    </div>
  );
};

export default Testimonials;
