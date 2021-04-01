import React, { useState } from 'react';
import logo from "../logo4.png";
import Fade from 'react-reveal/Fade';
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

const MyComponent = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ?  <Fade left>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Skills</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Portfolio</a>
      </li>

    
   
    

    </ul>
    <div className="container-fluid">
    <div class="row">
    <a className="nav-link nav-icon col-4" href="mailto:edgarsantana.62a@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
    <a className="nav-link nav-icon col-4" href="https://github.com/edgars61"><FontAwesomeIcon icon={faGithub}/></a>
    <a className="nav-link nav-icon col-4" href="https://www.linkedin.com/in/edgar-s-9b56a01a4/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
    </div>
    </div>


  </div>
  </Fade> : <Fade top>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Skills</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Portfolio</a>
      </li>
    </ul>

  </div>
  </Fade>;
}
const Navbar = () => {


  




  return (
    <nav className="navbar navbar-custom navbar-expand-lg">
      <div className="container">

        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>
      <MyComponent/>

      </div>
    </nav>
  )
}

export default Navbar