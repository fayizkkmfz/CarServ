import React from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { } from 'react-router-dom'
import { GiMechanicGarage } from "react-icons/gi";

const NavigBar = () => {
  return (
    <div>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          
          <Navbar.Brand  href="#home"><GiMechanicGarage />CarServ</Navbar.Brand>
          <Nav className="ms-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Services</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <NavDropdown title="Connect" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Signup
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Cart
              </NavDropdown.Item>
            </NavDropdown>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigBar