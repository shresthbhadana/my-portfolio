import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Aos from 'aos'
import 'aos/dist/aos.css';
function App() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
         <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;