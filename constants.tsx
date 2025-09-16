import React from 'react';
import { Brand } from './types';

const CompetitorLogo1 = () => (
  <svg viewBox="0 0 100 100" className="h-16 w-16 text-red-500">
    <path fill="currentColor" d="M50 0L61.8 38.2H100L69.1 61.8L80.9 100L50 76.4L19.1 100L30.9 61.8L0 38.2H38.2L50 0Z" />
    <text x="50" y="60" textAnchor="middle" fontSize="30" fill="white" fontWeight="bold">VS</text>
  </svg>
);

const CompetitorLogo2 = () => (
    <svg viewBox="0 0 100 100" className="h-16 w-16 text-blue-500">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="5" fill="none" />
        <path fill="currentColor" d="M50 25L25 50L50 75L75 50Z" />
        <text x="50" y="58" textAnchor="middle" fontSize="30" fill="white" fontWeight="bold">JC</text>
    </svg>
);

const JetbahisLogo = () => (
    <svg viewBox="0 0 100 100" className="h-16 w-16 text-cyan-400">
        <circle cx="50" cy="50" r="45" fill="currentColor" />
        <text x="50" y="65" textAnchor="middle" fontSize="45" fill="#083344" fontWeight="bold" fontFamily="sans-serif">JB</text>
    </svg>
);

const DiscountCasinoLogo = () => (
    <svg viewBox="0 0 100 100" className="h-16 w-16 text-amber-400">
        <path fill="currentColor" d="M10 10 H90 V50 L50 90 L10 50 Z" />
        <text x="50" y="48" textAnchor="middle" fontSize="35" fill="#422006" fontWeight="bold" fontFamily="sans-serif">DC</text>
    </svg>
);

const Bets10Logo = () => (
    <svg viewBox="0 0 100 100" className="h-16 w-16 text-emerald-400">
        <rect width="90" height="90" x="5" y="5" rx="15" fill="currentColor" />
        <text x="50" y="68" textAnchor="middle" fontSize="40" fill="#022c22" fontWeight="bold" fontFamily="sans-serif">B10</text>
    </svg>
);


export const BRANDS: Brand[] = [
  {
    id: 1,
    name: 'Vegas Spin',
    logo: <CompetitorLogo1 />,
    welcomeOffer: {
      title: '100% Match Bonus',
      details: 'Up to $200 + 50 Free Spins',
    },
    rating: 4.2,
    features: ['Classic Slots', 'Weekly Tournaments', 'Email Support'],
    ctaLink: '#',
    isOwnBrand: false,
    highlightColor: 'red',
  },
  {
    id: 2,
    name: 'Jackpot City',
    logo: <CompetitorLogo2 />,
    welcomeOffer: {
      title: '$1600 Deposit Bonus',
      details: 'On first four deposits',
    },
    rating: 4.5,
    features: ['Progressive Jackpots', 'Live Dealer Games', '24/7 Chat Support'],
    ctaLink: '#',
    isOwnBrand: false,
    highlightColor: 'blue',
  },
  {
    id: 3,
    name: 'Jetbahis',
    logo: <JetbahisLogo />,
    welcomeOffer: {
      title: '200% Welcome Package',
      details: 'Up to $500 + 100 Free Spins',
    },
    rating: 4.9,
    features: ['Exclusive VIP Program', 'Instant Withdrawals', 'Daily Promotions', '24/7 Live Support'],
    ctaLink: '#',
    isOwnBrand: true,
    highlightColor: 'cyan',
  },
  {
    id: 4,
    name: 'Discount Casino',
    logo: <DiscountCasinoLogo />,
    welcomeOffer: {
      title: '300 No-Wager Spins',
      details: 'On your first $50 deposit',
    },
    rating: 4.8,
    features: ['No Wagering Requirements', 'Fast Payouts', 'Mobile First Design', '24/7 Live Support'],
    ctaLink: '#',
    isOwnBrand: true,
    highlightColor: 'amber',
  },
  {
    id: 5,
    name: 'Bets10',
    logo: <Bets10Logo />,
    welcomeOffer: {
      title: '$1000 Bonus + 150 Spins',
      details: 'Spread across first 3 deposits',
    },
    rating: 4.7,
    features: ['Huge Game Library', 'Crypto Accepted', 'Loyalty Rewards', '24/7 Live Support'],
    ctaLink: '#',
    isOwnBrand: true,
    highlightColor: 'emerald',
  },
];