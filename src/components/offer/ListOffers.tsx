import React from "react";
import Card from "../card";
import { TOffers, TOffer } from "../../types";

type TListOffersProps = {
  offers: TOffers;
  onListItemHover: (listItemId: string | null) => void; 
};


function ListOffers({ offers, onListItemHover}: TListOffersProps) {
  const [activeOfferId, serActiveOfferId] = React.useState<string | null>(null);
  
  function handleMouseEnter(id: string) {
    serActiveOfferId(id);
    onListItemHover(id)
    
  };
  function handleMouseLeave() {
    serActiveOfferId(null);
    onListItemHover(null);
  
  };

 

  return (
    <React.Fragment>
      {offers.map((item: TOffer) => (
        <Card
          key={item.id}
          {...item}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        />
      ))}

    </React.Fragment>
  )
}

export default ListOffers;