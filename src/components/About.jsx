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
      {/* <hr /> */}
      <Box sx={{ textAlign: isMobile || isIPad ? "center " : "none" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          ABOUT
        </Typography>
      </Box>
      <Paper
        sx={{
          backgroundColor: "transparent",
          // #DADAF3
          padding: 2,
          border: "rounded",
          mb: 5,
        }}
        elevation={4}
      >
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempora
          ipsa laborum dolor consequuntur fugiat consectetur, rem quaerat, sequi
          et accusantium dignissimos repudiandae quia odio porro totam! Debitis
          incidunt minus voluptatum, pariatur alias, dolorum magnam commodi cum
          ducimus rerum vel! Sequi deleniti, maxime temporibus debitis eius quia
          consequatur excepturi illo? <br /> Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Dolorem commodi amet, incidunt est quam
          modi cupiditate porro accusantium tempora molestias quia ad non fuga
          sunt. Nostrum iste distinctio quas nesciunt.
        </Typography>
      </Paper>
    </Box>
  );
};

export default About;
