import Form from "react-bootstrap/Form";
import TopNavBar from "./topnavbar";
import Button from "react-bootstrap/Button";
import Footer from "./footer";
import { Container } from "react-bootstrap";
import "./scss/style.css";

export default function Contact() {
  return (
    <>
      <TopNavBar />
      <Container>
        <div className="contactUs">
          <h1>Contact Us</h1>
          <Form style={{ width: "60rem" }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="btn-primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </>
  );
}
