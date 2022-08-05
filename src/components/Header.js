import React from "react";

function Header() {
    return (
      <header className="d-flex justify-content-between align-items-center">
     <nav className="container container d-flex justify-content-between align-items-center">
       <h1>TY.</h1> 
      <ul className="d-flex align-items-center gap-5">
       <li>
       <a href="">About</a></li> 
      <li>
      <a href="">Projects</a> 
      </li> 
       <li>
       <a href="">Skills</a> 
       </li> 
       <li>
       <a href="">Contact</a> 
       </li> 

      </ul> 
       </nav> 
      </header> 
    );
    }
export default Header;