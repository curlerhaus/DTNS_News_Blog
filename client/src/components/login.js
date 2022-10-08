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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("email,password", email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/home");
    } else {
      alert("Your database do not exist!");
    }
  };

  // Handling the email to login
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the password to login
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login">
      <Topnavbar />
      <Container className="mb-3">
        <Card className="mb-3">
          <h3>Log into DTNS News Blog</h3>
          <Card.Body>
            <Form>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                id="email"
                name="email"
                value={email}
                onChange={handleEmail}
              />
              <br />

              <Form.Control
                type="text"
                placeholder="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePassword}
              />
              <br />
              <Button variant="secondary" onClick={handleLogin}>
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
