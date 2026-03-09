import React from 'react';

const Wallet = () => {
  return (
    <div className="w-full bg-white text-[#0A0B0D] min-h-screen">
      {/* Hero */}
      <section className="w-full pt-32 pb-24 bg-[#F5F8FF]">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="w-full md:w-[45%] flex flex-col items-start pr-0 md:pr-12">
            <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] mb-6">
              Your keys,<br />your crypto
            </h1>
            <p className="text-[20px] text-[#5B616E] mb-10 max-w-[500px]">
              Store all your crypto and NFTs in one place, trade thousands of assets, and explore the decentralized web.
            </p>
            <button className="px-8 h-14 rounded-full bg-[#0052FF] text-white text-[16px] font-medium hover:bg-[#0045D8] transition-colors">
              Download Coinbase Wallet
            </button>
          </div>
          <div className="w-full flex justify-end">
            <div className="w-full max-w-[400px] h-[500px] bg-white rounded-[40px] shadow-2xl border-8 border-white overflow-hidden relative">
              <img src="/src/images/wallet_mockup.png" alt="Wallet App Mockup" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wallet;
