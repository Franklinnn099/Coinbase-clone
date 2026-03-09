import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import {
  SiBinance,
  SiCardano,
  SiDogecoin,
  SiSolana,
  SiTether,
} from 'react-icons/si';

const tokenConfig = {
  bitcoin: { bg: '#F7931A', icon: FaBitcoin, fg: '#FFFFFF' },
  ethereum: { bg: '#627EEA', icon: FaEthereum, fg: '#FFFFFF' },
  tether: { bg: '#26A17B', icon: SiTether, fg: '#FFFFFF' },
  bnb: { bg: '#F3BA2F', icon: SiBinance, fg: '#FFFFFF' },
  xrp: { bg: '#23292F', label: 'X', fg: '#FFFFFF' },
  usdc: { bg: '#2775CA', label: '$', fg: '#FFFFFF' },
  solana: { bg: '#111827', icon: SiSolana, fg: '#7C3AED' },
  tron: { bg: '#EC1C24', label: 'T', fg: '#FFFFFF' },
  dogecoin: { bg: '#C2A633', icon: SiDogecoin, fg: '#FFFFFF' },
  cardano: { bg: '#1E40AF', icon: SiCardano, fg: '#FFFFFF' },
  fai: { bg: '#16A34A', label: 'F', fg: '#FFFFFF' },
  flow: { bg: '#1DD79B', label: 'f', fg: '#0A0B0D' },
  hyperliquid: { bg: '#111827', label: 'H', fg: '#7EF5D4' },
  jupiter: { bg: '#0F172A', label: 'J', fg: '#7CFFB2' },
};

const TokenBadge = ({ size = 28, token }) => {
  const config = tokenConfig[token] ?? { bg: '#CBD5E1', label: '?', fg: '#0A0B0D' };
  const Icon = config.icon;

  return (
    <span
      aria-hidden="true"
      className="inline-flex shrink-0 items-center justify-center rounded-full"
      style={{ backgroundColor: config.bg, color: config.fg, height: size, width: size }}
    >
      {Icon ? (
        <Icon size={size * 0.54} />
      ) : (
        <span className="text-[11px] font-semibold uppercase">{config.label}</span>
      )}
    </span>
  );
};

export default TokenBadge;
