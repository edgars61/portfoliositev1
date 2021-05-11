import React from "react";
import netflix from "../images/netflix.png";
import netflix2 from "../images/AskAway.PNG";
import cityGuide from "../images/mockuper (13).png";
import portfolio from "../images/portfoliositedesktop.PNG";
import personalPortfolio from "../images/iphoneXCapute_iphone12black_portrait.png";
import paperTradingApp from "../images/papertradingapp.png";
import todoApp from "..//images/TodoApp.PNG"
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearchPlus, faChevronRight } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Pofrfolio = () => {

  //*******************************************FORUM APPLICATION ****************************************************************************** */
  const openPopupboxForum = () => {
    const content = (
      <>
      
        <img className="portfolio-image-popupbox" src={netflix2} alt="Forum Application..." /><br/>
        <div className="project-text">
        <p>This application allows users login or register. Once they do so they are able to post, browse, and comment on forums.</p>
         <a className="hyper-link" onClick={() => window.open("https://github.com/edgars61/Question-and-Answer-Forum")}><b>GitHub </b><FontAwesomeIcon icon={faChevronRight}/> </a>
         </div>
      </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Forum Application",
          },
        },
      });
  }
   
  const popupboxConfigPaperTrading = {
    titleBar: {
      enable: true,
      text: "Forum Application"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }
//*******************************************PAPER TRADING APPLICATION ****************************************************************************** */
  // City Guide App
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={paperTradingApp} alt="Netflix Clone Project..." />
        <div className="project-text">
        <p>A paper trading application created with Django. Users are able to search for and purchase or sell stocks.</p>
         <a className="hyper-link" onClick={() => window.open("https://github.com/edgars61/Question-and-Answer-Forum")}><b>GitHub </b><FontAwesomeIcon icon={faChevronRight}/> </a>
         </div>
      </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Paper Trading Application",
          },
        },
      });
  }

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      text: "City Guide App project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // ****************************************TO-DO Application
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={todoApp} alt="Portfolio Project..." />
        <div className="project-text">
        <p>A To-Do Application created with React and Redux. Users can add, mark as complete and remove tasks.</p>
         <a className="hyper-link" onClick={() => window.open("https://github.com/edgars61/Todo-App")}><b>GitHub </b><FontAwesomeIcon icon={faChevronRight}/> </a>
         <a className="hyper-link" onClick={() => window.open("https://mytodoapp-b1cab.firebaseapp.com")}><b>Live Demo </b><FontAwesomeIcon icon={faChevronRight}/> </a>
        </div>
      </>
    )
    PopupboxManager.open({ content })
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "To-Do Application",
          },
        },
      });
    
  }

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "To-Do Application"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Task Manager React and Redux Project
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={portfolio} alt="Task Manager React and Redux Project..." />
        <div className="project-text">
        <p>First iteration of my personal website. Created with HTML, CSS, JavaScript and React.js</p>
         <a className="hyper-link" onClick={() => window.open("https://github.com/edgars61/portfoliositev1")}><b>GitHub </b><FontAwesomeIcon icon={faChevronRight}/> </a>
         <a className="hyper-link" onClick={() => window.open("https://edgarsantana.dev")}><b>Live Demo </b><FontAwesomeIcon icon={faChevronRight}/> </a>
        </div>
      </>
    )
    PopupboxManager.open({ content })
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "edgarsantana.dev Personal Website",
          },
        },
      });
  }

  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      text: "edgarsantana.dev Personal Website"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxForum}>
            <img className="portfolio-image" src={netflix2} alt="Netflix Clone Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
            <img className="portfolio-image cityGuideImage" src={paperTradingApp} alt="City Guide Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={todoApp} alt="Portfolio React and Material UI Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
            <img className="portfolio-image" src={portfolio} alt="Task Manager React and Redux Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigPaperTrading} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigTaskManager} />
    </div>
  )
}

export default Pofrfolio;
