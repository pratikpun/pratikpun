import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link, Typography, useMediaQuery, useTheme } from "@mui/material";

const ProjectCard = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isIPad = useMediaQuery(theme.breakpoints.between("sm", "lg"));
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
            <Box>
              <img
                src={props.imageUrl}
                alt={props.imageALT}
                // className="img"
                style={{
                  width: isIPad || isMobile ? "100%" : 500,
                  marginLeft: isIPad || isMobile ? 0 : 50,

                  height: "auto",
                  marginTop: isMobile ? 15 : "auto",
                }}
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
