import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function formatDate(dateString) {
  if (!dateString) return '—';
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[#0052FF] flex items-center justify-center text-white text-3xl font-bold select-none">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center text-[#0A0B0D] mb-1">
          {user?.name}
        </h1>
        <p className="text-center text-[#5B616E] text-sm mb-8">Your Coinbase profile</p>

        {/* Info card */}
        <div className="rounded-2xl border border-[#E6E8EC] divide-y divide-[#E6E8EC]">
          <div className="px-6 py-4">
            <p className="text-xs font-medium text-[#7E8492] uppercase tracking-wide mb-1">Name</p>
            <p className="text-[#0A0B0D] font-medium">{user?.name}</p>
          </div>
          <div className="px-6 py-4">
            <p className="text-xs font-medium text-[#7E8492] uppercase tracking-wide mb-1">Email</p>
            <p className="text-[#0A0B0D] font-medium">{user?.email}</p>
          </div>
          <div className="px-6 py-4">
            <p className="text-xs font-medium text-[#7E8492] uppercase tracking-wide mb-1">Member since</p>
            <p className="text-[#0A0B0D] font-medium">{formatDate(user?.createdAt)}</p>
          </div>
        </div>

        {/* Sign out */}
        <button
          onClick={handleLogout}
          className="mt-6 w-full py-3 rounded-full border border-[#E6E8EC] text-[#0A0B0D] font-semibold text-sm hover:bg-[#F1F3F5] transition-colors"
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Profile;
