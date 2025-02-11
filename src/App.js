import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Don't import BrowserRouter here
import './App.css';
import ItemsDisplay from './Components/Home/ItemsDiplayComponent/ItemsDisplay';
import HouseDetails from './Components/Home/HouseDetailsComponent/HouseDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ItemsDisplay />} />
        <Route path="/house-details/:houseId" element={<HouseDetails />} />
      </Routes>
    </div>
  );
}

export default App;
