import React from 'react';
import heroImage from '../../images/Hero__4.jpg'; // Reused from Home
import PlatformCapabilities from '../components/home/PlatformCapabilities';

const Individuals = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full">
        <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Left Side - Copy and Input */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <div className="max-w-[500px]">
              <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-tight text-[#0A0B0D] mb-6">
                Buy, sell, and manage your crypto
              </h1>
              <p className="text-[#0A0B0D] text-[20px] mb-8 font-medium">
                Coinbase is the easiest place to buy and sell cryptocurrency. Sign up and get started today.
              </p>
            </div>
            
            <div className="w-full max-w-md flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Email address" 
                className="grow w-full px-5 h-14 rounded-full border border-gray-300 text-base outline-none focus:border-[#0052FF] transition-colors"
              />
              <button className="shrink-0 px-8 h-14 rounded-full bg-[#0052FF] text-white text-base font-medium hover:bg-[#0045D8] transition-colors">
                Get started
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-end">
            <img 
              src={heroImage} 
              alt="Coinbase Mobile App" 
              className="w-full max-w-[540px] h-auto object-contain rounded-3xl"
            />
          </div>

        </div>
      </section>

      {/* 3 Column Feature Grid */}
      <section className="w-full bg-[#F5F8FF] py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold leading-tight text-[#0A0B0D] mb-4">
              Create your cryptocurrency portfolio today
            </h2>
            <p className="text-[#5B616E] text-[18px] font-medium max-w-2xl mx-auto">
              Coinbase has a variety of features that make it the best place to start trading
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              </div>
              <h3 className="text-[20px] font-bold text-[#0A0B0D] mb-4">Manage your portfolio</h3>
              <p className="text-[#5B616E] text-[15px] leading-relaxed">Buy and sell popular digital currencies, keep track of them in the one place.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>
              </div>
              <h3 className="text-[20px] font-bold text-[#0A0B0D] mb-4">Recurring buys</h3>
              <p className="text-[#5B616E] text-[15px] leading-relaxed">Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 className="text-[20px] font-bold text-[#0A0B0D] mb-4">Vault protection</h3>
              <p className="text-[#5B616E] text-[15px] leading-relaxed">For added security, store your funds in a vault with time delayed withdrawals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reuse capabilities section */}
      <PlatformCapabilities />

    </div>
  );
};

export default Individuals;
