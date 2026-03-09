import React from 'react';

function formatPrice(price) {
  if (price == null) return '—';
  return `GHS ${price.toLocaleString('en-GH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function formatChange(pct) {
  if (pct == null) return { text: '—', color: 'text-[#8A8F98]' };
  const sign = pct >= 0 ? '+' : '';
  const color = pct >= 0 ? 'text-[#16C784]' : 'text-[#EA3943]';
  const arrow = pct < 0 ? '▼ ' : pct > 0 ? '▲ ' : '';
  return {
    text: `${arrow}${sign}${pct.toFixed(2)}%`,
    color,
  };
}

const MarketRow = ({ coin }) => {
  const change = formatChange(coin.price_change_percentage_24h);

  return (
    <div className="flex items-center justify-between py-3.5 group">
      {/* Left — icon + name */}
      <div className="flex items-center gap-3 min-w-0">
        <img
          src={coin.image}
          alt={coin.name}
          width={36}
          height={36}
          className="rounded-full shrink-0"
          loading="lazy"
        />
        <div className="min-w-0">
          <div className="text-white font-semibold text-[15px] truncate">
            {coin.name}
          </div>
          <div className="text-[#8A8F98] text-xs uppercase mt-0.5">
            {coin.symbol}
          </div>
        </div>
      </div>

      {/* Right — price + change */}
      <div className="text-right shrink-0 ml-4">
        <div className="text-white font-semibold text-[15px]">
          {formatPrice(coin.current_price)}
        </div>
        <div className={`text-xs mt-0.5 font-medium ${change.color}`}>
          {change.text}
        </div>
      </div>
    </div>
  );
};

export default MarketRow;
