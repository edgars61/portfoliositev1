import React, {useState, useEffect} from 'react';
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
import BarLoader from "react-spinners/BarLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  
  margin-top: 25%;

`;



function App() {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)

    },2500)

  },[])
  return (

    loading ?
    <BarLoader
    css={override}
    size={150}
    color={"#8739F9"}
    loading={loading}></BarLoader>

    :<>
  
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
