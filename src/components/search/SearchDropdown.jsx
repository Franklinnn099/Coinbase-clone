import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SearchDropdown = ({ isOpen, onClose, children }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll on mobile when full screen overlay is open
      if (window.innerWidth < 768) {
        document.body.style.overflow = 'hidden';
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="fixed inset-0 z-100 bg-white flex flex-col md:absolute md:inset-auto md:top-full md:right-0 md:w-[600px] md:mt-2 md:rounded-2xl md:shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:border md:border-gray-100"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchDropdown;
