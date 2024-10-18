import { createReducer } from "@reduxjs/toolkit";
import { TCity, TOffers } from "../types";
import { offers } from "../mocks/offers";
import { CITIES } from "../const";
import { changeCityAction, setOffersAction } from "./action";

type TState = {
  city: TCity;
  offers: TOffers;
};

const initialState: TState  = {
  city: CITIES[0],
  offers: offers
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {state.city = action.payload})
    .addCase(setOffersAction, (state, action) => {state.offers = action.payload})
})
