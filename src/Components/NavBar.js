import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../images/PP-Logo+copy.png';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
 
    <Navbar expand="md"className={scrolled ? "scrolled" : ""}>
    <Container>
      <Navbar.Brand href="#home"className="logo-brand">
         <img src={logo} alt="Logo" /> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{paddingLeft:"50px"}} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <div className="navbar-links">
             <Nav.Link href="#AVAILABILITY" className={activeLink === 'AVAILABILITY' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('AVAILABILITY')}>AVAILABILITY</Nav.Link>
             <Nav.Link href="#INTERIORS" className={activeLink === 'INTERIORS' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('INTERIORS')}>INTERIORS</Nav.Link>
             <Nav.Link href="#NEIGHBORHOOD" className={activeLink === 'NEIGHBORHOOD' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('NEIGHBORHOOD')}>NEIGHBORHOOD</Nav.Link>
             <Nav.Link href="#PREFERRED_LENDERS" className={activeLink === 'PREFERRED_LENDERS' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('PREFERRED_LENDERS')}>PREFERRED LENDERS</Nav.Link>
             <Nav.Link href="#BROCHURE" className={activeLink === 'BROCHURE' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('BROCHURE')}  download="brochure.pdf">BROCHURE</Nav.Link>
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
