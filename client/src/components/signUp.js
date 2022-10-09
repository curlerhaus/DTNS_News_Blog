import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./signup.css";
import Topnavbar from "./topnavbar";
import Footer from "./footer";

export default function SignUp() {
  //State for Registration
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  const collectData = async () => {
    console.log(firstName, lastName, email, password, password2);
    let result = await fetch("http://localhost:5001/signup", {
      method: "post",
      body: JSON.stringify({ firstName, lastName, email, password, password2 }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log("Here is the result", result);
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/login");
  };

  // Handling the first change
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  // Handling the last change
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handling the password2 confirm
  const handlePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  return (
    <div className="sign">
      <Topnavbar />
      <Container className="mb-3">
        <Card className="mb-3">
          <h1>Sign Up</h1>
          <Card.Body>
            <Form>
              <Form.Control
                type="text"
                placeholder="First Name"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={handleFirstName}
              />
              <br />
              <Form.Control
                type="text"
                placeholder="Last Name"
                id="name"
                name="lastName"
                value={lastName}
                onChange={handleLastName}
              />
              <br />
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
                placeholder="create password"
                id="password"
                name="password"
                value={password}
                onChange={handlePassword}
              />
              <br />
              <Form.Control
                type="text"
                placeholder="confirm password"
                id="password2"
                name="password2"
                value={password2}
                onChange={handlePassword2}
              />
              <br />
              <Button variant="secondary" type="button" onClick={collectData}>
                Create Account
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </div>
  );
}
