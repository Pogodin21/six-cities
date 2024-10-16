import { Header } from '../components/header';
import { TOffers } from '../types';
import { FavoriteOffersByCity } from '../components/favorites/FavoriteOffersByCity';
import { useAppSelector } from '../store';


type TCityObj = {
  [key: string]: number;
};

function Favorites() {
  const offers: TOffers  = useAppSelector(state => state.offers)
  
  const favoriteCity = offers.filter((item) => item.isFavorite )
  const cityObj: TCityObj = {};

  favoriteCity.forEach((item) => cityObj[item.city.name] = 1);

  const cityList = Object.keys(cityObj);



  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                cityList.map((city) => <FavoriteOffersByCity key={city} favorites={favoriteCity} city={city}/>)
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
