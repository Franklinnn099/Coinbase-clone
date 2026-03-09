import React from 'react';
import { FiSearch, FiStar, FiFilter } from 'react-icons/fi';

const Explore = () => {
  const assets = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$65,234.50', change: '+2.4%', cap: '$1.2T', vol: '$45B', color: '#F7931A', img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
    { name: 'Ethereum', symbol: 'ETH', price: '$3,456.20', change: '+1.8%', cap: '$415B', vol: '$18B', color: '#627EEA', img: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
    { name: 'Tether', symbol: 'USDT', price: '$1.00', change: '0.0%', cap: '$98B', vol: '$32B', color: '#26A17B', img: 'https://cryptologos.cc/logos/tether-usdt-logo.png' },
    { name: 'BNB', symbol: 'BNB', price: '$412.30', change: '-0.5%', cap: '$63B', vol: '$1.5B', color: '#F3BA2F', img: 'https://cryptologos.cc/logos/bnb-bnb-logo.png' },
    { name: 'Solana', symbol: 'SOL', price: '$145.60', change: '+5.2%', cap: '$64B', vol: '$4B', color: '#14F195', img: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
    { name: 'XRP', symbol: 'XRP', price: '$0.55', change: '-1.2%', cap: '$30B', vol: '$1.1B', color: '#23292F', img: 'https://cryptologos.cc/logos/xrp-xrp-logo.png' },
    { name: 'USDC', symbol: 'USDC', price: '$1.00', change: '0.0%', cap: '$28B', vol: '$2.5B', color: '#2775CA', img: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png' },
    { name: 'Cardano', symbol: 'ADA', price: '$0.45', change: '+0.8%', cap: '$16B', vol: '$400M', color: '#0033AD', img: 'https://cryptologos.cc/logos/cardano-ada-logo.png' },
    { name: 'Avalanche', symbol: 'AVAX', price: '$34.20', change: '+2.1%', cap: '$13B', vol: '$800M', color: '#E84142', img: 'https://cryptologos.cc/logos/avalanche-avax-logo.png' },
    { name: 'Dogecoin', symbol: 'DOGE', price: '$0.08', change: '-3.4%', cap: '$11B', vol: '$600M', color: '#C2A633', img: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png' },
  ];

  return (
    <div className="w-full bg-white pb-24">
      <div className="max-w-[1400px] mx-auto px-6 pt-12 md:pt-16">
        
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-[32px] md:text-[40px] font-bold leading-tight text-[#0A0B0D] mb-6">
            Explore the cryptoeconomy
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full sm:w-[320px]">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <FiSearch size={18} />
              </div>
              <input 
                type="text" 
                placeholder="Search assets..." 
                className="w-full h-12 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-full outline-none focus:border-[#0052FF] text-[#0A0B0D] placeholder-gray-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          <button className="whitespace-nowrap px-4 h-10 rounded-full bg-[#0A0B0D] text-white text-[14px] font-medium">
            All assets
          </button>
          <button className="whitespace-nowrap px-4 h-10 rounded-full bg-gray-50 border border-gray-200 text-[#0A0B0D] text-[14px] font-medium hover:bg-gray-100 transition-colors">
            Tradable
          </button>
          <button className="whitespace-nowrap px-4 h-10 rounded-full bg-gray-50 border border-gray-200 text-[#0A0B0D] text-[14px] font-medium hover:bg-gray-100 transition-colors">
            Gainers
          </button>
          <button className="whitespace-nowrap px-4 h-10 rounded-full bg-gray-50 border border-gray-200 text-[#0A0B0D] text-[14px] font-medium hover:bg-gray-100 transition-colors">
            Losers
          </button>
          <button className="whitespace-nowrap px-4 h-10 rounded-full bg-gray-50 border border-gray-200 text-[#0A0B0D] text-[14px] font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
            <FiFilter /> Filters
          </button>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left min-w-[800px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-4 font-medium text-[#5B616E] text-[14px] tracking-wide w-12 text-center">#</th>
                <th className="pb-4 font-medium text-[#5B616E] text-[14px] tracking-wide pl-4">Name</th>
                <th className="pb-4 font-medium text-[#5B616E] text-[14px] tracking-wide text-right">Price</th>
                <th className="pb-4 font-medium text-[#5B616E] text-[14px] tracking-wide text-right">Change</th>
                <th className="pb-4 font-medium text-[#5B616E] text-[14px] tracking-wide text-right">Market cap</th>
                <th className="pb-4 font-medium text-[#5B616E] text-[14px] tracking-wide text-right">Volume (24h)</th>
                <th className="pb-4 font-medium text-[#5B616E] text-[14px] tracking-wide text-right pr-4">Trade</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset, idx) => (
                <tr key={asset.symbol} className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer group">
                  <td className="py-5 text-center text-[#5B616E] text-[15px] font-medium">
                    {idx + 1}
                  </td>
                  <td className="py-5 pl-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full flex shrink-0 items-center justify-center bg-gray-50 overflow-hidden">
                        <img src={asset.img} alt={asset.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-[#0A0B0D] text-[16px]">{asset.name}</span>
                        <span className="text-[#5B616E] text-[14px]">{asset.symbol}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 text-right font-medium text-[#0A0B0D] text-[15px]">
                    {asset.price}
                  </td>
                  <td className={`py-5 text-right font-medium text-[15px] ${asset.change.startsWith('+') ? 'text-[#098551]' : 'text-[#CF2030]'}`}>
                    {asset.change}
                  </td>
                  <td className="py-5 text-right font-medium text-[#0A0B0D] text-[15px]">
                    {asset.cap}
                  </td>
                  <td className="py-5 text-right font-medium text-[#0A0B0D] text-[15px]">
                    {asset.vol}
                  </td>
                  <td className="py-5 text-right pr-4">
                    <button className="px-4 h-8 rounded-full bg-[#0052FF] text-white text-[13px] font-medium hover:bg-[#0045D8] opacity-0 group-hover:opacity-100 transition-opacity">
                      Buy
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Explore;
