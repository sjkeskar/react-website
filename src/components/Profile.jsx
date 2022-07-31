import React, { useState } from 'react'
import { Form, Row, Col, Container } from 'react-bootstrap'
import FormContainer from './FormContainer'

const Profile = () => {
    const [email, setEmail] = useState('dummy@gmail.com')
    const [name, setName] = useState('Siddhant Keskar')
    const [gender] = useState('Male')
    return (
        <Container>
            <Row>
                <Col className='col-2'></Col>
                <Col className='col-8'>
                    <FormContainer>
                        <div className="text-center">
                            <h2>Profile</h2>
                        </div>
                        <div className="text-center">
                            <img src="profile.jpg" alt="Profile" className='rounded-circle' width={240} />
                        </div>
                        <Form>
                            <Form.Group controlId='email' className='py-3'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter Email ID'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='name' className='py-3'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter Email ID'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    disabled
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='gender' className='py-3'>
                                <Form.Label>Gender</Form.Label> <br />
                                <Form.Control
                                    type='text'
                                    placeholder='Enter Email ID'
                                    value={gender}
                                    onChange={(e) => setName(e.target.value)}
                                    disabled
                                ></Form.Control>
                            </Form.Group>
                        </Form>
                    </FormContainer>
                </Col>
                <Col className='col-2'></Col>
            </Row>
        </Container>
    )
}

export default Profile