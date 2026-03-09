import React from 'react';
import { motion } from 'framer-motion';

// Exact SVG from login.coinbase.com
const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="fixed inset-0 z-50 bg-[#0A0B0D] flex items-center justify-center"
  >
    <motion.svg
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 48 48"
      aria-label="Coinbase logo"
      role="img"
    >
      <title>Coinbase logo</title>
      <path
        d="M24,36c-6.63,0-12-5.37-12-12s5.37-12,12-12c5.94,0,10.87,4.33,11.82,10h12.09C46.89,9.68,36.58,0,24,0 C10.75,0,0,10.75,0,24s10.75,24,24,24c12.58,0,22.89-9.68,23.91-22H35.82C34.87,31.67,29.94,36,24,36z"
        fill="#FFFFFF"
      />
    </motion.svg>
  </motion.div>
);

export default LoadingScreen;
