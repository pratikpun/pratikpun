import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React from "react";

import profileImage from "../assets/circle-profile.png";

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        mt: 5,
        minHeight: 600,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: isMobile ? "block" : "flex",
          textAlign: isMobile
            ? "center"
            : {
                justifyContent: isMobile ? "center" : "space-evenly",
                alignItems: "center",
              },
          my: 5,
        }}
      >
        <Box>
          <Avatar
            src={profileImage}
            sx={{
              alignItems: "center",

              minWidth: isMobile ? 250 : 350,
              minHeight: isMobile ? 250 : 350,
              margin: "auto",
              border: 3,
              borderColor: "black",
            }}
          />
        </Box>

        <Box
          sx={{
            textAlign: "center",
            mt: isMobile ? 3 : 0,
            ml: isMobile ? 0 : 5,
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#1C1F33" }}
          >
            👋🏽 HI, I'M{" "}
          </Typography>
          <Typography
            variant="h2"
            component="span"
            sx={{
              fontWeight: "bold",
              color: "teal",
              textDecoration: "underline",
              lineHeight: 1.5,
            }}
          >
            PRATIK
          </Typography>

          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2">
              I'm a full stack software engineer and Computer Science graduate
              who has keen interest in developing mobile and web based
              applications with codes that are clean and readable to anyone.
              Currently based in Reading, UK.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
