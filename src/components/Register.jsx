import React, { useState } from 'react'
import FormContainer from './FormContainer'
import { Form, Button, Alert, Row, Col, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")
    const [show, setShow] = useState(false)
    const [alertMess, setAlertMess] = useState('')
    const [alertVar, setAlertVar] = useState('')
    const registerHandle = () => {
        if (email !== "" && name !== "" && password !== "" && gender !== "") {
            setAlertMess('Profile Successfully Registered!')
            setAlertVar('success')
            setShow(true)
            setTimeout(() => {
                return navigate("/")
            }, 1500);
        } else {
            setAlertMess('Please fill all details')
            setAlertVar('danger')
            setShow(true)
        }
    }
    return (
        <Container>
            <Row>
                <Col className="col-4">
                    <img src="/beachregister.jpg" alt="registerVector" width={600} className="rounded" />
                </Col>
                <Col className="col-8 mr-auto">
                    <FormContainer>
                        <h1 className='text-center mt-5 pt-3'>Register</h1>
                        {show && <Alert variant={alertVar} dismissible={true} onClose={() => { setShow(false) }}>{alertMess}</Alert>}
                        <Form>
                            <Form.Group controlId='email' className='py-3'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter Email ID'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='name' className='py-3'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter Email ID'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='password' className='py-3'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='gender' className='py-3'>
                                <Form.Label>Gender</Form.Label> <br />
                                <Form.Check
                                    inline
                                    label="Male"
                                    name="gender"
                                    type="radio"
                                    id='inline-radio-1'
                                    value="male"
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <Form.Check
                                    inline
                                    label="Female"
                                    name="gender"
                                    type="radio"
                                    id='inline-radio-2'
                                    value="female"
                                    onChange={(e) => setGender(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className='py-3 text-center'>
                                <Button variant='outline-dark' size='md' onClick={registerHandle} className='px-5 py-2 m-2' style={{ fontSize: '18px' }}>Register</Button>
                            </Form.Group>
                        </Form>
                    </FormContainer>
                </Col>
            </Row>
        </Container>
    )
}

export default Register