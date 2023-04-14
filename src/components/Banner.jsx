import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React from "react";

import profileImage from "../assets/circle-profile.png";

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
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
        <Box sx={{}}>
          <Avatar
            src={profileImage}
            sx={{
              alignItems: "center",
              width: 250,
              height: 250,
              margin: "auto",
            }}
          />
        </Box>
        <Typography variant="h5" sx={{ mt: 5 }}>
          {" "}
          Hello, my name is ... Pratik ...
        </Typography>
      </Box>
    </>
  );
};

export default Banner;
