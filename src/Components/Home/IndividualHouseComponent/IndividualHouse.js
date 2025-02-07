import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./IndividualHouse.css";

function IndividualHouse() {
  const [Address, setAddress] = useState("Gate No/Block No,Street Name,City Name,State NameGate No/Block No,Street Name,City Name,State NameGate No/Block No,Street Name,City Name,State Name");
  const [Rent, setRent] = useState("20k");
  const [Advance, setAdvance] = useState("100k");
  const [family, setFamily] = useState("Bachelors");
  const [Bhk, setBhk] = useState("2");

  return (
    <div className='main-house0'>
      <div className='main-house1'>

        <div className='left-side'>
          <div className='main-image-div'>
            <img src='https://raw.githubusercontent.com/Aswin-Nath/Image_Dumo/refs/heads/main/Hello.jpg' alt="House" />
          </div>
          <div className='more-details'>
            <Link to="#">
              <button className='more-details-button'>More Details</button>
            </Link>
          </div>
        </div>

        <div className='right-side'>
          <div className='right-side-content'>
          <table className='house-table'>
            <tbody>
              <tr>
                <td><b>Address:</b></td>
                <td>{Address}</td>
              </tr>
              <tr>
                <td><b>Rent:</b></td>
                <td>{Rent}</td>
              </tr>
              <tr>
                <td><b>Advance:</b></td>
                <td>{Advance}</td>
              </tr>
              <tr>
                <td><b>Types of Families:</b></td>
                <td>{family}</td>
              </tr>
              <tr>
                <td><b>BHK:</b></td>
                <td>{Bhk}</td>
              </tr>
            </tbody>
          </table>
          </div>
          
        </div>

      </div>
    </div>
  );
}

export default IndividualHouse;
