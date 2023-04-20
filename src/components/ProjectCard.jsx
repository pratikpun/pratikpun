import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link, Typography } from "@mui/material";
import image from "../assets/giphy.gif";

const ProjectCard = (props) => {
  //   console.log(`In project card ${props.projects}`);
  //   const firstProject = (
  //     <>
  //       <Grid container>
  //         <Grid item sm={12} md={5}>
  //           <Typography variant="h5">Peep n Chill</Typography>
  //           <Typography variant="subtitle1" component="p">
  //             Peep n Chill is a full stack web application. It is a blog-type
  //             inspired project, that allows users to browse through posts made by
  //             other users. Users are only allowed to
  //             <Button>
  //               {" "}
  //               <GitHubIcon sx={{ "&:hover": { transform: "scale(1.25)" } }} />
  //             </Button>
  //             <Button size="small">More</Button>
  //           </Typography>
  //         </Grid>
  //         <Grid item sm={12} md={5}>
  //           <Box sx={{ border: 2 }}>
  //             {/* <img src={image} alt="" className="img" /> */}
  //             IMAGE
  //           </Box>
  //         </Grid>
  //       </Grid>
  //     </>
  //   );
  //   const firstProject = (data.projects.map = (project, index) => {
  //     return (
  //       <>
  //         <Grid item sm={12} md={5}>
  //           <Typography variant="h5">{project.title}</Typography>
  //           <Typography variant="subtitle1" component="p">
  //             {project.description}
  //             <Button>
  //               {" "}
  //               <Link to={project.github}>
  //                 {" "}
  //                 <GitHubIcon sx={{ "&:hover": { transform: "scale(1.25)" } }} />
  //               </Link>
  //             </Button>
  //             <Button size="small">More</Button>
  //           </Typography>
  //         </Grid>
  //         <Grid item sm={12} md={5}>
  //           <Box sx={{ border: 2 }}>
  //             <img
  //               src={project.imageUrl}
  //               alt={project.imageALT}
  //               className="img"
  //             />
  //             {/* IMAGE */}
  //           </Box>
  //         </Grid>
  //       </>
  //     );
  //   });
  return (
    <>
      <Box
        sx={{
          padding: 1,
          my: 2,
        }}
      >
        <Grid container>
          <Grid item sm={12} md={5}>
            <Typography variant="h5">{props.title}</Typography>
            <Typography variant="subtitle1" component="p">
              {props.description}
              <Link href={props.github} target="_blank">
                <GitHubIcon sx={{ "&:hover": { transform: "scale(1.25)" } }} />
              </Link>
              <Button size="small">More</Button>
            </Typography>
          </Grid>
          <Grid item sm={12} md={5}>
            <Box sx={{ border: 2 }}>
              {console.log(props.imageUrl)}
              <img src={props.imageUrl} alt={props.imageALT} className="img" />
              {/* IMAGE */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProjectCard;
