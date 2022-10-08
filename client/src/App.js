import React from "react";
import SignUp from "./components/signUp";
// import Select from "./components/select";
import Login from "./components/login";
import TopNavBar from "./components/topnavbar";
import Home from "./components/home";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <TopNavBar /> */}
          {/* <Home /> */}
          {/* <Select /> */}
          {/* <Login /> */}
          <Route path="/" element={<TopNavBar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
