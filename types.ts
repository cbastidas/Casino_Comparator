
export interface Brand {
  id: number;
  name: string;
  logo: React.ReactNode;
  welcomeOffer: {
    title: string;
    details: string;
  };
  rating: number; // out of 5
  features: string[];
  ctaLink: string;
  isOwnBrand: boolean;
  highlightColor: string; // e.g., 'cyan', 'amber', 'emerald'
}
