import React from 'react';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';

export const searchData = [
  {
    id: "btc-1",
    category: "CRYPTO",
    name: "Bitcoin",
    symbol: "BTC",
    icon: <FaBitcoin size={20} color="#F7931A" />,
    volume: "GHS 28.5B vol",
    marketCap: "GHS 1.3T mcap",
    price: "GHS 67,180.71",
    changePercent: -1.12
  },
  {
    id: "eth-1",
    category: "CRYPTO",
    name: "Ethereum",
    symbol: "ETH",
    icon: <FaEthereum size={20} color="#627EEA" />,
    volume: "GHS 12.2B vol",
    marketCap: "GHS 420.5B mcap",
    price: "GHS 3,450.20",
    changePercent: 2.34
  },
  {
    id: "sol-1",
    category: "CRYPTO",
    name: "Solana",
    symbol: "SOL",
    icon: <SiSolana size={20} color="#14F195" />,
    volume: "GHS 4.1B vol",
    marketCap: "GHS 64.2B mcap",
    price: "GHS 142.50",
    changePercent: 5.67
  },
  {
    id: "coin-1",
    category: "STOCKS",
    name: "Coinbase Global",
    symbol: "COIN",
    icon: "https://images.unsplash.com/photo-1621415286596-f3b1db4ddc16?auto=format&fit=crop&w=64&h=64&q=80",
    volume: "GHS 1.8B vol",
    marketCap: "GHS 52.4B mcap",
    price: "GHS 215.30",
    changePercent: -0.45
  },
  {
    id: "mstr-1",
    category: "STOCKS",
    name: "MicroStrategy",
    symbol: "MSTR",
    icon: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=64&h=64&q=80",
    volume: "GHS 2.1B vol",
    marketCap: "GHS 28.9B mcap",
    price: "GHS 1,420.00",
    changePercent: 8.21
  },
  {
    id: "pred-1",
    category: "PREDICTIONS",
    name: "BTC to hit 100k in 2026",
    symbol: "PREDICT",
    icon: "https://images.unsplash.com/photo-1633526543814-9710c77c6883?auto=format&fit=crop&w=64&h=64&q=80",
    volume: "GHS 12M pool",
    marketCap: "24k participants",
    price: "Yes 68%",
    changePercent: 1.5
  },
  {
    id: "pred-2",
    category: "PREDICTIONS",
    name: "ETH ETF Approved",
    symbol: "PREDICT",
    icon: "https://images.unsplash.com/photo-1622630998477-20b41cd0e0b3?auto=format&fit=crop&w=64&h=64&q=80",
    volume: "GHS 45M pool",
    marketCap: "80k participants",
    price: "Yes 92%",
    changePercent: -0.2
  },
  {
    id: "perp-1",
    category: "PERPETUALS",
    name: "BTC-USD-PERP",
    symbol: "PERP",
    icon: <FaBitcoin size={20} color="#F7931A" />,
    volume: "GHS 1.2B vol",
    marketCap: "Funding 0.01%",
    price: "GHS 67,200.50",
    changePercent: -1.15
  },
  {
    id: "fut-1",
    category: "FUTURES",
    name: "CME Bitcoin Futures",
    symbol: "BTC!",
    icon: <FaBitcoin size={20} color="#F7931A" />,
    volume: "GHS 5.5B vol",
    marketCap: "Open Int 14.2B",
    price: "GHS 68,100.00",
    changePercent: -0.98
  }
];

export const searchTabs = [
  "Top",
  "Crypto",
  "Stocks",
  "Predictions",
  "Perpetuals",
  "Futures"
];
