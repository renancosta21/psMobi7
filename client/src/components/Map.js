import React from 'react';
import './App.css';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDOl304Jkfg5WmjAlVmv6Q46GDztqvgHII"
  })

  const position = {
    lat: -19.919210,
    lng: -43.938610,
  }

  return (
    <div className="map-container">
      {
        isLoaded ? (
        <GoogleMap
          mapContainerStyle={{width: "95%", height: "95%"}}
          center={position}
          zoom={15}
        >
          <Marker position={position} options={{
            label: {
              text: 'Posição do veículo',
              className: "map-marker"
            },
            animation: "bounce"
          }} />
        </GoogleMap>
        ) : (
          <></>
        )
      }
    </div>
  )
}
