
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import CertificateCard from '../components/CertificateCard';
import CertificateSection from '../components/CertificateSection';

// Placeholder images - replace with your actual certificate images
const placeholders = {
  coursera: "/placeholder.svg",
  mernDsa: "/placeholder.svg",
  roadsideCoder: "/placeholder.svg",
  hackerrank: "/placeholder.svg",
  thesis: "/placeholder.svg"
};

const Index = () => {
  const certificateSections = [
    {
      id: 'coursera',
      title: 'Coursera Certificates',
      description: 'Frontend development certifications from Coursera, showcasing expertise in modern web technologies.',
      certificates: [
        {
          title: 'Frontend Web Development with React',
          issuer: 'Coursera',
          date: 'April 2023',
          image: placeholders.coursera,
          fileType: 'pdf',
          fileUrl: '#'
        },
        {
          title: 'JavaScript: Modern Techniques',
          issuer: 'Coursera',
          date: 'March 2023',
          image: placeholders.coursera,
          fileType: 'pdf',
          fileUrl: '#'
        }
      ]
    },
    {
      id: 'mern-dsa',
      title: 'MERN & DSA Training',
      description: 'Certificates from training by Prashant Jain (ex-Microsoft employee) on MERN stack and data structures.',
      certificates: [
        {
          title: 'MERN Stack Development',
          issuer: 'Prashant Jain',
          date: 'June 2023',
          image: placeholders.mernDsa,
          fileType: 'image',
          fileUrl: '#'
        },
        {
          title: 'Data Structures & Algorithms',
          issuer: 'Prashant Jain',
          date: 'May 2023',
          image: placeholders.mernDsa,
          fileType: 'image',
          fileUrl: '#'
        }
      ]
    },
    {
      id: 'other',
      title: 'Other Achievements',
      description: 'Additional certificates and special projects showcasing technical expertise.',
      certificates: [
        {
          title: 'Frontend Interview Preparation',
          issuer: 'RoadsideCoder',
          date: 'August 2023',
          image: placeholders.roadsideCoder,
          fileType: 'pdf',
          fileUrl: '#'
        },
        {
          title: 'JavaScript Certification',
          issuer: 'HackerRank',
          date: 'September 2023',
          image: placeholders.hackerrank,
          fileType: 'pdf',
          fileUrl: '#'
        },
        {
          title: 'Android App Car with Metal Detector',
          issuer: 'Final Year Thesis',
          date: 'December 2023',
          image: placeholders.thesis,
          fileType: 'pdf',
          fileUrl: '#'
        }
      ]
    }
  ];

  return (
    <Layout>
      <Hero />
      
      <div className="py-12 md:py-20">
        {certificateSections.map((section) => (
          <CertificateSection 
            key={section.id}
            title={section.title}
            description={section.description}
          >
            {section.certificates.map((cert, index) => (
              <motion.div
                key={`${section.id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <CertificateCard {...cert} />
              </motion.div>
            ))}
          </CertificateSection>
        ))}
      </div>
    </Layout>
  );
};

export default Index;
