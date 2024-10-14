import { useParams } from 'react-router-dom';
import { Header } from '../components/header';
import { TOffer } from '../types';
import  Map  from '../components/map/map';
import NotFoundPage from './NotFound';

import { OfferGallery } from '../components/offer/OfferGalary';
import { OfferInside } from '../components/offer/OrderInside';
import { OfferReviews } from '../components/offer/OfferReviews';
import ListOfOffersNearby  from '../components/ListOfOffersNearby';
import { useAppSelector } from '../store';


function Offer() {

  const {offers: offersData, city}  = useAppSelector((state) => state.main)

  const { id } = useParams();
  const selectedPoint: TOffer | undefined = offersData.find((item: TOffer) => item.id === id);
  const offersNearby = offersData.filter((item: TOffer) => item.id !== id)
  console.log('offersNearby: ', offersNearby)

  if (!selectedPoint) {
    return <NotFoundPage />
  };

  const {
    title,
    description,
    type,
    price,
    images,
    goods,
    host,
    isPremium,
    bedrooms,
    maxAdults
  } = selectedPoint;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">

          <OfferGallery images={images} />

          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">4.8</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>

              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              <OfferInside goods={goods} />

              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {host.name}
                  </span>
                  {host.isPro &&
                    <span className="offer__user-status">
                      Pro
                    </span>
                  }
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                  {description}
                  </p>
                  
                </div>
              </div>
              
              <OfferReviews />
            </div>
          </div>
          <section className="offer__map map">
                  <Map city={city} offers={offersData} isMainPage={false}  selectedPoint={selectedPoint} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <ListOfOffersNearby  offersNearby={offersNearby}/>
            </div>
          </section>
        </div>
      </main>
    </div>

  );

}

export default Offer;

