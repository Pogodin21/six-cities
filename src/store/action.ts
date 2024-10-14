import { TCity, TOffers } from "../types";

export function changeCityAction(city: string) {
  return {
    type: 'city/changeCity',
    payload: city
  };
}

export function setOffersAction(offers: TOffers) {
  return {
    type: 'offers/setOffers',
    payload: offers
  }
}