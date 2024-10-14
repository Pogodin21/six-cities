import { AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { TCity, TOffers } from "../types";
import { offers } from "../mocks/offers";

type TState = {
  city: TCity;
  offers: TOffers;
};

type TCityAction = {
  type: 'city/changeCity';
  payload: TCity;
};

type TOffersAction = {
  type: 'offers/setOffers';
  payload: TOffers;
};

type TAction = TCityAction |  TOffersAction;

const initialState = {
  city: {
    name: "Amsterdam",
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 13
    }
  },
  offers: offers
};


export function reducer(
  state: TState = initialState,
  action: AnyAction 
) {
  switch (action.type) {
    case 'city/changeCity':
      return {
        ...state,
        city: action.payload as TCity,
      };

    case 'offers/setOffers':
      return {
        ...state,
        offers: action.payload as TOffers,
      };

    default:
      return state;
  }
}
