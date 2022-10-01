import React from 'react'

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './login.css'

function login() {
    return (
        <div className='login'>
            <Container style={{ width: '30rem' }}>
                <Card style={{ top: '9rem' }}>
                    <h3>Log into DTNS News Blog</h3>
                    <Card.Body >
                        <Form>
                            <Form.Control type="text" placeholder="name@example.com" />
                            <br />
                            <Form.Control type="text" placeholder="Password" />
                            <br />
                            <Button variant="secondary">LOG IN</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>

        </div>
    )
}

export default login