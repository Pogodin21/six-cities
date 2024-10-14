import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css'
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { TOffer, TOffers } from '../../types';
import { TCity } from '../../types';

type TMap = {
  city: TCity
  offers: TOffers
  isMainPage: boolean
  selectedPoint?: TOffer | undefined
}
export default function Map({ city, offers, isMainPage,  selectedPoint }: TMap) {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  let offersOnTheMap = offers; 

  if (!isMainPage) {
    offersOnTheMap = offers.filter(item => item !== selectedPoint)
  }

  useEffect(() => {
    if (map) {
      offersOnTheMap.forEach((point: TOffer) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: (selectedPoint && point.id === selectedPoint.id)
              ? currentCustomIcon
              : defaultCustomIcon

          })
          .addTo(map)

      });
    }
  }, [map, offers, offersOnTheMap, selectedPoint])


  return (
    <div
      style={{ height: '100%' }}
      ref={mapRef}
    >
    </div>
  );
}