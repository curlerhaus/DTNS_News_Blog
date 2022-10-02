import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom";


function Topnavbar() {

    const navigate = useNavigate();


    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">DTNS News Blog</Navbar.Brand>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="secondary">Search</Button>
                </Container>

                <Button variant="secondary" onClick={() => navigate('/Login')}>Login</Button>
                <Button variant="secondary" onClick={() => navigate('/signup')}>SignUp</Button>

            </Navbar>
        </div>
    )
}

export default Topnavbar