import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Barnav() {
    return (
      <>
       <Navbar>
        <Container style={{backgroundColor: "transparent"}}>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src="/images/8-removebg-preview.png"
              width="100"
              height="100"
              className="d-inline-block "
            />{' '}
           <span style={{ color: "#FFF5E4", fontWeight: "bold", fontSize: "1.2em", marginTop:"15px" }}> SOLUM ARG.</span>
          </Navbar.Brand>
          <Nav className="mt-1">
            <Nav.Link href="#home" style={{ color: "#FFF5E4", fontWeight: "bold", fontSize: "1.2em", marginTop:"15px" }}>INICIO</Nav.Link>
            <Nav.Link href="#features"style={{ color: "#FFF5E4", fontWeight: "bold", fontSize: "1.2em", marginTop:"15px" }}>NOSOTROS</Nav.Link>
            <Nav.Link href="#pricing"style={{ color: "#FFF5E4", fontWeight: "bold", fontSize: "1.2em", marginTop:"15px" }}>CONTACTO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
       </>
    );
  }
  
  export default Barnav;