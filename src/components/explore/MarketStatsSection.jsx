import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { marketStats, marketStatsContent } from '../../data/exploreCryptoData';
import Sparkline from './Sparkline';

const toneClasses = {
  negative: {
    chart: '#E55361',
    text: 'text-[#CF2030]',
  },
  positive: {
    chart: '#19A26B',
    text: 'text-[#098551]',
  },
};

const StatCard = ({ card }) => {
  const tone = toneClasses[card.tone];

  return (
    <article className="rounded-[10px] border border-[#EEF1F4] bg-[#F5F7FA] p-3">
      <p className="text-[10px] font-medium text-[#7E8492]">{card.title}</p>
      <div className="mt-1 flex items-end gap-2">
        <span className="text-[14px] font-medium text-[#0A0B0D]">{card.value}</span>
        <span className={`text-[10px] font-medium ${tone.text}`}>{card.change}</span>
      </div>
      <div className="mt-3">
        <Sparkline color={tone.chart} height={30} points={card.points} strokeWidth={1.8} width={98} />
      </div>
    </article>
  );
};

const MarketStatsSection = () => (
  <section className="border-b border-[#E6E8EC] px-4 py-6 sm:px-6 lg:px-8">
    <div className="flex items-start justify-between gap-4">
      <div>
        <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-[#0A0B0D]">
          {marketStatsContent.title}
        </h2>
        <p className="mt-3 max-w-[680px] text-[11px] leading-[1.5] text-[#7E8492]">
          {marketStatsContent.description}
        </p>
        <button className="mt-2 text-[11px] font-medium text-[#0052FF]">
          {marketStatsContent.linkLabel}
        </button>
      </div>

      <div className="hidden items-center gap-2 sm:flex">
        <button className="text-[#5B616E] transition-colors hover:text-[#0A0B0D]" type="button">
          <FiArrowLeft size={14} />
        </button>
        <button className="text-[#5B616E] transition-colors hover:text-[#0A0B0D]" type="button">
          <FiArrowRight size={14} />
        </button>
      </div>
    </div>

    <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {marketStats.map((card) => (
        <StatCard card={card} key={card.title} />
      ))}
    </div>
  </section>
);

export default MarketStatsSection;
