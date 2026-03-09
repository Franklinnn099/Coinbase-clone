import React from 'react';

const AuthInput = ({ label, type = 'text', placeholder, value, onChange }) => (
  <div className="flex flex-col gap-2">
    {label && (
      <label className="text-sm font-medium text-gray-300">{label}</label>
    )}
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3.5 rounded-xl bg-[#0A0B0D] border border-[#2D2F36] text-white placeholder-[#6B7280] text-base outline-none focus:border-[#4B8BF5] transition-colors"
    />
  </div>
);

export default AuthInput;