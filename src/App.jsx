import { useState } from 'react'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from './components/Contact';
import Footer from "./components/Footer";
import PortfolioSection from "./components/Portfolio";
import './App.css'

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<PortfolioSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;



