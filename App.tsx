
import React from 'react';
import { BrandCard } from './components/BrandCard';
import { Header } from './components/Header';
import { BRANDS } from './constants';
import { Brand } from './types';

const App: React.FC = () => {
  const competitorBrands = BRANDS.filter(brand => !brand.isOwnBrand);
  const ownBrands = BRANDS.filter(brand => brand.isOwnBrand);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <section id="competitors" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-300">Compare Top Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {competitorBrands.map((brand: Brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </section>

        <section id="our-brands">
           <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-500">Our Exclusive Picks</h2>
                <p className="mt-2 text-lg text-slate-400">Specially selected for the ultimate gaming experience.</p>
           </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ownBrands.map((brand: Brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </section>
      </main>
      <footer className="text-center py-8 text-slate-500">
        <p>&copy; 2024 Casino Comparator. All rights reserved. Please gamble responsibly.</p>
      </footer>
    </div>
  );
};

export default App;
