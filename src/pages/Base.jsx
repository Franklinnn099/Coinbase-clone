import React from 'react';

const Base = () => {
  return (
    <div className="w-full bg-[#0A0B0D] text-white min-h-screen">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-24 border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#1A1B1F] px-4 py-2 rounded-full border border-gray-800 mb-6">
            <span className="w-3 h-3 rounded-full bg-[#0052FF]"></span>
            <span className="text-[13px] font-medium text-white">Built by Coinbase, open source on GitHub</span>
          </div>
          <h1 className="text-[40px] md:text-[56px] lg:text-[80px] font-bold leading-[1.1] mb-6">
            Base is for everyone.
          </h1>
          <p className="text-[20px] text-gray-400 mb-10 max-w-[700px] mx-auto">
            A secure, low-cost, developer-friendly Ethereum L2 built to bring the next billion users onchain.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 h-14 rounded-full bg-[#0052FF] text-white text-[16px] font-medium hover:bg-[#0045D8] transition-colors">
              Bridge to Base
            </button>
            <button className="px-8 h-14 rounded-full bg-white text-[#0A0B0D] text-[16px] font-medium hover:bg-gray-100 transition-colors">
              Read Docs
            </button>
          </div>
        </div>
      </section>

      {/* Stats/Code section placeholder */}
      <section className="w-full py-24">
        <div className="max-w-[1000px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-400">
          <div>
            <div className="text-[48px] font-bold text-white mb-2">1/10th</div>
            <div className="font-medium">The cost of Ethereum mainnet</div>
          </div>
          <div>
            <div className="text-[48px] font-bold text-white mb-2">EVM</div>
            <div className="font-medium">Fully equivalent and open</div>
          </div>
          <div>
            <div className="text-[48px] font-bold text-white mb-2">Backed</div>
            <div className="font-medium">By Coinbase security</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Base;
