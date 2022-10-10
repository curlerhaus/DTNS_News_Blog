import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./topnavbar.css";

import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Topnavbar() {
  const navigate = useNavigate();
  const change = localStorage.getItem('user');

  const logOut = () => {
    localStorage.clear();
    navigate('/')
  }

  return (
    <div >
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Nav.Link href="/home" className="logo">
            <img src="./logo/DTN_logo.png" alt="logo" /></Nav.Link>
          <Nav className="me-auto">
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/post">Create Post</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="spacing"
            />
            <Button variant="secondary" className="search">Search</Button>
          </Form>
        </Container>



        {/* Signup button to Login */}
        {change ? <Button variant="secondary" onClick={logOut} to="/">
          Logout
        </Button>

          : <>
            <Button variant="secondary" className="spacing" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button variant="secondary" onClick={() => navigate("/signup")}>
              SignUp
            </Button>

          </>
        }


      </Navbar>
    </div>
  )
}





export default Topnavbar;
