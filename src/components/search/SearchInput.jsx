import React, { forwardRef } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

const SearchInput = forwardRef(({ value, onChange, onFocus, onClear }, ref) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <FiSearch className="text-[#5B616E] w-5 h-5" />
      </div>
      <input
        ref={ref}
        type="text"
        className="w-full bg-[#f3f5f7] dark:bg-[#1a1b1d] text-[#0A0B0D] dark:text-white rounded-full py-2.5 pl-11 pr-10 outline-none border border-transparent focus:border-[#0052FF] transition-colors text-[15px]"
        placeholder="Search"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      />
      {value && (
        <button
          onClick={onClear}
          className="absolute inset-y-0 right-0 pr-4 flex items-center bg-transparent border-none cursor-pointer text-[#5B616E] hover:text-[#0A0B0D] dark:hover:text-white transition-colors"
        >
          <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#e0e4e9] dark:bg-[#2b2c30]">
            <FiX size={12} />
          </div>
        </button>
      )}
    </div>
  );
});

SearchInput.displayName = 'SearchInput';

export default SearchInput;
