import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import AlertMessage from './AlertMessgage'
import FormContainer from './FormContainer'

const ContactForm = () => {
    const [email, setEmail] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [show, setShow] = useState(false)
    return (
        <FormContainer>
            <h1>Get in Touch</h1>
            <hr />
            <p>Drop us your info and we will get in touch with you within next 24 hours...</p>
            <hr />
            {show && <AlertMessage prop={{ variant: 'success', message: 'Info Submitted' }} />}
            <Row>
                <Form style={{ backgroundImage: 'contact.jpg' }}>
                    <Form.Group controlId='email' className='py-3'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter Email ID'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='phonenum' className='py-3'>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter Phone Number'
                            value={phoneNum}
                            onChange={(e) => setPhoneNum(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group className='py-3'>
                        <Button variant='outline-dark' onClick={() => setShow(true)}>Submit Details</Button>
                    </Form.Group>
                </Form>
            </Row>

        </FormContainer>
    )
}

export default ContactForm