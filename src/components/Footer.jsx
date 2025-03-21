
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Award className="h-6 w-6 text-primary" />
              <span className="font-display text-lg font-medium">CertiPortfolio</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              A curated collection of professional certificates and achievements showcasing expertise in frontend development, MERN stack, DSA, and more.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/coursera" className="text-muted-foreground hover:text-primary transition-colors">Coursera</Link>
              </li>
              <li>
                <Link to="/mern-dsa" className="text-muted-foreground hover:text-primary transition-colors">MERN & DSA</Link>
              </li>
              <li>
                <Link to="/roadside-coder" className="text-muted-foreground hover:text-primary transition-colors">RoadsideCoder</Link>
              </li>
              <li>
                <Link to="/hackerrank" className="text-muted-foreground hover:text-primary transition-colors">HackerRank</Link>
              </li>
              <li>
                <Link to="/thesis" className="text-muted-foreground hover:text-primary transition-colors">Thesis</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/trustN12?tab=repositories" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/nabarun-biswas-102bb118a/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:academyshreyn12@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} CertiPortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
