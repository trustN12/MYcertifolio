
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { ArrowRight } from 'lucide-react';

const CertificateSection = ({ title, description, children }) => {
  return (
    <motion.section 
      className="py-16 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background gradient decoration */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-full blur-3xl opacity-40 z-0" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-accent/10 to-primary/20 rounded-full blur-3xl opacity-40 z-0" />
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            className="flex justify-center mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Badge variant="outline" className="px-4 py-1 text-sm font-medium bg-background/50 backdrop-blur-sm">
              {title}
            </Badge>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-medium mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {description}
          </motion.p>
          
          <motion.div 
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-border to-transparent"></div>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, staggerChildren: 0.1 }}
        >
          {children}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium">
            <span>View all certificates</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CertificateSection;
