import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./topnavbar.css";

import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Topnavbar() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <a href="/home" className="logo">
            <img src="./logo/DTN_logo.png" alt="logo" />
          </a>
          <Nav className="me-auto">
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/createpost">Create Post</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-6"
              aria-label="Search"
            />
            <div class="divider" />

            <Button variant="secondary">Search</Button>
          </Form>
        </Container>

        <Button variant="secondary" onClick={() => navigate("/Login")}>
          Login
        </Button>
        <div class="divider" />
        <Button variant="secondary" onClick={() => navigate("/signup")}>
          SignUp
        </Button>
        <div class="divider" />
      </Navbar>
    </div>
  );
}

export default Topnavbar;
