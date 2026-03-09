import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CoinbaseLogo from './CoinbaseLogo';
import LoadingScreen from './LoadingScreen';

const AuthLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="min-h-screen bg-[#0A0B0D] text-white font-sans"
      >
        {/* Logo */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-10 z-10">
          <CoinbaseLogo className="h-6 sm:h-7 w-auto" />
        </div>

        {/* Centered content */}
        <div className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-6 py-20">
          <div className="w-full max-w-[420px]">
            {children}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AuthLayout;