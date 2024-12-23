import React from 'react'
import { Button, Card} from 'react-bootstrap'
import './Services.css'

const Services = () => {
  return (
    <>
        <div>
            <h2 className='home_headings'>Popular Services</h2>
    </div>
    <div className='popular_services'>
        <div >
        <Card style={{ width: '18rem',marginLeft:'50px',padding:'10px'}}>
      <Card.Img variant="top" src="https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/home_treninding_images_v1/car-service.png" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
           
        </Card.Text>
        <Button variant="primary">Let me Check</Button>
      </Card.Body>
    </Card>
        </div>
        <div>
        <Card style={{ width: '18rem',padding:'10px',marginLeft:'10px' }}>
      <Card.Img variant="top" src="https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/home_treninding_images_v1/tyre.png" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
           
        </Card.Text>
        <Button variant="primary">Let me Check</Button>
      </Card.Body>
    </Card>
        </div>
        <div >
        <Card style={{ width: '18rem',padding:'10px',marginLeft:'10px' }} >
      <Card.Img  variant="top" src="https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/home_treninding_images_v1/ac.png" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">Let me Check</Button>
      </Card.Body>
    </Card>
        </div>
        <div >
        <Card style={{ width: '18rem',padding:'10px',marginLeft:'10px' }} >
      <Card.Img  variant="top" src="https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/home_treninding_images_v1/clutch.png" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Button variant="primary">Let me Check</Button>
      </Card.Body>
    </Card>
        </div>

        
    </div>
    </>

  )
}

export default Services