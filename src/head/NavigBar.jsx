import React, { useEffect } from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { } from 'react-router-dom'
import icon from './car-repair-svgrepo-com.svg'
import './navbar.css'
import { BiMenu } from 'react-icons/bi'

const NavigBar = () => {
      useEffect(() => {
        
        let toggleIcon = document.querySelector('.togglbar')

        let menu = document.querySelector('.container')

        const  addClass = (e)=>{
          menu.classList.toggle('is-active')
          e.preventDefault()
        }

        toggleIcon.addEventListener('click',addClass)

         }, [])
            
        
  return (
    <div>
        <Navbar bg="light" data-bs-theme="light">
        
          
          <Navbar.Brand  href="/"><div className="head-logo">
                <img src={icon} alt="" />
                <h2 className='site-head'>CarServe</h2>
                <BiMenu className='togglbar'/>
            </div>
            </Navbar.Brand>
            
            <Container className='container'>
          <Nav className="nav">
            <Nav.Link className='navlink' href="/">Home</Nav.Link>
            <Nav.Link className='navlink' href="/">Services</Nav.Link>
            <Nav.Link className='navlink' href="/">About</Nav.Link>
          </Nav>
          <NavDropdown className='nav-dropdown' title="acount" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Signup
              </NavDropdown.Item>
              <NavDropdown.Divider />
        
            </NavDropdown>
            <Form className="nav-search">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
        
      </Navbar>
    </div>
  )
}

export default NavigBar