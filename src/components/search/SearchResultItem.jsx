import React from 'react';

const SearchResultItem = ({ data, isFocused, onClick }) => {
  // Determine color for price change
  const isPositive = data.changePercent > 0;
  const isNegative = data.changePercent < 0;
  
  let changeColorClass = "text-[#5B616E]"; // fallback/neutral
  if (isPositive) changeColorClass = "text-[#098551]"; // Coinbase green
  if (isNegative) changeColorClass = "text-[#CF2030]"; // Coinbase red

  return (
    <div 
      onClick={onClick}
      className={`
        w-full flex items-center px-4 py-3 cursor-pointer select-none transition-colors
        ${isFocused ? 'bg-gray-50' : 'hover:bg-gray-50 bg-transparent'}
      `}
    >
      {/* 
        Responsive Grid Structure:
        Desktop: 4 Columns (Icon+Name | Volume | Market Cap | Price)
        Tablet: 2 Columns (Icon+Name | Price) -> Volume/MCap on next line
        Mobile: Row (Icon + Name + Symbol + Price + Change)
      */}

      {/* Left side: Icon, Name, Symbol */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-gray-100">
          {typeof data.icon === 'string' ? (
             <img src={data.icon} alt={data.name} className="w-full h-full object-cover" />
          ) : (
             data.icon
          )}
        </div>
        <div className="flex flex-col truncate">
          <span className="text-[15px] font-medium text-[#0A0B0D] truncate">
            {data.name}
          </span>
          {/* On tablet/desktop this might be next to name, but vertical is safer for long names */}
          <div className="flex items-center gap-2">
            <span className="text-[14px] text-[#5B616E] truncate">
              {data.symbol}
            </span>
            
            {/* Tablet secondary line: show volume & mcap only on tablet view */}
            <span className="hidden md:inline lg:hidden text-[13px] text-[#5B616E] truncate">
              • {data.volume} • {data.marketCap}
            </span>
          </div>
        </div>
      </div>

      {/* Middle side (Desktop only): Volume and Market Cap */}
      <div className="hidden lg:flex flex-1 items-center justify-between px-4">
        <div className="flex-1 text-right text-[15px] text-[#0A0B0D] font-medium pr-4 truncate">
          {data.volume}
        </div>
        <div className="flex-1 text-right text-[15px] text-[#0A0B0D] font-medium truncate">
          {data.marketCap}
        </div>
      </div>

      {/* Right side: Price and Change */}
      <div className="flex flex-col items-end shrink-0 pl-4">
        <span className="text-[15px] font-medium text-[#0A0B0D]">
          {data.price}
        </span>
        <span className={`text-[14px] font-medium flex items-center gap-0.5 ${changeColorClass}`}>
          {isPositive && '↑'}
          {isNegative && '↓'}
          {Math.abs(data.changePercent)}%
        </span>
      </div>

    </div>
  );
};

export default SearchResultItem;
