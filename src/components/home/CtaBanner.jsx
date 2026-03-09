import React from 'react';
import ctaGraphic from '../../../images/image.jpg';

const CtaBanner = () => {
  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">
        
        {/* Left Side - Copy and Input */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-tight tracking-tight text-[#0A0B0D] mb-4 font-sans">
            Take control<br />of your money
          </h2>
          <p className="text-[#0A0B0D] text-[20px] mb-8 font-medium">
            Start your portfolio today and discover crypto
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

        {/* Right Side - Graphic */}
        <div className="w-full md:w-1/2 flex justify-end">
          <img 
            src={ctaGraphic} 
            alt="Crypto Logos Graphic" 
            className="w-full max-w-[480px] h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default CtaBanner;
