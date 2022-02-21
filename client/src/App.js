import React from "react";
import './App.css';
import Positions from './components/Positions';
import Pois from './components/Pois';

function App() {
  return (
    <div className='bg-container'>
      <Positions />
      <Pois />
    </div>
  );
}

export default App;
