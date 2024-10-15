import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Feedback from './components/Feedback';
import { ToastProvider } from './contexts/ToastProvider';
import TestComponent from './components/common/misc/TestComponent';
import "./styles.css"
import ToastContainer from './components/common/toast/ToastContainer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/My-Portfolio' element={
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
        } />
        <Route path="/test" element={
          <ToastProvider>
            <TestComponent />
            <ToastContainer />
          </ToastProvider>
        } />
      </Routes>
    </Router>

  );
}

export default App;
