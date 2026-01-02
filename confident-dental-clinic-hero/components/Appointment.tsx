
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Clock, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

const Appointment: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 60 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-gradient-to-br from-white to-ivory relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 skew-x-12 translate-x-1/4 -z-0" />
      <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] -z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <motion.span variants={itemVariants} className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-gold">
                Get in Touch
              </motion.span>
              
              <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-serif font-bold text-charcoal leading-tight tracking-tight">
                Ready for a <br /> New <span className="text-gold italic">Smile?</span>
              </motion.h2>
              
              <motion.p variants={itemVariants} className="text-xl text-charcoal/50 leading-relaxed max-w-xl font-medium">
                Experience world-class dentistry designed around your comfort. 
                Dr. Anamika and her team are ready to help you rediscover your confidence.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-gold shadow-lg group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-charcoal uppercase tracking-widest">Location</h4>
                  <p className="text-sm font-bold text-charcoal/60 mt-1">Vijay Nagar, Indore</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-gold shadow-lg group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-charcoal uppercase tracking-widest">Hours</h4>
                  <p className="text-sm font-bold text-charcoal/60 mt-1">Mon – Sat: 10AM – 8PM</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-white p-12 md:p-16 rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-charcoal/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />
              
              <div className="relative z-10 space-y-12">
                <div className="text-center space-y-3">
                  <h3 className="text-3xl font-serif font-bold text-charcoal">Direct Connection</h3>
                  <p className="text-[10px] text-charcoal/40 font-bold uppercase tracking-[0.2em]">Immediate booking via phone or message</p>
                </div>

                <div className="space-y-6">
                  <motion.a 
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    href="tel:+919876543210" 
                    className="flex items-center justify-center gap-4 w-full py-6 bg-charcoal text-white text-xs font-bold uppercase tracking-[0.2em] rounded-2xl transition-all duration-500 hover:bg-gold hover:shadow-2xl hover:shadow-gold/30 group/btn"
                  >
                    <Phone className="w-5 h-5" />
                    Call Clinic 
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                  </motion.a>

                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    href="https://wa.me/919876543210" 
                    className="flex items-center justify-center gap-4 w-full py-6 bg-white border border-charcoal/10 text-charcoal text-xs font-bold uppercase tracking-[0.2em] rounded-2xl transition-all duration-500 hover:border-gold hover:text-gold hover:shadow-xl"
                  >
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    WhatsApp
                  </motion.a>
                </div>

                <div className="pt-10 border-t border-charcoal/5">
                  <div className="flex flex-wrap justify-center gap-6">
                    <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-charcoal/30">
                      <ShieldCheck className="w-4 h-4 text-gold" />
                      Priority Response
                    </div>
                    <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-charcoal/30">
                      <ShieldCheck className="w-4 h-4 text-gold" />
                      Flexible Timings
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Appointment;