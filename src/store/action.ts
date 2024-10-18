import { createAction } from "@reduxjs/toolkit";

export const Actions = {
  CITY_CHANGE: 'CITY_CHANGE',
  SET_OFFERS: 'SET_OFFERS'
};

export const changeCityAction = createAction(Actions.CITY_CHANGE, (city) => { return { payload: city  }});
export const setOffersAction = createAction(Actions.SET_OFFERS, (offers) => { return { payload: offers  }});


