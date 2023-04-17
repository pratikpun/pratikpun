import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import ProjectCard from "./ProjectCard";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );
const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isIPad = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box id="projects">
      <Box sx={{ textAlign: isMobile || isIPad ? "center" : "none" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          PROJECTS
        </Typography>
      </Box>
      <Box>
        <ProjectCard />
        <ProjectCard />
      </Box>
    </Box>
  );
};

export default Projects;
