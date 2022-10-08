const React = require('react');
const Def = require('../default');

function contact () {
    return (
        <>
          <TopNavBar />
          <Container>
            <h1 style={{ "text-align": "center" }}>Contact Us</h1>
            <Form style={{ width: "60rem" }}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
          <Footer />
        </>
      );
}

module.exports = contact