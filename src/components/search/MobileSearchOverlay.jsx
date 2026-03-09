import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX } from 'react-icons/fi';

const MobileSearchOverlay = ({ isOpen, onClose, value, onChange, onClear, children }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Slight delay to allow animation to start before gripping focus
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed inset-0 z-100 bg-white flex flex-col md:hidden"
        >
          {/* Mobile Header */ }
          <div className="flex items-center p-4 border-b border-gray-100 gap-3">
            <button onClick={onClose} className="text-[#5B616E] p-2 -ml-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <div className="flex-1 relative h-10">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-[#5B616E] w-5 h-5" />
              </div>
              <input
                ref={inputRef}
                type="text"
                className="w-full h-full bg-[#f3f5f7] rounded-full py-2 pl-10 pr-10 outline-none border border-transparent focus:border-[#0052FF] transition-colors text-[16px] text-[#0A0B0D]"
                placeholder="Search"
                value={value}
                onChange={onChange}
              />
              {value && (
                <button
                  onClick={onClear}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center bg-transparent border-none cursor-pointer text-[#5B616E]"
                >
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#e0e4e9]">
                    <FiX size={12} strokeWidth={3} />
                  </div>
                </button>
              )}
            </div>
          </div>
          
          {/* Scrollable Content Container */ }
          <div className="flex-1 overflow-y-auto no-scrollbar">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileSearchOverlay;
