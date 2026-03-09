import React from 'react';
import advancedImage from '../../../images/Advanced.jpg';

const AdvancedTrading = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-32">
        
        {/* Left Side - Image Box */}
        <div className="w-full md:w-1/2 flex justify-start">
          <div className="relative w-full max-w-[540px]">
            <img 
              src={advancedImage} 
              alt="Advanced Trading Tools" 
              className="w-full h-auto object-contain rounded-4xl shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side - Copy */}
        <div className="w-full md:w-1/2 flex flex-col items-start pr-0 lg:pr-12">
          <h2 className="text-[32px] md:text-[40px] font-bold leading-tight text-[#0A0B0D] mb-4 font-sans tracking-tight">
            Powerful tools, designed<br />for the advanced trader.
          </h2>
          <p className="text-[#5B616E] text-[16px] mb-8 font-medium leading-relaxed max-w-[480px]">
            Powerful analytical tools with the safety and security of Coinbase
            deliver the ultimate trading experience. Tap into sophisticated 
            charting capabilities, real-time order books, and deep liquidity 
            across hundreds of markets.
          </p>
          <button className="px-6 h-12 rounded-full bg-[#0A0B0D] text-white text-[15px] font-medium hover:bg-black transition-colors cursor-pointer">
            Start trading
          </button>
        </div>

      </div>
    </section>
  );
};

export default AdvancedTrading;
