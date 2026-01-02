
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Calendar } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200',
    title: 'Modern Reception Lounge',
    category: 'The Clinic'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1590103512987-29f2d9378746?auto=format&fit=crop&q=80&w=800',
    title: 'Advanced Treatment Room',
    category: 'Precision'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    title: 'Private Consultation Space',
    category: 'Care'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    title: 'High-Precision Equipment',
    category: 'Technology'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1200',
    title: 'Sterilization & Hygiene Hub',
    category: 'Safety'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    title: 'Patient Comfort Zone',
    category: 'Hospitality'
  }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section className="py-24 md:py-40 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-32 space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-gold"
          >
            The Space
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif font-bold text-charcoal leading-tight"
          >
            A Sanctuary for Your <span className="text-gold italic">Well-being</span>
          </motion.h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[350px]">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`group relative overflow-hidden rounded-[40px] cursor-pointer shadow-xl shadow-charcoal/5 ${
                index === 0 || index === 4 ? 'lg:col-span-2' : ''
              }`}
              onClick={() => setSelectedImage(item)}
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <div className="flex justify-between items-end">
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-2xl font-serif">{item.title}</h3>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-white border border-white/20"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-24 flex flex-col items-center"
        >
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-12 py-6 bg-charcoal text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-2xl shadow-charcoal/20 hover:bg-gold transition-all duration-500 flex items-center gap-4"
          >
            <Calendar className="w-5 h-5" />
            Book a Clinic Tour
          </motion.button>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-3xl flex items-center justify-center p-6 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              whileHover={{ rotate: 90 }}
              className="absolute top-10 right-10 text-white/40 hover:text-white transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </motion.button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-6xl w-full aspect-video rounded-[40px] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent">
                <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px]">
                  {selectedImage.category}
                </span>
                <h2 className="text-white text-4xl md:text-5xl font-serif font-bold mt-3">
                  {selectedImage.title}
                </h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;