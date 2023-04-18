import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Typography } from "@mui/material";
import image from "../assets/giphy.gif";

const ProjectCard = () => {
  //   const theme = useTheme();
  //   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  //   const isIPad = useMediaQuery(theme.breakpoints.between("sm", "md"));
  return (
    <>
      <Box
        sx={{
          //   border: 1,
          padding: 1,
          my: 2,
        }}
      >
        <Grid container>
          <Grid item sm={12} md={5}>
            <Typography variant="h5">Peep n Chill</Typography>
            <Typography variant="subtitle1" component="p">
              Peep n Chill is a full stack web application. It is a blog-type
              inspired project, that allows users to browse through posts made
              by other users. Users are only allowed to
              <Button>
                {" "}
                <GitHubIcon sx={{ "&:hover": { transform: "scale(1.25)" } }} />
              </Button>
              <Button size="small">More</Button>
            </Typography>
          </Grid>
          <Grid item sm={12} md={5}>
            <Box sx={{ border: 2 }}>
              {/* <img src={image} alt="" className="img" /> */}
              IMAGE
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProjectCard;
