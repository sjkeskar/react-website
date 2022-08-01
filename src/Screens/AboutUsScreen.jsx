import React from 'react'
import { Container } from 'react-bootstrap'

const AboutUsScreen = () => {
  return (
    <Container className='text-center'  >
      <h2>About Us</h2>
      <div className="text-center py-3">
        <img src="aboutusheader.jpg" alt="Aboutus" height={400} className="rounded"/>
      </div>
      <p>Young Seaside Dwellers obsessed with making it easy for people to use the service
        to helping water sports provider increase their reach,
        online and offline. We have grown together with our partners.</p>
    </Container>
  )
}

export default AboutUsScreen