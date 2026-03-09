import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import AccountTypeCard from '../components/auth/AccountTypeCard';

const accountTypes = [
  {
    type: 'personal',
    title: 'Personal',
    description: 'Trade crypto as an individual.',
  },
  {
    type: 'business',
    title: 'Business',
    description: 'Manage teams and portfolios, accept crypto payments, access APIs, and more.',
  },
  {
    type: 'developer',
    title: 'Developer',
    description: 'Build onchain using developer tooling.',
  },
];

const SignUpAccountType = () => {
  const [selected, setSelected] = useState('personal');

  return (
    <AuthLayout>
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-8">
        What kind of account are you creating?
      </h1>

      {/* Account type cards */}
      <div className="flex flex-col gap-3">
        {accountTypes.map((account) => (
          <AccountTypeCard
            key={account.type}
            type={account.type}
            title={account.title}
            description={account.description}
            selected={selected === account.type}
            onClick={() => setSelected(account.type)}
          />
        ))}
      </div>

      {/* Continue link (visual stub) */}
      <div className="mt-8">
        <Link
          to="/signup/create"
          className="block w-full py-3.5 bg-[#0052FF] text-[#0A0B0D] font-semibold text-base rounded-full hover:bg-[#0046D8] active:bg-[#003BB5] transition-colors text-center"
        >
          Continue
        </Link>
      </div>
    </AuthLayout>
  );
};

export default SignUpAccountType;
