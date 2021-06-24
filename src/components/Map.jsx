import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {
    height: "50vh",
    width: "100%"
  }

  const defaultCenter = {
    lat: 19.4267261, lng: -99.1718706
  }

  return (
    <LoadScript googleMapsApiKey='AIzaSyBX-8sPm9jzq7Jt8ZohGljVLg0hELAFmwU'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={17}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;