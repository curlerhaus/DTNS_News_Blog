import React from "react";
import SignUp from "./components/signUp";
import Login from "./components/login";
import Home from "./components/home";
import Contact from "./components/contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about";
import CreatePost from "./components/createpost";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="Signup" element={<SignUp />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="post" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
