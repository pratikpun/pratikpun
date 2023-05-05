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
          padding: 2,
          my: 2,
          //   border: 1,
          borderLeft: isMobile || isIPad ? "none" : "3px solid #66FCF1",
          borderBottom: isMobile || isIPad ? "2px solid #66FCF1" : "none",
        }}
      >
        <Grid container>
          <Grid item sm={12} md={5}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              {props.title}
            </Typography>
            <Typography variant="subtitle1" component="p">
              {props.description}
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", mt: 2, px: 4 }}
            >
              <Link href={props.github} target="_blank">
                <GitHubIcon
                  sx={{ fontSize: 30, "&:hover": { transform: "scale(1.25)" } }}
                />
              </Link>
              {/* <Button size="small">Live</Button> */}
            </Box>
          </Grid>
          <Grid item sm={12} md={5}>
            <Box>
              <img
                src={props.imageUrl}
                alt={props.imageALT}
                style={{
                  width: isIPad || isMobile ? "100%" : 500,
                  marginLeft: isIPad || isMobile ? 0 : 50,

                  height: "auto",
                  marginTop: isMobile ? 15 : "auto",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProjectCard;
