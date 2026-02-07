import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../src/Assets/Style/Style.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
// import Skills from './Components/Skills';
import MyResume from './Components/MyResume';
import ContactUs from './Components/ContactUs';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Skills2 from './Components/Skills2';
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <Hero/>
        
        <About/>
        
        {/* <Skills/> */}
        <Skills2/>
        <Projects/>
        <MyResume/>
        <ContactUs/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
