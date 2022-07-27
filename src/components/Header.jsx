import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
    return (
        <header className='pb-2'>
            <Navbar className='py-3'>
                <Container fluid>
                    <Navbar.Brand href='/'> <img src="./logo.jpg" alt="Logo" width={80} /> EverythingBeach</Navbar.Brand>
                    <Nav className='justify-content-center'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/activities'>Activities</Nav.Link>
                        <Nav.Link href='/contactus'>Contact Us</Nav.Link>
                        <Nav.Link href='/aboutus'>About Us</Nav.Link>
                    </Nav>
                    <Nav className='ml-auto px-5'>
                        <Nav.Link href='/login'>Login</Nav.Link>
                        <NavDropdown title="Username">
                            <NavDropdown.Item href='/myprofile'>
                                Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item href='/mybooking'>
                                Bookings
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='/'>
                                Sign Out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header   