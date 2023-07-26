import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className='info-font' style={{background:"#1e3a80"}} variant="contained" onClick={handleClickOpen}>
        see my resume
      </Button>
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
        <div className="d-flex justify-content-around flex-wrap w-100 gap-4">


        <Typography sx={{ ml: 2, flex: 1}} variant="h6" component="div">
              <span style={{fontSize:"0.9rem" , whiteSpace:"nowrap"}}>Muhammad Alfreijat Resume</span>
            </Typography>
            <a
        href="./Muhammad_Alfreijat_resume.pdf"
        download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"
      >
        <Button className='button mb-1' style={{background:"#48a9eac2"}} variant="contained" >
        <span style={{fontSize:"0.9em"}}>Download resume</span>
      </Button>
        </a>
        </div>
      
          </Toolbar>
        </AppBar>

        <img className='resume mx-auto my-3' src="./Muhammad_Alfreijat_resume-1.jpg" alt="resume" />
        <img className='resume mx-auto my-3' src="./Muhammad_Alfreijat_resume-2.jpg" alt="resume" />

      </Dialog>
    </div>
  );
}
