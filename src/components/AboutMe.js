import React from "react";
import me from '../1606011490819.jfif';
import myResume from '../Edgar_Resume.pdf'
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';





const AboutMe = () => {
  return (

    <div id="aboutMe" className="container-fluid py-5 aboutMe">
      <Fade cascade triggerOnce>
    
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={me} alt="author..." />
          </div>
       
        </div>
        <div className="col-lg-4 col-xm-12 AboutMeParagraph">
        <h1 className="about-heading ">About me</h1>

        <p className="aboutMeP">
          I enjoy creating beautifully designed, intuitive and functional websites and web applications.
          <br/>I'm naturally curious, constatly learning, and perpetually working on improving my skills one problem at a time.
       
          </p>
          <div className="row">
          <a href={myResume} download className="downloadResumeButton"><FontAwesomeIcon icon={faDownload}/>   Resume</a>
          </div>
          

       



          
          
        </div>
      </div>
      </Fade>
    </div>

   
  )
}

export default AboutMe