
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, BookOpen, CheckCircle, Award } from 'lucide-react';
import Layout from '../components/Layout';
import CertificateCard from '../components/CertificateCard';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const Coursera = () => {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Replace with your actual certificate data
  const certificates = [
    {
      title: 'Introduction to Python',
      issuer: 'Coursera',
      date: 'January 2022',
      image: '/coursera.svg',
      fileType: 'pdf',
      fileUrl: '/coursera1.pdf',
      category: 'python'
    },
    {
      title: 'Getting Started with Frontend',
      issuer: 'Coursera',
      date: 'March 2024',
      image: '/coursera.svg',
      fileType: 'pdf',
      fileUrl: '/coursera2.pdf',
      category: 'javascript'
    },
    {
      title: 'Getting Started with Git and GitHub',
      issuer: 'Coursera',
      date: 'March 2024',
      image: '/coursera.svg',
      fileType: 'pdf',
      fileUrl: '/coursera3.pdf',
      category: 'git'
    },
    {
      title: 'Introduction to HTML, CSS, & JavaScript',
      issuer: 'Coursera',
      date: 'February 2024',
      image: '/coursera.svg',
      fileType: 'pdf',
      fileUrl: '/coursera4.pdf',
      category: 'html'
    },
    {
      title: 'Introduction to Web Development',
      issuer: 'Coursera',
      date: 'February 2024',
      image: '/coursera.svg',
      fileType: 'pdf',
      fileUrl: '/coursera5.pdf',
      category: 'javascript'
    },
    {
      title: 'Intermediate Front-End Development',
      issuer: 'Coursera',
      date: 'August 2024',
      image: '/coursera.svg',
      fileType: 'pdf',
      fileUrl: '/coursera6.pdf',
      category: 'react'
    },
    {
      title: 'Developing Front-Ends with Bootstrap',
      issuer: 'Coursera',
      date: 'August 2024',
      image: '/coursera.svg',
      fileType: 'pdf',
      fileUrl: '/coursera7.pdf',
      category: 'react'
    },
    {
      title: 'Designing User Interfaces and Experiences (UI/UX)',
      issuer: 'Coursera',
      date: 'August 2024',
      image: '/coursera.svg',
      fileType: 'pdf',
      fileUrl: '/coursera8.pdf',
      category: 'ui/ux'
    },
    {
      title: 'Introduction to Software Engineering',
      issuer: 'Coursera',
      date: 'August 2024',
      image: '/coursera.svg',
      fileType: 'pdf',
      fileUrl: '/coursera9.pdf',
      category: 'SE'
    }
  ];
  
  const categories = [
    { id: 'all', label: 'All Certificates', icon: Award },
    { id: 'react', label: 'React', icon: CheckCircle },
    { id: 'javascript', label: 'JavaScript', icon: CheckCircle },
    { id: 'css', label: 'CSS', icon: CheckCircle },
    { id: 'html', label: 'HTML', icon: CheckCircle }
  ];
  
  const filteredCertificates = certificates.filter(cert => 
    (activeFilter === 'all' || cert.category === activeFilter) &&
    (cert.title.toLowerCase().includes(search.toLowerCase()) || 
     cert.issuer.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <Layout>
      {/* Hero section with gradient background */}
      <div className="relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background z-0"></div>
        <div className="absolute top-0 right-0 w-full h-72 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl opacity-50 z-0"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto pt-12 pb-24 px-4">
          <motion.div 
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 backdrop-blur-sm border-none">
              <BookOpen className="h-3.5 w-3.5 mr-1.5" />
              Coursera
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Coursera Certificates
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Frontend development certifications earned through various Coursera courses and specializations, showcasing expertise in modern web development technologies.
          </motion.p>
          
          {/* Search and filter */}
          <motion.div 
            className="mt-12 flex flex-col md:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search certificates..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 bg-card border-border/40 hover:border-border focus-visible:ring-primary/20 focus-visible:border-primary/50"
              />
            </div>
            
            <div className="flex-shrink-0 flex items-center">
              <div className="mr-2 text-muted-foreground flex items-center">
                <Filter className="h-4 w-4 mr-1" />
                <span className="text-sm">Filter:</span>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={activeFilter === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(category.id)}
                    className={`flex items-center gap-1 rounded-full ${activeFilter === category.id ? '' : 'bg-card hover:bg-secondary/80'}`}
                  >
                    <category.icon className="h-3.5 w-3.5" />
                    <span>{category.label}</span>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Certificates grid */}
      <div className="max-w-7xl mx-auto px-4 mb-24">
        {filteredCertificates.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {filteredCertificates.map((cert, index) => (
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
        ) : (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-muted-foreground text-lg">No certificates found matching your search criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearch('');
                setActiveFilter('all');
              }}
            >
              Clear filters
            </Button>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default Coursera;
