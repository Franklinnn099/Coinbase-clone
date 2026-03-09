import React from 'react';
import { FiUser, FiActivity, FiBookOpen, FiFileText, FiShield, FiCreditCard } from 'react-icons/fi';

const Support = () => {
  const topics = [
    { title: 'Account access', icon: FiUser },
    { title: 'Trading basics', icon: FiActivity },
    { title: 'Crypto education', icon: FiBookOpen },
    { title: 'Taxes & reports', icon: FiFileText },
    { title: 'Privacy & security', icon: FiShield },
    { title: 'Coinbase Card', icon: FiCreditCard },
  ];

  return (
    <div className="w-full bg-[#f5f8ff] min-h-screen">
      {/* Hero */}
      <section className="w-full pt-24 pb-16 bg-[#0052FF] text-white">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h1 className="text-[48px] font-bold mb-6 tracking-tight">How can we help?</h1>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for answers..." 
              className="w-full h-16 rounded-full px-6 text-[18px] text-[#0A0B0D] placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
            <button className="absolute right-2 top-2 h-12 px-6 bg-[#0A0B0D] text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map(({title, icon: Icon}) => (
            <div key={title} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow group flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0052FF] flex items-center justify-center mb-5 group-hover:bg-[#0052FF] group-hover:text-white transition-colors">
                <Icon size={24} />
              </div>
              <h3 className="text-[20px] font-bold text-[#0A0B0D] group-hover:text-[#0052FF] transition-colors mb-2">{title}</h3>
              <p className="text-[#5B616E] font-medium text-[15px]">Find articles and step-by-step guides.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Support;
