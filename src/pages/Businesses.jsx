import React from 'react';
import CtaBanner from '../components/home/CtaBanner';

const Businesses = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full bg-[#0A0B0D] text-white">
        <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] tracking-tight mb-8 max-w-4xl">
            The crypto platform for business
          </h1>
          <p className="text-[20px] mb-10 font-medium text-gray-400 max-w-2xl">
            Institutional-grade crypto infrastructure for builders, investors, and forward-thinking corporations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 h-14 rounded-full bg-[#0052FF] text-white text-base font-medium hover:bg-[#0045D8] transition-colors">
              Get started
            </button>
            <button className="px-8 h-14 rounded-full bg-transparent border border-gray-600 text-white text-base font-medium hover:bg-gray-800 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Product Pillars Grid */}
      <section className="w-full py-24 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Column 1 */}
            <div className="flex flex-col">
              <h3 className="text-[24px] font-bold text-[#0A0B0D] mb-8 pb-4 border-b border-gray-200">Institutional Investors</h3>
              <div className="flex flex-col gap-8">
                <div>
                  <h4 className="text-[20px] font-bold text-[#0A0B0D] mb-2">Prime</h4>
                  <p className="text-[#5B616E] text-[15px] font-medium leading-relaxed">Integrated solution that provides secure custody, an advanced trading platform, and prime services.</p>
                </div>
                <div>
                  <h4 className="text-[20px] font-bold text-[#0A0B0D] mb-2">Custody</h4>
                  <p className="text-[#5B616E] text-[15px] font-medium leading-relaxed">Offline storage that is widely considered to be the most secure crypto storage solution in the world.</p>
                </div>
                <div>
                  <h4 className="text-[20px] font-bold text-[#0A0B0D] mb-2">Exchange</h4>
                  <p className="text-[#5B616E] text-[15px] font-medium leading-relaxed">High-performance matching engine, deep pool of liquidity, and execution routing.</p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col">
              <h3 className="text-[24px] font-bold text-[#0A0B0D] mb-8 pb-4 border-b border-gray-200">Developers</h3>
              <div className="flex flex-col gap-8">
                <div>
                  <h4 className="text-[20px] font-bold text-[#0A0B0D] mb-2">Commerce</h4>
                  <p className="text-[#5B616E] text-[15px] font-medium leading-relaxed">Accept cryptocurrency payments from anybody, anywhere in the world.</p>
                </div>
                <div>
                  <h4 className="text-[20px] font-bold text-[#0A0B0D] mb-2">Pay</h4>
                  <p className="text-[#5B616E] text-[15px] font-medium leading-relaxed">Let your users buy crypto and transfer it to your customized dapp in a few clicks.</p>
                </div>
                <div>
                  <h4 className="text-[20px] font-bold text-[#0A0B0D] mb-2">Wallet SDK</h4>
                  <p className="text-[#5B616E] text-[15px] font-medium leading-relaxed">Seamlessly connect your dapp to millions of Coinbase Wallet users.</p>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col">
              <h3 className="text-[24px] font-bold text-[#0A0B0D] mb-8 pb-4 border-b border-gray-200">Asset Issuers</h3>
              <div className="flex flex-col gap-8">
                <div>
                  <h4 className="text-[20px] font-bold text-[#0A0B0D] mb-2">Asset Hub</h4>
                  <p className="text-[#5B616E] text-[15px] font-medium leading-relaxed">A central platform to list, manage, and grow your crypto assets on Coinbase.</p>
                </div>
                <div>
                  <h4 className="text-[20px] font-bold text-[#0A0B0D] mb-2">Base</h4>
                  <p className="text-[#5B616E] text-[15px] font-medium leading-relaxed">A secure, low-cost, builder-friendly Ethereum L2 built to bring the next billion users onchain.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Reliability */}
      <section className="w-full bg-[#F5F8FF] py-24">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-[32px] md:text-[40px] font-bold leading-tight text-[#0A0B0D] mb-16 max-w-2xl mx-auto">
            The most trusted venue for institutions and businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm flex flex-col items-center">
              <div className="text-[48px] font-bold text-[#0052FF] mb-4">$130B+</div>
              <p className="text-[#0A0B0D] font-bold text-[18px]">Assets on platform</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm flex flex-col items-center">
              <div className="text-[48px] font-bold text-[#0052FF] mb-4">100+</div>
              <p className="text-[#0A0B0D] font-bold text-[18px]">Countries supported</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm flex flex-col items-center">
              <div className="text-[48px] font-bold text-[#0052FF] mb-4">24/7</div>
              <p className="text-[#0A0B0D] font-bold text-[18px]">Dedicated support</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};

export default Businesses;
