import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchTriggerButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-[#0A0B0D] hover:bg-gray-100 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0052FF]/50"
      aria-label="Open search"
    >
      <FiSearch size={18} strokeWidth={2.5} />
    </button>
  );
};

export default SearchTriggerButton;
