import React from 'react';

const SocialAuthButton = ({ icon, children, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-full bg-[#1A1B1F] border border-[#2D2F36] text-white font-medium text-base hover:bg-[#22242A] active:bg-[#2A2C33] transition-colors relative"
  >
    {icon && (
      <span className="absolute left-5 flex items-center">{icon}</span>
    )}
    <span>{children}</span>
  </button>
);

export default SocialAuthButton;