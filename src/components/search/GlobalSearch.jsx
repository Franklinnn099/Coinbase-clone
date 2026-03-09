import React, { useState, useRef, useEffect, useMemo } from 'react';
import SearchTriggerButton from './SearchTriggerButton';
import ExpandingSearchInput from './ExpandingSearchInput';
import SearchTabs from './SearchTabs';
import SearchDropdown from './SearchDropdown';
import SearchResultGroup from './SearchResultGroup';
import SearchResultItem from './SearchResultItem';
import MobileSearchOverlay from './MobileSearchOverlay';
import { searchData, searchTabs } from '../../data/searchData';

// Mobile Header for the full screen overlay
const MobileHeader = ({ value, onChange, onClear, onClose }) => (
  <div className="md:hidden flex items-center p-4 border-b border-gray-100 dark:border-gray-800 gap-3">
    <button onClick={onClose} className="text-[#5B616E] p-2 -ml-2">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
    </button>
    <div className="flex-1">
      <SearchInput 
        value={value}
        onChange={onChange}
        onClear={onClear}
        onFocus={() => {}} // already open
      />
    </div>
  </div>
);

const GlobalSearch = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Top');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  
  const inputRef = useRef(null);
  const resultsContainerRef = useRef(null);
  const searchContainerRef = useRef(null);

  // Filter Data
  const filteredData = useMemo(() => {
    let data = searchData;
    if (activeTab !== 'Top') {
      data = data.filter(item => item.category.toLowerCase() === activeTab.toLowerCase());
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      data = data.filter(item => 
        item.name.toLowerCase().includes(q) || item.symbol.toLowerCase().includes(q)
      );
    }
    return data;
  }, [query, activeTab]);

  // Group Data
  const groupedData = useMemo(() => {
    const groups = {};
    filteredData.forEach(item => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredData]);

  // Reset focus on query/tab change
  useEffect(() => setFocusedIndex(-1), [query, activeTab]);

  // Handle outside click to collapse
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If mobile overlay is open, rely on its close button, but for desktop:
      if (window.innerWidth >= 768 && isExpanded && searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isExpanded]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isExpanded) return;
      
      if (e.key === 'Escape') {
        handleClose();
        return;
      }

      const totalItems = filteredData.length;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setFocusedIndex(prev => (prev < totalItems - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setFocusedIndex(prev => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < totalItems) {
          handleSelect(filteredData[focusedIndex]);
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isExpanded, filteredData, focusedIndex]);

  // Scroll focused item into view
  useEffect(() => {
    if (focusedIndex >= 0 && resultsContainerRef.current) {
      const targetEl = resultsContainerRef.current.querySelector(`[data-index="${focusedIndex}"]`);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [focusedIndex]);

  const handleSelect = (item) => {
    console.log("Selected:", item.name);
    handleClose();
  };

  const handleClose = () => {
    setIsExpanded(false);
    setQuery('');
    setFocusedIndex(-1);
    setActiveTab('Top');
  };

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // The actual scrollable list content is shared between Desktop and Mobile
  const ResultsContent = () => {
    let globalItemIndex = 0;
    if (filteredData.length === 0) {
      return (
        <div className="p-8 text-center text-[#5B616E]">
          No results found for "{query}"
        </div>
      );
    }
    return (
      <div className="flex flex-col pb-4">
        {Object.entries(groupedData).map(([category, items]) => (
          <div key={category} className="mb-2 last:mb-0">
            <SearchResultGroup label={category} />
            <div className="flex flex-col">
              {items.map((item) => {
                const currentIndex = globalItemIndex++;
                return (
                  <div key={item.id} data-index={currentIndex}>
                    <SearchResultItem 
                      data={item}
                      isFocused={focusedIndex === currentIndex}
                      onClick={() => handleSelect(item)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative flex justify-end" ref={searchContainerRef}>
      
      {/* Target state on Desktop: Either the Icon button OR the Expanded Input */}
      <div className="hidden md:flex relative h-9 items-center justify-end">
        
        {/* We absolutely position the icon button ON TOP of the input so it doesn't leave flow gaps */}
        <div className={`absolute right-0 transition-opacity duration-200 ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100 z-10'}`}>
           <SearchTriggerButton onClick={handleExpand} />
        </div>
        
        {/* The expanding input natively manages its width animation in document flow */}
        <ExpandingSearchInput 
          ref={inputRef}
          value={query}
          onChange={handleChange}
          onClear={() => { setQuery(''); inputRef.current?.focus(); }}
          isExpanded={isExpanded}
          onClose={handleClose}
        />
      </div>

      {/* Target state on Mobile: Always just the Icon button, opens the Full Screen Overlay */}
      <div className="flex md:hidden">
        <SearchTriggerButton onClick={handleExpand} />
      </div>

      {/* Desktop Dropdown Panel */}
      <div className="hidden md:block">
        <SearchDropdown isOpen={isExpanded} onClose={handleClose}>
          <SearchTabs 
            tabs={searchTabs} 
            activeTab={activeTab} 
            onTabSelect={(tab) => { setActiveTab(tab); inputRef.current?.focus(); }} 
          />
          <div ref={resultsContainerRef} className="flex-1 overflow-y-auto max-h-[500px] no-scrollbar">
            <ResultsContent />
          </div>
        </SearchDropdown>
      </div>

      {/* Mobile Full Screen Overlay */}
      <MobileSearchOverlay 
        isOpen={isExpanded && window.innerWidth < 768} 
        onClose={handleClose}
        value={query}
        onChange={handleChange}
        onClear={() => setQuery('')}
      >
        <SearchTabs 
          tabs={searchTabs} 
          activeTab={activeTab} 
          onTabSelect={setActiveTab} 
        />
        <div ref={resultsContainerRef} className="pb-8">
          <ResultsContent />
        </div>
      </MobileSearchOverlay>

    </div>
  );
};

export default GlobalSearch;
