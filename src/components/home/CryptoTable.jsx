import React from 'react';
import MarketWidget from '../market/MarketWidget';

const CryptoTable = () => {
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

        {/* Right Side - Live Market Widget */}
        <div className="w-full md:w-[55%]">
          <MarketWidget embedded />
        </div>

      </div>
    </section>
  );
};

export default CryptoTable;
