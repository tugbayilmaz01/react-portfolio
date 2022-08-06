
function Skills() {
     
 
   
    const skills = ["HTML", "CSS", "JavaScript", "React"," Git", "Redux", "Node.js"];
    return (<> 
    <div className="container d-flex flex-column gap-5 align-items-center mt-5">
       <h2>Skills</h2>
     <ul className="mySkills">
     { 
        skills.map((item, idx) => {
            return (
               <li className="items" key={idx}>{item}</li> 
            )
        })
      } 
      </ul> 

       
        
       </div> </>
 );
        
}




export default Skills;