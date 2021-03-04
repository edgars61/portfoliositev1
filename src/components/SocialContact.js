import React from "react";
import Typed from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';


const SocialContacts = () =>{

    return(
  

<div class="SocialMedias">
<a href="https://github.com/edgars61" target="_blank" class="facebook fa-lg"><FontAwesomeIcon icon={faGithub} /></a>
<a href="https://www.linkedin.com/in/edgar-s-9b56a01a4/" target="_blank" class="facebook fa-lg"><FontAwesomeIcon icon={faLinkedin} /></a>
<a href="mailto:edgarsantana.62a@gmail.com"  class="facebook fa-lg"><FontAwesomeIcon icon={faEnvelope} /></a>


</div>
    )


}

export default SocialContacts;