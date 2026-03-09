import React from 'react';
import { Link } from 'react-router-dom';

const getFooterHref = (linkName) => {
  const map = {
    'Careers': '/company/careers',
    'Base': '/developers/base',
    'Wallet': '/individuals/wallet',
    'Help center': '/support',
    'Legal & privacy': '/legal',
    'Explore': '/explore',
    'Individuals': '/individuals',
    'Businesses': '/businesses',
    'Institutions': '/institutions',
    'Developers': '/developers',
    'Company': '/company',
    'Buy & sell': '/individuals',
    'Earn free crypto': '/learn',
    'Developer Platform': '/developers',
    'About': '/company/about'
  };
  return map[linkName] || '#';
};

const Column = ({ title, links }) => (
  <div className="flex flex-col mb-8">
    <h4 className="text-[15px] font-semibold text-[#0A0B0D] mb-4">{title}</h4>
    <ul className="flex flex-col gap-3">
      {links.map((link, idx) => (
        <li key={idx}>
          <Link to={getFooterHref(link)} className="text-[15px] text-[#5B616E] hover:text-[#0052FF] transition-colors">{link}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const companyLinks = ['About', 'Careers', 'Affiliates', 'Blog', 'Press', 'Security', 'Investors', 'Vendors', 'Legal & privacy', 'Cookie policy', 'Cookie preferences', 'Digital Asset Disclosures'];
  const learnLinks = ['Explore', 'Market statistics', 'Coinbase Bytes newsletter', 'Crypto basics', 'Tips & tutorials', 'Crypto glossary', 'Market updates', 'What is Bitcoin?', 'What is crypto?', 'What is a blockchain?', 'How to set up a crypto wallet?', 'How to send crypto?', 'Taxes'];
  const individualsLinks = ['Buy & sell', 'Earn free crypto', 'Base App', 'Coinbase One', 'Debit Card'];
  const businessesLinks = ['Asset Listings', 'Coinbase Business', 'Payments', 'Commerce', 'Token Manager'];
  const institutionsLinks = ['Prime', 'Staking', 'Exchange', 'International Exchange', 'Derivatives Exchange', 'Verified Pools'];
  const developersLinks = ['Developer Platform', 'Base', 'Server Wallets', 'Embedded Wallets', 'Base Accounts (Smart Wallets)', 'Onramp & Offramp', 'x402', 'Trade API', 'Paymaster', 'OnchainKit', 'Data API', 'Verifications', 'Node', 'AgentKit', 'Staking', 'Faucet', 'Exchange API', 'International Exchange API', 'Prime API', 'Derivatives API'];
  const supportLinks = ['Help center', 'Contact us', 'Create account', 'ID verification', 'Account information', 'Payment methods', 'Account access', 'Supported crypto', 'Status'];
  const assetPricesLinks = ['Bitcoin price', 'Ethereum price', 'Solana price', 'XRP price'];
  const stockPricesLinks = ['NVIDIA price', 'Apple price', 'Microsoft price', 'Amazon price'];

  return (
    <footer className="w-full bg-[#F5F8FF] pt-24 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Disclaimer Text */}
        <div className="w-full mb-16 text-[12px] text-[#5B616E] leading-relaxed">
          <p className="mb-4">DEX trading is offered by Coinbase Bermuda Technologies Ltd.</p>
          <p>Products and features may not be available in all regions. Information is for or informational purposes only, and is not (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy or (ii) intended to provide accounting, legal, or tax advice, or investment recommendations. Trading cryptocurrency comes with risk.</p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          
          {/* Logo Column */}
          <div className="col-span-1 lg:col-span-1 pr-4">
            <Link to="/" className="inline-block mb-6 outline-none">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#0052FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M16 6.5C10.7533 6.5 6.5 10.7533 6.5 16C6.5 21.2467 10.7533 25.5 16 25.5C18.6703 25.5 21.085 24.3953 22.8123 22.6074L19.3876 19.1827C18.4756 20.0488 17.294 20.65 16 20.65C13.4319 20.65 11.35 18.5681 11.35 16C11.35 13.4319 13.4319 11.35 16 11.35C17.294 11.35 18.4756 11.9512 19.3876 12.8173L22.8123 9.3926C21.085 7.60467 18.6703 6.5 16 6.5Z" fill="white"/>
              </svg>
            </Link>
          </div>

          <div className="col-span-1 lg:col-span-1">
            <Column title="Company" links={companyLinks} />
            <Column title="Learn" links={learnLinks} />
          </div>

          <div className="col-span-1 lg:col-span-1">
            <Column title="Individuals" links={individualsLinks} />
            <Column title="Businesses" links={businessesLinks} />
            <Column title="Institutions" links={institutionsLinks} />
          </div>

          <div className="col-span-1 lg:col-span-1">
            <Column title="Developers" links={developersLinks} />
          </div>

          <div className="col-span-1 lg:col-span-1">
            <Column title="Support" links={supportLinks} />
            <Column title="Asset prices" links={assetPricesLinks} />
            <Column title="Stock prices" links={stockPricesLinks} />
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 gap-4">
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-[14px] text-[#5B616E]">
            <span>© 2026 Coinbase</span>
            <Link to="#" className="hover:text-[#0052FF] transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-[#0052FF] transition-colors">Terms & Conditions</Link>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-[14px] text-[#5B616E] cursor-pointer hover:text-[#0052FF] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              <span>Global - English</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
