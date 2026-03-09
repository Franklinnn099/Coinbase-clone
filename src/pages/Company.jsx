import React from 'react';
import CtaBanner from '../components/home/CtaBanner';

const Company = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full bg-[#0052FF] text-white">
        <div className="max-w-[1400px] mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] tracking-tight mb-8 max-w-4xl">
            Our mission is to increase economic freedom in the world.
          </h1>
          <p className="text-[20px] mb-10 font-medium max-w-2xl text-blue-100">
            Join us and help build the cryptoeconomy—a more fair, accessible, efficient, and transparent financial system enabled by crypto.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-24 border-b border-gray-100 bg-[#F5F8FF]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-[40px] md:text-[56px] font-bold text-[#0052FF] mb-2">108M+</div>
              <div className="text-[#5B616E] font-medium text-[16px]">Verified users</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[40px] md:text-[56px] font-bold text-[#0052FF] mb-2">$114B</div>
              <div className="text-[#5B616E] font-medium text-[16px]">Assets on platform</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[40px] md:text-[56px] font-bold text-[#0052FF] mb-2">100+</div>
              <div className="text-[#5B616E] font-medium text-[16px]">Countries supported</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[40px] md:text-[56px] font-bold text-[#0052FF] mb-2">3,400+</div>
              <div className="text-[#5B616E] font-medium text-[16px]">Employees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold leading-tight text-[#0A0B0D]">
              Our core values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col">
              <div className="w-12 h-12 bg-[#F5F8FF] rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0052FF" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              </div>
              <h3 className="text-[20px] font-bold text-[#0A0B0D] mb-3">Clear communication</h3>
              <p className="text-[#5B616E] text-[15px] leading-relaxed">
                We are direct and concise. We share information efficiently, improving collaboration and productivity. We believe in transparency and honesty.
              </p>
            </div>
            
            <div className="flex flex-col">
              <div className="w-12 h-12 bg-[#F5F8FF] rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0052FF" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h3 className="text-[20px] font-bold text-[#0A0B0D] mb-3">Positive energy</h3>
              <p className="text-[#5B616E] text-[15px] leading-relaxed">
                We are optimistic about the future and determined to get there. We co-create solutions instead of choosing blame and criticism. We create moments of play at work.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-12 h-12 bg-[#F5F8FF] rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0052FF" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </div>
              <h3 className="text-[20px] font-bold text-[#0A0B0D] mb-3">Continuous learning</h3>
              <p className="text-[#5B616E] text-[15px] leading-relaxed">
                We are humble and value learning over being right. We embrace curiosity and strive to understand everything we encounter. We seek feedback as a tool for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};

export default Company;
