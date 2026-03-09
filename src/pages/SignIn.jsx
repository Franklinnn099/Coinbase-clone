import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white flex flex-col items-center pt-24 px-6"
    >
      <div className="w-full max-w-[480px]">
        <h1 className="text-3xl font-bold mb-8 text-[#0A0B0D]">Sign in to Coinbase</h1>
        
        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
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

          <div className="flex justify-between items-center text-sm font-semibold">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-[#0052FF]" />
              <label htmlFor="remember">Stay signed in</label>
            </div>
            <Link to="#" className="text-[#0052FF] hover:underline">Forgot password?</Link>
          </div>

          <button type="submit" className="w-full py-4 mt-4 bg-[#0052FF] text-white font-bold rounded-full hover:bg-[#0045D8] transition-colors">
            Sign in
          </button>
        </form>

        <div className="mt-8 text-center text-sm font-semibold text-gray-500">
          Don't have an account? <Link to="/signup" className="text-[#0052FF] hover:underline">Sign up</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SignIn;
