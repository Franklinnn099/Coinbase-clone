// Curated coin lists for each tab
export const TRADABLE_IDS = [
  'bitcoin',
  'ethereum',
  'tether',
  'binancecoin',
  'ripple',
  'usd-coin',
];

// "New on Coinbase" — curated fallback list (CoinGecko can't provide Coinbase-specific listing dates)
// Using well-known CoinGecko IDs for newer/trending coins
export const NEW_ON_COINBASE_IDS = [
  'pepe',
  'floki',
  'bonk',
  'render-token',
  'sei-network',
  'celestia',
];

// Fallback: if some IDs above fail, the hook's sortByIds silently skips missing entries

export const TABS = [
  { key: 'tradable', label: 'Tradable' },
  { key: 'gainers', label: 'Top gainers' },
  { key: 'new', label: 'New on Coinbase' },
];
