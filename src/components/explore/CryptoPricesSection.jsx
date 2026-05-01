import { useState, useEffect } from 'react';
import { FiChevronDown, FiChevronRight, FiFilter, FiStar } from 'react-icons/fi';
import { cryptoPricesContent, toolbarFilters } from '../../data/exploreCryptoData';
import Sparkline from './Sparkline';
import TokenBadge from './TokenBadge';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const changeClasses = {
  negative: { chart: '#E55361', text: 'text-[#CF2030]' },
  neutral:  { chart: '#2D7FF9', text: 'text-[#0A0B0D]' },
  positive: { chart: '#7C3AED', text: 'text-[#098551]' },
};

const ToolbarButton = ({ children, icon, trailingIcon = true }) => (
  <button
    className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[#E6E8EC] bg-[#F1F3F5] px-3 text-[11px] font-medium text-[#0A0B0D]"
    type="button"
  >
    {icon}
    <span>{children}</span>
    {trailingIcon ? <FiChevronDown size={12} /> : null}
  </button>
);

const MarketToolbar = () => (
  <div className="mt-4 flex flex-wrap items-center gap-2">
    <ToolbarButton icon={<FiStar size={11} />}>{toolbarFilters[0].label}</ToolbarButton>
    <ToolbarButton icon={<FiFilter size={11} />} trailingIcon={false}>
      Filter
    </ToolbarButton>
    {toolbarFilters.slice(1).map((filter) => (
      <ToolbarButton key={filter.label}>{filter.label}</ToolbarButton>
    ))}
  </div>
);

const MarketRow = ({ asset }) => {
  const change = asset.change24h ?? 0;
  const tone = change > 0 ? changeClasses.positive : change < 0 ? changeClasses.negative : changeClasses.neutral;
  const changeLabel = `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`;
  const priceLabel = `GHS ${Number(asset.price).toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <tr className="border-b border-[#EEF1F4] last:border-b-0">
      <td className="w-8 py-3 pr-2 text-center text-[#7E8492]">
        <FiStar size={12} />
      </td>
      <td className="min-w-[190px] py-3 pr-3">
        <div className="flex items-center gap-3">
          {asset.image ? (
            <img src={asset.image} alt={asset.name} className="h-6 w-6 rounded-full" />
          ) : (
            <TokenBadge size={22} token={asset.symbol} />
          )}
          <div>
            <div className="text-[12px] font-medium text-[#0A0B0D]">{asset.name}</div>
            <div className="mt-0.5 text-[10px] uppercase text-[#7E8492]">{asset.symbol}</div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap py-3 pr-3 text-[11px] text-[#0A0B0D]">{priceLabel}</td>
      <td className="py-3 pr-3">
        <Sparkline color={tone.chart} height={24} points={[]} strokeWidth={1.6} width={64} />
      </td>
      <td className={`whitespace-nowrap py-3 pr-3 text-[11px] font-medium ${tone.text}`}>
        {changeLabel}
      </td>
      <td className="whitespace-nowrap py-3 pr-3 text-[11px] text-[#0A0B0D]">—</td>
      <td className="whitespace-nowrap py-3 pr-3 text-[11px] text-[#0A0B0D]">—</td>
      <td className="py-3 text-right">
        <button
          className="inline-flex h-7 items-center rounded-full bg-[#1652F0] px-3 text-[10px] font-medium text-white"
          type="button"
        >
          Trade
        </button>
      </td>
    </tr>
  );
};

const MarketTable = ({ assets, loading }) => (
  <div className="mt-4 overflow-x-auto">
    <table className="w-full min-w-[860px] border-collapse">
      <thead>
        <tr className="border-b border-[#E6E8EC] text-left text-[10px] font-medium text-[#7E8492]">
          <th className="w-8 py-2.5 pr-2" />
          <th className="py-2.5 pr-3">Asset</th>
          <th className="py-2.5 pr-3">Market price</th>
          <th className="py-2.5 pr-3">Chart</th>
          <th className="py-2.5 pr-3">Change</th>
          <th className="py-2.5 pr-3 text-[#1652F0]">Mkt cap</th>
          <th className="py-2.5 pr-3">Volume</th>
          <th className="py-2.5 text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td colSpan={8} className="py-8 text-center text-[12px] text-[#7E8492]">
              Loading...
            </td>
          </tr>
        ) : assets.length === 0 ? (
          <tr>
            <td colSpan={8} className="py-8 text-center text-[12px] text-[#7E8492]">
              No cryptocurrencies found.
            </td>
          </tr>
        ) : (
          assets.map((asset) => (
            <MarketRow asset={asset} key={asset._id} />
          ))
        )}
      </tbody>
    </table>
  </div>
);

const CryptoPricesSection = () => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/crypto`)
      .then((res) => res.json())
      .then((data) => setAssets(data))
      .catch(() => setAssets([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-[#0A0B0D]">
          {cryptoPricesContent.title}
        </h2>
        <span className="text-[10px] text-[#7E8492]">{cryptoPricesContent.assetCount}</span>
      </div>
      <p className="mt-3 max-w-[680px] text-[11px] leading-[1.5] text-[#7E8492]">
        {cryptoPricesContent.description}
      </p>
      <button className="mt-2 text-[11px] font-medium text-[#0052FF]">
        {cryptoPricesContent.linkLabel}
      </button>

      <MarketToolbar />
      <MarketTable assets={assets} loading={loading} />
    </section>
  );
};

export default CryptoPricesSection;
