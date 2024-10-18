import { useState } from "react";

type TPlacesSortingProps = {
  selectedSort: string;
  handleSortOffers: (opinion: "Price: low to high" | "Price: high to low" | "Top rated first" | "Popular") => void;
}

function SortingSettings({selectedSort, handleSortOffers }: TPlacesSortingProps) {
  const sortingOptions: [
    "Popular",
    "Price: low to high",
    "Price: high to low",
    "Top rated first"
  ] = [
    "Popular",
    "Price: low to high",
    "Price: high to low",
    "Top rated first"
  ];

  const [isOpen, setIsOpen] = useState(false);

  const onSwitch = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <form className="places__sorting" action="#" method="get" >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={onSwitch}>
        {selectedSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul 
        className={`places__options places__options--custom places__options${isOpen ? "--opened" : ""}`}>
        {sortingOptions.map((opinion) => {
          return (
            <li
              key={opinion}
              className={`places__option places__option${selectedSort === opinion ? "--active" : ""}`}
              onClick={() => handleSortOffers(opinion)}
              tabIndex={0}
            >
              {opinion}
            </li>
          )
        })}
      </ul>
    </form>
  )
}

export default SortingSettings;