import React from 'react';
import NavBar from './NavBar';
import NavAvail from './NavAvail';
import NavAmenities from './NavAmenities';
import Navneigh from './Navneigh';
import NavInteriors from './NavInteriors';
import NavSales from './NavSales';
import Register from './Register';
import Footer from './Footer';



const Home = () => {
  return (
    <div>
    <NavBar/>
    <NavAvail/>
    <Navneigh/>
    <NavAmenities/>
    <NavInteriors/>
    <NavSales/> 
    <Register/>
    <Footer/>
    </div>  
  );
};

export default Home;
