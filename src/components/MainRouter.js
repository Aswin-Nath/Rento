import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Page imports 
import HomePage from "../pages/HomePage"
import BuyPage from '../pages/BuyPage';
import Header from './Header';
import SellPage from '../pages/SellPage';
import CommercialPage from '../pages/CommercialPage';

// 

const MainRouter = () => {
  return (
    <Router>
      <div className="bg-gray-200 min-h-screen">
        <Header/>
        <div className="container mx-auto py-8">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/Buy" element={<BuyPage/>} />
            <Route path="/Commercial" element={<CommercialPage/>} />
            <Route path="/Sell" element={<SellPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default MainRouter;
