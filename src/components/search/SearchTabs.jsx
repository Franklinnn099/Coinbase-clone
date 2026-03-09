import React, { useRef, useEffect } from 'react';

const SearchTabs = ({ tabs, activeTab, onTabSelect }) => {
  const scrollRef = useRef(null);

  // Auto-scroll the active tab into view if it's partially hidden horizontally
  useEffect(() => {
    if (scrollRef.current) {
      const activeEl = scrollRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeTab]);

  return (
    <div className="w-full border-b border-gray-100 dark:border-gray-800">
      <div 
        ref={scrollRef}
        className="flex items-center overflow-x-auto no-scrollbar gap-2 px-4 py-3"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            data-active={activeTab === tab}
            onClick={() => onTabSelect(tab)}
            className={`shrink-0 px-4 py-1.5 rounded-full text-[14px] font-medium transition-colors cursor-pointer ${
              activeTab === tab 
                ? 'bg-[#0A0B0D] text-white' 
                : 'bg-gray-100 text-[#5B616E] hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchTabs;
