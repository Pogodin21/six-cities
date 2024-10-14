type TLicationListProps = {
  currentCity: string;
  onCityChange: (city: string) => void;
}
function LicationList({ currentCity, onCityChange }: TLicationListProps) {
  const cities = ["Paris", "Cologne", "Brussels", "Amsterdam", "Hamburg", "Dusseldorf"];

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((cityName) => {
          return <li key={cityName} className="locations__item">
            <a
              className={`locations__item-link tabs__item ${currentCity === cityName ? "tabs__item--active" : ""}`}
              onClick={() => onCityChange(cityName)}
              href="#"
            >
              <span>{cityName}</span>
            </a>
          </li>
        })}
      </ul>
    </section>
  )
};

export default LicationList;

