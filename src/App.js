import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from './components/AboutMe';
import SocialContacts from './components/SocialContact';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import FadeIn from 'react-fade-in';
import Footer from './components/Footer';




function App() {
  return (

<>
  
      <FadeIn>
      <Navbar />
      <Header />
      
      <SocialContacts/>
      </FadeIn>
      
      <AboutMe/>
    
      
   
      
      <Skills/>
      <Portfolio/>
      <Footer/>
    
    
   
      
      
    
      
    </>
  );
}

export default App;
