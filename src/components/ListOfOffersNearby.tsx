import { Fragment } from "react"
import { OfferCardNearby } from "./OfferCardNearby"
import { TOffer, TOffers } from "../types"

type TListOfOffersNearby = {
  offersNearby: TOffers
}

export default function ListOfOffersNearby({offersNearby}: TListOfOffersNearby) {
  return (
    <Fragment>
      {offersNearby.map((offer: TOffer) => <OfferCardNearby key={offer.id} offer={offer}/>)}
    </Fragment>
  )
}