
import React from 'react';
import { Brand } from '../types';

interface BrandCardProps {
  brand: Brand;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
      ))}
      {halfStar && (
         <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"clipRule="evenodd" fillRule="evenodd" /><path d="M10 12.585V3.733L11.07 7.025a1 1 0 00.95.69h3.462l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292L10 15.415V12.585z" /></svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`empty-${i}`} className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
      ))}
      <span className="ml-2 text-sm font-medium text-slate-400">{rating.toFixed(1)} / 5.0</span>
    </div>
  );
};

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);


export const BrandCard: React.FC<BrandCardProps> = ({ brand }) => {
  const { name, logo, welcomeOffer, rating, features, ctaLink, isOwnBrand, highlightColor } = brand;

  const ownBrandClasses = isOwnBrand
    ? `ring-2 ring-${highlightColor}-500 shadow-lg shadow-${highlightColor}-500/20`
    : 'ring-1 ring-slate-700';

  const ctaColorClasses = {
      cyan: 'bg-cyan-500 hover:bg-cyan-400',
      amber: 'bg-amber-500 hover:bg-amber-400',
      emerald: 'bg-emerald-500 hover:bg-emerald-400',
      red: 'bg-red-600 hover:bg-red-500',
      blue: 'bg-blue-600 hover:bg-blue-500',
  };

  const ctaClass = ctaColorClasses[highlightColor as keyof typeof ctaColorClasses] || 'bg-slate-600 hover:bg-slate-500';

  return (
    <div className={`flex flex-col rounded-xl bg-slate-800/50 p-6 transition-all duration-300 hover:bg-slate-800/80 hover:-translate-y-1 ${ownBrandClasses}`}>
      
      {isOwnBrand && (
        <div className={`absolute -top-3 right-4 bg-${highlightColor}-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>
            Recommended
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        {logo}
        <h3 className="text-2xl font-bold text-slate-100">{name}</h3>
      </div>
      
      <div className="text-center bg-slate-900/50 rounded-lg p-4 my-4 border border-slate-700">
        <p className="text-lg font-semibold text-amber-300">{welcomeOffer.title}</p>
        <p className="text-slate-300 mt-1">{welcomeOffer.details}</p>
      </div>

      <div className="mb-6">
        <StarRating rating={rating} />
      </div>

      <div className="flex-grow space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <CheckIcon />
            <span className="text-slate-300">{feature}</span>
          </div>
        ))}
      </div>

      <a
        href={ctaLink}
        className={`w-full text-center mt-auto rounded-lg px-6 py-3 text-lg font-bold text-white shadow-lg transition-transform duration-200 hover:scale-105 ${ctaClass}`}
      >
        Claim Offer
      </a>
    </div>
  );
};
