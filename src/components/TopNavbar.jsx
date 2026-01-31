import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const TopNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Container>
      <Navbar.Brand href="#">Event Handler</Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar">
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
        </Nav>
        <Button variant="outline-light" size="sm">Get Started</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopNavbar;
