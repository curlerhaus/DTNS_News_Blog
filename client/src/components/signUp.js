import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "./footer";

import "./signup.css";
import Topnavbar from "./topnavbar";

export default function SignUp() {
  const navigate = useNavigate();

  //State for Registration
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  //state for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the firstname change
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
  };

  // Handling the lastname change
  const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the password2 confirm
  const handlePassword2 = (e) => {
    setPassword2(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      password2 === ""
    ) {
      setError(true);
      navigate("/login");
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {email} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="sign">
      <Topnavbar />
      {/* Calling to the methods */}
      <div>
        {errorMessage()}
        {successMessage()}
      </div>
      <Container
        style={{ width: "30rem" }}
        className="mb-3"
        controlId="exampleForm.ControlInput1"
      >
        <Card>
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
              <Button variant="secondary" type="submit" onClick={handleSubmit}>
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
