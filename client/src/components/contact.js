import Form from "react-bootstrap/Form";
import TopNavBar from "./topnavbar";
import "./contact.css";
import Button from "react-bootstrap/Button";

export default function Contact() {
  return (
    <>
      <TopNavBar />
      <h1>Contact Us</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
