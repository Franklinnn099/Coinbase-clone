import React from 'react';
import { motion } from 'framer-motion';

const AssetDetail = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#F5F8FF] pt-24 px-6 md:px-12"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-2/3">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-[#F7931A]"></div>
            <div>
              <h1 className="text-4xl font-bold font-sans">Bitcoin</h1>
              <div className="text-gray-500 text-lg">BTC</div>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm">
            <div className="text-3xl font-bold mb-2">GHS 850,000.00</div>
            <div className="text-green-500 font-medium mb-8">+2.45% (24h)</div>
            
            <div className="w-full h-[300px] bg-[#F5F8FF] rounded-2xl flex items-center justify-center overflow-hidden">
              <img src="/src/images/price_chart.png" alt="Price Chart" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold mb-4">About Bitcoin</h2>
            <p className="text-gray-600 leading-relaxed font-medium">
              Bitcoin is the world’s first widely-adopted cryptocurrency. With Bitcoin, people can securely and directly send each other digital money on the internet. It was created by Satoshi Nakamoto in 2009.
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-1/3">
          <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-24">
            <h3 className="text-xl font-bold mb-6">Buy Bitcoin</h3>
            <div className="flex flex-col gap-4">
              <input type="text" placeholder="GHS 0.00" className="w-full p-4 rounded-xl border border-gray-300 text-right text-xl font-bold outline-none focus:border-[#0052FF]" />
              <button className="w-full py-4 bg-[#0052FF] text-white font-bold rounded-full hover:bg-[#0045D8] transition-colors">
                Buy BTC
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AssetDetail;
