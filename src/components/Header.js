import React from "react";
import Typed from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SocialContacts from './SocialContact';

import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        
        
   
        <h2><Typed
          className="typed-text"
          strings={["<h1>Hi,</h1><h1> My name is Edgar Santana</h1> I'm a web developer"]}
          typeSpeed={30}
  
          
        />
        </h2>
      
        <a href="#" className="btn-main-offer">contact me</a>
        
      </div>
     
    </div>
  )
}

export default Header;
