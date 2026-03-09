import React from 'react';

const Institutions = () => {
  return (
    <div className="w-full bg-[#0A0B0D] min-h-screen text-white">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-24 border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="w-full md:w-[45%] flex flex-col items-start pr-0 md:pr-12">
            <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-tight mb-8">
              The premier<br />crypto partner
            </h1>
            <p className="text-[20px] mb-10 font-medium text-gray-400">
              Access deep liquidity, secure cold storage, and advanced trading tools engineered for the most demanding crypto institutions.
            </p>
            <div className="flex gap-4">
              <button className="px-8 h-14 rounded-full bg-[#0052FF] text-white text-base font-medium hover:bg-[#0045D8] transition-colors">
                Become a client
              </button>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <div className="w-full max-w-[500px] h-[500px] bg-linear-to-tr from-[#0052FF] to-purple-600 rounded-full opacity-20 blur-3xl absolute -z-10"></div>
            {/* Conceptual UI graphic for Institutions */}
            <div className="w-full max-w-[500px] bg-[#1A1B1F] border border-gray-800 rounded-3xl p-8 shadow-2xl">
              <div className="flex justify-between items-center mb-12">
                <span className="text-gray-400 font-medium">Portfolio Value</span>
                <span className="text-green-500 font-medium">+12.4%</span>
              </div>
              <div className="text-[48px] font-bold mb-8">$24,500,000.00</div>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-full bg-gray-800 h-16 rounded-xl flex items-center px-4 justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-600"></div>
                      <div className="w-24 h-4 rounded bg-gray-600"></div>
                    </div>
                    <div className="w-16 h-4 rounded bg-gray-600"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Grid */}
      <section className="w-full py-24 bg-[#0A0B0D]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-[32px] md:text-[40px] font-bold leading-tight mb-4">
                Institutional Insights
              </h2>
              <p className="text-gray-400 text-[18px]">Detailed macroeconomic analysis and crypto market research.</p>
            </div>
            <button className="text-[#0052FF] font-medium hover:underline hidden md:block">
              View Research Hub &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex flex-col group cursor-pointer">
                <div className="w-full h-[240px] bg-[#1A1B1F] rounded-2xl mb-6 border border-gray-800 overflow-hidden relative">
                  <div className="absolute inset-0 bg-linear-to-br from-[#0052FF] to-transparent opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <div className="text-[#0052FF] font-bold text-[13px] mb-3 uppercase tracking-wide">Macro Report</div>
                <h3 className="text-[24px] font-bold mb-3 group-hover:text-[#0052FF] transition-colors leading-snug">The 2026 Crypto Market Outlook for Institutions</h3>
                <p className="text-gray-400 font-medium line-clamp-2">A comprehensive thesis on market dynamics, regulatory clarity, and structural flows shaping the year ahead.</p>
              </div>
            ))}
          </div>
          <button className="mt-8 text-[#0052FF] font-medium hover:underline md:hidden">
            View Research Hub &rarr;
          </button>
        </div>
      </section>

    </div>
  );
};

export default Institutions;
