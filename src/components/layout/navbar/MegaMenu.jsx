import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MegaMenuSection from './MegaMenuSection';

const panelTransition = {
  duration: 0.2,
  ease: [0.2, 0.8, 0.2, 1],
};

const MegaMenu = ({ item }) => (
  <div className="hidden lg:block">
    <AnimatePresence initial={false} mode="wait">
      {item ? (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-x-0 top-full border-b border-[#E6E8EC] bg-[#F7F8FA]"
          exit={{ opacity: 0, y: -10 }}
          initial={{ opacity: 0, y: -8 }}
          key={item.label}
          transition={panelTransition}
        >
          <div className="mx-auto grid max-w-[1280px] grid-cols-[minmax(0,1fr)_320px] gap-10 px-6 py-8 xl:px-8">
            <div className="grid grid-cols-2 gap-4">
              {item.dropdown.sections.map((section) => (
                <MegaMenuSection key={section.title} section={section} />
              ))}
            </div>

            <aside className="flex flex-col rounded-[28px] border border-[#E6E8EC] bg-white p-4">
              <div className="overflow-hidden rounded-[22px] bg-[#EEF2F6]">
                <img
                  alt={item.dropdown.promo.imageAlt}
                  className="h-[210px] w-full object-cover"
                  src={item.dropdown.promo.image}
                />
              </div>
              <div className="px-1 pb-1 pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7E8492]">
                  {item.dropdown.promo.eyebrow}
                </p>
                <h3 className="mt-2 text-[26px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#0A0B0D]">
                  {item.dropdown.promo.headline}
                </h3>
                <Link
                  className="mt-5 inline-flex text-[15px] font-semibold text-[#0052FF] transition-colors duration-200 hover:text-[#0047D9] focus:outline-none focus-visible:text-[#0047D9]"
                  to={item.dropdown.promo.href}
                >
                  {item.dropdown.promo.cta}
                </Link>
              </div>
            </aside>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  </div>
);

export default MegaMenu;
