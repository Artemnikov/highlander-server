// src/components/MapComponent.tsx

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import LocationMarker from './LocationMarker';

interface MapComponentProps {
  center: L.LatLngExpression;
}

const MapComponent: React.FC<MapComponentProps> = (props) => {
  const { center } = props;

  const [zoom, setZoom] = useState<number>(13);
  const [currentPosition, setCurrentPosition] = useState<L.LatLngExpression>(center);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentPosition([position.coords.latitude, position.coords.longitude]);
      },
      () => {
        console.error('Could not retrieve your location');
      }
    );
  }, []);

  return (
    <MapContainer center={currentPosition} zoom={zoom} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default MapComponent;
