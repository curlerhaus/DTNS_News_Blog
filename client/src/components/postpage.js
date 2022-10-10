import React from "react";
import Footer from "./footer";
import "./postpage.css";

import Topnavbar from "./topnavbar";

export default function Postpage() {
  return (
    <div>
      <Topnavbar />
      <div>
        <h1 className="postheadline">Tacos! Tacos! Tacos!</h1>
        <h4 className="postheadline">I want a taco.</h4>
        <img className="postimg" src="./tacos.jpg" alt="tacos" />
        <p className="posttext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <Footer />
    </div>
  );
}
