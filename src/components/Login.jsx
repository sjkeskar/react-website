import React, { useState } from 'react'
import { Form, Button, Alert, Row, Col, Container } from 'react-bootstrap'
import FormContainer from './FormContainer'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const [alertMess, setAlertMess] = useState('')
    const [alertVar, setAlertVar] = useState('')
    const loginHandle = () => {
        if (email === "admin@example.com" && password === "admin") {
            setAlertMess('Successfully Logged In!')
            setAlertVar('success')
            setShow(true)
            setTimeout(() => {
                return navigate("/")
            }, 1500);
        } else {
            setAlertMess('Wrong Credentials')
            setAlertVar('danger')
            setShow(true)
        }
    }
    return (
        <Container>

            <Row>
                <Col className="col-4">
                    <img src="/beachsidebar.jpg" alt="LoginVector" width={600} className="rounded" />
                </Col>
                <Col className="col-8">
                    <h1 className='text-center mt-5 pt-3'>Login</h1>
                    <FormContainer >
                        {show && <Alert variant={alertVar} dismissible={true} onClose={() => { setShow(false) }}>{alertMess}</Alert>}
                        <Form className="align-middle">
                            <Form.Group controlId='email' className='py-3'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter Email ID'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                            <Form.Group className="py-3 text-center">
                                <Button variant='outline-dark' size='md' className='px-5 py-2 m-2' style={{ fontSize: '18px' }} onClick={loginHandle}>Login</Button>
                            </Form.Group>

                        </Form>
                        <p className='p-2 text-center'>Don't have an Account? <Link to='/register'>Sign up Here</Link> </p>
                    </FormContainer >
                </Col>
            </Row>
        </Container>
    )
}

export default Login