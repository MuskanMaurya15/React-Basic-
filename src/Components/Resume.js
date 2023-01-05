import React from "react";
import "../CSS/Resume.css";
import logo from "../Images/dk.jpg";
export default function Resume() {
  return (
    <div className="mainContainer">
      <div className="mainBorder">
        <div className="heading">My Resume</div>
        <div className="myImage">
          <img src={logo} alt="myImages" />
        </div>
      </div>
    </div>
  );
}
