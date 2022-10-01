import React from 'react'

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import './select.css'

function select() {
    return (
        <div className='select'>
            <Container className='c-1'>
                <Card>
                    <Card.Body>
                        <Card className='c-2'><h4>Content Creator Sign Up</h4></Card>
                        <br />
                        <Card className='c-2'><h4>Comment Account Sign Up</h4></Card>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default select