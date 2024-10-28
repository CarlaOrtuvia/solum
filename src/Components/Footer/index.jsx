import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./Footer.css"

function Footer() {
    return (

        <Navbar className="footer fixed-bottom">
        <Container classname="justify-content-center">
          <Navbar.Brand href="#home">
            <img
              src="/images/instagram.svg"
              width="30"
              height="30"
              className="social-icon"
              alt="Instagram"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img
              src="/images/facebook.svg"
              width="30"
              height="30"
              className="social-icon"
              alt="Facebook"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img
              src="/images/linkedin.svg"
              width="30"
              height="30"
              className="social-icon"
              alt="LinkedIn"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      
      
        
        
        
        
        
        
        
    
        
    );
}
 export default Footer;