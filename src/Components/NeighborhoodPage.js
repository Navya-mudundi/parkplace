import React from 'react'
import image1 from '../images/Park+Place_20230503_Compass_02+copy.jpg'
import image2 from '../images/Park+Place_20230503_Compass_04+copy.jpg'
import image3 from '../images/Park+Place_20230503_Compass_10+copy.jpg'
import image4 from '../images/Park+Place_20230503_Compass_17.jpg'
import image5 from '../images/Park+Place_20230503_Compass_34+copy.jpg'
import image6 from '../images/Park+Place_20230503_Compass_52+copy.jpg'
import map from '../images/parkplace-locationmap5.16.23.jpg'
import NavBar from './NavBar'
import NavSales from './NavSales'
import Register from './Register'
import Footer from './Footer'
import aerial from '../images/aerial-min.jpg'


const NeighborhoodPage = () => {
    return (
       
        <div className="container-neighbor">
             <div className="d-flex flex-column min-vh-100">
            <div className="row">
                <div className="col">
                   <NavBar/>
                    <div className="header">
                        <img src={aerial}  className="img-fluid" alt="Neighborhood" />
                        
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="description">
                        <h1>NEIGHBORHOOD</h1>
                        <p>Nestled between a quiet residential neighborhood and future Lakeline Park, Park Place is conveniently located with easy access to Cedar Park, The Domain, Round Rock, Lake Travis, and Austin.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="gallery">
                        <h2 className="text-center">Neighborhood Gallery</h2>
                        <div className="row" style={{width:"70% ",marginLeft:"15%"}}>
                            <div className="col-md-4 mb-3">
                                <img src={image1} className="img-fluid" alt="Image 1" />
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src={image2} className="img-fluid" alt="Image 2" />
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src={image3} className="img-fluid" alt="Image 3" />
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src={image4} className="img-fluid" alt="Image 4" />
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src={image5} className="img-fluid" alt="Image 5" />
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src={image6} className="img-fluid" alt="Image 6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="button-container text-center">
                        <button>LOCATION</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img src={map} className="img-fluid"style={{marginBottom:"20px"}} alt="Contact" />
                </div>
            </div>
            <div>
             
            </div>
            <NavSales/>
              <Register/>
              <Footer />
        </div>
    </div>
    );
}

export default NeighborhoodPage;
