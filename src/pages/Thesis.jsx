
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { File, Download, ArrowRight } from 'lucide-react';

const Thesis = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-3xl md:text-5xl font-display font-medium mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Final Year Thesis
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Android App Car with Metal Detector - Final Year Project Documentation
        </motion.p>
        
        <motion.div 
          className="bg-card rounded-xl overflow-hidden border border-border shadow-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="aspect-video bg-muted relative">
            <img 
              src="/thesis.jpg" 
              alt="Thesis preview" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <File className="h-16 w-16 text-white opacity-50" />
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-accent px-3 py-1 rounded-full text-sm font-medium text-accent-foreground">
                PDF Document
              </div>
              <div className="bg-accent/50 px-3 py-1 rounded-full text-sm font-medium text-accent-foreground">
                Final Year Project
              </div>
            </div>
            
            <h2 className="text-2xl font-medium mb-4">Android App Car with Metal Detector</h2>
            
            <div className="text-muted-foreground space-y-4 mb-6">
              <p>
                This thesis presents the design and implementation of an Android-controlled car equipped with a metal detector. The project combines mobile application development, embedded systems, and sensor technology to create a functional prototype.
              </p>
              <p>
                The car is remotely controlled via Bluetooth using a custom Android application, allowing for precise movement and metal detection functionality. The thesis document includes detailed explanations of the system architecture, component selection, implementation challenges, and experimental results.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/College Final Year Project.pdf" 
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Download className="h-5 w-5" />
                <span>Download Thesis</span>
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors"
              >
                <span>View Project Details</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div>
            <h3 className="text-xl font-medium mb-2">Abstract</h3>
            <p className="text-muted-foreground">
              This project presents the design and implementation of a mobile robot car that can be controlled through an Android application and is equipped with a metal detector for identifying metallic objects in its path. The system combines Arduino microcontroller programming, Android application development, and sensor integration to create a functional prototype with potential applications in security, education, and hobbyist robotics.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-2">Key Technologies Used</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Android Application Development</li>
              <li>Arduino Programming</li>
              <li>Bluetooth Communication</li>
              <li>Metal Detection Circuitry</li>
              <li>Motor Control Systems</li>
              <li>Sensor Integration</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-2">Publication Date</h3>
            <p className="text-muted-foreground">May 2023</p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Thesis;
