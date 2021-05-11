import React from 'react';
import { Lines } from 'react-preloaders';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () =>{


    return(
        <div className="footer">
            
            <div className="container footer-container" >
                <div className="row">
                    <div className="col-lg-4 col-md-6 com-sm-6 footerColumn" >
                        <div className="d-flex justify-content-center justify-content-md-start">
                            <h4>About</h4>
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-start ">
                            <p>Handcrafted with React and Bootstrap</p>
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-start">
                            <p>&#169; Edgar Santana 2021</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 com-sm-6 footerColumn" >
                        <div className="d-flex justify-content-center justify-content-md-start">
                            <h4>Explore</h4>
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-start">
                            <a href="#myHeader" className="footerSection">Home</a>
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-start">
                            <a href="#aboutMe" className="footerSection">About Me</a>
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-start">
                            <a href="#mySkills"className="footerSection">Skills</a>
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-start">
                            <a href="#portfolio" className="footerSection">Portfolio</a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 com-sm-6 footerColumn" >
                    <div className="d-flex justify-content-center justify-content-md-start">
                            <h4>Connect</h4>
                        </div>

                        <div className="d-flex justify-content-center justify-content-md-start">
                        <div className="row footerSocialLinks">
                        <a href="https://github.com/edgars61" target="_blank" className=" github col-lg-6 col-6 fa-2x"><FontAwesomeIcon icon={faGithub} /></a> 
                        <a href="https://www.linkedin.com/in/edgar-s-9b56a01a4/" target="_blank" className="linkedin col-lg-6 col-6 fa-2x"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                            
                        </div>

                        
                        
                       
                    </div>
                  

                </div>
            </div>
        
        </div>
    )
}

export default Footer;