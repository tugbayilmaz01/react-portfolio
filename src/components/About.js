import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";

function About(){
    return (
       <div style= {{marginTop:"3rem"}} className="container d-flex flex-column gap-5 align-items-center">
       <h1 style={{fontSize:"3rem"}}>
        Hi, I am Tuğba Yılmaz.
       </h1> 
      <h2>
        A Front End Developer.
      </h2> 
     <p>
     Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.
     </p> 
    <div>
       <button className="resumeButton">
        resume
       </button> 
     <a href="https://www.linkedin.com/in/tugbayilmaz01/"> <AiFillLinkedin size={"2rem"}/> </a>
     <a href="https://github.com/tugbayilmaz01"> <AiFillGithub size={"2rem"}/> </a>
    </div> 
       </div>
    );
}



export default About;