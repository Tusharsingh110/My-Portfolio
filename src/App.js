// import './App.css';
import React from 'react'
import Header from "./components/Header";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Pathfinder from "./components/Pathfinder";

function App() {
  return (
   <>
   <Header /> 
   <Banner />
   <Skills />
   <Projects />
   <Resume />
   <Footer />
   {/* <Pathfinder/> */}
   </>
  );
}

export default App;
