import { useState, useMemo } from 'react';
import ListOffers from '../components/offer/ListOffers';
import { TCity, TOffer } from '../types';
import { Header } from '../components/header';
import Map from '../components/map/map';
import { useAppDispatch, useAppSelector } from '../store';
import { changeCityAction } from '../store/action';
import LocationList from '../components/location/LocationList';
import SortingSettings from '../components/SortingSettings';

function Main() {
  const [selectedPoint, setSelectedPoint] = useState<TOffer | undefined>(undefined);
  const { offers, city } = useAppSelector((state) => state.main);
  const dispatch = useAppDispatch();
  
  // Хендлер для смены города
  const handleCityChange = (newCity: TCity) => {
    dispatch(changeCityAction(newCity));
  };

  // Хендлер для подсветки предложения при наведении
  const handleListItemHover = (listItemId: string | null) => {
    const currentPoint = offers.find((point: TOffer) => point.id === listItemId);
    setSelectedPoint(currentPoint);
  };
  
  // Получение предложений для выбранного города
  const currentCityOffers = useMemo(() => {
    return offers.filter(offer => offer.city.name === city.name);
  }, [offers, city]);
  
  // Функции сортировки
  const sortingFunctions = {
    "Price: low to high": (a: TOffer, b: TOffer) => a.price - b.price,
    "Price: high to low": (a: TOffer, b: TOffer) => b.price - a.price,
    "Top rated first": (a: TOffer, b: TOffer) => b.rating - a.rating,
    "Popular": () => 0 // Сортировка по умолчанию (без сортировки)
  } as const;
  
  type TSortOption = keyof typeof sortingFunctions;
  
  const [selectedSort, setSelectedSort] = useState<TSortOption>("Popular");
  
  // Отсортированные предложения
  const sortedOffers = useMemo(() => {
    return [...currentCityOffers].sort(sortingFunctions[selectedSort]);
  }, [currentCityOffers, selectedSort]);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList currentCity={city.name} onCityChange={handleCityChange} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${currentCityOffers.length} places to stay in ${city.name}`}</b>
              <SortingSettings selectedSort={selectedSort} handleSortOffers={setSelectedSort} />
              <div className="cities__places-list places__list tabs__content">
                <ListOffers offers={sortedOffers} onListItemHover={handleListItemHover} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} offers={sortedOffers} isMainPage={true} selectedPoint={selectedPoint} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
