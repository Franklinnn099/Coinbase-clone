import React from 'react';
import { 
  FiSearch, FiTrendingUp, FiStar, FiGrid,
  FiBriefcase, FiCreditCard, FiSmartphone, FiShield,
  FiBookOpen, FiCode, FiLayers, FiDollarSign,
  FiUsers, FiHeart, FiHelpCircle, FiCoffee,
  FiLock, FiActivity, FiCpu, FiTrendingDown, FiPieChart, FiGlobe, FiDatabase
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
  search: <FiSearch size={18} />,
  trendingUp: <FiTrendingUp size={18} />,
  star: <FiStar size={18} />,
  grid: <FiGrid size={18} />,
  briefcase: <FiBriefcase size={18} />,
  creditCard: <FiCreditCard size={18} />,
  smartphone: <FiSmartphone size={18} />,
  shield: <FiShield size={18} />,
  book: <FiBookOpen size={18} />,
  code: <FiCode size={18} />,
  layers: <FiLayers size={18} />,
  dollar: <FiDollarSign size={18} />,
  users: <FiUsers size={18} />,
  heart: <FiHeart size={18} />,
  help: <FiHelpCircle size={18} />,
  coffee: <FiCoffee size={18} />,
  lock: <FiLock size={18} />,
  activity: <FiActivity size={18} />,
  cpu: <FiCpu size={18} />,
  pie: <FiPieChart size={18} />,
  globe: <FiGlobe size={18} />,
  database: <FiDatabase size={18} />,
  bitcoin: <FaBitcoin size={18} />,
  ethereum: <FaEthereum size={18} />,
  solana: <SiSolana size={18} />,
  usdc: <FiDollarSign size={18} />,
};

export const navData = [
  {
    label: "Explore", // Or Cryptocurrencies, using Explore to map to the project's state
    href: "/explore",
    dropdown: {
      columns: [
        [
          { title: "Explore", description: "Browse crypto prices and market trends", href: "/explore", icon: ICONS.search },
          { title: "Trending", description: "See top movers and trending assets", href: "/explore", icon: ICONS.trendingUp },
          { title: "New assets", description: "Discover recently listed assets", href: "/explore", icon: ICONS.star },
          { title: "Categories", description: "Explore crypto by category", href: "/explore", icon: ICONS.grid }
        ],
        [
          { title: "Bitcoin", description: "View Bitcoin price and details", href: "/asset/btc", icon: ICONS.bitcoin },
          { title: "Ethereum", description: "View Ethereum price and details", href: "/asset/eth", icon: ICONS.ethereum },
          { title: "Solana", description: "View Solana price and details", href: "/asset/sol", icon: ICONS.solana },
          { title: "USDC", description: "View USDC price and details", href: "/asset/usdc", icon: ICONS.usdc }
        ]
      ],
      promo: {
        headline: "Explore the crypto market",
        cta: "Explore now",
        href: "/explore",
        bgColor: "bg-[#0A0B0D]",
        textColor: "text-white",
        image: navExploreImg
      }
    }
  },
  {
    label: "Individuals",
    href: "/individuals",
    dropdown: {
      columns: [
        [
          { title: "Buy & sell", description: "Manage personal crypto activity", href: "/individuals", icon: ICONS.activity },
          { title: "Earn free crypto", description: "Educational rewards / earn", href: "/learn", icon: ICONS.star },
          { title: "Coinbase One", description: "Membership benefits", href: "/individuals", icon: ICONS.shield },
          { title: "Wallet", description: "Self-custody wallet experience", href: "/individuals", icon: ICONS.smartphone }
        ],
        [
          { title: "Advanced Trade", description: "More powerful trading interface", href: "/individuals", icon: ICONS.trendingUp },
          { title: "Debit Card", description: "Spend and earn with crypto-linked card", href: "/individuals", icon: ICONS.creditCard },
          { title: "Base App", description: "Publish, earn, trade, discover apps", href: "/individuals", icon: ICONS.layers }
        ]
      ],
      promo: {
        headline: "Get started with crypto",
        cta: "Create account",
        href: "/signup",
        bgColor: "bg-[#0052FF]",
        textColor: "text-white",
        image: navIndividualsImg
      }
    }
  },
  {
    label: "Businesses",
    href: "/businesses",
    dropdown: {
      columns: [
        [
          { title: "Coinbase Business", description: "Crypto operating account for modern companies", href: "/businesses", icon: ICONS.briefcase },
          { title: "Payments", description: "Stablecoin payments stack for commerce platforms", href: "/businesses", icon: ICONS.dollar },
          { title: "Asset Listings", description: "List your asset on Coinbase", href: "/businesses", icon: ICONS.pie }
        ],
        [
          { title: "Token Manager", description: "Token distributions, vesting, and lockups", href: "/businesses", icon: ICONS.lock },
          { title: "Commerce Payments Protocol", description: "Onchain payments standard", href: "/businesses", icon: ICONS.globe },
          { title: "Prime", description: "Business trading and custody entry point", href: "/institutions", icon: ICONS.shield }
        ]
      ],
      promo: {
        headline: "Move money globally",
        cta: "Learn more",
        href: "/businesses",
        bgColor: "bg-[#0A0B0D]",
        textColor: "text-white",
        image: navBusinessesImg
      }
    }
  },
  {
    label: "Institutions",
    href: "/institutions",
    dropdown: {
      columns: [
        [
          { title: "Prime", description: "Institutional trading platform", href: "/institutions", icon: ICONS.shield },
          { title: "Custody", description: "Secure digital asset storage", href: "/institutions", icon: ICONS.lock }
        ],
        [
          { title: "Execution", description: "Trading execution infrastructure", href: "/institutions", icon: ICONS.activity },
          { title: "Liquidity", description: "Deep pools of market access", href: "/institutions", icon: ICONS.database },
          { title: "Exchange", description: "Direct access to Coinbase Exchange", href: "/institutions", icon: ICONS.trendingUp }
        ]
      ],
      promo: {
        headline: "Institutional-grade crypto infrastructure",
        cta: "Become a client",
        href: "/institutions",
        bgColor: "bg-[#1A1B1F]",
        textColor: "text-white",
        image: navInstitutionsImg
      }
    }
  },
  {
    label: "Developers",
    href: "/developers",
    dropdown: {
      columns: [
        [
          { title: "Developer Platform", description: "CDP overview", href: "/developers", icon: ICONS.code },
          { title: "Onramp", description: "Fiat-to-crypto onboarding", href: "/developers", icon: ICONS.dollar },
          { title: "Wallet SDK", description: "Wallet tooling", href: "/developers", icon: ICONS.smartphone },
          { title: "Base", description: "Build on Base", href: "/developers", icon: ICONS.layers }
        ],
        [
          { title: "Commerce API", description: "Payments tooling", href: "/developers", icon: ICONS.cpu },
          { title: "Docs", description: "Documentation hub", href: "/developers", icon: ICONS.book },
          { title: "Demo apps", description: "CDS Web Example Application", href: "/cds-demo", icon: ICONS.grid }
        ]
      ],
      promo: {
        headline: "Build the future of onchain apps and payments",
        cta: "Start building",
        href: "/developers",
        bgColor: "bg-[#0052FF]",
        textColor: "text-white",
        image: navDevelopersImg
      }
    }
  },
  {
    label: "Company",
    href: "/company",
    dropdown: {
      columns: [
        [
          { title: "About", description: "Powering the crypto economy", href: "/company", icon: ICONS.users },
          { title: "Careers", description: "Work with us", href: "/company", icon: ICONS.briefcase },
          { title: "Affiliates", description: "Help introduce the world to crypto", href: "/company", icon: ICONS.heart }
        ],
        [
          { title: "Support", description: "Find answers to your questions", href: "/company", icon: ICONS.help },
          { title: "Blog", description: "Read the latest from Coinbase", href: "/company", icon: ICONS.coffee },
          { title: "Security", description: "The most trusted & secure", href: "/company", icon: ICONS.lock }
        ]
      ],
      promo: {
        headline: "Learn all about Coinbase:\nWe're building the open financial system.",
        cta: "Create your account",
        href: "/signup",
        bgColor: "bg-[#0052FF]",
        textColor: "text-white",
        image: navCompanyImg
      }
    }
  }
];
