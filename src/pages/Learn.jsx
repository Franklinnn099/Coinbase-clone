import React from 'react';
import { motion } from 'framer-motion';
import LearnSection from '../components/home/LearnSection';

const Learn = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <div className="bg-[#0052FF] pt-32 pb-24 px-6">
        <div className="max-w-[1400px] mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-bold font-sans tracking-tight mb-6">Coinbase Learn</h1>
          <p className="text-xl font-medium max-w-2xl">
            Everything you need to know about crypto, Web3, and taking control of your financial future.
          </p>
        </div>
      </div>
      
      {/* We reuse the LearnSection from the homepage */}
      <LearnSection />
    </motion.div>
  );
};

export default Learn;
