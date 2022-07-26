import React, { useState } from 'react'
import FormContainer from './FormContainer'
import { Form, Button } from 'react-bootstrap'

const Register = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <FormContainer>
            <h1>Register</h1>
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
                <Form.Group className='py-3 text-center'>
                    <Button variant='outline-dark' size='md' type='submit' className='px-5 py-2 m-2' style={{ fontSize: '18px' }}>Register</Button>
                </Form.Group>
            </Form>
        </FormContainer>
    )
}

export default Register