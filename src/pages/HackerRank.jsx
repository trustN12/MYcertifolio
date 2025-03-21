
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import CertificateCard from '../components/CertificateCard';

const HackerRank = () => {
  // Replace with your actual certificate data
  const certificates = [
    {
      title: 'Frontend Developer (React)',
      issuer: 'HackerRank',
      date: 'August 2024',
      image: '/hackerrank.png',
      fileType: 'pdf',
      fileUrl: '/hackerrank1.pdf'
    },
    {
      title: 'JavaScript (Basic)',
      issuer: 'HackerRank',
      date: 'Jun 2024',
      image: '/hackerrank.png',
      fileType: 'pdf',
      fileUrl: '/hackerrank2.pdf'
    }, 
    {
      title: 'Problem Solving (Basic)',
      issuer: 'HackerRank',
      date: 'Jul 2024',
      image: '/hackerrank.png',
      fileType: 'pdf',
      fileUrl: '/hackerrank3.pdf'
    },
    {
      title: 'Software Engineer Intern',
      issuer: 'HackerRank',
      date: 'August 2024',
      image: '/hackerrank.png',
      fileType: 'pdf',
      fileUrl: '/hackerrank4.pdf'
    },
    
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
          HackerRank Certificates
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Skill certificates earned through the HackerRank platform, demonstrating proficiency in various programming concepts.
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

export default HackerRank;
