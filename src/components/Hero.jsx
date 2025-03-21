
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };
    
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative overflow-hidden py-20 md:py-32"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background/50 pointer-events-none"></div>
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(200,210,255,0.25),transparent_40%)]"></div>
      
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-medium mb-6 tracking-tight">
              My Professional Certifications Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-8 md:leading-relaxed">
              A showcase of achievements in frontend development, MERN stack, data structures & algorithms, and more.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/coursera"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                <span>Explore Certificates</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
