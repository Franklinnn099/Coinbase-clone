import React from 'react';

const Legal = () => {
  return (
    <div className="w-full bg-white text-[#0A0B0D] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 py-24 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar Nav */}
        <aside className="w-full md:w-64 shrink-0">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li><span className="text-[#0052FF] cursor-pointer">User Agreement</span></li>
            <li><span className="text-[#5B616E] hover:text-[#0A0B0D] cursor-pointer">Privacy Policy</span></li>
            <li><span className="text-[#5B616E] hover:text-[#0A0B0D] cursor-pointer">Cookie Policy</span></li>
            <li><span className="text-[#5B616E] hover:text-[#0A0B0D] cursor-pointer">State Licenses</span></li>
            <li><span className="text-[#5B616E] hover:text-[#0A0B0D] cursor-pointer">Disclosures</span></li>
            <li><span className="text-[#5B616E] hover:text-[#0A0B0D] cursor-pointer">Law Enforcement</span></li>
          </ul>
        </aside>

        {/* Content */}
        <div className="flex-1 max-w-[800px]">
          <h1 className="text-[40px] font-bold mb-8">User Agreement</h1>
          <p className="text-[#5B616E] mb-8 font-medium">Last updated: March 2026</p>
          
          <div className="prose text-[#0A0B0D] space-y-6">
            <h2 className="text-2xl font-bold mt-10">1. Introduction</h2>
            <p className="leading-relaxed">This User Agreement ("Agreement") is a contract between you and Coinbase that applies to your use of Coinbase services. By registering for a Coinbase account, you agree that you have read, understood, and accept all of the terms and conditions contained in this Agreement, as well as our Privacy Policy and Cookie Policy.</p>
            
            <h2 className="text-2xl font-bold mt-10">2. Eligibility</h2>
            <p className="leading-relaxed">To be eligible to use the Coinbase Services, you must be at least 18 years old and reside in a country in which the relevant Coinbase Services are accessible. There are certain features which may or may not be available to you depending on your location and other criteria.</p>

            <h2 className="text-2xl font-bold mt-10">3. Account Setup</h2>
            <p className="leading-relaxed">To use the Coinbase Services, you will need to register for a Coinbase account by providing your name, an e-mail address, password, and accepting the terms of this Agreement. Coinbase may, in its sole discretion, refuse to open a Coinbase account for you, or limit the number of Coinbase accounts that you may hold.</p>

            <p className="leading-relaxed text-sm text-gray-500 mt-16 pt-8 border-t border-gray-100">
              Disclaimer: This is cloned representation for educational fidelity. Not actual Coinbase policies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
