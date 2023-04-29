import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

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
              borderColor: "#45A29E",
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
            sx={{ fontWeight: "bold", color: "#45A29E" }}
          >
            👋🏽 HI, I'M{" "}
          </Typography>
          <Typography
            variant="h2"
            component="span"
            sx={{
              fontWeight: "bold",
              color: "#66FCF1",
              textDecoration: "underline",
              lineHeight: 1.5,
            }}
          >
            PRATIK
          </Typography>

          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2">
              Full stack software engineer and Computer Science graduate who has
              keen interest in developing web based applications with codes that
              are clean and readable to anyone. Currently based in Reading, UK.
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Link
              href="https://github.com/pratikpun"
              target="_blank"
              sx={{ mx: 2 }}
            >
              <GitHubIcon
                sx={{
                  "&:hover": { transform: "scale(1.25)", color: "white" },
                  fontSize: 34,
                  color: "black",
                }}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/pratik-pun-605b101a2/"
              target="_blank"
            >
              <LinkedInIcon
                sx={{
                  "&:hover": { transform: "scale(1.25)", color: "white" },
                  fontSize: 36,
                  color: "black",
                }}
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
