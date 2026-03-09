import React from 'react';
import zeroFeesImg from '../../../images/zero_fees_us.jpg';
import baseAppImg from '../../../images/CB_LOLP__1.jpg'; // This seems to be the Base app image from list

const PlatformCapabilities = () => {
  return (
    <section className="w-full bg-white py-24 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Coinbase One Card */}
        <div className="bg-[#F5F8FF] rounded-3xl overflow-hidden flex flex-col md:flex-row relative group">
          <div className="p-10 md:p-12 md:pr-4 flex flex-col items-start justify-center flex-1 z-10">
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded border border-gray-200 mb-6 shadow-sm">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span className="text-[11px] font-bold tracking-widest text-[#5B616E] uppercase">COINBASE ONE</span>
            </div>
            <h3 className="text-[28px] md:text-[32px] font-bold leading-tight text-[#0A0B0D] mb-4">
              Zero trading fees,<br />more rewards.
            </h3>
            <p className="text-[#5B616E] text-[15px] font-medium mb-8 max-w-[280px]">
              Get more out of crypto with one membership: zero trading fees, 
              boosted rewards, priority support, and more.
            </p>
            <button className="px-6 h-12 rounded-full bg-[#0A0B0D] text-white text-[15px] font-medium hover:bg-black transition-colors">
              Claim free trial
            </button>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-end p-8 md:p-0 md:pr-8">
            <img 
              src={zeroFeesImg} 
              alt="Coinbase One zero fees" 
              className="w-full max-w-[240px] h-auto object-contain rounded-2xl shadow-xl transform transition-transform duration-500 group-hover:-translate-y-2"
            />
          </div>
        </div>

        {/* Base App Card */}
        <div className="bg-[#F5F8FF] rounded-3xl overflow-hidden flex flex-col-reverse md:flex-row relative group">
          <div className="w-full md:w-1/2 flex items-center justify-start p-8 md:p-0 md:pl-8">
            <img 
              src={baseAppImg} 
              alt="Base App ecosystem" 
              className="w-full max-w-[240px] h-auto object-contain rounded-2xl shadow-xl transform transition-transform duration-500 group-hover:-translate-y-2"
            />
          </div>
          <div className="p-10 md:p-12 md:pl-4 flex flex-col items-start justify-center flex-1 z-10">
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded border border-gray-200 mb-6 shadow-sm">
              <span className="w-3 h-3 rounded-full border-2 border-blue-500"></span>
              <span className="text-[11px] font-bold tracking-widest text-[#5B616E] uppercase">BASE APP</span>
            </div>
            <h3 className="text-[28px] md:text-[32px] font-bold leading-tight text-[#0A0B0D] mb-4">
              Countless ways to earn<br />crypto with the Base App.
            </h3>
            <p className="text-[#5B616E] text-[15px] font-medium mb-8 max-w-[280px]">
              An everything app to trade, create, discover, and chat, 
              all in one place.
            </p>
            <button className="px-6 h-12 rounded-full bg-[#0A0B0D] text-white text-[15px] font-medium hover:bg-black transition-colors">
              Learn more
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PlatformCapabilities;
