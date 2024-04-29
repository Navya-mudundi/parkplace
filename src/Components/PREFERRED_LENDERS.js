import React from 'react';
import { Link } from 'react-router-dom'; 
import lender from '../images/PP-lender-05.png';
import lender1 from '../images/PP-lender-01.png';
import lender2 from '../images/PP-lender-02.png';
import lender3 from '../images/PP-lender-04.png';
import lender4 from '../images/PP-lender-06.png';
import lender5 from '../images/PP-lender-07.png';
import NavSales from './NavSales';
import Register from './Register';
import Footer from './Footer';
import '../App.css'; 
import NavBar from './NavBar';

const PREFERRED_LENDERS = () => {
  return (
    <div className='Preferred'>
      <NavBar/>
      <h1 style={{margin:"50px"}}>PREFERRED LENDERS</h1>
      <div className="row" >
        <div className="col-md-4 mb-3">
          <img className="preferred_img" src={lender} alt='lender_image' />
        </div>
        <div className="col-md-4 mb-3">
          <h3 style={{ marginTop: "50px" }}>Chris Weld</h3>
          <p>Origin Point Mortgage</p>
          <p>(832) 205-4247</p>
          <p>Chris.Weld@originpoint.com</p>
          <Link to="/originpoint" className="button-link">
            <button className="custom-btn">Origin Point</button>
          </Link>
          <br />
          <Link to="/mortgagecalculator" className="button-link">
            <button className="custom-btn">Mortgage Calculator</button>
          </Link>
        </div>
      </div>
      <hr className='footer-line4'/>
      <div className="row">
        <div className="col-md-4 mb-3">
          <img className="preferred_img" src={lender1} alt='lender_image' />
        </div>
        <div className="col-md-4 mb-3">
          <h3 style={{ marginTop: "50px" }}>Chris Weld</h3>
          <p>Origin Point Mortgage</p>
          <p>(832) 205-4247</p>
          <p>Chris.Weld@originpoint.com</p>
          <Link to="/originpoint" className="button-link">
            <button className="custom-btn">Origin Point</button>
          </Link>
          <br />
          <Link to="/mortgagecalculator" className="button-link">
            <button className="custom-btn">Mortgage Calculator</button>
          </Link>
        </div>
      </div>
      <hr className='footer-line4'/>
      <div className="row">
        <div className="col-md-4 mb-3">
          <img className="preferred_img" src={lender2} alt='lender_image' />
        </div>
        <div className="col-md-4 mb-3">
          <h3 style={{ marginTop: "50px" }}>Chris Weld</h3>
          <p>Origin Point Mortgage</p>
          <p>(832) 205-4247</p>
          <p>Chris.Weld@originpoint.com</p>
          <Link to="/originpoint" className="button-link">
            <button className="custom-btn">Origin Point</button>
          </Link>
          <br />
          <Link to="/mortgagecalculator" className="button-link">
            <button className="custom-btn">Mortgage Calculator</button>
          </Link>
        </div>
      </div>
      <hr className='footer-line4'/>
      <div className="row">
        <div className="col-md-4 mb-3">
          <img className="preferred_img" src={lender3} alt='lender_image' />
        </div>
        <div className="col-md-4 mb-3">
          <h3 style={{ marginTop: "50px" }}>Chris Weld</h3>
          <p>Origin Point Mortgage</p>
          <p>(832) 205-4247</p>
          <p>Chris.Weld@originpoint.com</p>
          <Link to="/originpoint" className="button-link">
            <button className="custom-btn">Origin Point</button>
          </Link>
          <br />
          <Link to="/mortgagecalculator" className="button-link">
            <button className="custom-btn">Mortgage Calculator</button>
          </Link>
        </div>
      </div>
      <hr className='footer-line4'/>
      <div className="row">
        <div className="col-md-4 mb-3">
          <img className="preferred_img" src={lender4} alt='lender_image' />
        </div>
        <div className="col-md-4 mb-3">
          <h3 style={{ marginTop: "50px" }}>Chris Weld</h3>
          <p>Origin Point Mortgage</p>
          <p>(832) 205-4247</p>
          <p>Chris.Weld@originpoint.com</p>
          <Link to="/originpoint" className="button-link">
            <button className="custom-btn">Origin Point</button>
          </Link>
          <br />
          <Link to="/mortgagecalculator" className="button-link">
            <button className="custom-btn">Mortgage Calculator</button>
          </Link>
        </div>
      </div>
      <hr className='footer-line4'/>
      <div className="row">
        <div className="col-md-4 mb-3">
          <img className="preferred_img" src={lender5} alt='lender_image' />
        </div>
        <div className="col-md-4 mb-3">
          <h3 style={{ marginTop: "50px" }}>Chris Weld</h3>
          <p>Origin Point Mortgage</p>
          <p>(832) 205-4247</p>
          <p>Chris.Weld@originpoint.com</p>
          <Link to="/originpoint" className="button-link">
            <button className="custom-btn">Origin Point</button>
          </Link>
          <br />
          <Link to="/mortgagecalculator" className="button-link">
            <button className="custom-btn">Mortgage Calculator</button>
          </Link>
        </div>
        <NavSales />
         <Register />
         <Footer />
      </div>
      </div>
  );
};

export default PREFERRED_LENDERS;
