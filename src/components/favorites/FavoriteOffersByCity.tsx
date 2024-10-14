import { FavoriteCard } from "./FavoriteCard"
import { TOffer, TOffers } from "../../types"

type TFavoriteOffersByCity = {
  favorites: TOffers;
  city: string;

}


export function FavoriteOffersByCity({ favorites, city}: TFavoriteOffersByCity) {


  const filteredCards = favorites.filter(
    (data) => data.city.name === city
  );

  return (
     
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href='#'>
              <span>{city}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {filteredCards.map((item: TOffer) => <FavoriteCard dataCard={item} key={item.id} />)}
        </div>
      </li>
    
  )
}