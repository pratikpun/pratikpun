import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Paper, useMediaQuery, useTheme } from "@mui/material";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isIPad = useMediaQuery(theme.breakpoints.between("sm", "md"));
  return (
    <Box id="about">
      <Box sx={{ textAlign: isMobile || isIPad ? "center " : "none" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }} color="secondary">
          ABOUT
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ mt: 2, mb: 4, mx: isMobile ? 2 : 0 }}>
        Hello, I'm Pratik! A recent computer science graduate from Swansea
        University, Wales. I enjoy developing new web applications, for both
        front and back with a mobile first approach, as I aim to make my
        projects responsive in all devices, by doing so it enforces me to
        research further and discover new techniques about how my code is
        presented in desktop and mobile. Currently I am heavily exposed to MERN
        stack when developing applications. As a software engineer, my mentality
        is to always learn from others as it allows me to learn new ways of
        writing cleaner and efficient code. Aside from the tech world, I play
        11-a-side football weekly to stay active and thoroughly enjoy watching
        mystery crime documentaries.
      </Typography>
    </Box>
  );
};

export default About;
