import React from 'react';
import {Navbar, Button, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import './Navbar.css';

const navbar = props => (
  <div id="navbar">
    <Navbar bg="light" expand="lg">
  <Navbar.Brand id="Logo" href="#home">Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link id="Logbtn" href="#home">Log In/Nothing</Nav.Link>
      <Nav.Link id="Signbtn" href="#link">Sign Up/Out</Nav.Link>
      <Nav.Link id="Createbtn" href="#link">Create a Quiz</Nav.Link>
      <NavDropdown title="Your Account" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Previous Scores</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Quizzes Created</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Extra Feature</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Knock their Socks Off</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</div>
);

export default navbar;
