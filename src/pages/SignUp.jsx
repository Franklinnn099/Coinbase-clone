import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white flex flex-col items-center pt-24 px-6 mb-24"
    >
      <div className="w-full max-w-[480px]">
        <h1 className="text-3xl font-bold mb-2 text-[#0A0B0D]">Create an account</h1>
        <p className="text-gray-500 font-medium mb-8">Be sure to enter your legal name as it appears on your government-issued ID.</p>
        
        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 w-1/2">
              <label className="font-semibold text-sm text-[#0A0B0D]">First name</label>
              <input 
                type="text" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:border-[#0052FF]"
                placeholder="First name"
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label className="font-semibold text-sm text-[#0A0B0D]">Last name</label>
              <input 
                type="text" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:border-[#0052FF]"
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-sm text-[#0A0B0D]">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:border-[#0052FF]"
              placeholder="Your email address"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-sm text-[#0A0B0D]">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:border-[#0052FF]"
              placeholder="Your password"
            />
          </div>

          <div className="flex items-start gap-3 mt-2">
            <input type="checkbox" id="certify" className="mt-1 w-4 h-4 rounded border-gray-300 text-[#0052FF]" />
            <label htmlFor="certify" className="text-sm font-medium text-gray-600 leading-tight">
              I certify that I am 18 years of age or older, and agree to the <Link to="#" className="text-[#0052FF] hover:underline">User Agreement</Link> and <Link to="#" className="text-[#0052FF] hover:underline">Privacy Policy</Link>.
            </label>
          </div>

          <button type="submit" className="w-full py-4 mt-6 bg-[#0052FF] text-white font-bold rounded-full hover:bg-[#0045D8] transition-colors">
            Create account
          </button>
        </form>

        <div className="mt-8 text-center text-sm font-semibold text-gray-500">
          Already have an account? <Link to="/signin" className="text-[#0052FF] hover:underline">Sign in</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUp;
