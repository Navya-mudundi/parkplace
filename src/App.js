
import './App.css';
import NavBar from './Components/NavBar';
import NavAvail from './Components/NavAvail';
import Navneigh from './Components/Navneigh';
import NavAmenities from './Components/NavAmenities';
import NavInteriors from './Components/NavInteriors';
import NavSales from './Components/NavSales';
import Register from './Components/Register';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
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
}

export default App;
