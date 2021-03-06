import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from './components/AboutMe';
import SocialContacts from './components/SocialContact';
import Skills from './components/Skills';
import FadeIn from 'react-fade-in';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <>
  
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#8739F9"
              }
            }
          }
        }}
      />
      <FadeIn>
      <Navbar />
      <Header />
      
      <SocialContacts/>
      </FadeIn>
      <AboutMe/>
      
      <Skills/>
      
    
      
    </>
  );
}

export default App;
