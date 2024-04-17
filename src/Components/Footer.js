import React from 'react';
import logo from '../images/PHlogo.jpg'
import img2 from '../images/CDMG-white.png'
import img3 from '../images/EQUAL-white-sm.png'

const Footer = () => {
  return (
    <footer className="footer-container">
        <hr className="footer-line" />
      <div className="footer-content">
        <div className="footer-item">
          <img src={logo} alt="Image 1" />
          
        </div>
        <div className="footer-item2">
          <img src={img2} alt="Image 2" />
          
        </div>
        <div >
        <p style={{fontSize:"Smaller"}}>*OFFER IS SUBJECT TO CHANGE AND LIMITATIONS</p>
        <p style={{fontSize:"x-small"}}>Compass Development Marketing Group is a licensed real estate broker and abides by Equal Housing Opportunity laws. All material presented herein is intended for informational purposes only. Information is compiled from sources deemed reliable but is subject to errors, omissions, changes in price, condition, sale, or withdrawal without notice. Photos may be virtually staged or digitally enhanced and may not reflect actual property conditions.</p>
        </div>
        <br/>
        <div className="footer-item3">
          <img src={img3} alt="Image 3" />
          
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
