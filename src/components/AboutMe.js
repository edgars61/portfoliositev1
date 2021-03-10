import React from "react";
import me from '../1606011490819.jfif';
import Reveal from 'react-reveal/Reveal';




const AboutMe = () => {
  return (

    <div className="container-fluid py-5 aboutMe">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={me} alt="author..." />
          </div>
        </div>
        <div className="col-lg-4 col-xm-12 AboutMeParagraph">
       

<h1 className="about-heading ">about me</h1>

          
          <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
          turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero 
          sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. 
          estibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus
          </p>
        </div>
      </div>
    </div>

   
  )
}

export default AboutMe