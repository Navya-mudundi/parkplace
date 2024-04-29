import React from 'react';
import image1 from '../images/interior-1.jpg';
import image2 from '../images/interior-2.jpg';
import image3 from '../images/interior-3.jpg';
import NavBar from './NavBar';
import NavSales from './NavSales';
import Register from './Register';
import Footer from './Footer';
import interiors from '../images/7-web-or-mls-Old+Ml+Rd+Unit+217-007.jpg';
import image4 from '../images/ge.png';
import image5 from '../images/kichler.png';
import image6 from '../images/delta.png';
import image8 from '../images/PH_3PPOM_View+05_05_opA.jpg';
import image9 from '../images/PH_3PPOM_View+06_05_opA.jpg';


const Interiors = () => {
  return (
    <div className="container-neighbor">
      <NavBar />
      <div className="header">
        <img src={interiors} className="img-fluid" alt="Neighborhood" />
      </div>
      <div className="description">
        <h1>A PREMIUM HOME</h1>
        <p>Park Place at Lakeline offers distinct details and high-end finishes designed for timeless urban living.</p>
      </div>
      <div className="gallery" style={{color:"black"}}>
        
        <div className="row">
          <div className="col-md-4 mb-3">
            <img src={image1} className="img-fluid" alt="Image 1" />
            <img src={image5} className="img-fluid" alt="Kichler Lighting" />
            <p>Kichler Lighting has been shedding light on what’s important since 1938 by creating dependable, high-quality fixtures for all. With careful design and innovation in mind, Kichler products glow in every home.</p>
          </div>
          <div className="col-md-4 mb-3">
            <img src={image2} className="img-fluid" alt="Image 2" />
            <img src={image6} className="img-fluid" alt="Delta Products" />
            <p>Delta products are designed with the human experience in mind - that means creating fixtures that are not only beautifully designed, but also engineered with the latest innovations to make kitchen tasks easier.</p>
          </div>
          <div className="col-md-4 mb-3">
            <img src={image3} className="img-fluid" alt="Image 3" />
            <img src={image4} className="img-fluid" alt="GE Appliances" />
            <p>GE Appliances has been a trusted name, synonymous with quality and reliability. Their legacy of invention has modernized homes for the past century and has given owners lasting memories.</p>
          </div>
        </div>
      </div>
      <div className="scheme" style={{ color: "white", backgroundColor:"#404242", padding:"70px"}}>
        <h1>THREE PRE-DESIGNED PACKAGES</h1>
        <p>We spent hours designing, so you wouldn’t have to. Park Place at Lakeline offers three unique designer-curated interior finish packages, suitable for a wide range of styles. Live in a dynamic atmosphere with our first design scheme. Experience rich color with design package two or traditional warmth with our third option. No matter which package you land on, the vibrant colors and materials make your home unlike any other.</p>
          <div className="scheme1">  
           
             <div className="row"> 
             <div className="col-md-6">

                <h1 style={{ fontFamily: 'Orpheus, sans-serif' ,marginTop:"20%"}}>Scheme 1</h1>
                </div>
                <div className="col-md-3">
                  <img src={image8} className="img-fluid" alt="Scheme 1 Image 1"style={{width:"150%",height:"90%",marginRight:"10%",marginTop:"20%"}} />
                </div>
                <div className="col-md-3">
                  <img src={image9} className="img-fluid" alt="Scheme 1 Image 2" style={{width:"130%",height:"90%",marginTop:"10%",marginTop:"20%"}} />
                </div>
           
          </div>
          </div>
          <hr className="footer-line3" />
          <div className="scheme1">  
          <div className="row">
          <div className="col-md-6">
           
            <h1 style={{ fontFamily: 'Orpheus, sans-serif' ,marginTop:"20%"}}>Scheme 2</h1>
            </div>
              <div className="col-md-3">
                <img src={image8} className="img-fluid" alt="Scheme 1 Image 1" style={{width:"150%",height:"90%",marginRight:"10%"}} />
              </div>
              <div className="col-md-3">
                <img src={image9} className="img-fluid" alt="Scheme 1 Image 2"  style={{width:"130%",height:"90%"}} />
              </div>
            </div>
          </div>
          <hr className="footer-line3" />
          <div className="scheme1">
          <div className="row"> 
          <div className="col-md-6">
            <h1 style={{ fontFamily: 'Orpheus, sans-serif' ,marginTop:"20%"}}>Scheme 3</h1>
            </div>
              <div className="col-md-3">
                <img src={image8} className="img-fluid" alt="Scheme 1 Image 1"  style={{width:"150%",height:"90%",marginRight:"10%"}}/>
              </div>
              <div className="col-md-3">
                <img src={image9} className="img-fluid" alt="Scheme 1 Image 2" style={{width:"130%",height:"90%"}}/>
              </div>
            </div>
          </div>
         
          </div>
      <div className="content2" style={{backgroundColor:"white"}}>
        <div className="image-section2">
          <img src={image8} alt="Park Place Site Map Availability" />
        </div>
        <div className="text-section2" >
          <h1>KEY FEATURES</h1>
          <p>Andersen 100 Series Windows</p>
          <p>10’ First-floor Ceiling Heights</p>
          <p>Open Lofts on Top Floor</p>
          <p>Mohawk Luxury Vinyl Flooring</p>
          <p>Quartz Countertops</p>
          <p>European-inspired Cabinetry</p>
        </div>
      
         <NavSales />
         <Register />
         <Footer />
            
      </div>
    </div>
  );
};

export default Interiors;
