import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiGlobe, FiMenu, FiUser, FiX } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DEFAULT_ACTIVE_NAV, navData } from '../../data/navData';
import { useAuth } from '../../context/AuthContext';
import GlobalSearch from '../search/GlobalSearch';
import ActionButton from './navbar/ActionButton';
import CoinbaseMark from './navbar/CoinbaseMark';
import MegaMenu from './navbar/MegaMenu';
import NavItem from './navbar/NavItem';

const mobileDrawerTransition = {
  duration: 0.2,
  ease: [0.2, 0.8, 0.2, 1],
};

const getRouteActiveLabel = (pathname) => {
  if (pathname === '/' || pathname.startsWith('/businesses')) return 'Businesses';
  if (pathname.startsWith('/explore') || pathname.startsWith('/asset/')) return 'Cryptocurrencies';
  if (pathname.startsWith('/individuals') || pathname.startsWith('/learn')) return 'Individuals';
  if (pathname.startsWith('/institutions')) return 'Institutions';
  if (pathname.startsWith('/developers') || pathname.startsWith('/cds-demo')) return 'Developers';
  if (pathname.startsWith('/company') || pathname.startsWith('/support') || pathname.startsWith('/legal')) {
    return 'Company';
  }
  return DEFAULT_ACTIVE_NAV;
};

const Navbar = () => {
  const [desktopOpen, setDesktopOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const activeItem = useMemo(
    () => navData.find((item) => item.label === desktopOpen) ?? null,
    [desktopOpen]
  );

  const highlightedLabel = desktopOpen ?? getRouteActiveLabel(location.pathname);

  const closeDesktopMenu = () => setDesktopOpen(null);
  const closeMobileMenu = () => setMobileOpen(false);

  const handleBlurCapture = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      closeDesktopMenu();
    }
  };

  const handleLogout = async () => {
    closeMobileMenu();
    await logout();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div
        className="relative"
        onBlurCapture={handleBlurCapture}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            closeDesktopMenu();
          }
        }}
        onMouseLeave={closeDesktopMenu}
      >
        <nav className="w-full border-b border-[#E6E8EC] bg-white">
          <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex min-w-0 items-center gap-6 xl:gap-10">
              <Link
                aria-label="Coinbase home"
                className="flex shrink-0 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0052FF]/35"
                onClick={closeMobileMenu}
                to="/"
              >
                <CoinbaseMark />
              </Link>

              <div className="hidden h-full items-center gap-1 lg:flex">
                {navData.map((item) => (
                  <NavItem
                    isHighlighted={highlightedLabel === item.label}
                    isOpen={desktopOpen === item.label}
                    item={item}
                    key={item.label}
                    onOpen={setDesktopOpen}
                  />
                ))}
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2.5">
              <div className="hidden lg:flex">
                <GlobalSearch />
              </div>

              <ActionButton
                ariaLabel="Change language and region"
                className="hidden lg:inline-flex"
                icon={<FiGlobe size={18} />}
              />

              {user ? (
                <>
                  <ActionButton
                    className="hidden lg:inline-flex"
                    to="/profile"
                    variant="secondary"
                    icon={<FiUser size={16} />}
                  >
                    {user.name.split(' ')[0]}
                  </ActionButton>
                  <ActionButton
                    className="hidden lg:inline-flex"
                    onClick={handleLogout}
                    variant="primary"
                  >
                    Sign out
                  </ActionButton>
                </>
              ) : (
                <>
                  <ActionButton
                    className="hidden lg:inline-flex"
                    to="/signin"
                    variant="secondary"
                  >
                    Sign in
                  </ActionButton>
                  <ActionButton
                    className="hidden lg:inline-flex"
                    to="/signup"
                    variant="primary"
                  >
                    Sign up
                  </ActionButton>
                </>
              )}

              <ActionButton
                ariaLabel={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="lg:hidden"
                icon={mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                onClick={() => setMobileOpen((open) => !open)}
              />
            </div>
          </div>
        </nav>

        <MegaMenu item={activeItem} />

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="absolute inset-x-0 top-full border-b border-[#E6E8EC] bg-white lg:hidden"
              exit={{ opacity: 0, y: -8 }}
              initial={{ opacity: 0, y: -8 }}
              transition={mobileDrawerTransition}
            >
              <div className="px-4 py-6 sm:px-6">
                <div className="space-y-5">
                  {navData.map((item) => (
                    <div className="border-b border-[#EEF1F4] pb-5 last:border-b-0" key={item.label}>
                      <Link
                        className="text-[18px] font-semibold tracking-[-0.02em] text-[#0A0B0D]"
                        onClick={closeMobileMenu}
                        to={item.href}
                      >
                        {item.label}
                      </Link>
                      <div className="mt-3 grid gap-2">
                        {item.dropdown.sections.flatMap((section) => section.items).slice(0, 3).map((link) => (
                          <Link
                            className="text-[14px] text-[#5B616E]"
                            key={link.title}
                            onClick={closeMobileMenu}
                            to={link.href}
                          >
                            {link.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3">
                  {user ? (
                    <>
                      <ActionButton onClick={closeMobileMenu} to="/profile" variant="secondary">
                        My Profile
                      </ActionButton>
                      <ActionButton onClick={handleLogout} variant="primary">
                        Sign out
                      </ActionButton>
                    </>
                  ) : (
                    <>
                      <ActionButton onClick={closeMobileMenu} to="/signin" variant="secondary">
                        Sign in
                      </ActionButton>
                      <ActionButton onClick={closeMobileMenu} to="/signup" variant="primary">
                        Sign up
                      </ActionButton>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
