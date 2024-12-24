import React from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { } from 'react-router-dom'
import icon from './car-repair-svgrepo-com.svg'
import './navbar.css'

const NavigBar = () => {
  return (
    <div>
        <Navbar className='navbar' bg="light" data-bs-theme="light">
        <Container>
          
          <Navbar.Brand  href="/"><div className="head-logo">
                <h2 className='site-head'>CarServe</h2>
                <img src={icon} alt="" />
            </div></Navbar.Brand>
          <Nav className="ms-auto ">
            <Nav.Link className='navlink' href="#home">Home</Nav.Link>
            <Nav.Link className='navlink' href="#features">Services</Nav.Link>
            <Nav.Link className='navlink' href="#pricing">About</Nav.Link>
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
          <NavDropdown className='nav-dropdown' title="acount" id="navbarScrollingDropdown">
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