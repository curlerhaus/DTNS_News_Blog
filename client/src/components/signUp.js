import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './signup.css'



export default function SignUp() {


    const navigate = useNavigate();


    return (
        <div className='sign'>
            <Container style={{ width: '30rem' }}>
                <Card style={{ top: '9rem' }}>
                    <h1>Sign Up</h1>
                    <Card.Body >
                        <Form>
                            <Form.Control type="text" placeholder="First Name" />
                            <br />
                            <Form.Control type="text" placeholder="Last Name" />
                            <br />
                            <Form.Control type="text" placeholder="name@example.com" />
                            <br />
                            <Form.Control type="text" placeholder="Password" />
                            <br />
                            <Form.Control type="text" placeholder="Confirm Password" />
                            <br />
                            <Button variant="secondary" onClick={() => navigate('/Home')}>Create Account</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div >
    )
}
