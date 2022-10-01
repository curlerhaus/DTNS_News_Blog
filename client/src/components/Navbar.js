export default function navbar () {
    return
    <header>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">DTNS News Blog</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Nav.Link href="#aboutUs">About Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
  </header>
  }