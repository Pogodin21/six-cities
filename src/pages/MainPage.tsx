import { useState } from 'react';
import ListOffers from '../components/offer/ListOffers';
import { TCity, TOffer, TOffers } from '../types';
import { Header } from '../components/header';
import Map from '../components/map/map';
import { useAppDispatch, useAppSelector } from '../store';
import { changeCityAction, setOffersAction } from '../store/action';
import LicationList from '../components/location/LocationList';


function Main() {

  const {offers, city} = useAppSelector((state) => state.main);
  const [selectedPoint, setSelectedPoint] = useState<TOffer | undefined>(undefined);
  const dispatch = useAppDispatch()

  console.log("city ", city)

  const handleListItemHover = (listItemId: string | null) => {
    const currentPoint = offers.find((point: TOffer ) =>  point.id === listItemId);
    setSelectedPoint(currentPoint);
  };

  const handleCityChange = (newCity: string) => {
    dispatch(changeCityAction(newCity))
  };

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LicationList currentCity={city.name} onCityChange={handleCityChange} />
        </div>
        <div className="cities">

          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${offers.length} places to stay in ${city.name}`}</b>
              <form className="places__sorting" action="#" method="get" hidden>
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <ListOffers offers={offers} onListItemHover={handleListItemHover} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} offers={offers} isMainPage={true} selectedPoint={selectedPoint} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default Main;
