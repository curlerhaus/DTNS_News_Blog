import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./login.css";
import Topnavbar from "./topnavbar";
import Footer from "./footer";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle Login
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { email, password };

    fetch("http://localhost:3000/Login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
    });
  };

  return (
    <div className="login">
      <Topnavbar />
      <Container
        style={{ width: "30rem" }}
        className="mb-3"
        controlId="exampleForm.ControlInput1"
      >
        <Card>
          <h1>Login</h1>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />

              <Form.Control
                type="text"
                placeholder="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <Button variant="secondary" onClick={() => navigate("/Home")}>
                {" "}
                LOG IN
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </div>
  );
}

export default Login;
