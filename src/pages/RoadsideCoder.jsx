
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import CertificateCard from '../components/CertificateCard';

const RoadsideCoder = () => {
  // Replace with your actual certificate data
  const certificates = [
    {
      title: 'Frontend Interview Preparation Course',
      issuer: 'RoadsideCoder',
      date: 'March 2025',
      image: '/roadsidecoder.png',
      fileType: 'pdf',
      fileUrl: '/Frontend1.pdf'
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto mb-12">
        <motion.h1 
          className="text-3xl md:text-5xl font-display font-medium mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          RoadsideCoder Certificates
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Frontend interview preparation and advanced web development certificates from RoadsideCoder.
        </motion.p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <CertificateCard {...cert} />
          </motion.div>
        ))}
      </motion.div>
    </Layout>
  );
};

export default RoadsideCoder;
