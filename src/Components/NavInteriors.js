import React,{useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import interiors from '../images/7-web-or-mls-Old+Ml+Rd+Unit+217-007.jpg';

const NavInteriors = () => {
    const[click,setClick]=useState(false)
  return (
    <div className="avail-txt" style={{backgroundColor:"white"}}>
    <Container>
    <Row className='align-items-center'>
      
     <Col md={6}>
        
            <img src={interiors}alt="img"  style={{maxWidth:"100%"}} />
         </Col>
         <Col md={6}>
           
           <h1 style={{color:"black"}}>ARCHITECTURE & INTERIORS</h1>
             
           <p style={{paddingTop:"20px",color:"black"}}>Park Place offers distinct details and high-end finishes designed for timeless urban living. Expansive windows, 10’ ceilings on first floor, quartz countertops, European-inspired cabinetry, GE appliances, and Delta faucets.</p>
         <div>
         
         {!click? (
          <button className="btn btn-dark Nav_interiors_btn" style={{ padding:" 10px 80px 10px 80px",borderRadius:"0px"}}onClick={()=>setClick(true)}>INTERIORS</button> 
        ) : (
          <Link to="/INTERIORS">
            <button className="btn btn-dark" onClick={()=>setClick(true)}>INTERIORS</button>
          </Link>
        )}
        <br/>
         {!click? (
          <button className="btn btn-dark Nav_FLOOR PLANS_btn" style={{margin:"60px" ,padding:" 10px 70px 10px 70px",borderRadius:"0px"}}onClick={()=>setClick(true)}>FLOOR PLAN</button>
        ) : (
          <Link to="/FLOOR PLANS">
            <button className="btn btn-dark" onClick={()=>setClick(true)}>FLOOR PLAN</button>
          </Link>
        )}
        </div>
        
       </Col>
    </Row>
      </Container>
    </div>
  )
}

export default NavInteriors
