import { SiReact ,SiPython,SiHtml5,SiNodedotjs,SiExpress,SiFirebase,SiGit,SiGithub,SiVisualstudiocode,SiFigma,SiCss3,SiJavascript,SiAnaconda,SiBootstrap ,SiMongodb} from '@icons-pack/react-simple-icons';
import Sphere from './sphere';
import { motion } from "framer-motion";

const Skills = () => {
    const size= 38;
  return (
    <div className="skills" id='skills'>
      <h2 className="text-center" style={{color:"#ffffff"}}>
        <span className="tag">&lt;</span>Skills<span className="tag">/&gt;</span>
      </h2>

      <div className='skills__category container row mx-auto'>

        <div className='skills_list mt-5 col-11 order-2 order-xl-1 col-xl-7'>

        <h5 className='profile__info Skill mb-5 w-100'><img className='mb-1 me-1' src="./html.svg" alt="html" width={"35px"} height={"35px"}/>
        Full-stack Development</h5>
            <div className="front__end d-flex gap-5 flex-wrap justify-content-center">
            <div className="category d-flex flex-column align-items-center ">
            <motion.div whileHover={{ scale: 1.2 }} style={{width:"35px"}}  >
            <SiHtml5 size={size} color="#E34F26" />
          </motion.div>
            <h6>HTML</h6>
            </div>

            <div className="category d-flex flex-column align-items-center">
            <motion.div whileHover={{ scale: 1.2 }} style={{width:"35px"}}  >
            <SiCss3 size={size} color="#1572B6" />
          </motion.div>
            <h6>CSS</h6>
            </div>

            
            <div className="category d-flex flex-column align-items-center">
            <motion.div whileHover={{ scale: 1.2 }} style={{width:"35px"}}  >
            <SiJavascript size={size} color="#F7DF1E" />
          </motion.div>
            <h6>Javascript</h6>
            </div>

            <div className="category d-flex flex-column align-items-center">
            <motion.div whileHover={{ scale: 1.2 }} style={{width:"35px"}}  >
            <SiBootstrap size={size} color="#7952B3" />
          </motion.div>
            <h6>Bootstrap</h6>
            </div>
            <div className="category d-flex flex-column align-items-center">
            <motion.div whileHover={{ scale: 1.2 }} style={{width:"35px"}}  >
            <SiReact size={size} color="#61DAFB" />
          </motion.div>
            <h6>React</h6>
            </div>
            <div className="category d-flex flex-column align-items-center">
            <motion.div whileHover={{ scale: 1.2 }} style={{width:"35px"}}  >
            <SiNodedotjs size={size} color="#339933" />
          </motion.div>
            <h6>NodeJs</h6>
            </div>
            <div className="category d-flex flex-column align-items-center">
            <motion.div whileHover={{ scale: 1.2 }} style={{width:"35px"}}  >
            <SiExpress size={size}  color="#e6edf3" />
          </motion.div>
            <h6>Express</h6>
            </div>
            <div className="category d-flex flex-column align-items-center">
            <motion.div whileHover={{ scale: 1.2 }} style={{width:"35px"}}  >
            <SiPython size={size} color="#3776AB" />
          </motion.div>
            <h6>Python</h6>
            </div>
            <div className="category d-flex flex-column align-items-center">
            <motion.div whileHover={{ scale: 1.2 }} style={{width:"35px"}}  >
            <SiMongodb size={size} color="#47a248" />
          </motion.div>
            <h6>Mongodb</h6>
            </div>
            
            <div className="category d-flex flex-column align-items-center">
            <motion.div whileHover={{ scale: 1.2 }} style={{width:"35px"}}  >
            <SiFirebase size={size} color="#FFCA28" />
          </motion.div>
            <h6>Firebase</h6>
            </div>
            </div>


            <h5 className='profile__info Skill my-5 w-100'><img className='mb-1 me-1' src="./html.svg" alt="html" width={"35px"} height={"35px"}/>
            Development and Design Tools </h5>
            <div className="front__end d-flex gap-5 flex-wrap justify-content-center">
            <div className="category d-flex flex-column align-items-center">
            <motion.div whileHover={{ scale: 1.2 }} style={{width:"35px"}}  >
            <SiGit size={size} color="#F05032" />
          </motion.div>
            <h6>Git</h6>
            </div>
            <div className="category d-flex flex-column align-items-center">
            <motion.div whileHover={{ scale: 1.2 }} style={{width:"35px"}}  >
            <SiGithub size={size} color="#e6edf3" />
          </motion.div>
            <h6>Github</h6>
            </div>
            <div className="category d-flex flex-column align-items-center">
            <motion.div whileHover={{ scale: 1.2 }} style={{width:"35px"}}  >
            <SiVisualstudiocode size={size} color="#007ACC" />
          </motion.div>
            <h6>VS Code</h6>
            </div>
            <div className="category d-flex flex-column align-items-center">
            <motion.div whileHover={{ scale: 1.2 }} style={{width:"35px"}}  >
            <SiFigma size={size} color="#F24E1E" />
          </motion.div>
            <h6>Figma</h6>
            </div>
            <div className="category d-flex flex-column align-items-center">
            <motion.div whileHover={{ scale: 1.2 }} style={{width:"35px"}}  >
            <SiAnaconda size={size} color="#41B883" />
          </motion.div>
            <h6>Anaconda</h6>
            </div>
            </div>
        </div>
        

        <div className="sphere__container col-12 col-xl-5 order-xl-1">
        <Sphere />
        </div>
      </div>
    </div>
  );
};

export default Skills;
