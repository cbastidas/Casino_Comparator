
import React from 'react';

const DiamondIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 8.5V15.5L12 22L22 15.5V8.5L12 2ZM19.58 9.25L12 13.84L4.42 9.25L12 4.66L19.58 9.25Z" />
    </svg>
);


export const Header: React.FC = () => {
  return (
    <header className="bg-slate-900/70 backdrop-blur-lg border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center space-x-3">
            <DiamondIcon />
            <h1 className="text-2xl md:text-3xl font-bold text-slate-100 tracking-tight">
            Welcome Offers Comparator
            </h1>
        </div>
      </div>
    </header>
  );
};
