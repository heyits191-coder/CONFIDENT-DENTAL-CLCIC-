
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Star, ShieldCheck, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const lineReveal = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative h-screen min-h-[750px] w-full flex items-center bg-ivory overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f3f0ea]/30 -z-10" />
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
        
        {/* Left Side: Content */}
        <motion.div 
          className="lg:col-span-6 z-10 space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-3 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-gold/20 rounded-full shadow-sm">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/80">
              Trusted Dental Care in Indore
            </span>
          </motion.div>

          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-serif font-bold text-charcoal leading-[0.9] tracking-tight">
              <div className="overflow-hidden">
                <motion.div variants={lineReveal}>Smile With</motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div variants={lineReveal} className="text-gold italic font-normal">Confidence</motion.div>
              </div>
            </h1>

            <motion.div variants={itemVariants} className="max-w-xl space-y-4">
              <p className="text-xl md:text-2xl text-charcoal/80 font-medium">
                Advanced Dental Care by <span className="text-charcoal font-bold underline decoration-gold/30 underline-offset-8">Dr. Anamika Sinha, MDS</span>
              </p>
              <div className="flex items-center flex-wrap gap-4 text-[10px] text-charcoal/50 uppercase tracking-[0.2em] font-bold">
                <span className="flex items-center"><ShieldCheck className="w-3 h-3 mr-1 text-gold" /> Prosthodontist</span>
                <span className="w-1 h-1 bg-gold/30 rounded-full" />
                <span className="flex items-center"><ShieldCheck className="w-3 h-3 mr-1 text-gold" /> Implantologist</span>
                <span className="w-1 h-1 bg-gold/30 rounded-full" />
                <span className="flex items-center"><MapPin className="w-3 h-3 mr-1 text-gold" /> Indore</span>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-10 py-5 bg-charcoal text-white text-xs font-bold uppercase tracking-widest rounded-xl overflow-hidden transition-all duration-300 shadow-2xl shadow-charcoal/20"
            >
              <span className="relative z-10 flex items-center gap-3">
                Book Appointment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 px-10 py-5 bg-white border border-charcoal/10 text-charcoal text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 hover:border-gold hover:shadow-xl active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              WhatsApp Us
            </motion.button>
          </motion.div>

          {/* Social Proof */}
          <motion.div variants={itemVariants} className="flex items-center space-x-6 pt-6 border-t border-charcoal/5 w-fit">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <motion.img 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  key={i} 
                  src={`https://picsum.photos/seed/${i + 50}/64/64`} 
                  alt="Reviewer" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" 
                />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 text-gold fill-gold" />
                ))}
                <span className="ml-1 text-[10px] font-bold text-charcoal tracking-widest">5.0 RATING</span>
              </div>
              <span className="text-[10px] text-charcoal/40 uppercase tracking-widest font-bold mt-1">10k+ Confident Smiles</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Visual */}
        <div className="lg:col-span-6 relative hidden lg:block h-[85vh]">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl shadow-charcoal/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000" 
              alt="Premium Dental Environment" 
              className="w-full h-full object-cover grayscale-[0.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/30 via-transparent to-transparent" />
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-xl p-8 rounded-2xl border border-gold/10 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-white shadow-lg">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-charcoal leading-none">15+</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-charcoal/50 mt-1">Years Clinical Mastery</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <div className="absolute -top-6 -right-6 w-full h-full border border-gold/10 rounded-3xl -z-10" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-charcoal/30 mb-2">Scroll</span>
        <div className="scroll-indicator" />
      </motion.div>
    </section>
  );
};

export default Hero;