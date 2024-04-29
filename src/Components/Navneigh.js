import React,{useState}from 'react';
import aerial from '../images/aerial-min.jpg';
import { Link } from 'react-router-dom'; 
import { Container, Row, Col,Image } from 'react-bootstrap';


const Navneigh = () => {
   const[clicked,setClicked]=useState(false)
   return (
    <div className="avail-neigh"  style={{margin:"0px"}}>
    <Container>
    <Row className="align-items-center">
      <Col md={6} >
        <Image  src={aerial} alt="bg" fluid />
      </Col>
      <Col md={6}>
        
          
          <div className='neigh-txt'style={{ padding: '50px 40px',color:"black" }}>
              <h1>NEIGHBORHOOD</h1>
               <p>Nestled between a quiet residential neighborhood and future Lakeline Park, Park Place is conveniently located with easy access to Cedar Park, The Domain, Round Rock, Lake Travis, and Austin. </p>
               {!clicked ? (
              <button className="btn btn-dark nav_neigh_btn"style={{padding:" 20px 90px ",borderRadius:"0px"}}onClick={()=>setClicked(true)}>DISCOVER</button>
               ) : (
               <Link to="/NEIGHBORHOOD">
                  <button className="btn btn-dark">DISCOVER</button>
              </Link>
              )}
           </div>

        </Col>
      </Row>
    </Container>
    </div>
    )
}

export default Navneigh