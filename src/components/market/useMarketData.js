import { useState, useEffect, useCallback, useRef } from 'react';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const POLL_INTERVAL = 60_000;

export default function useMarketData(activeTab) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const timerRef = useRef(null);

  const load = useCallback(async () => {
    try {
      setError(null);

      let endpoint;
      if (activeTab === 'gainers') {
        endpoint = `${API}/crypto/gainers`;
      } else if (activeTab === 'new') {
        endpoint = `${API}/crypto/new`;
      } else {
        endpoint = `${API}/crypto`;
      }

      const res = await fetch(endpoint);
      if (!res.ok) throw new Error(`Server error ${res.status}`);
      const json = await res.json();

      const mapped = json.map((coin) => ({
        id: coin._id,
        name: coin.name,
        symbol: coin.symbol.toLowerCase(),
        current_price: coin.price,
        price_change_percentage_24h: coin.change24h,
        image: coin.image,
      }));

      setData(mapped);
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
