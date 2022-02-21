import React from "react";
import './App.css';
import Positions from './components/Positions';
import Pois from './components/Pois';
import Map from './components/Map';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter className='bg-container'>
      <Routes>
        <Route path="/positions" exact element={<Positions />} />
        <Route path="/pois" exact element={<Pois />} />
        <Route path="/map" exact element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
