import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { CgDesktop } from 'react-icons/cg';
import { motion } from "framer-motion";
import { SiGithub} from '@icons-pack/react-simple-icons';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProjectDetails(props) {
  const [open, setOpen] = React.useState(false);
  const allSkills=[...props.technologies, ...props.tools];
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <a className='DM__Text'  style={{color:"white" ,background:'transparent'}} onClick={handleClickOpen}>Learn More</a>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
          style: {
            backgroundColor: '#121723',
          },
        }}
      >
        <AppBar sx={{ position: 'relative', backgroundColor: '#1d2430' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              <span style={{fontSize:"0.9rem" ,}}>{props.title}</span>
            </Typography>

          </Toolbar>
        </AppBar>
        <div className="container d-flex justify-content-center align-items-center flex-column my-5 rounded-2" style={{color:"white", background:'#1d2430'}}>
            <h1>{props.title}</h1>
            <img className='w-75 mx-auto mt-3 border border-2 rounded' src={props.img} alt="resume" style={{minWidth:"280px" ,maxHeight:"434px",minHeight:"172px"}}/>
            <div>{allSkills.map((tech)=>{
              return(
                <span className="badge badge-pill badge-primary"  key={tech}>{tech}</span>
              )
            })}</div>
            <div className='my-5 w-75' style={{fontSize:"1rem"}}><b>Summary: </b>{props.summary}</div>


            <div className='d-flex justify-content-center align-items-center flex-column gap-4 mb-4'>
            {props.github ? 
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                        <motion.div whileHover={{ scale: 1.2 }} style={{width:"35px"}}  >
                        <SiGithub size={38} color="#e6edf3" />
                      </motion.div>
                      <a href={props.github}>{props.github}</a>
                          
                          </div> : ""}


              {props.live ?               <div className='d-flex flex-column justify-content-center align-items-center'>
            <motion.div whileHover={{ scale: 1.2 }} style={{width:"35px"}}  >
            <CgDesktop size={38} color="#2ea970" />
          </motion.div>
          <a href={props.live}>{props.live}</a>
              
              </div> : ""}

            </div>


        </div>

      </Dialog>
    </div>
  );
}
