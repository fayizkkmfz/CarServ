import React from 'react'
import { Button, Card} from 'react-bootstrap'
import './Services.css'

const Services = () => {
  return (
    <>
        <div>
            <h2 className='services_headings'>Popular Services</h2>
    </div>
    <div className='popular_services'>
        <div >
        <Card className='services-card'>
      <Card.Img variant="top" src="https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/home_treninding_images_v1/car-service.png" />
    </Card>
        <Button variant="primary">Let me Check</Button>
        </div>
        <div>
        <Card className='services-card'>
      <Card.Img variant="top" src="https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/home_treninding_images_v1/tyre.png" />
    </Card>
        <Button variant="primary">Let me Check</Button>
        </div>
        <div >
        <Card className='services-card'>
      <Card.Img  variant="top" src="https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/home_treninding_images_v1/ac.png" />
    
    </Card>
        <Button variant="primary">Let me Check</Button>
        </div>
        <div >
        <Card className='services-card'>
      <Card.Img  variant="top" src="https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/home_treninding_images_v1/clutch.png" />
      
    </Card>
        <Button variant="primary">Let me Check</Button>
        </div>

        
    </div>
    </>

  )
}

export default Services