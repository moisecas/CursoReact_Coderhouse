import React from 'react'
import Cartwidget from './Cartwidget';

import Container from 'react-bootstrap/Container'; //es necesario importar los componentes de bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//importar css

// import {LinkContainer} from 'react-router-bootstrap' //react-router-bootstrap 
// import { Navbar, Nav, Container} from 'react-bootstrap' 

const Nabvar = () => {
  return (
    
    <Navbar bg="light" expand="lg">
      <Container>
        <Cartwidget  /> 
        <Navbar.Brand href="#home">ShopCoder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   

  )
}

export default Nabvar