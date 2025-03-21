
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Download, FileText, Image, Calendar, Award } from 'lucide-react';
import { Badge } from './ui/badge';

const CertificateCard = ({ title, issuer, date, image, fileType, fileUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const fileTypeIcon = fileType === 'pdf' ? <FileText className="h-4 w-4" /> : <Image className="h-4 w-4" />;
  
  return (
    <motion.div 
      className="certificate-card group relative overflow-hidden rounded-xl border border-border/40 hover:border-border shadow-sm hover:shadow-md transition-all duration-300 bg-card backdrop-blur-[2px]"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="certificate-image object-cover w-full h-full transform transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <a 
              href={fileUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-gray-600 transition-colors"
            >
              <Eye className="h-4 w-4 " />
              <span>View</span>
            </a>
            <a 
              href={fileUrl} 
              download
              className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-primary/90 hover:bg-gray-600 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <Badge variant="outline" className="px-2 py-1 text-xs font-medium flex items-center gap-1 bg-secondary/50">
            {fileTypeIcon}
            <span>{fileType.toUpperCase()}</span>
          </Badge>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {date}
          </span>
        </div>
        
        <h3 className="font-medium text-lg text-card-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">{title}</h3>
        
        <div className="flex items-center gap-2 mt-3">
          <Award className="h-4 w-4 text-muted-foreground" />
          <p className="text-sm text-muted-foreground font-medium">{issuer}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
