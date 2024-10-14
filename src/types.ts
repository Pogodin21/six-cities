export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};
export type TCity = {
  name: string;
  location: TLocation;
};
export type THost = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
};
export type TOffer = {
  id: string;
  title: string;
  description: string;
  type: string;
  price: number;
  images: string[];
  city: TCity;
  location: TLocation;
  goods: string[];
  host: THost;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
};
export type TOffers = TOffer[];