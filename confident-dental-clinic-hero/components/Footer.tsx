
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Search, 
  ArrowUpRight
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Dental Implants",
    "Smile Makeover",
    "Root Canal Treatment",
    "Aligners & Braces",
    "Teeth Whitening",
    "Crowns & Bridges"
  ];

  const quickLinks = [
    { name: "The Clinic", href: "#" },
    { name: "Treatments", href: "#" },
    { name: "Dr. Anamika", href: "#" },
    { name: "Patient Reviews", href: "#" },
    { name: "Contact Us", href: "#contact" }
  ];

  return (
    <footer className="bg-white border-t border-charcoal/5 pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Clinic Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-charcoal tracking-tight">
                Confident <span className="text-gold italic">Dental</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold -mt-1">
                Clinic • Indore
              </span>
            </div>
            <p className="text-sm text-charcoal/40 leading-relaxed font-medium">
              A center of excellence for modern prosthodontics and implantology, creating confident smiles for the people of Indore since 2010.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Search].map((Icon, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -3, scale: 1.1 }}
                  href="#" 
                  className="w-12 h-12 rounded-full border border-charcoal/5 flex items-center justify-center text-charcoal/20 hover:text-gold hover:border-gold transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Specialties */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-charcoal mb-10">Specialties</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-charcoal/40 hover:text-gold transition-colors flex items-center group font-medium">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-gold transition-all duration-300 mr-0 group-hover:mr-3"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-charcoal mb-10">Quick Nav</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-charcoal/40 hover:text-gold transition-colors flex items-center group font-medium">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-gold transition-all duration-300 mr-0 group-hover:mr-3"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-10"
          >
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-charcoal mb-10">Clinic Desk</h3>
            <div className="space-y-8">
              <div className="flex gap-5">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <div className="space-y-2">
                  <p className="text-sm text-charcoal/60 leading-snug font-medium">
                    Vijay Nagar, Scheme No. 54,<br />Indore, MP 452010
                  </p>
                  <a href="#" className="text-[10px] font-bold text-gold uppercase tracking-widest flex items-center gap-2 group">
                    Route on Maps <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <p className="text-sm font-bold text-charcoal tracking-widest">+91 98765 43210</p>
              </div>

              <div className="flex gap-5">
                <Clock className="w-5 h-5 text-gold shrink-0" />
                <div>
                  <p className="text-sm font-bold text-charcoal leading-none">Open Hours</p>
                  <p className="text-[10px] text-charcoal/40 font-bold uppercase tracking-widest mt-2">Mon – Sat: 10AM – 8PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <div className="pt-12 border-t border-charcoal/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-bold text-charcoal/20 uppercase tracking-[0.4em]">
            &copy; {currentYear} Confident Dental Clinic Indore • All Rights Reserved
          </div>
          
          <div className="flex items-center gap-10">
            <a href="#" className="text-[10px] font-bold text-charcoal/20 hover:text-gold uppercase tracking-[0.2em] transition-colors">Privacy</a>
            <a href="#" className="text-[10px] font-bold text-charcoal/20 hover:text-gold uppercase tracking-[0.2em] transition-colors">Terms</a>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-3 px-5 py-2 rounded-full bg-ivory border border-charcoal/5"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-charcoal/40">Clinical Staff Online</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;