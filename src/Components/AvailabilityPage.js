import React from 'react'
import Footer from './Footer'
import NavBar from  './NavBar'
import avail  from '../images/ParkPlace-SiteMap-Avail.png'
import barton from '../images/parkplace-plans-barton.png'
import { Link } from 'react-router-dom'
import NavSales from './NavSales'
import Register from './Register'

const AvailabilityPage = () => {
  return (
    <div className="availability-page">
      <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <div className="content"style={{backgroundcolor:" rgb(70, 92, 69)"}} >
        <div className="image-section">
          <h1>3-4 Bedroom Homes from $499k</h1>
          <img src={avail}  alt="Park Place Site Map Availability" />
        </div>
        <div className="text-section" >
          <h1> Spring Promotions</h1>
          <table className="availability-table">
            <thead>
              <tr className="green-row">
                <th>Floor Plan </th>
                <th>Bed/Bath</th>
                <th>SF</th>
                <th>Pricing</th>
                <th>Move-in Ready</th>
                <th>Move-in Summer/Fall</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brushy</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data 4</td>
                <td>Data 5</td>
                <td>Data 6</td>
              </tr>
              <tr>
                <td>Barton</td>
                <td>Data 8</td>
                <td>Data 9</td>
                <td>Data 10</td>
                <td>Data 11</td>
                <td>Data 12</td>
             </tr>
             <tr>
                <td>Bravis</td>
                <td>Data 8</td>
                <td>Data 9</td>
                <td>Data 10</td>
                <td>Data 11</td>
                <td>Data 12</td>
             </tr>
            </tbody>
          </table>
          <br/>
          <br/>
        </div>
      </div>
      <div className="content2">
        <div className="image-section2">
          <img src={barton} alt="Park Place Site Map Availability" />
        </div>
        <div className="text-section2">
          <h1>THE BARTON</h1>
          <p>4 BED / 3.5 BATH</p>
          <p>INTERIOR SF: 2,278</p>
          <p>Only 2 Remaining</p>
          <Link to="/another-page" className="bottom-link">The Barton(PDF)</Link>
        </div>
      </div>
      <hr className="footer-line2" />
      <div className="content2">
        <div className="image-section2">
          <img src={barton} alt="Park Place Site Map Availability" />
        </div>
        <div className="text-section2">
          <h1>THE BRUSHY</h1>
          <p>4 BED / 3.5 BATH</p>
          <p>INTERIOR SF: 2,278</p>
          <p>Only 2 Remaining</p>
          <Link to="/another-page" className="bottom-link">The Brushy (PDF)</Link>
        </div>
      </div>
      <hr className="footer-line2"  />
      <div className="content2">
        <div className="image-section2">
          <img src={barton} alt="Park Place Site Map Availability" />
        </div>
        <div className="text-section2">
          <h1>THE TRAVIS</h1>
          <p>4 BED / 3.5 BATH</p>
          <p>INTERIOR SF: 2,278</p>
          <p>Only 2 Remaining</p>
          <Link to="/another-page" className="bottom-link">The Travis(PDF)</Link>
        </div>
      </div>
       <NavSales/>
       <Register/>
       <Footer />
    </div>
    </div>
  );
}

export default AvailabilityPage
