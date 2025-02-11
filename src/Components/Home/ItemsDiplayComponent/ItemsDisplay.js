import React, { useState, useEffect } from 'react';
import IndividualHouse from '../IndividualHouseComponent/IndividualHouse';
import "./ItemsDisplay.css";
import { TextField, InputAdornment } from '@mui/material';

function ItemsDisplay() {
  const [houses, setHouses] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  useEffect(() => {
    fetch('http://localhost:5000/api/property-data')
      .then((response) => response.json())
      .then((data) => {
        setHouses(data);
      })
      .catch((error) => {
        console.error("Error fetching house data:", error);
      });
  }, []);

  // Handle the change in the search input field
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter houses based on the search term
  const filteredHouses = searchTerm
    ? houses.filter((house) =>
        house.Address.toLowerCase().includes(searchTerm.toLowerCase()) // Filtering based on city name in Address
      )
    : houses; // If no search term, return all houses

  return (
    <div className='main-content'>
      <div className='upper-rento'>
        <h1>Rento</h1>
      </div>
      <div className='middle-content'>
        <div className='search-button'>
          <TextField
            className='search-bar'
            placeholder="Search by City"
            value={searchTerm} // Bind the input to searchTerm state
            onChange={handleSearchChange} // Update searchTerm on input change
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                </InputAdornment>
              )
            }}
          />
        </div>
      </div>

      <div className='lower-content'>
        <div className='house-content'>
          {filteredHouses.length > 0 ? (
            filteredHouses.map((house) => (
              <IndividualHouse key={house.Id} house={house} />
            ))
          ) : (
            <p>No houses found for the given city.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemsDisplay;
