import React from "react";
import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Barnav() {
    return (
      <>
       <Navbar>
        <Container style={{backgroundColor: "transparent"}}>
        <Navbar.Brand >
        <NavLink to="/" style={{ textDecoration: "none" }}>
            <img
              alt=""
              src="/images/8-removebg-preview.png"
              width="100"
              height="100"
              className="d-inline-block "
            />{' '}
           <span style={{ color: "#FFF5E4", fontWeight: "bold", fontSize: "1.2em", marginTop:"15px" }}> SOLUCIONES AMBIENTALES</span>
           </NavLink>
          </Navbar.Brand>
          <Nav className="ml-4">
            <NavLink to="/" style={ linkStyle }>INICIO</NavLink>
            <NavLink to="/Nosotros"style={ linkStyle }>NOSOTROS</NavLink>
            <NavLink to= "/Contacto" style={ linkStyle }>CONTACTO</NavLink>
          </Nav>
        </Container>
      </Navbar>
      
       </>
    );
  }

  const linkStyle = {
    color: "#FFF5E4",  
    fontWeight: "bold",
    fontSize: "1.2em",    
   textDecoration: "none" // Elimina el subrayado
  };
  
  
  export default Barnav;