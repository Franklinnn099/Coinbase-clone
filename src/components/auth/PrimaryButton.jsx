import React from 'react';

const PrimaryButton = ({ children, onClick, className = '' }) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-full py-3.5 bg-[#0052FF] text-[#0A0B0D] font-semibold text-base rounded-full hover:bg-[#0046D8] active:bg-[#003BB5] transition-colors ${className}`}
  >
    {children}
  </button>
);

export default PrimaryButton;