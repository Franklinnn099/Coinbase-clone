import React from 'react';

const icons = {
  personal: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#1A1B1F" />
      <circle cx="20" cy="16" r="6" fill="#5B616E" />
      <path d="M10 34c0-5.5 4.5-10 10-10s10 4.5 10 10" fill="#5B616E" />
    </svg>
  ),
  business: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#1A1B1F" />
      <rect x="11" y="14" width="18" height="14" rx="2" fill="#5B616E" />
      <rect x="15" y="10" width="10" height="6" rx="1" fill="none" stroke="#5B616E" strokeWidth="2" />
    </svg>
  ),
  developer: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#1A1B1F" />
      <path d="M15 15l-5 5 5 5M25 15l5 5-5 5" stroke="#5B616E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 12l-4 16" stroke="#5B616E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

const AccountTypeCard = ({ type, title, description, selected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-full flex items-center gap-4 p-4 rounded-2xl border text-left transition-colors ${
      selected
        ? 'border-[#0052FF] bg-[#0052FF]/5'
        : 'border-[#2D2F36] bg-[#1A1B1F] hover:border-[#3D3F46]'
    }`}
  >
    <div className="shrink-0">{icons[type]}</div>

    <div className="flex-1 min-w-0">
      <div className="text-white font-semibold text-base">{title}</div>
      <div className="text-[#8A8F98] text-sm mt-0.5 leading-snug">{description}</div>
    </div>

    {/* Checkbox indicator */}
    <div className="shrink-0">
      {selected ? (
        <div className="w-5 h-5 rounded-full bg-[#0052FF] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ) : (
        <div className="w-5 h-5 rounded-full border-2 border-[#3D3F46]" />
      )}
    </div>
  </button>
);

export default AccountTypeCard;
