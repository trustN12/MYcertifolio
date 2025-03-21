
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
          title: 'Introduction to Software Engineering',
          issuer: 'Coursera',
          date: 'August 2024',
          image: '/coursera.svg',
          fileType: 'pdf',
          fileUrl: '/coursera9.pdf'
        },
        {
          title: 'Front-Ends with Bootstrap',
          issuer: 'Coursera',
          date: 'August 2024',
          image: '/coursera.svg',
          fileType: 'pdf',
          fileUrl: '/coursera7.pdf'
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
          date: 'January 2025',
          image: '/Mern.png',
          fileType: 'image',
          fileUrl: '#'
        },
        {
          title: 'Data Structures & Algorithms',
          issuer: 'Prashant Jain',
          date: 'December 2024',
          image: '/Dsa.png',
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
          date: 'March 2025',
          image: '/roadsidecoder.png',
          fileType: 'pdf',
          fileUrl: '/Frontend1.pdf'
        },
        {
          title: 'Frontend Developer (React)',
          issuer: 'HackerRank',
          date: 'August 2024',
          image: '/hackerrank.png',
          fileType: 'pdf',
          fileUrl: '/hackerrank1.pdf'
        },
        {
          title: 'Android App Car with Metal Detector',
          issuer: 'Final Year Thesis',
          date: 'May 2023',
          image: '/thesis.jpg',
          fileType: 'pdf',
          fileUrl: '/College Final Year Project.pdf'
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
