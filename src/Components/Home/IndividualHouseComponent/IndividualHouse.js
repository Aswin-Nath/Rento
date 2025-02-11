import React from 'react';
import { Link } from "react-router-dom";
import "./IndividualHouse.css";

function IndividualHouse({ house }) {
  return (
    <div className='main-house0'>
      <div className='main-house1'>
        <div className='left-side'>
          <div className='main-image-div'>
            <img src={house.main_image} alt="House" />
          </div>
          <div className='more-details'>
            <Link to={`/house-details/${house.Id}`}>
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
      </div>
    </div>
  );
}

export default IndividualHouse;
