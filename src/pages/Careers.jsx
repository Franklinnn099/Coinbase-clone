import React from 'react';

const Careers = () => {
  return (
    <div className="w-full bg-white text-[#0A0B0D]">
      {/* Hero Section */}
      <section className="w-full bg-[#0052FF] pt-32 pb-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] mb-6">
            Help us build the<br />cryptoeconomy
          </h1>
          <p className="text-[20px] mb-10 max-w-[800px] mx-auto">
            We are looking for passionate people to join our mission to increase economic freedom in the world.
          </p>
          <button className="px-8 h-14 rounded-full bg-white text-[#0052FF] text-[16px] font-medium hover:bg-gray-100 transition-colors">
            View open roles
          </button>
        </div>
      </section>

      {/* Departments */}
      <section className="w-full py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-[32px] md:text-[40px] font-bold mb-12">Search by department</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Engineering', 'Design', 'Marketing & Communications', 'Product', 'Data', 'Customer Experience'].map((dept) => (
              <div key={dept} className="p-8 border border-gray-200 rounded-3xl hover:shadow-lg transition-shadow cursor-pointer group">
                <h3 className="text-[20px] font-bold group-hover:text-[#0052FF] transition-colors">{dept}</h3>
                <p className="text-[#5B616E] mt-2">Remote, North America, EMEA, APAC</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
