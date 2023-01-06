import React from "react";
import '../CSS/NavBar.css'
import logo from '../Images/logo.png'
export default function NavBar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
           <img src={logo} alt='logo Image' />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav"> 
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Home">
                  Home
                  {/* {props.age} */}
              </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                {props.title}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {/* Contact */}
                  {props.phone}
                </a>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
