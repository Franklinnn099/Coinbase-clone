import React from 'react';
import { Link } from 'react-router-dom';
import CtaBanner from '../components/home/CtaBanner';

const Developers = () => {
  return (
    <div className="w-full bg-[#0A0B0D] text-white">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-24 border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 bg-[#1A1B1F] px-4 py-2 rounded-full border border-gray-800 mb-6 max-w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-[13px] font-medium">Coinbase Developer Platform</span>
            </div>
            <div className="w-full md:w-[45%] flex flex-col items-start pr-0 md:pr-12">
            <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] tracking-tight mb-8">
              Build on<br />Base
            </h1>
            <p className="text-[20px] mb-10 font-medium text-gray-400">
              Powerful APIs, SDKs, and tools to quickly build and scale your onchain applications.
            </p>
            </div>
            <div className="flex gap-4">
              <Link to="/cds-demo" className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-[#0052FF] text-white text-base font-medium hover:bg-[#0045D8] transition-colors">
                View CDS Framework Demo
              </Link>
              <button className="px-8 h-14 rounded-full bg-white text-[#0A0B0D] text-base font-medium hover:bg-gray-100 transition-colors">
                Read the docs
              </button>
            </div>
          </div>

          <div className="w-full">
            {/* Code Block UI */}
            <div className="bg-[#1A1B1F] rounded-2xl border border-gray-800 p-6 font-mono text-sm overflow-hidden shadow-2xl relative group">
              <div className="absolute top-4 right-4 text-gray-500 cursor-pointer hover:text-white transition-colors">Copy</div>
              <div className="flex gap-2 mb-6 border-b border-gray-800 pb-4">
                <div className="text-gray-400 hover:text-white cursor-pointer px-2">index.ts</div>
                <div className="text-[#0052FF] border-b-2 border-[#0052FF] px-2 pb-1">server.ts</div>
              </div>
              <div className="text-gray-300 space-y-2">
                <div><span className="text-[#EC4899]">import</span> {'{ Coinbase }'} <span className="text-[#EC4899]">from</span> <span className="text-green-400">'@coinbase/coinbase-sdk'</span>;</div>
                <br />
                <div><span className="text-[#EC4899]">const</span> coinbase = <span className="text-[#EC4899]">new</span> Coinbase({'{'}</div>
                <div className="pl-4">apiKeyName: process.env.API_KEY_NAME,</div>
                <div className="pl-4">privateKey: process.env.PRIVATE_KEY</div>
                <div>{'{)'};</div>
                <br />
                <div className="text-gray-500">// Create a new secure wallet for your user</div>
                <div><span className="text-[#EC4899]">const</span> wallet = <span className="text-[#EC4899]">await</span> coinbase.Wallet.create();</div>
                <br />
                <div className="text-gray-500">// Fund it via Base</div>
                <div><span className="text-[#EC4899]">await</span> wallet.faucet();</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="w-full py-24 border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-[32px] md:text-[40px] font-bold leading-tight mb-12">
            Everything you need to build onchain
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#1A1B1F] p-8 rounded-3xl border border-gray-800 flex flex-col hover:-translate-y-1 transition-transform group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </div>
              <h3 className="text-[20px] font-bold mb-3 group-hover:text-[#9333ea] transition-colors">OnchainKit</h3>
              <p className="text-gray-400 font-medium">React components and TypeScript utilities to help you build top-tier onchain apps.</p>
            </div>

            <div className="bg-[#1A1B1F] p-8 rounded-3xl border border-gray-800 flex flex-col hover:-translate-y-1 transition-transform group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0052FF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3 className="text-[20px] font-bold mb-3 group-hover:text-[#0052FF] transition-colors">AgentKit</h3>
              <p className="text-gray-400 font-medium">Every AI Agent deserves a wallet. AI-native onchain interactions and infrastructure.</p>
            </div>

            <div className="bg-[#1A1B1F] p-8 rounded-3xl border border-gray-800 flex flex-col hover:-translate-y-1 transition-transform group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <h3 className="text-[20px] font-bold mb-3 group-hover:text-[#22c55e] transition-colors">x402</h3>
              <p className="text-gray-400 font-medium">A payments protocol for the internet. Built on HTTP. Seamlessly accept payments.</p>
            </div>

            <div className="bg-[#1A1B1F] p-8 rounded-3xl border border-gray-800 flex flex-col hover:-translate-y-1 transition-transform group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <h3 className="text-[20px] font-bold mb-3 group-hover:text-[#f97316] transition-colors">CDP SDK</h3>
              <p className="text-gray-400 font-medium">Client libraries for managing EVM and Solana wallets while relying on CDP to secure private keys.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Developers;
