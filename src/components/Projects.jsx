import Box from "@mui/material/Box";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import ProjectCard from "./ProjectCard";
import data from "../JSONcontents/projects.json";

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isIPad = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box id="projects" sx={{ mt: 5 }}>
      {/* <Box sx={{ textAlign: isMobile || isIPad ? "center" : "none" }}> */}
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }} color="secondary">
          PROJECTS
        </Typography>
      </Box>

      {data.projects.map((project) => {
        return (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            alt={project.imageALT}
            github={project.github}
          />
        );
      })}
    </Box>
  );
};

export default Projects;
