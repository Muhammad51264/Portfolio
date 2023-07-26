import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../App.css'
import ProjectDetails from './projectdetails';

function ImgMediaCard(props) {

    return (

<Card sx={{ minWidth: 270 }} className="myCard" style={{background: "#1d2430" ,color:"white",cursor:"pointer"}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={props.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='DM__Text'>
            {props.title}
          </Typography>
          <Typography variant="body2" className='DM__Text'>
          {props.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <ProjectDetails title={props.title} img={props.img} summary={props.summary}  technologies={props.technologies} tools={props.tools} github={props.github} live={props.live}/>
        </CardActions>
      </Card>
    );
  }

  export default ImgMediaCard;
