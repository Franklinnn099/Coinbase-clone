import React, { forwardRef, useEffect } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ExpandingSearchInput = forwardRef(({ value, onChange, onClear, isExpanded, onClose }, ref) => {
  
  // Auto-focus when it expands
  useEffect(() => {
    if (isExpanded && ref.current) {
      ref.current.focus();
    }
  }, [isExpanded, ref]);

  return (
    <motion.div
      initial={{ width: 36, opacity: 0 }}
      animate={{ 
        width: isExpanded ? 360 : 36, 
        opacity: isExpanded ? 1 : 0 
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`relative h-9 rounded-full bg-[#f3f5f7] flex items-center overflow-hidden border border-transparent focus-within:border-[#0052FF] transition-colors ${
        !isExpanded ? 'pointer-events-none' : ''
      }`}
    >
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FiSearch className="text-[#5B616E] w-[18px] h-[18px]" strokeWidth={2.5} />
      </div>
      
      <input
        ref={ref}
        type="text"
        className="w-full h-full bg-transparent text-[#0A0B0D] pl-10 pr-10 outline-none text-[15px]"
        placeholder="Search"
        value={value}
        onChange={onChange}
        // If they blur and type nothing, we could handle close, but we have global click-outside logic
      />

      {isExpanded && (
        <button
          onClick={value ? onClear : onClose}
          className="absolute inset-y-0 right-0 pr-3 flex items-center bg-transparent border-none cursor-pointer text-[#5B616E] hover:text-[#0A0B0D] transition-colors"
        >
          {value ? (
            <div className="w-[18px] h-[18px] flex items-center justify-center rounded-full bg-[#e0e4e9]">
              <FiX size={12} strokeWidth={3} />
            </div>
          ) : (
             <FiX size={18} strokeWidth={2} />
          )}
        </button>
      )}
    </motion.div>
  );
});

ExpandingSearchInput.displayName = 'ExpandingSearchInput';

export default ExpandingSearchInput;
