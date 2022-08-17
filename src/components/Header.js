import React from "react";
import {FiSun} from "react-icons/fi"

function Header(props) {

  function handleTheme(){
    props.setlightTheme(prev=>!prev)
  }
    return (
      <header className="d-flex justify-content-between align-items-center">
     <nav className="container container d-flex justify-content-between align-items-center">
       <h1 style={{fontSize:"2rem"}}>TY.</h1> 
      <ul className="d-flex align-items-center gap-5">
       <li>
       <a href="">About</a></li> 
      <li>
      <a href="">Projects</a> 
      </li> 
       <li>
       <a href="/skills">Skills</a> 
       </li> 
       <li>
       <a href="">Contact</a> 
       </li> 
       <li>
       <button style={{backgroundColor: "transparent", border:"none", color:"#F1E2D2"}}onClick={handleTheme}><FiSun/></button> 
       </li> 

      </ul> 
       </nav> 
      </header> 
    );
    }
export default Header;