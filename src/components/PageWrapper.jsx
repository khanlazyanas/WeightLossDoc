import React from 'react';
import { motion } from 'framer-motion';

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] // High-end Silicon Valley level custom curve
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;