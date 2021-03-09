import React from 'react';
import Netflix from "../images/netflix.png";
import CityGuide from '../images/city-guide-app.png';
import PortfolioImg from '../images/portfolio.png';
import TaskManager from '../images/task-manager.png';

const Portfolio = () =>{


    return(<div className="portfolio-wrapper">
        <div className="container">
            <h1 className="text-uppercase text-center py-5">Portfolio</h1>
            <div className=" image-box-wrapper row justify-content-center">

            {/*-------------------------------------------------------------------------------------------------------------------*/}
                <div className="portfolio-image-box">
                <img className="portfolio-image" src={Netflix} alt="Netflix Clone Project..."></img>
                <div className="overflow"></div>
                </div>
      
    
            {/*-------------------------------------------------------------------------------------------------------------------*/}
     
                <div className="portfolio-image-box">
                <img className="portfolio-image" src={CityGuide} alt="Netflix Clone Project..."></img>
                <div className="overflow"></div>
                </div>
        
            {/*-------------------------------------------------------------------------------------------------------------------*/}
   
                <div className="portfolio-image-box">
                <img className="portfolio-image" src={PortfolioImg} alt="Netflix Clone Project..."></img>
                <div className="overflow"></div>
                </div>

            {/*-------------------------------------------------------------------------------------------------------------------*/}
   
                 <div className="portfolio-image-box">
                <img className="portfolio-image" src={TaskManager} alt="Netflix Clone Project..."></img>
                <div className="overflow"></div>
                </div>

            </div>

        </div>

    </div>);
}


export default Portfolio;