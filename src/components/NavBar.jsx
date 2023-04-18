import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useMediaQuery, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function ResponsiveAppBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [openMobileMenu, setOpeneMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    // console.log("clicked");
    setOpeneMobileMenu(!openMobileMenu);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#1C1F33", px: 1, top: 0 }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PP
          </Typography>
          {isMobile ? (
            <IconButton
              onClick={handleMobileMenu}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Button color="inherit">HOME</Button>
              <Button color="inherit">ABOUT</Button>
              <Button color="inherit">PROJECTS</Button>
              <Button color="inherit">CONTACT</Button>
            </>
          )}
        </Toolbar>
        {openMobileMenu && (
          <Box
            sx={{
              height: 200,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column",
              borderTop: 1,
            }}
          >
            <Link
              href="/"
              sx={{ fontSize: 16, mt: 1 }}
              underline="none"
              color="inherit"
            >
              HOME
            </Link>
            <Link
              href="#about"
              sx={{ fontSize: 16, mt: 1 }}
              underline="none"
              color="inherit"
            >
              ABOUT
            </Link>
            <Link
              href="#projects"
              sx={{ fontSize: 16, mt: 1 }}
              underline="none"
              color="inherit"
            >
              PROJECTS
            </Link>
            <Link
              href="#contact"
              sx={{ fontSize: 16, my: 1 }}
              underline="none"
              color="inherit"
            >
              CONTACT
            </Link>
          </Box>
        )}
      </AppBar>
    </Box>
  );
}
