import React from 'react';
import MarketRow from './MarketRow';

/* Skeleton row for loading state */
const SkeletonRow = () => (
  <div className="flex items-center justify-between py-3.5 animate-pulse">
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-[#2D2F36]" />
      <div>
        <div className="h-4 w-24 bg-[#2D2F36] rounded mb-1.5" />
        <div className="h-3 w-12 bg-[#2D2F36] rounded" />
      </div>
    </div>
    <div className="text-right">
      <div className="h-4 w-28 bg-[#2D2F36] rounded mb-1.5 ml-auto" />
      <div className="h-3 w-14 bg-[#2D2F36] rounded ml-auto" />
    </div>
  </div>
);

const MarketList = ({ data, loading, error }) => {
  if (loading && data.length === 0) {
    return (
      <div className="divide-y divide-[#1A1B1F]">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonRow key={i} />
        ))}
      </div>
    );
  }

  if (error && data.length === 0) {
    return (
      <div className="py-12 text-center text-[#8A8F98] text-sm">
        Unable to load market data. Try again later.
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="py-12 text-center text-[#8A8F98] text-sm">
        No coins to display.
      </div>
    );
  }

  return (
    <div className="divide-y divide-[#1A1B1F]">
      {data.map((coin) => (
        <MarketRow key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default MarketList;
