
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Monitor, 
  ClipboardCheck, 
  Stethoscope, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Discovery",
    description: "An in-depth consultation to understand your unique smile goals."
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Diagnosis",
    description: "3D digital scans for high-precision treatment planning."
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: "Strategy",
    description: "A tailored treatment path designed specifically for you."
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Gentle Care",
    description: "Smooth, pain-free procedures in a clinical yet cozy setting."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Radiance",
    description: "Walk out with a functional, confident, and beautiful smile."
  }
];

const TreatmentProcess: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-[#FAF9F6] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/50 skew-x-12 -z-10" />
      
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-40 space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-gold"
          >
            The Journey
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif font-bold text-charcoal leading-tight"
          >
            Your Path to <span className="text-gold italic">Perfection</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gold/10">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              className="h-full bg-gold/40"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Icon */}
                <div className="relative z-10 mb-10">
                  <div className="w-24 h-24 rounded-full bg-white border border-gold/10 flex items-center justify-center shadow-2xl group-hover:border-gold/30 transition-all duration-500 relative">
                    <div className="text-gold group-hover:scale-110 transition-transform duration-500">
                      {step.icon}
                    </div>
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-gold text-white text-[10px] font-bold flex items-center justify-center border-4 border-[#FAF9F6] shadow-md">
                      0{index + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 px-4">
                  <h3 className="text-xl font-bold text-charcoal tracking-tight group-hover:text-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-xs text-charcoal/40 leading-relaxed font-bold uppercase tracking-widest">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-32 flex flex-col items-center gap-10"
        >
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group px-12 py-6 bg-charcoal text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-2xl shadow-charcoal/20 hover:bg-gold transition-all duration-500 flex items-center gap-4"
          >
            Start Your Journey 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </motion.button>
          
          <div className="flex items-center gap-6 grayscale opacity-30">
             <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Precision</span>
             <span className="w-1.5 h-1.5 rounded-full bg-gold" />
             <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Compassion</span>
             <span className="w-1.5 h-1.5 rounded-full bg-gold" />
             <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Excellence</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TreatmentProcess;