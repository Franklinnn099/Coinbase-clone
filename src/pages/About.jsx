import React from 'react';
import coinbaseOffice from '../../images/coinbase_office.png';
import cryptoAbstract from '../../images/crypto_abstract.png';

const About = () => {
  return (
    <div className="w-full bg-white text-[#0A0B0D]">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-24 bg-[#0A0B0D] text-white">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="w-full md:w-[45%] flex flex-col items-start pr-0 md:pr-12">
            <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] mb-6">
              About us
            </h1>
            <p className="text-[20px] text-gray-400 mb-10 max-w-[500px]">
              We are building the cryptoeconomy – a more fair, accessible, efficient, and transparent financial system enabled by crypto.
            </p>
            <button className="px-8 h-14 rounded-full bg-[#0052FF] text-white text-[16px] font-medium hover:bg-[#0045D8] transition-colors">
              Read our mission
            </button>
          </div>
          <div className="w-full flex justify-end">
            <div className="w-full aspect-[1.2] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={coinbaseOffice} 
                alt="Coinbase Office" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-24 bg-[#F5F8FF]">
        <div className="max-w-[1000px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-[#0A0B0D]">
          <div>
            <div className="text-[48px] font-bold mb-2">100+</div>
            <div className="font-medium text-[#5B616E]">Countries supported</div>
          </div>
          <div>
            <div className="text-[48px] font-bold mb-2">$130B+</div>
            <div className="font-medium text-[#5B616E]">Assets on platform</div>
          </div>
          <div>
            <div className="text-[48px] font-bold mb-2">3400+</div>
            <div className="font-medium text-[#5B616E]">Employees</div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="w-full py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-full aspect-4/3 rounded-3xl overflow-hidden bg-gray-100">
                <img 
                  src={cryptoAbstract} 
                  alt="Crypto Abstract" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[32px] md:text-[40px] font-bold mb-6">Our history</h2>
              <p className="text-[18px] text-[#5B616E] mb-6 leading-relaxed">
                Coinbase started in 2012 with the radical idea that anyone, anywhere, should be able to easily and securely send and receive Bitcoin. Today, we offer a trusted and easy-to-use platform for accessing the broader cryptoeconomy.
              </p>
              <p className="text-[18px] text-[#5B616E] leading-relaxed">
                We provide end-to-end financial infrastructure and technology for the crypto economy. Customers around the world discover and begin their journeys with crypto through Coinbase.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
