import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import FormContainer from './FormContainer'
import { Link, Navigate } from 'react-router-dom'
import AlertMessage from './AlertMessgage'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const loginHandle = () => {
        setShow(true)
        return <Navigate to='/' replace/>
    }
    return (
        <FormContainer>
            <h1>Login</h1>
            {show && <AlertMessage prop={{ variant: 'success', message: 'Successfully Logged In!' }} />}
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
        </FormContainer>
    )
}

export default Login