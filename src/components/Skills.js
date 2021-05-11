import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faFileCode, faCogs } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";



const Skills = () => {
  return (
    <div id="mySkills" className="services container-fluid">
      <Fade cascade direction="left" triggerOnce>
      <h1 className="py-5">Skills</h1>
      
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
              <h3>Languages</h3>
              <div className="container languagesList">
                <div className="row">
                  <div className ="col-lg-6 col-md-6 col-6">
                  <ul>
  <li>Python</li>
  <li>Java</li>
  <li>JavaScript</li>
</ul>


                  </div>

                  <div className ="col-lg-6 col-6 col-md-6">
                  <ul>
  <li>CSS/Sass</li>
  <li>HTML</li>
  <li>SQL</li>
</ul>
                    
                  </div>
                </div>
              </div>
            
            </div>
          </div>
          {/* - */}
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faLaptopCode} size="2x" /></div>

              <h3>Front-End</h3>
              <div className="container languagesList">
                <div className="row">
                  <div className ="col-lg-6 col-md-6 col-6">
                  <ul>
  <li>jQuery</li>
  <li>React.js</li>
  <li>Redux</li>
  <li>AJAX</li>
</ul>


                  </div>

                  <div className ="col-lg-6 col-6 col-md-6">
                  <ul>
  <li>Bootstrap</li>
  <li>Mobile Responsive Design</li>
 
</ul>
                    
                  </div>
                </div>
              </div>
           
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faCogs} size="2x" /></div>

              <h3>Back-End</h3>
              <div className="container languagesList">
                <div className="row">
                  <div className ="col-lg-6 col-md-6 col-6">
                  <ul>
  <li>Django</li>
  <li>Node.js</li>
  <li>Express</li>
  <li>SQLite</li>
</ul>


                  </div>

                  <div className ="col-lg-6 col-6 col-md-6">
                  <ul>
  <li>MySQL</li>
  <li>Web API</li>
  <li>HTTP Requests</li>
 
</ul>
                    
                  </div>
                </div>
              </div>
             
            </div>
          </div>
         
        </div>
      </div>
      </Fade>
    </div>

  )
}

export default Skills;
