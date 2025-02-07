import React, { useState } from 'react'
import IndividualHouse from '../IndividualHouseComponent/IndividualHouse'
import sortButton from "../../../Assets/Images/sort.png";
import "./ItemsDisplay.css";
import { TextField, InputAdornment } from '@mui/material';
import SortComponent from '../SortComponent/SortComponent';
function ItemsDisplay() {
  const houses = Array.from({ length: 10 }, (_, index) => <IndividualHouse key={index} />);
  const [show,setshow]=useState(false);
  return (
    <div className='main-content'>
      <div className='upper-rento'>
        <h1>Rento</h1>
      </div>
      <div className='middle-content'>
        <div className='sort-button'>
          <button onClick={()=>{setshow(true)}}>          
            <img src={sortButton}></img>
          </button>
        </div>
        <div className='search-button'>
        <TextField
            className='search-bar'
            placeholder="Search by City"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                </InputAdornment>
              )
            }}
          />
        </div>
      </div>
      <div className={`side-bar ${show? 'show':""}`}>
        <SortComponent/>
      </div>
      <div className='lower-content'>
        <div className='house-content'>
          {houses}
        </div>
      </div>
    </div>
  )
}

export default ItemsDisplay