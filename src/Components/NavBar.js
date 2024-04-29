import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../images/PP-Logo+copy.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll",handleScroll );
  }, []);

 
  return (
 
    <Navbar expand="md"className={scrolled ? "scrolled" : ""}>
    <Container>
    <Navbar.Brand as={Link} to="/" className="logo-brand">
         <img src={logo} alt="Logo" /> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{paddingLeft:"50px"}} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <div className="navbar-links">
             <Nav.Link as={Link} to="/availability">AVAILABILITY</Nav.Link>
             <Nav.Link as={Link} to="/Interiors" >INTERIORS</Nav.Link>
             <Nav.Link as={Link} to="/NEIGHBORHOOD" >NEIGHBORHOOD</Nav.Link>
             <Nav.Link as={Link} to="/PREFERRED_LENDERS" >PREFERRED LENDERS</Nav.Link>
             <Nav.Link as={Link} to="/BROCHURE"  download="brochure.pdf">BROCHURE</Nav.Link> 
             
             
             </div>
           </Nav>
       
          <Nav>
            <button className="vvd" >REGISTER</button>
          </Nav>
       </Navbar.Collapse>
       </Container>
    </Navbar>
    
  );
}

export default NavBar;
