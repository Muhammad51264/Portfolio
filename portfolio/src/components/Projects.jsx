import { motion } from "framer-motion";
import ImgMediaCard from "./projectcard";
import projectsList from "./projectslist";

const Projects = () => {
  return (

    <div className='Project__container' id="projects">
      <h2 className="text-center my-4 element" style={{color:"#ffffff"}} ><span className="tag">&lt;</span>Projects<span className="tag">/&gt;</span></h2> 

      <div className="projects container justify-content-center d-flex mx-auto gap-5 my-5 flex-wrap">
    {projectsList.map((project) =>{
        return(

         <motion.div whileHover={{ scale: 1.01 }} className=" p-0" style={{maxWidth:"345px"}} key={project.id}>
            
         <ImgMediaCard title={project.title} desc={project.desc} img={project.img} summary={project.summary} technologies={project.technologies} tools={project.tools} github={project.github} live={project.live}/>
         </motion.div >

)
    }
    )


    }

      </div>
    </div>

  )
}

export default Projects
