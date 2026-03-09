import React from 'react';
import heroImage from '../../../images/Hero__4.jpg';

const HeroSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
        
        {/* Left Side - Image (as seen in screenshot) */}
        <div className="w-full md:w-1/2 flex justify-start">
          <img 
            src={heroImage} 
            alt="Coinbase App Interface" 
            className="w-full max-w-[540px] h-auto object-contain rounded-3xl"
          />
        </div>

        {/* Right Side - Copy and Input */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-tight text-[#0A0B0D] mb-6 font-sans">
            The future of<br />finance is here.
          </h1>
          <p className="text-[#0A0B0D] text-[18px] md:text-[20px] mb-8 font-medium">
            Trade crypto and more on a platform you can trust.
          </p>
          
          <div className="w-full max-w-md flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="satoshi@nakamoto.com" 
              className="grow w-full px-5 h-14 rounded-full border border-gray-300 text-base outline-none focus:border-[#0052FF] transition-colors"
            />
            <button className="shrink-0 px-8 h-14 rounded-full bg-[#0052FF] text-white text-base font-medium hover:bg-[#0045D8] transition-colors cursor-pointer w-full sm:w-auto">
              Sign up
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
