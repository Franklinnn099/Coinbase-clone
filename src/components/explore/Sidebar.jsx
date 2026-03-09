import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { movers, newOnCoinbase } from '../../data/exploreCryptoData';
import TokenBadge from './TokenBadge';

const SectionArrows = () => (
  <div className="flex items-center gap-2 text-[#5B616E]">
    <button className="transition-colors hover:text-[#0A0B0D]" type="button">
      <FiArrowLeft size={13} />
    </button>
    <button className="transition-colors hover:text-[#0A0B0D]" type="button">
      <FiArrowRight size={13} />
    </button>
  </div>
);

const SidebarPromoCard = () => (
  <div className="rounded-[14px] bg-[#1652F0] px-4 py-4 text-white">
    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 className="text-[15px] font-semibold">Get started</h3>
        <p className="mt-1 text-[10px] text-[#DCE7FF]">Create your account today</p>
        <button
          className="mt-5 inline-flex h-8 items-center rounded-full bg-white px-4 text-[11px] font-medium text-[#0A0B0D]"
          type="button"
        >
          Sign up
        </button>
      </div>

      <div className="relative mt-1 h-14 w-16 shrink-0">
        <div className="absolute right-0 top-0 h-10 w-10 rounded-full bg-[#FFD21E]" />
        <div className="absolute bottom-0 right-2 h-8 w-8 rounded-full bg-[#16A34A]" />
        <div className="absolute left-3 top-2 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-[#0A0B0D] bg-[#FFD21E] text-[#0A0B0D]">
          <span className="text-lg font-medium">+</span>
        </div>
      </div>
    </div>
  </div>
);

const MoverCard = ({ item }) => (
  <article className="rounded-[12px] border border-[#EEF1F4] bg-[#F5F7FA] p-3">
    <TokenBadge size={18} token={item.icon} />
    <div className="mt-4 text-[10px] uppercase text-[#7E8492]">{item.symbol}</div>
    <div className="mt-1 text-[22px] font-medium tracking-[-0.03em] text-[#098551]">{item.change}</div>
    <div className="mt-1 text-[10px] text-[#7E8492]">{item.price}</div>
  </article>
);

const ListingCard = ({ item }) => (
  <article className="rounded-[12px] border border-[#EEF1F4] bg-[#F5F7FA] p-3">
    <TokenBadge size={18} token={item.icon} />
    <div className="mt-4 text-[10px] uppercase text-[#7E8492]">{item.symbol}</div>
    <div className="mt-1 text-[14px] font-medium text-[#0A0B0D]">{item.name}</div>
    <div className="mt-1 text-[10px] text-[#7E8492]">{item.added}</div>
  </article>
);

const Sidebar = () => (
  <aside className="w-full xl:w-[300px]">
    <div className="space-y-6 px-4 py-4 sm:px-6 xl:px-4">
      <SidebarPromoCard />

      <section>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#0A0B0D]">Top movers</h3>
            <p className="mt-1 text-[11px] text-[#7E8492]">24hr change</p>
          </div>
          <SectionArrows />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {movers.map((item) => (
            <MoverCard item={item} key={item.symbol} />
          ))}
        </div>
      </section>

      <section className="border-t border-[#E6E8EC] pt-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#0A0B0D]">
            New on Coinbase
          </h3>
          <SectionArrows />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {newOnCoinbase.map((item) => (
            <ListingCard item={item} key={item.symbol} />
          ))}
        </div>
      </section>
    </div>
  </aside>
);

export default Sidebar;
