import { TOffer } from "../types";
import { Link } from "react-router-dom";


type TCardProps =  TOffer & {
  onMouseEnter: (id: string ) => void;
  onMouseLeave: () => void;
}


function Card( {onMouseEnter, onMouseLeave, ...item}: TCardProps ) {
  const previewImage = item.images[0];
  
  return (
    <article className="cities__card place-card" onMouseEnter={() => onMouseEnter(item.id)} onMouseLeave={onMouseLeave}>
      {item.isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
      }

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={`/offer/${item.id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{item.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating {item.rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="place-card__type">{item.type}</p>
      </div>
    </article>
  );
}

export default Card;
