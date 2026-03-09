import React from 'react';

const SearchResultGroup = ({ label }) => {
  return (
    <div className="w-full px-4 pt-6 pb-2">
      <h3 className="text-[12px] font-bold text-[#5B616E] uppercase tracking-wider">
        {label}
      </h3>
    </div>
  );
};

export default SearchResultGroup;
