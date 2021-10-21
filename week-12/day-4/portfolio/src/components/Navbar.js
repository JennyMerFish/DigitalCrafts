import React from 'react'
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap"
export default function Navigator() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
  <Container>
    <Navbar.Brand href="#home">Jennifer Neasbitt || Junior Software Engineer</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link href="#link">Home</Nav.Link>
        <Nav.Link href="#home">Projects</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
        <NavDropdown title="Links" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">LinkedIn</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Github</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
