import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './contactus.css'

function ContactUs() {
  return (
    <>
      
 <div className='d-flex'>

 <div className='contact_form'>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email Id</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Email Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="phone" placeholder="Enter Your Mobile Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Car Name With Model</Form.Label>
        <Form.Control type="password" placeholder="Enter your Complainted Car Name" />
        <Form.Text className="text-muted">
          Please Specify Your Car Model NO and Year
        </Form.Text>
      </Form.Group>
      <Form.Select aria-label="Default select example">
      <option>Select Service You Want</option>
      <option value="1">Tyre Replacement</option>
      <option value="2">Ac Service</option>
      <option value="3">Clutch And Bumpers</option>
      <option value="4">Other Maintenance</option>
    </Form.Select>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    <div className='find'>
    <h2>ContactUs</h2>

    </div>
 </div>
    </>
  )
}

export default ContactUs