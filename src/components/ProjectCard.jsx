import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import image from "../assets/giphy.gif";

const ProjectCard = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
              <img
                src={props.imageUrl}
                alt={props.imageALT}
                // className="img"
                style={{ width: isMobile ? 200 : 400, height: "auto" }}
              />
              {/* IMAGE */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProjectCard;
