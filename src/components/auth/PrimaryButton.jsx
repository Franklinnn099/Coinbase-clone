import React from 'react';

const PrimaryButton = ({ children, onClick, disabled = false, className = '' }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={`w-full py-3.5 bg-[#0052FF] text-white font-semibold text-base rounded-full hover:bg-[#0046D8] active:bg-[#003BB5] transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
  >
    {children}
  </button>
);

export default PrimaryButton;
