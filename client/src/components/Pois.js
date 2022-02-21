import React, { useState, useEffect } from "react";
import { fetchPois } from "../api";

export default function Pois() {
  const [pois, setPois] = useState([]);

  useEffect(() => {
    fetchPois().then((response) => setPois(response.data))
  }, []);
  
  // console.log(pois)

  return (
    <div>
      <h1>POIS</h1>
      {pois.map((poi) => (
        <div key={poi._id}>
          <div>Nome: {poi.nome}</div>
          <div>Raio: {poi.raio}</div>
          <div>Latitude: {poi.latitude}</div>
          <div>Longitude: {poi.longitude}</div>
          <br></br>
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  )
}
