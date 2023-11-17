import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const BootstrapNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Infigon Futures</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/profile">Home</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          {/* Add more navigation links as needed */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BootstrapNavbar;
