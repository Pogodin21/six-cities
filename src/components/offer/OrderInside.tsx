type TOfferInside = {
  goods: string[];
}

export function OfferInside({goods}: TOfferInside) {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goods.map((item) => {
          return (
            <li key={item} className="offer__inside-item">
              {item}
            </li>
          )
        })}
      </ul>
    </div>

  )
};