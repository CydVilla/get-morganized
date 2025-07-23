import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';
import Slideshow from './components/Slideshow';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <About />
              <Slideshow />
              <Reviews />
              <Contact />
            </>
          } />
          <Route path="*" element={
            <>
              <Hero />
              <Services />
              <About />
              <Slideshow />
              <Reviews />
              <Contact />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
