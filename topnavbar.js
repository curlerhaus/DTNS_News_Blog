import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import signUp from './signUp'
import login from './login'

function topnavbar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <image src=".public/logo/logo-white.png" alt="logo" />
                    <Navbar.Brand href="#home">DTNS News Blog</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#aboutUs">About Us</Nav.Link>
                        <Nav.Link href="login">Login</Nav.Link>
                        <Nav.Link href="signUp">SignUp</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </div>
    )
}

export default topnavbar