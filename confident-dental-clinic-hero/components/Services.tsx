
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Dna, 
  Sparkles, 
  Activity, 
  Zap, 
  Crown, 
  Smile, 
  ArrowRight,
  Calendar
} from 'lucide-react';

const services = [
  {
    icon: <Dna className="w-6 h-6" />,
    title: "Dental Implants",
    description: "Permanent and natural-looking solutions to replace missing teeth with long-lasting results."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Smile Makeover",
    description: "Cosmetic treatments designed to enhance your smile and boost your overall confidence."
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Root Canal",
    description: "Pain-free root canal treatments using advanced techniques to save your natural teeth."
  },
  {
    icon: <Smile className="w-6 h-6" />,
    title: "Clear Aligners",
    description: "Modern orthodontic solutions for perfectly straight teeth without traditional braces."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Teeth Whitening",
    description: "Professional medical-grade whitening for a brighter, healthier, and radiant smile."
  },
  {
    icon: <Crown className="w-6 h-6" />,
    title: "Crowns & Bridges",
    description: "Restore dental function and aesthetic appearance with durable, custom restorations."
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-[#FAF9F6] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32 space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-gold"
          >
            Clinical Excellence
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif font-bold text-charcoal leading-tight"
          >
            Advanced Dental <span className="text-gold italic">Specialties</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg text-charcoal/50 font-medium"
          >
            We combine high-precision technology with a personalized touch for your dental health.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group bg-white p-10 rounded-[32px] border border-charcoal/5 shadow-sm hover:shadow-2xl hover:shadow-charcoal/5 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-ivory flex items-center justify-center text-gold mb-10 group-hover:bg-gold group-hover:text-white transition-all duration-500 shadow-sm">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-charcoal mb-4 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-charcoal/50 leading-relaxed mb-10 text-sm font-medium">
                {service.description}
              </p>
              
              <a href="#" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal hover:text-gold transition-all group">
                Explore Treatment 
                <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 flex flex-col items-center gap-8"
        >
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-12 py-6 bg-charcoal text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-2xl shadow-charcoal/20 hover:bg-gold transition-all duration-500 flex items-center gap-4"
          >
            <Calendar className="w-5 h-5" />
            Start Your Transformation
          </motion.button>
          
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
               {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border border-white bg-gold/10 overflow-hidden shadow-sm" />)}
            </div>
            <p className="text-[10px] font-bold text-charcoal/30 uppercase tracking-[0.2em]">Trusted by Patients across Madhya Pradesh</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;