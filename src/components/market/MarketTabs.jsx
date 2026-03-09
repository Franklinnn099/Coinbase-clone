import React from 'react';
import { TABS } from './curatedCoinConfig';

const MarketTabs = ({ activeTab, onTabChange }) => (
  <div className="flex gap-2 mb-6" role="tablist" aria-label="Market categories">
    {TABS.map((tab) => {
      const isActive = activeTab === tab.key;
      return (
        <button
          key={tab.key}
          role="tab"
          aria-selected={isActive}
          onClick={() => onTabChange(tab.key)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
            isActive
              ? 'bg-[#2D2F36] text-white'
              : 'text-[#8A8F98] hover:text-white hover:bg-[#1A1B1F]'
          }`}
        >
          {tab.label}
        </button>
      );
    })}
  </div>
);

export default MarketTabs;
