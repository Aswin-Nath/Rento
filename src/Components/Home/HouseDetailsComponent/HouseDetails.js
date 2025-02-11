import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './HouseDetails.css';

function HouseDetails() {
  const { houseId } = useParams();
  const [house, setHouse] = useState({});
  const [images, setImages] = useState([]);
  const [activeTab, setActiveTab] = useState('image');  // State to track the active tab

  useEffect(() => {
    fetch(`http://localhost:5000/api/property-data/${houseId}`)
      .then((response) => response.json())
      .then((data) => {
        setHouse(data);
      })
      .catch((error) => {
        console.error("Error fetching house data:", error);
      });

    fetch(`http://localhost:5000/api/property-images/${houseId}`)
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => {
        console.error("Error fetching property images:", error);
      });
  }, [houseId]);

  // Function to handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="house-details-container">
      <h2>More Details</h2>
      
      {/* Main Image and House Details Section */}
      <div className="house-details-top">
        {/* Main Image */}
        <div className="main-image">
          <img src={house.main_image} alt="Main House Image" />
        </div>
        
        {/* House Details */}
        <div className="house-details-info">
          <table>
            <tbody>
              <tr>
                <td><b>Address:</b></td>
                <td>{house.Address}</td>
              </tr>
              <tr>
                <td><b>Rent:</b></td>
                <td>{house.Rent}</td>
              </tr>
              <tr>
                <td><b>Advance:</b></td>
                <td>{house.Advance}</td>
              </tr>
              <tr>
                <td><b>Types of Families:</b></td>
                <td>{house.Types_of_Families}</td>
              </tr>
              <tr>
                <td><b>BHK:</b></td>
                <td>{house.BHK}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* New Header Section for Image, Contact Details */}
      <div className="house-details-header">
        <h3>Media and Contact Information</h3>
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === 'image' ? 'active' : ''}`}
            onClick={() => handleTabClick('image')}
          >
            Image
          </button>
          
          <button
            className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => handleTabClick('contact')}
          >
            Contact Details
          </button>
        </div>

      </div>

      {/* Conditionally render content based on active tab */}
      {activeTab === 'image' && (
          <div className="house-details-images">
            <h4>Property Images</h4>
            <div className="images-grid">
              {images.map((image, index) => (
                <div key={index} className="individual-image">
                  <img src={image.image_url} alt={`House Image ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
      )}


    {activeTab === 'contact' && (
      <div className="house-details-contact" style={{ padding: '20px', backgroundColor: '#f7f9fb', borderRadius: '10px' }}>
        <h4 style={{ fontSize: '24px', color: '#333', fontFamily: 'Arial, sans-serif' }}>Contact Details</h4>
        <p style={{ fontSize: '18px', color: '#555', fontFamily: 'Arial, sans-serif' }}>
          <strong>Owner:</strong> Aswinnath
        </p>
        <p style={{ fontSize: '18px', color: '#555', fontFamily: 'Arial, sans-serif' }}>
          <strong>Phone Number:</strong> 123-456-888 (Even number)
        </p>
        <p style={{ fontSize: '18px', color: '#555', fontFamily: 'Arial, sans-serif' }}>
          <strong>Email:</strong> <a href="mailto:aswinnathte125@gmail.com" style={{ color: '#007bff', textDecoration: 'none' }}>aswinnathte125@gmail.com</a>
        </p>
      </div>
    )}

    </div>
  );
}

export default HouseDetails;
