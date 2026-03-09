import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchTriggerButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="h-10 w-10 flex items-center justify-center rounded-full bg-[#F1F3F5] text-[#0A0B0D] transition-colors cursor-pointer hover:bg-[#E7EAEE] focus:outline-none focus:ring-2 focus:ring-[#0052FF]/35"
      aria-label="Open search"
    >
      <FiSearch size={18} strokeWidth={2.5} />
    </button>
  );
};

export default SearchTriggerButton;
