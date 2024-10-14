type TOfferGallery = {
  images: string[]
}

export function OfferGallery({images}: TOfferGallery) {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {
          images.map((image) => {
            return (
              <div key={image} className="offer__image-wrapper">
                <img className="offer__image" src={image} alt="Photo studio" />
              </div>
            )
          })}
      </div>
    </div>
  )
};