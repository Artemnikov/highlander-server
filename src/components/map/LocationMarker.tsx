import { useEffect, useState } from "react";
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

const LocationMarker: React.FC = () => {
    const [position, setPosition] = useState<L.LatLngExpression | null>(null);
    const map = useMap();
  
    const customMarkerIcon = new L.Icon({
      iconUrl: "/game/ball.png",
      iconSize: [25, 25],
      iconAnchor: [7, 25],
      popupAnchor: [0, -25],
    });

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
    }, [map]);
  
    return position === null ? null : (
      <Marker position={position} icon={customMarkerIcon}>
        <Popup>You are here</Popup>
      </Marker>
    );
};

export default LocationMarker;