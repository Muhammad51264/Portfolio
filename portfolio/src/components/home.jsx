import FullScreenDialog from './resume';
import {SiGithub ,SiLinkedin ,SiGoogle} from '@icons-pack/react-simple-icons';
import { motion } from "framer-motion";
import { CgPhone } from 'react-icons/cg';

const Home = () => {
  const size=30
  return (
    <>
    <div className='home__container container row mx-auto mt-5 rounded-4 px-5' id='home'>
      <div className="name__message col-12 order-2 order-xl-1 col-xl-8 mt-2">
        <h1 className='name fs-1'>Muhammad Al-Freijat</h1>
        <div className="info__container">
        <h5 className='profile__info mt-5 w-100'>
          <img className='mb-1 me-1' src="./html.svg" alt="html" width={"35px"} height={"35px"} />

Full Stack Web and Mobile Developer</h5>

<h5 className='profile__info my-4 w-100'>
          <img className='mb-1 me-1' src="./html.svg" alt="html" width={"35px"} height={"35px"}/>

          Building High-Quality Websites</h5>
        <h5 className='profile__info w-100'><img className='mb-1 me-1' src="./html.svg" alt="html" width={"35px"} height={"35px"}/>
 Computer Engineer</h5>
 
        </div>

 
        <div className="buttons mt-5 d-flex gap-4 flex-wrap">
        <FullScreenDialog/>

        </div>
      </div>
      <div className="profile__picture col-12 order-1 col-xl-4 d-flex justify-content-center">
        <img className='image rounded-4' src="./programming.gif" alt="profile" />
      </div>
    </div>
    
    <div className='Contact__contianer' id='contact'>
        <h2 className="text-center mb-5 mt-2" style={{color:"#ffffff"}}><span className="tag">&lt;</span>Contact<span className="tag">/&gt;</span></h2> 
    </div>
    <div className='contact__container container my-4 row mx-auto'>
    <div className="category d-flex flex-column align-items-center col-xl-3">
            <motion.div whileHover={{ scale: 1.2 }} style={{width:"35px"}}  >
            <SiGithub size={size} className="icon" style={{color:"#e6edf3"}}/>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}  className='mt-4' >
          <a href="https://github.com/Muhammad51264" className='text-decoration-none' style={{color:"#ffffff"}}><h6>https://github.com/Muhammad51264</h6></a>
          </motion.div>
            </div>

            <div className="category d-flex flex-column align-items-center col-xl-3">
            <motion.div whileHover={{ scale: 1.2 }} style={{width:"35px"}}  >
            <SiLinkedin size={size} color="#0077b5" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }}  className='mt-4' >
          <a href="https://www.linkedin.com/in/muh-frejat/" className='text-decoration-none' style={{color:"#ffffff"}}><h6>https://www.linkedin.com/in/muh-frejat/</h6></a>

          </motion.div>
            </div>

            <div className="category d-flex flex-column align-items-center col-xl-3">
            <motion.div whileHover={{ scale: 1.2 }} style={{width:"35px"}}  >
            <SiGoogle size={size} color="#b50300" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}  className='mt-4' >
          <a href="#" className='text-decoration-none' style={{color:"#ffffff"}}><h6>muh.freijat@gmail.com</h6></a>
          </motion.div>
            </div>

            <div className="category d-flex flex-column align-items-center col-xl-3">
            <motion.div whileHover={{ scale: 1.2 }} style={{width:"35px"}}  >
            <CgPhone size={size} color="green" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}  className='mt-4' >
          <a href="#" className='text-decoration-none' style={{color:"#ffffff"}}><h6>0795781374</h6></a>
          </motion.div>
            </div>



    </div>
    </>
  )
}

export default Home
