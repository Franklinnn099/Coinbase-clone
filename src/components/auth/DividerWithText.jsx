import React from 'react';

const DividerWithText = ({ text = 'OR' }) => (
  <div className="flex items-center gap-4 my-1">
    <div className="flex-1 h-px bg-[#2D2F36]" />
    <span className="text-xs font-medium text-[#6B7280] uppercase tracking-wider">{text}</span>
    <div className="flex-1 h-px bg-[#2D2F36]" />
  </div>
);

export default DividerWithText;