import './App.css';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
  <Header/> 
  <About/> 
  <Projects/> 
  <Skills/> 
  <Contact/>
  </div> 
  );
}

export default App;
