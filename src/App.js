// import './App.css';
import React from 'react'
import Header from "./components/Header";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Feedback from './components/Feedback';
import ToastContainer from './components/common/toast/ToastContainer';
import { ToastProvider } from './contexts/ToastProvider';

function App() {
  return (
    <>
      <ToastProvider>
        <Header />
        <Banner />
        <Skills />
        <Projects />
        <Resume />
        <Feedback />
        <Footer />
        <ToastContainer />
      </ToastProvider>
    </>
  );
}

export default App;
