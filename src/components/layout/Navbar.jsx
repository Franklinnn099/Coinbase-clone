import React, { useState } from 'react';
import { FiSearch, FiGlobe } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navData } from '../../data/navData';
import GlobalSearch from '../search/GlobalSearch';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navItems = [
    { name: 'Cryptocurrencies', active: false },
    { name: 'Individuals', active: false },
    { name: 'Businesses', active: true },
    { name: 'Institutions', active: false },
    { name: 'Developers', active: false },
    { name: 'Company', active: false },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // When clicking a mobile link, close the menu
  const handleMobileNavClick = () => setIsMobileMenuOpen(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 h-[68px] flex items-center justify-between relative z-50 bg-white">
        
        {/* Left Section - Logo */}
        <div className="shrink-0 flex items-center pr-8">
          <Link to="/" className="flex items-center outline-none" onClick={handleMobileNavClick}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#0052FF"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M16 6.5C10.7533 6.5 6.5 10.7533 6.5 16C6.5 21.2467 10.7533 25.5 16 25.5C18.6703 25.5 21.085 24.3953 22.8123 22.6074L19.3876 19.1827C18.4756 20.0488 17.294 20.65 16 20.65C13.4319 20.65 11.35 18.5681 11.35 16C11.35 13.4319 13.4319 11.35 16 11.35C17.294 11.35 18.4756 11.9512 19.3876 12.8173L22.8123 9.3926C21.085 7.60467 18.6703 6.5 16 6.5Z" fill="white"/>
            </svg>
          </Link>
        </div>

        {/* Middle Section - Nav Links */}
        <div 
          className="hidden lg:flex items-center justify-center grow gap-1 h-full relative"
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {navData.map((item) => (
            <div 
              key={item.label}
              className="h-full flex items-center"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onFocus={() => setActiveDropdown(item.label)}
            >
              <Link 
                to={item.href} 
                className={`text-[15px] font-medium transition-colors duration-200 px-4 py-2 rounded-full ${
                  activeDropdown === item.label ? 'bg-gray-50 text-[#0052FF]' : 'text-[#0A0B0D] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}

          {/* Mega Dropdown Panel */}
          <AnimatePresence>
            {activeDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-full max-w-[1400px] bg-white border-t border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] rounded-b-3xl overflow-hidden flex"
                style={{ minHeight: '360px' }}
              >
                {navData.map((item) => (
                  item.label === activeDropdown && (
                    <div key={item.label} className="w-full flex">
                      
                      {/* Left Side: Columns */}
                      <div className="flex-1 py-10 px-12 grid grid-cols-2 gap-x-12 gap-y-2">
                        {item.dropdown.columns.map((col, colIdx) => (
                          <div key={colIdx} className="flex flex-col gap-6">
                            {col.map((link, linkIdx) => (
                              <Link key={linkIdx} to={link.href} className="group flex items-start gap-4 p-2 -m-2 rounded-2xl hover:bg-gray-50 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-[#0A0B0D] group-hover:bg-white group-hover:shadow-sm transition-all shrink-0">
                                  {link.icon}
                                </div>
                                <div className="flex flex-col pt-0.5">
                                  <span className="text-[16px] font-bold text-[#0A0B0D] group-hover:text-[#0052FF] transition-colors leading-tight mb-1">
                                    {link.title}
                                  </span>
                                  <span className="text-[14px] text-[#5B616E] leading-snug">
                                    {link.description}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>

                      {/* Right Side: Promo */}
                      <div className="w-[380px] shrink-0 bg-gray-50 p-10 flex flex-col justify-between border-l border-gray-100">
                        <div className={`w-full aspect-4/3 rounded-2xl ${item.dropdown.promo.bgColor} flex items-center justify-center ${item.dropdown.promo.image ? '' : 'p-8'} mb-6 overflow-hidden`}>
                          {item.dropdown.promo.image ? (
                            <img src={item.dropdown.promo.image} alt="Promo" className="w-full h-full object-cover" />
                          ) : (
                            <h3 className={`text-[24px] font-bold leading-tight ${item.dropdown.promo.textColor}`}>
                              {item.dropdown.promo.headline.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                  {line}
                                  <br />
                                </React.Fragment>
                              ))}
                            </h3>
                          )}
                        </div>
                        <Link to={item.dropdown.promo.href} className="text-[16px] font-bold text-[#0052FF] hover:text-[#0045D8] transition-colors flex items-center gap-1.5 group">
                          {item.dropdown.promo.cta}
                          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </Link>
                      </div>

                    </div>
                  )
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Section - Action Icons & Auth Buttons */}
        <div className="shrink-0 flex items-center justify-end gap-2 pl-0 lg:pl-4">
          
          {/* Injecting Global Search component. Flow bounds are respected by its dynamic children */}
          <div className="flex items-center justify-end">
            <GlobalSearch />
          </div>

          <button className="hidden sm:flex w-9 h-9 rounded-full bg-gray-50 items-center justify-center text-[#0A0B0D] hover:bg-gray-100 transition-colors lg:mr-3 cursor-pointer">
            <FiGlobe size={18} strokeWidth={2.5} />
          </button>

          <Link to="/signin" className="hidden lg:flex px-5 py-2.5 rounded-full bg-gray-50 text-[#0A0B0D] text-[15px] font-medium hover:bg-gray-100 transition-colors cursor-pointer">
            Sign in
          </Link>
          
          <Link to="/signup" className="hidden lg:flex px-5 py-2.5 rounded-full bg-[#0052FF] text-white text-[15px] font-medium hover:bg-[#0045D8] transition-colors cursor-pointer">
            Sign up
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-[#0A0B0D] cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden absolute top-[68px] left-0 right-0 bg-white z-40 overflow-y-auto border-t border-gray-100 flex flex-col"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navData.map((item) => (
                <div key={item.label} className="border-b border-gray-50 pb-6 w-full">
                   <Link 
                     to={item.href} 
                     className="text-[20px] font-bold text-[#0A0B0D] block w-full mb-4"
                     onClick={handleMobileNavClick}
                   >
                     {item.label}
                   </Link>
                   
                   {/* Optional: Render sub-links in mobile menu */}
                   <div className="flex flex-col gap-4 pl-4">
                      {item.dropdown.columns.flatMap(col => col).slice(0,3).map((link, idx) => (
                         <Link 
                           key={idx} 
                           to={link.href} 
                           className="text-[16px] text-[#5B616E] font-medium block"
                           onClick={handleMobileNavClick}
                         >
                           {link.title}
                         </Link>
                      ))}
                      <Link to={item.href} onClick={handleMobileNavClick} className="text-[#0052FF] font-medium text-[14px]">
                        View all {item.label.toLowerCase()} &rarr;
                      </Link>
                   </div>
                </div>
              ))}
              
              <div className="flex flex-col gap-4 pt-4 pb-20">
                <Link 
                  to="/signin" 
                  onClick={handleMobileNavClick}
                  className="w-full h-14 flex items-center justify-center rounded-full bg-gray-50 text-[#0A0B0D] text-[16px] font-bold"
                >
                  Sign in
                </Link>
                <Link 
                  to="/signup" 
                  onClick={handleMobileNavClick}
                  className="w-full h-14 flex items-center justify-center rounded-full bg-[#0052FF] text-white text-[16px] font-bold"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
