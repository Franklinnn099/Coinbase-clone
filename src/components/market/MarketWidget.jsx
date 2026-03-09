import React, { useState } from 'react';
import MarketTabs from './MarketTabs';
import MarketList from './MarketList';
import useMarketData from './useMarketData';

const MarketWidget = ({ embedded = false }) => {
  const [activeTab, setActiveTab] = useState('tradable');
  const { data, loading, error } = useMarketData(activeTab);

  const card = (
    <div className="bg-[#0A0B0D] rounded-3xl p-6 sm:p-8">
      <MarketTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <MarketList data={data} loading={loading} error={error} />
    </div>
  );

  // When embedded inside another section, render just the card
  if (embedded) return card;

  // Standalone section with its own background
  return (
    <section className="w-full bg-[#F5F5F5] py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-xl mx-auto">{card}</div>
    </section>
  );
};

export default MarketWidget;
