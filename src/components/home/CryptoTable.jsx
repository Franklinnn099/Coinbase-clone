import React from 'react';
import tableAsset from '../../../images/Screenshot 2026-03-06 142047.png';

const CryptoTable = () => {
  const assets = [
    { name: 'Bitcoin', icon: 'bg-[#F7931A]', symbol: 'B', price: 'GHS 782,565.36', change: '+1.88%', color: 'text-green-500' },
    { name: 'Ethereum', icon: 'bg-[#627EEA]', symbol: 'E', price: 'GHS 22,865.95', change: '+2.83%', color: 'text-green-500' },
    { name: 'Tether', icon: 'bg-[#26A17B]', symbol: 'T', price: 'GHS 10.78', change: '+0.02%', color: 'text-green-500' },
    { name: 'BNB', icon: 'bg-[#F3BA2F]', symbol: 'B', price: 'GHS 7,087.38', change: '+0.81%', color: 'text-green-500' },
    { name: 'XRP', icon: 'bg-[#23292F]', symbol: 'X', price: 'GHS 15.42', change: '+2.12%', color: 'text-green-500' },
    { name: 'USDC', icon: 'bg-[#2775CA]', symbol: 'U', price: 'GHS 10.78', change: '...', color: 'text-gray-400' },
  ];

  return (
    <section className="w-full bg-[#F5F8FF] py-24">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Left Side - Copy */}
        <div className="w-full md:w-[45%] flex flex-col items-start pr-0 md:pr-12">
          <h2 className="text-[32px] md:text-[40px] font-bold leading-tight text-[#0A0B0D] mb-4 font-sans tracking-tight">
            Explore crypto like Bitcoin, Ethereum, and Dogecoin.
          </h2>
          <p className="text-[#5B616E] text-[16px] mb-8 font-medium">
            Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
          </p>
          <button className="px-6 h-12 rounded-full bg-[#0A0B0D] text-white text-[15px] font-medium hover:bg-black transition-colors cursor-pointer">
            See more assets
          </button>
        </div>

        {/* Right Side - Dark Card Component */}
        <div className="w-full md:w-[55%]">
          <div className="w-full flex justify-end">
            <img 
              src={tableAsset} 
              alt="Crypto Assets Table" 
              className="w-full max-w-[851px] h-auto object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CryptoTable;
