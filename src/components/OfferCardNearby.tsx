import { TOffer } from "../types";

type TOfferCardNearby = {
  offer: TOffer
}


export function OfferCardNearby({offer}: TOfferCardNearby) {
  const {id, images, price, isFavorite, rating, title, type} = offer;

  const previewImage = images[0]
  const ratingPercentage = rating ? rating * 20 : 0 ;
  console.log('ratingPercentage: ', ratingPercentage)

  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button place-card__bookmark-button${isFavorite && "--active" } button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? "In bookmarks" : "Add to bookmarks"}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
          <span style={{ width: ratingPercentage +"%" }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={`/offer/${id}`}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  )
}