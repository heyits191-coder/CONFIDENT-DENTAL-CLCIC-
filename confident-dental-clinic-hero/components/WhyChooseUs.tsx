
import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserCheck, 
  Cpu, 
  ShieldCheck, 
  HeartHandshake, 
  Leaf, 
  Users
} from 'lucide-react';

const features = [
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "MDS Expert Specialist",
    description: "Treatment led by Indore's top Prosthodontist and Implant Specialist."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Digital Dentistry",
    description: "Cutting-edge technology for precise diagnostics and seamless care."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "100% Sterilization",
    description: "Hospital-grade hygiene protocols for complete patient safety."
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Bespoke Plans",
    description: "Treatment journeys designed specifically for your smile goals."
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Calm Environment",
    description: "A premium, stress-free setting that prioritizes your comfort."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Happy Families",
    description: "Join thousands of satisfied patients who now smile with confidence."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-32 space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-gold"
          >
            The Confident Advantage
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif font-bold text-charcoal leading-tight"
          >
            Why Trust Your <span className="text-gold italic">Smile</span> to Us?
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-col items-start space-y-6 group"
            >
              <motion.div 
                whileInView={{ scale: [0.8, 1.1, 1] }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center text-gold bg-ivory group-hover:bg-gold group-hover:text-white transition-all duration-500 shadow-lg shadow-gold/5"
              >
                {feature.icon}
              </motion.div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-charcoal tracking-tight group-hover:text-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-charcoal/50 leading-relaxed font-medium">
                  {feature.description}
                </p>
                <div className="w-10 h-0.5 bg-gold/20 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;