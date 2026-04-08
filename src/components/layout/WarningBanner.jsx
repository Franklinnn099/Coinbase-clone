import React from 'react';

const WarningBanner = () => {
  return (
    <div className="bg-red-600 text-white py-3 px-4 text-center text-base sm:text-lg font-bold z-50 relative border-b-4 border-red-800 shadow-md">
      <p>🚨 IMPORTANT: THIS IS A STUDENT DEMO PROJECT. IT IS NOT AFFILIATED WITH COINBASE. DO NOT ENTER REAL DATA. 🚨</p>
    </div>
  );
};

export default WarningBanner;
