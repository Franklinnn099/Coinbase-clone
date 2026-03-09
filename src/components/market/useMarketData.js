import { useState, useEffect, useCallback, useRef } from 'react';
import { TRADABLE_IDS, NEW_ON_COINBASE_IDS } from './curatedCoinConfig';

const BASE = 'https://api.coingecko.com/api/v3';
const POLL_INTERVAL = 60_000; // 60 seconds

// GHS is not a CoinGecko-supported vs_currency, so we fetch in USD
// and convert client-side using a live exchange rate.
const FALLBACK_USD_TO_GHS = 14.5; // reasonable fallback if rate fetch fails

async function fetchUsdToGhs() {
  try {
    const res = await fetch(
      'https://api.exchangerate-api.com/v4/latest/USD'
    );
    if (!res.ok) return FALLBACK_USD_TO_GHS;
    const json = await res.json();
    return json.rates?.GHS ?? FALLBACK_USD_TO_GHS;
  } catch {
    return FALLBACK_USD_TO_GHS;
  }
}

function convertToGhs(coins, rate) {
  return coins.map((c) => ({
    ...c,
    current_price: c.current_price != null ? c.current_price * rate : null,
    // percentage change stays the same — it's currency-agnostic
  }));
}

async function fetchCoins(ids) {
  const params = new URLSearchParams({
    vs_currency: 'usd',
    ids: ids.join(','),
    order: 'market_cap_desc',
    price_change_percentage: '24h',
    sparkline: 'false',
    per_page: String(ids.length),
    page: '1',
  });
  const res = await fetch(`${BASE}/coins/markets?${params}`);
  if (!res.ok) throw new Error(`CoinGecko ${res.status}`);
  const json = await res.json();
  if (!Array.isArray(json)) throw new Error('Unexpected API response');
  return json;
}

async function fetchTopGainers() {
  const params = new URLSearchParams({
    vs_currency: 'usd',
    order: 'market_cap_desc',
    per_page: '50',
    page: '1',
    price_change_percentage: '24h',
    sparkline: 'false',
  });
  const res = await fetch(`${BASE}/coins/markets?${params}`);
  if (!res.ok) throw new Error(`CoinGecko ${res.status}`);
  const json = await res.json();
  if (!Array.isArray(json)) throw new Error('Unexpected API response');
  return json
    .filter((c) => c.price_change_percentage_24h != null && c.price_change_percentage_24h > 0)
    .sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
    .slice(0, 6);
}

// Preserve curated order
function sortByIds(data, ids) {
  const map = new Map(data.map((c) => [c.id, c]));
  return ids.map((id) => map.get(id)).filter(Boolean);
}

export default function useMarketData(activeTab) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const timerRef = useRef(null);
  const rateRef = useRef(FALLBACK_USD_TO_GHS);

  const load = useCallback(async () => {
    try {
      setError(null);

      // Fetch exchange rate (cached in ref to avoid re-fetching every poll)
      if (rateRef.current === FALLBACK_USD_TO_GHS) {
        rateRef.current = await fetchUsdToGhs();
      }

      let result;
      if (activeTab === 'tradable') {
        result = sortByIds(await fetchCoins(TRADABLE_IDS), TRADABLE_IDS);
      } else if (activeTab === 'gainers') {
        result = await fetchTopGainers();
      } else {
        result = sortByIds(await fetchCoins(NEW_ON_COINBASE_IDS), NEW_ON_COINBASE_IDS);
      }

      setData(convertToGhs(result, rateRef.current));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [activeTab]);

  useEffect(() => {
    setLoading(true);
    load();

    timerRef.current = setInterval(load, POLL_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [load]);

  return { data, loading, error };
}
