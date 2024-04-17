import React,{useState} from 'react'
import { Link } from 'react-router-dom'; 
import amenities from '../images/amenities.jpg';
import { Container, Row, Col } from 'react-bootstrap';
const NavAmenities = () => {
    const[click,setClick]=useState(false)
  return (
    <div className="avail-txt" style={{backgroundColor:"beige"}}>
    <Container >
    <Row className='align-items-center' >
    <Col md={6}>
    <div style={{color:'black'}}>
            <h1>AMENITIES</h1>
             <p style={{paddingTop:"20px"}}>Lakeline Park is a new outdoor recreation area located right next to Park Place. Spanning approximately 200 acres, Lakeline Park features a multitude of outdoor activities and amenities, including:</p>
             <ul>
           <li>
  
         Lakeline Lake and wildflower meadows
         </li>
           <li>
           Multipurpose pavilions
           </li>

           <li>
           Over 3 miles of hiking/biking trails
           </li>
           <li>
           Playground, fishing piers, and kayak launch
           </li>
           <li>
          Sports fields and courts
          </li>
         </ul>
         
          {!click? (
          <button className="btn btn-dark nav_amenities_btn" style={{padding:" 20px 90px 20px 90px",borderRadius:"0px"}}onClick={()=>setClick(true)}>EXPLORE</button>
        ) : (
          <Link to="/AMENITIES">
             <button className="btn btn-dark" onClick={()=>setClick(true)}>EXPLORE</button>
           </Link>
        )}
        </div>
        </Col>
        <Col md={6}>
        <img style={{width:"60%",height:"auto"}}src={amenities}alt="img"   />
            </Col>
    </Row>
</Container>
</div>
      
  )
 }

export default NavAmenities
