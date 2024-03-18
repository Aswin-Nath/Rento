import React, { useState } from 'react';

const CitySearch = () => {
  const [cityInput, setCityInput] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [areas, setAreas] = useState([]);
// import tamilNaduCities f
  
const Tcity=[
  {
    "name": "Chennai",
    "areas": ["Adyar", "Anna Nagar", "T. Nagar", "Mylapore", "Velachery", "Guindy", "Nungambakkam", "Kodambakkam", "Tambaram", "Thiruvanmiyur"]
  },
  {
    "name": "Coimbatore",
    "areas": ["Gandhipuram", "RS Puram", "Peelamedu", "Saravanampatti", "Ramanathapuram", "Town Hall", "Singanallur", "Sulur", "Kavundampalayam", "Ganapathy"]
  },
  {
    "name": "Madurai",
    "areas": ["Anna Nagar", "Goripalayam", "K K Nagar", "Thirunagar", "Ellis Nagar", "Tirupparankunram", "Alanganallur", "Villapuram", "Ponmeni", "Pudur"]
  },
  {
    "name": "Tiruchirappalli",
    "areas": ["Thillai Nagar", "Srirangam", "K. K. Nagar", "Tennur", "Thiruverumbur", "Puthur", "Woraiyur", "Cantonment", "Manachanallur", "Samayapuram"]
  },
  {
    "name": "Salem",
    "areas": ["Shevapet", "Ammapet", "Fairlands", "Gugai", "Kondalampatti", "Meyyanur", "Alagapuram", "Attur", "Valapady", "Omalur"]
  }
]
  // Function to handle city input change
  const handleCityInputChange = (event) => {
    setCityInput(event.target.value);
  };

  // Function to handle city selection
  const handleCitySelect = () => {
    const city = Tcity.find((c) => c.name.toLowerCase() === cityInput.toLowerCase());
    if (city) {
      setSelectedCity(city.name);
      setAreas(city.areas);
    } else {
      alert("City not found");}
  };

  // Function to handle area selection
  const handleAreaSelect = (area) => {
    setSelectedArea(area);
  };

  return (
    <div>
      <input
        type="text"
        value={cityInput}
        onChange={handleCityInputChange}
        placeholder="Enter a city..."
      />
      <button onClick={handleCitySelect}>Search</button>
      <p>Selected City: {selectedCity}</p>
      <p>Select an area:</p>
      <ul>
        {areas.map((area, index) => (
          <li key={index} onClick={() => handleAreaSelect(area)}>{area}</li>
        ))}
      </ul>
      {selectedArea && <p>Selected Area: {selectedArea}</p>}
    </div>
  );
};

export default CitySearch;
