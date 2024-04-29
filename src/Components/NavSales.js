import React ,{useState}from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import bg from '../images/9-web-or-mls-Old+Ml+Rd+Unit+217-009.jpg';

const NavSales = () => {
    const[click,setClick]=useState(false)
  return (
    <div className='avail-txt'>
    <Container>
    <Row className='align-items-center'>
        <Col md={6}>
            <img src={bg} alt="/fan"></img>
        </Col>

        <Col md={6}>
           <div>
            <h1>SALES MODEL NOW OPEN</h1>
            <p> We invite you to join us at the Park Place sales model to learn more about about the community including home prices & current promotional offers, or register below.</p>
            <ul  style={{listStyleType:"none"}} >
                <li>Sun, Mon, Thurs, Fri: 12-5</li>
                <li>Tues & Wed: By Appointment </li>
                <li>Saturday: 10-5</li>
            </ul>
          </div>
          <div>
            
         {!click? (
          <button className="btn btn-dark Nav_interiors_btn" style={{ padding:" 10px ",borderRadius:"0px"}}onClick={()=>setClick(true)}>SCHDULE APPOINTMENT</button> 
        ) : (
          <Link to="/">
            <button className="btn btn-dark" onClick={()=>setClick(true)}>SCHDULE APPOINTMENT</button>
          </Link>
        )}
          </div>
        </Col>
        </Row>
    </Container>
      
    </div>
  )
}

export default NavSales
