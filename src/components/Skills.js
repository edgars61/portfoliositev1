import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faFileCode, faCogs } from "@fortawesome/free-solid-svg-icons";
import FadeIn from 'react-fade-in';
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';


const Skills = () => {
  return (
    <div className="services container-fluid">
      <h1 className="py-5">Skills</h1>
      
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
              <h3>Languages</h3>
              <p>Python, Java, JavaScript, CSS/Sass, HTML</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faLaptopCode} size="2x" /></div>

              <h3>Front-End</h3>
              <p>jQuery, React.js, Redux, Bootstrap 4, UI/UX, Mobile Responsive design, AJAX
</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faCogs} size="2x" /></div>

              <h3>Back-End</h3>
              <p>Django, Node.js, Express, MongoDB Atlas, Kafka, SQLite, MySQL PostgreSQL, Web API, HTTP Requests</p>
            </div>
          </div>
         
        </div>
      </div>
      
    </div>

  )
}

export default Skills;
