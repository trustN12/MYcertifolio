
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import CertificateCard from '../components/CertificateCard';

const MernDsa = () => {
  // Replace with your actual certificate data
  const certificates = [
    {
      title: 'MERN Stack Development Training',
      issuer: 'Prashant Jain (Ex-Microsoft)',
      date: 'January 2025',
      image: '/Dsa.png',
      fileType: 'image',
      fileUrl: '/Dsa.png'
    },
    {
      title: 'Data Structures & Algorithms In Java',
      issuer: 'Prashant Jain (Ex-Microsoft)',
      date: 'December 2024',
      image: '/Mern.png',
      fileType: 'image',
      fileUrl: '/Mern.png'
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto mb-12">
        <motion.h1 
          className="text-3xl md:text-5xl font-display font-medium mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          MERN Stack & DSA Certificates
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Training certificates from Prashant Jain (Ex-Microsoft employee) covering MERN stack development and data structures & algorithms.
        </motion.p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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

export default MernDsa;
