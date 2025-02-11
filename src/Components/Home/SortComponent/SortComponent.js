import React, { useState } from 'react';
import "./SortComponent.css";
import close from "../../../Assets/Images/sort right.png";
import { Slider, Button } from '@mui/material';

function SortComponent({ onClose }) {
  const [priceRange, setPriceRange] = useState([10, 100]);
  const [bhkRange, setBhkRange] = useState([1, 5]);

  return (
    <div className='main-content0'>
      <div className='main-content1'>

        <div className='close-sort' onClick={onClose}>
          <img src={close} alt="Close" />
        </div>

        <div className="sort-content">
          <div className="sort-section">
            <h4>Price :</h4>
            <Slider
              className="range-slider"
              value={priceRange}
              onChange={(e, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={200}
            />
          </div>

          <div className="sort-section">
            <h4>Rating:</h4>
            <div className="rating-buttons">
              <Button className="rating-btn">1 ★ & more</Button>
              <Button className="rating-btn">2 ★ & more</Button>
              <Button className="rating-btn">3 ★ & more</Button>
              <Button className="rating-btn">4 ★ & more</Button>
              <Button className="rating-btn">5 ★ & more</Button>
            </div>
          </div>

          <div className="sort-section">
            <h4>BHK:</h4>
            <Slider
              className="range-slider"
              value={bhkRange}
              onChange={(e, newValue) => setBhkRange(newValue)}
              valueLabelDisplay="auto"
              min={1}
              max={10}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default SortComponent;