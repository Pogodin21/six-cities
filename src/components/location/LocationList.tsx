import { CITIES } from "../../const";
import { TCity } from "../../types";

type TLicationListProps = {
  currentCity: string;
  onCityChange: (city: TCity) => void;
}
function LicationList({ currentCity, onCityChange }: TLicationListProps) {
  

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => {
          return <li key={city.name} className="locations__item">
            <a
              className={`locations__item-link tabs__item ${currentCity === city.name ? "tabs__item--active" : ""}`}
              onClick={() => onCityChange(city)}
              href="#"
            >
              <span>{city.name}</span>
            </a>
          </li>
        })}
      </ul>
    </section>
  )
};

export default LicationList;

