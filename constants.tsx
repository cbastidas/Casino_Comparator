import React from 'react';
import { Brand } from './types';

import bets10Logo from './assets/logos/b10.png';
import discountCasinoLogo from './assets/logos/dc.png';
import jetbahisLogo from './assets/logos/jb.png';

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
    logo: <img src={jetbahisLogo} alt="Jetbahis Logo" className="h-20 w-20" />,
    welcomeOffer: {
      title: '300% Deposit Bonus on Your First Deposit',
      details: 'Upto 1000 TL',
    },
    rating: 4.9,
    features: ['Exclusive VIP Program', 'Instant Withdrawals', 'Daily Promotions', '24/7 Live Support'],
    ctaLink: 'https://jetbahis776.com/tr/kampanyalar/cifte-bonus-ve-yuzde-500-jet-kupon',
    isOwnBrand: true,
    highlightColor: 'cyan',
  },
  {
    id: 4,
    name: 'Discount Casino',
    logo: <img src={discountCasinoLogo} alt="Discount Casino Logo" className="h-20 w-20" />,
    welcomeOffer: {
      title: '100% cashback upon first Deposit',
      details: 'Upto 5000 TL',
    },
    rating: 4.8,
    features: ['No Wagering Requirements', 'Fast Payouts', 'Something Random', '24/7 Live Support'],
    ctaLink: 'https://discountcasino723.com/tr/kampanyalar/yeni-uyelere-ozel-nakit-odemeler',
    isOwnBrand: true,
    highlightColor: 'amber',
  },
  {
    id: 5,
    name: 'Bets10',
    logo: <img src={bets10Logo} alt="Bets10 Logo" className="h-20 w-20" />,
    welcomeOffer: {
      title: '%200 Bonus + 50 Free Spins',
      details: 'Up to 1000 TL. If you deposit 1000 TL or more, 50 Free Spins Extra',
    },
    rating: 4.7,
    features: ['Huge Game Library', 'Crypto Accepted', 'Loyalty Rewards', '24/7 Live Support'],
    ctaLink: 'https://bonus.1385bets10.com/tr/ilk-para-yatirma-bonusu/',
    isOwnBrand: true,
    highlightColor: 'emerald',
  },
];