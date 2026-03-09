import React from 'react';
import cryptoDollar from '../../../images/crypto_dollar.png';
import cryptoBanking from '../../../images/crypto_banking.png';
import cryptoInvesting from '../../../images/crypto_investing.png';

const LearnSection = () => {
  const articles = [
    {
      title: 'USDC: The digital dollar for the global crypto economy',
      description: 'Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more...',
      bgClass: 'bg-black',
      image: cryptoDollar
    },
    {
      title: 'Can crypto really replace your bank account?',
      description: 'If you\'re a big enough fan of crypto, you\'ve probably heard the phrase "be your own bank" or the term "bankless" — the idea being that...',
      bgClass: 'bg-blue-600',
      image: cryptoBanking
    },
    {
      title: 'When is the best time to invest in crypto?',
      description: 'Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause...',
      bgClass: 'bg-gray-200',
      image: cryptoInvesting
    }
  ];

  return (
    <section className="w-full bg-[#F5F8FF] py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold leading-tight text-[#0A0B0D] font-sans tracking-tight max-w-md">
            New to crypto?<br />Learn some crypto basics
          </h2>
          <div className="flex flex-col items-start max-w-lg">
            <p className="text-[#5B616E] text-[15px] font-medium mb-6">
              Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
            </p>
            <button className="px-6 h-12 rounded-full bg-[#0A0B0D] text-white text-[15px] font-medium hover:bg-black transition-colors cursor-pointer">
              Read More
            </button>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="flex flex-col cursor-pointer group">
              {/* Image Placeholder area - matching the visual block for each article */}
              <div className={`w-full aspect-[1.6] rounded-2xl mb-6 overflow-hidden ${article.bgClass} flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:-translate-y-1 relative`}>
                 <img src={article.image} alt={article.title} className="w-full h-full object-cover opacity-90 transition-opacity group-hover:opacity-100" />
              </div>
              <h3 className="text-[20px] font-bold text-[#0A0B0D] mb-3 leading-tight">
                {article.title}
              </h3>
              <p className="text-[#5B616E] text-[15px] font-medium leading-relaxed">
                {article.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LearnSection;
