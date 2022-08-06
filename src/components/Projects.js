import {AiFillGithub} from "react-icons/ai";
import {BiLinkExternal} from "react-icons/bi"

function Projects(){
    return (
       <div className="container d-flex flex-column gap-5 align-items-center mt-5">
       <h2>Projects</h2> 
       <div class="container d-flex flex-column gap-5 align-items-center">
    <div class="row gx-5 gy-5">
    <div class="projectCard col-lg-4 col-md-6 col-sm-12">
    <h3>  Project 1 </h3>
     <p>Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam</p>
     <ul className="d-flex justify-content-center gap-3">
  <li>SASS</li>
  <li>React</li>
  <li>JavaScript</li>
    </ul>
   <div className="d-flex justify-content-center gap-3">
    <a href="https://github.com/tugbayilmaz01"> <AiFillGithub size={"1.5rem"}/> </a>
   <a href=""><BiLinkExternal size={"1.5rem"}/> </a> 
   </div>
    </div>
    <div class="projectCard col-lg-4 col-md-6 col-sm-12">
    <h3> Project 2</h3>
     <p> Amet asperiores et impedit aliquam consectetur? Voluptates  sed a nulla ipsa officia et esse aliquam</p>
     <ul className="d-flex justify-content-center gap-3">
  <li>SASS</li>
  <li>React</li>
  <li>JavaScript</li>
    </ul>
    <div className="d-flex justify-content-center gap-3">
    <a href="https://github.com/tugbayilmaz01"> <AiFillGithub size={"1.5rem"}/> </a>
   <a href=""><BiLinkExternal size={"1.5rem"}/> </a> 
   </div>
    </div>
    <div class="projectCard col-lg-4 col-md-6 col-sm-12">
   <h3>  Project 3</h3>
     <p> Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam</p>
     <ul className="d-flex justify-content-center gap-3">
  <li>SASS</li>
  <li>React</li>
  <li>JavaScript</li>
    </ul>
    <div className="d-flex justify-content-center gap-3">
    <a href="https://github.com/tugbayilmaz01"> <AiFillGithub size={"1.5rem"}/> </a>
   <a href=""><BiLinkExternal size={"1.5rem"}/> </a> 
   </div>
    </div>
  
    </div>
       </div> 
       </div>
    )
}

export default Projects;