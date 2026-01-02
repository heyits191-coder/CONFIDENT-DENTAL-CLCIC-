
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Heart, Shield, ArrowRight, Play, X, Volume2, VolumeX } from 'lucide-react';

const AboutDoctor: React.FC = () => {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const highlights = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "Advanced Expertise",
      desc: "Implant & Prosthetic Specialist",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Patient-First",
      desc: "Painless & Gentle Approach",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Sterile Hub",
      desc: "Highest Medical Standards",
    },
  ];

  return (
    <section className="py-24 md:py-40 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Founder Media Column */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl z-10 bg-charcoal group">
              <AnimatePresence mode="wait">
                {!isVideoActive ? (
                  /* PORTRAIT STATE */
                  <motion.div
                    key="portrait"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => setIsVideoActive(true)}
                  >
                    <img 
                      src="/images/unnamed.jpg" 
                      alt="Dr. Anamika Sinha" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/20 transition-colors" />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gold shadow-2xl border border-gold/20"
                      >
                        <Play className="w-8 h-8 fill-gold ml-1" />
                        <motion.div 
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 rounded-full border-2 border-gold"
                        />
                      </motion.div>
                    </div>

                    <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gold/10 pointer-events-none">
                      <p className="text-charcoal font-serif italic text-lg leading-relaxed">
                        "Your smile is our masterpiece."
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  /* VIDEO STATE */
                  <motion.div
                    key="video"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 bg-charcoal flex items-center justify-center"
                  >
                    <video 
                      autoPlay 
                      loop 
                      muted={isMuted}
                      playsInline
                      className="w-full h-full object-contain"
                    >
                      <source src="/videos/FOUNDERCONFIDENT.mp4" type="video/mp4" />
                    </video>

                    {/* Video Controls Overlay */}
                    <div className="absolute top-6 right-6 flex items-center gap-3">
                      <button 
                        onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
                        className="w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setIsVideoActive(false); }}
                        className="w-10 h-10 bg-white/90 hover:bg-white backdrop-blur-md rounded-full flex items-center justify-center text-charcoal shadow-xl transition-all"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="absolute bottom-6 left-6">
                      <span className="px-4 py-2 bg-gold/90 text-white text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-sm">
                        Clinical Presentation
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Accent Frames */}
            <div className="absolute -top-10 -left-10 w-[120%] h-[120%] border border-gold/5 rounded-[60px] -z-0 pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gold rounded-full blur-3xl opacity-20 -z-0" />
          </motion.div>

          {/* Content Column */}
          <motion.div 
            className="lg:col-span-7 space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-4">
              <motion.span variants={itemVariants} className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-gold">
                The Hands Behind the Smile
              </motion.span>
              
              <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-serif font-bold text-charcoal leading-tight">
                Dr. Anamika Sinha, <span className="text-gold italic">MDS</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-charcoal/70 font-medium">
                Prosthodontist & Implant Specialist
              </motion.p>
            </div>

            <motion.p variants={itemVariants} className="text-lg text-charcoal/60 leading-relaxed max-w-2xl font-medium">
              Dr. Anamika Sinha is one of Indore’s most trusted dental specialists. 
              With an MDS in Prosthodontics, she specializes in restorative and 
              reconstructive dentistry, transforming thousands of smiles through 
              pain-free clinical excellence.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {highlights.map((h, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-ivory/50 border border-charcoal/5 flex flex-col gap-4 group transition-all duration-300 hover:border-gold/20 hover:shadow-xl hover:shadow-gold/5"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gold shadow-sm group-hover:bg-gold group-hover:text-white transition-all duration-500">
                    {h.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-charcoal">{h.title}</h4>
                    <p className="text-[10px] font-medium text-charcoal/40 leading-tight uppercase tracking-wide">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-8 pt-6">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-10 py-5 bg-charcoal text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-2xl shadow-charcoal/20 hover:bg-gold transition-all duration-500 flex items-center justify-center gap-3 group"
              >
                Meet Dr. Anamika
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <a href="#contact" className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/30 hover:text-gold transition-colors flex items-center gap-4 group">
                Clinic Tour
                <span className="w-12 h-[1px] bg-charcoal/10 group-hover:bg-gold transition-all duration-500 group-hover:w-16" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
