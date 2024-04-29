import React from 'react';
import './App.css';
import Home from './Components/Home';
import Availability from './Components/AvailabilityPage';
import NeighborhoodPage from './Components/NeighborhoodPage';
import Interiors from './Components/Interiors';
import PREFERRED_LENDERS from './Components/PREFERRED_LENDERS';
import {  BrowserRouter  ,Route, Routes  } from 'react-router-dom'; 
import Register from './Components/Register';


function App() {
  return (
     <BrowserRouter>
    <div className="App">
    
      <Routes> 
        <Route exact path="/" element={<Home/>} /> 
        <Route path="/availability" element={<Availability/>} />
        <Route path="/Interiors" element={<Interiors/>} />  
        <Route path="/NEIGHBORHOOD" element={<NeighborhoodPage />} /> 
        <Route path="/PREFERRED_LENDERS" element={< PREFERRED_LENDERS/>}/>
        <Route path="/REGISTER" element={< Register/>}/>
        

      </Routes> 
    
    </div>
    </BrowserRouter>
  );
}

export default App;
