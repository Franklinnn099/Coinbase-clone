import {
  FiActivity,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiCompass,
  FiCreditCard,
  FiDollarSign,
  FiGlobe,
  FiGrid,
  FiLayers,
  FiLifeBuoy,
  FiLock,
  FiPieChart,
  FiShield,
  FiStar,
  FiTrendingUp,
  FiUsers,
} from 'react-icons/fi';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';

import navExploreImg from '../images/nav_explore.png';
import navIndividualsImg from '../images/nav_individuals.png';
import navBusinessesImg from '../images/nav_businesses.png';
import navInstitutionsImg from '../images/nav_institutions.png';
import navDevelopersImg from '../images/nav_developers.png';
import navCompanyImg from '../images/nav_company.png';

const ICONS = {
  explore: FiCompass,
  trending: FiTrendingUp,
  assets: FiPieChart,
  recent: FiStar,
  buySell: FiActivity,
  wallet: FiGrid,
  trade: FiTrendingUp,
  one: FiShield,
  card: FiCreditCard,
  earn: FiDollarSign,
  learn: FiBookOpen,
  business: FiBriefcase,
  payments: FiDollarSign,
  listings: FiPieChart,
  token: FiLayers,
  protocol: FiGlobe,
  prime: FiShield,
  custody: FiLock,
  execution: FiActivity,
  liquidity: FiLayers,
  exchange: FiTrendingUp,
  platform: FiCode,
  base: FiLayers,
  sdk: FiGrid,
  onramp: FiDollarSign,
  api: FiCode,
  docs: FiBookOpen,
  demos: FiCompass,
  about: FiUsers,
  careers: FiBriefcase,
  affiliates: FiStar,
  support: FiLifeBuoy,
  blog: FiBookOpen,
  security: FiLock,
  bitcoin: FaBitcoin,
  ethereum: FaEthereum,
  solana: SiSolana,
  usdc: FiDollarSign,
};

export const DEFAULT_ACTIVE_NAV = 'Businesses';

export const navData = [
  {
    label: 'Cryptocurrencies',
    href: '/explore',
    dropdown: {
      promo: {
        eyebrow: 'Markets',
        headline: 'Explore crypto markets',
        cta: 'Browse assets',
        href: '/explore',
        image: navExploreImg,
        imageAlt: 'Cryptocurrency market visuals',
      },
      sections: [
        {
          title: 'Discover',
          items: [
            {
              title: 'Explore',
              description: 'Browse prices, charts, and market activity.',
              href: '/explore',
              icon: ICONS.explore,
            },
            {
              title: 'Top movers',
              description: 'Track the strongest gainers across the market.',
              href: '/explore',
              icon: ICONS.trending,
            },
            {
              title: 'Tradable assets',
              description: 'See the cryptocurrencies available on Coinbase.',
              href: '/explore',
              icon: ICONS.assets,
            },
            {
              title: 'New on Coinbase',
              description: 'Follow the latest assets added to the platform.',
              href: '/explore',
              icon: ICONS.recent,
            },
          ],
        },
        {
          title: 'Popular assets',
          items: [
            {
              title: 'Bitcoin',
              description: 'View Bitcoin price, history, and market data.',
              href: '/asset/btc',
              icon: ICONS.bitcoin,
            },
            {
              title: 'Ethereum',
              description: 'View Ethereum price, history, and market data.',
              href: '/asset/eth',
              icon: ICONS.ethereum,
            },
            {
              title: 'Solana',
              description: 'View Solana price, history, and market data.',
              href: '/asset/sol',
              icon: ICONS.solana,
            },
            {
              title: 'USDC',
              description: 'View USDC price, supply, and market details.',
              href: '/asset/usdc',
              icon: ICONS.usdc,
            },
          ],
        },
      ],
    },
  },
  {
    label: 'Individuals',
    href: '/individuals',
    dropdown: {
      promo: {
        eyebrow: 'Personal',
        headline: 'Get started with crypto',
        cta: 'Create account',
        href: '/signup',
        image: navIndividualsImg,
        imageAlt: 'Coinbase consumer products preview',
      },
      sections: [
        {
          title: 'Products',
          items: [
            {
              title: 'Buy and sell',
              description: 'Trade crypto simply with an easy-to-use app.',
              href: '/individuals',
              icon: ICONS.buySell,
            },
            {
              title: 'Wallet',
              description: 'Access a self-custody wallet for Web3 apps.',
              href: '/individuals/wallet',
              icon: ICONS.wallet,
            },
            {
              title: 'Advanced Trade',
              description: 'Use more advanced trading tools and analytics.',
              href: '/individuals',
              icon: ICONS.trade,
            },
            {
              title: 'Coinbase One',
              description: 'Get premium benefits and member-only features.',
              href: '/individuals',
              icon: ICONS.one,
            },
          ],
        },
        {
          title: 'More ways to start',
          items: [
            {
              title: 'Card',
              description: 'Spend with crypto and earn rewards back.',
              href: '/individuals',
              icon: ICONS.card,
            },
            {
              title: 'Earn',
              description: 'Learn about crypto and earn while you explore.',
              href: '/learn',
              icon: ICONS.earn,
            },
            {
              title: 'Learn crypto basics',
              description: 'Read beginner guides and market explainers.',
              href: '/learn',
              icon: ICONS.learn,
            },
          ],
        },
      ],
    },
  },
  {
    label: 'Businesses',
    href: '/businesses',
    dropdown: {
      promo: {
        eyebrow: 'Business',
        headline: 'Crypto tools for modern companies',
        cta: 'Learn more',
        href: '/businesses',
        image: navBusinessesImg,
        imageAlt: 'Coinbase business products preview',
      },
      sections: [
        {
          title: 'Business solutions',
          items: [
            {
              title: 'Coinbase Business',
              description: 'Operate with a crypto account built for companies.',
              href: '/businesses',
              icon: ICONS.business,
            },
            {
              title: 'Payments',
              description: 'Accept fast, global stablecoin payments online.',
              href: '/businesses',
              icon: ICONS.payments,
            },
            {
              title: 'Asset Listings',
              description: 'List eligible digital assets on Coinbase markets.',
              href: '/businesses',
              icon: ICONS.listings,
            },
          ],
        },
        {
          title: 'Infrastructure',
          items: [
            {
              title: 'Token Manager',
              description: 'Manage token operations, grants, and unlocks.',
              href: '/businesses',
              icon: ICONS.token,
            },
            {
              title: 'Commerce Payments Protocol',
              description: 'Use an open onchain standard for digital payments.',
              href: '/businesses',
              icon: ICONS.protocol,
            },
            {
              title: 'Prime',
              description: 'Access institutional trading and custody services.',
              href: '/institutions',
              icon: ICONS.prime,
            },
          ],
        },
      ],
    },
  },
  {
    label: 'Institutions',
    href: '/institutions',
    dropdown: {
      promo: {
        eyebrow: 'Institutional',
        headline: 'Institutional-grade crypto infrastructure',
        cta: 'Learn more',
        href: '/institutions',
        image: navInstitutionsImg,
        imageAlt: 'Coinbase institutional products preview',
      },
      sections: [
        {
          title: 'Trading and custody',
          items: [
            {
              title: 'Prime',
              description: 'Trade, finance, and custody assets from one suite.',
              href: '/institutions',
              icon: ICONS.prime,
            },
            {
              title: 'Custody',
              description: 'Store digital assets with offline institutional security.',
              href: '/institutions',
              icon: ICONS.custody,
            },
            {
              title: 'Execution',
              description: 'Access smart order routing and execution tools.',
              href: '/institutions',
              icon: ICONS.execution,
            },
          ],
        },
        {
          title: 'Market access',
          items: [
            {
              title: 'Liquidity',
              description: 'Connect to deep pools of crypto market liquidity.',
              href: '/institutions',
              icon: ICONS.liquidity,
            },
            {
              title: 'Exchange',
              description: 'Use Coinbase Exchange for professional market access.',
              href: '/institutions',
              icon: ICONS.exchange,
            },
          ],
        },
      ],
    },
  },
  {
    label: 'Developers',
    href: '/developers',
    dropdown: {
      promo: {
        eyebrow: 'Developer',
        headline: 'Build onchain products',
        cta: 'Start building',
        href: '/developers',
        image: navDevelopersImg,
        imageAlt: 'Coinbase developer products preview',
      },
      sections: [
        {
          title: 'Platform',
          items: [
            {
              title: 'Developer Platform',
              description: 'Access APIs, wallets, nodes, and onchain tooling.',
              href: '/developers',
              icon: ICONS.platform,
            },
            {
              title: 'Base',
              description: "Build and scale apps on Coinbase's Ethereum L2.",
              href: '/developers/base',
              icon: ICONS.base,
            },
            {
              title: 'Wallet SDK',
              description: 'Integrate embedded and app-connected wallet flows.',
              href: '/developers',
              icon: ICONS.sdk,
            },
            {
              title: 'Onramp',
              description: 'Bring users onchain with fiat-to-crypto checkout.',
              href: '/developers',
              icon: ICONS.onramp,
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              title: 'Commerce API',
              description: 'Accept crypto payments in apps and online stores.',
              href: '/developers',
              icon: ICONS.api,
            },
            {
              title: 'Docs',
              description: 'Read technical documentation and implementation guides.',
              href: '/developers',
              icon: ICONS.docs,
            },
            {
              title: 'Demo apps',
              description: 'Explore working examples built with Coinbase tools.',
              href: '/cds-demo',
              icon: ICONS.demos,
            },
          ],
        },
      ],
    },
  },
  {
    label: 'Company',
    href: '/company',
    dropdown: {
      promo: {
        eyebrow: 'Company',
        headline: 'Learn all about Coinbase',
        cta: 'Create account',
        href: '/signup',
        image: navCompanyImg,
        imageAlt: 'Coinbase company preview',
      },
      sections: [
        {
          title: 'About Coinbase',
          items: [
            {
              title: 'About',
              description: 'Learn about our mission and company story.',
              href: '/company/about',
              icon: ICONS.about,
            },
            {
              title: 'Careers',
              description: 'Explore opportunities to build the cryptoeconomy.',
              href: '/company/careers',
              icon: ICONS.careers,
            },
            {
              title: 'Affiliates',
              description: 'Partner with Coinbase and grow your audience.',
              href: '/company',
              icon: ICONS.affiliates,
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              title: 'Support',
              description: 'Get product help, guides, and account assistance.',
              href: '/support',
              icon: ICONS.support,
            },
            {
              title: 'Blog',
              description: 'Read the latest product, policy, and market updates.',
              href: '/company',
              icon: ICONS.blog,
            },
            {
              title: 'Security',
              description: 'Learn how Coinbase protects people and assets.',
              href: '/legal',
              icon: ICONS.security,
            },
          ],
        },
      ],
    },
  },
];
