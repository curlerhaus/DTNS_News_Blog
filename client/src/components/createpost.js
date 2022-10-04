import TopNavBar from "./topnavbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CreatePost() {
  return (
    <div className="createpost">
      <TopNavBar />
      <Container style={{ width: "30rem" }}>
        <Card style={{ top: "9rem" }}>
          <h1>Create Post</h1>
          <Card.Body>
            <Form>
              <Form.Label>Post Title</Form.Label>
              <Form.Control type="text" placeholder="Post Title" />
              <br />
              <Form.Label>Post Category</Form.Label>
              <Form.Control type="text" placeholder="Post Category" />
              <br />
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Attach Picture</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <br />
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={6} />
              <Button variant="secondary">Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
