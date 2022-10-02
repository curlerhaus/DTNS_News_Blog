import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




import './login.css'

function Login() {

    const navigate = useNavigate();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));




    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const users = [{ email: "DTNS@gmail.com", password: "1234" }];
    const handleSubmit = (e) => {
        e.preventDefault()
        const account = users.find((user) => user.email === email);
        if (account && account.password === password) {
            setAuthenticated(true)
            localStorage.setItem("authenticated", true);
        }
    };

    return (
        <div className='login'>
            <Container style={{ width: '30rem' }}>
                <Card style={{ top: '9rem' }}>
                    <h3>Log into DTNS News Blog</h3>
                    <Card.Body >
                        <Form onSubmit={handleSubmit}>
                            <Form.Control
                                id="email"
                                name="email"
                                type="text"
                                placeholder="name@example.com"
                                value={email}
                                onChange={handleEmail}
                            />
                            <br />
                            <Form.Control
                                id="password"
                                name="password"
                                type="text"
                                placeholder="password"
                                value={password}
                                onChange={handlePassword} />
                            <br />
                            <Button variant="secondary" onClick={() => navigate('/Home')} > LOG IN</Button >
                        </Form>
                    </Card.Body>
                </Card>
            </Container>

        </div >
    )
}

export default Login






