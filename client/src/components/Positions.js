import React, { useState, useEffect } from "react";
import axios from "axios";

const API = 'http://localhost:3001';

export default function Positions() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    axios.get(`${API}/positions`).then((response) => setPositions(response.data))
  }, []);
  
  console.log(positions)

  return (
    <div>
      <h1>POSITIONS</h1>
      {positions.map((position) => (
        <div key={position._id}>
          <div>Placa: {position.placa}</div>
          <div>data_posicao: {position.data_posicao}</div>
          <div>velocidade: {position.velocidade}</div>
          <div>Longitude: {position.longitude}</div>
          <div>Latitude: {position.latitude}</div>
          <div>ignicao: {position.ignicao}</div>
          <br></br>
        </div>
      ))}
    </div>
  )
}
