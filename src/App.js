import './App.css';
import React, { useState } from "react";
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() { 
  const [lightTheme, setlightTheme] = useState(true);
  return(
 <div style={{backgroundColor:(lightTheme ? "#AD7B7B" : "#755353")}}> 
 <Header setlightTheme={setlightTheme}/> 
  <About/> 
  <Projects/> 
  <Skills/> 
  <Contact/>
  <Footer/> 
 </div> 

  );
}

export default App;

