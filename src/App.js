import React from 'react';
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
import ChatBot from './components/common/misc/ChatBot';
import { SocketProvider } from './contexts/SocketProvider';

function App() {
  return (
    <Router>
      <ToastProvider>
        <SocketProvider>
          <Header />
          <Routes>
            <Route path='/My-Portfolio' element={
              <>
                <Banner />
                <Skills />
                <Projects />
                <Resume />
                <Feedback />
                <Footer />
                <ToastContainer />
              </>
            } />
            <Route path="/test" element={
              <>
                <TestComponent />
                <ToastContainer />
              </>
            } />
            <Route path="*" element={<h1>404: Page Not Found</h1>} />
          </Routes>
          <ChatBot /> {/* Always rendered, independent of Routes */}
        </SocketProvider>
      </ToastProvider>
    </Router>
  );
}

export default App;
