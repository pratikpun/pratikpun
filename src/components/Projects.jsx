import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import ProjectCard from "./ProjectCard";
import data from "../JSONcontents/projects.json";

const Projects = () => {
  console.log(data);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isIPad = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <div id="projects">
      <Box sx={{ textAlign: isMobile || isIPad ? "center" : "none" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
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
      {/*
      {
        (data.projects.map = (project) => {
          return (
            <div>
              {console.log("hello")}

              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.imageUrl}
                alt={project.imageALT}
                github={project.github}
              />
            </div>
          );
        })
      } */}
      {/* <ProjectCard /> */}
    </div>
  );
};

export default Projects;
