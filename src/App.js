// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/index.js';
import About from './components/About/index.js';
import Service from './components/Service/index.js';
import Projects from './components/Projects/index.js';
import Contact from './components/contact/index.js';
import Footer from './components/Footer/index.js';
import Skills from './components/About/skills.js';
import Navbar from './Navbar.js';



import './styles/main.css'; // Ensure this path is correct
const App = () => {
    return (
        <Router>
            <Navbar/>
        <Routes>
            <Route path="/" element={<Header/>} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/service" element={<Service />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/footer" element={<Footer />} />
        </Routes>
       
    </Router>
    );
};

export default App; 
