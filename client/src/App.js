import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/signUp";
import Select from "./components/select";
import Login from "./components/login";
import Contact from "./components/contact";
// import TopNavBar from "./components/topnavbar";
import Home from "./components/home";
import About from "./components/about";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/select" element={<Select />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// function App() {
//   return (
//     <div>
//       <TopNavBar />
//       <Home />
//       {/* <SignUp /> */}
//       {/* <Select /> */}
//       {/* <Login /> */}
//     </div>
//   );
// }

// export default App;
