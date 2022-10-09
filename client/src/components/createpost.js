import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNavBar from "./topnavbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "./footer";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const collectData = async () => {
    console.log("here is collectData..", title, category, content);
    let result = await fetch("http://localhost:5001/createpost", {
      method: "post",
      body: JSON.stringify({ title, content, category }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log("Here is the result", result);
    localStorage.setItem("posts", JSON.stringify(result));
    navigate("/home");
  };

  // Handle Title
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  // Handle Category
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  // Handle Content
  const handleContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <TopNavBar />
      <Container className="mb-3" controlId="exampleForm.ControlInput1">
        <Card>
          <h1>Create Post</h1>
          <Card.Body>
            <Form>
              <Form.Control
                type="text"
                placeholder="Post Title"
                id="title"
                value={title}
                onChange={handleTitle}
              />
              <br />
              <Form.Control
                type="text"
                placeholder="Post Category"
                id="category"
                value={category}
                onChange={handleCategory}
              />
              {/* <br />
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Attach Picture</Form.Label>
                <Form.Control type="file" />
              </Form.Group> */}
              <br />
              <Form.Control
                as="textarea"
                rows={6}
                id="content"
                placeholder="Start your post......"
                value={content}
                onChange={handleContent}
              />
              <Button variant="secondary" onClick={collectData}>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>{" "}
      <Footer />
    </>
  );
}
