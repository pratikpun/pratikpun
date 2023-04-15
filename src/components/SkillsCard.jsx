import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useMediaQuery, useTheme } from "@mui/material";

export default function SkillsCard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isIPad = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const FrontEndCard = (
    <>
      <CardContent sx={{ minHeight: 250 }}>
        <Typography variant="h5" component="div" textAlign="center" marginY={2}>
          FRONT-END
        </Typography>

        <Grid container spacing={4}>
          <Grid item xl={3} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              HTML
            </Paper>
          </Grid>
          <Grid item xl={3} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              CSS
            </Paper>
          </Grid>
          <Grid item xl={3} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              JavaScript
            </Paper>
          </Grid>
          <Grid item xl={3} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              React.js
            </Paper>
          </Grid>
          <Grid item xl={3} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              Material UI
            </Paper>
          </Grid>
          <Grid item xl={3} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              Figma
            </Paper>
          </Grid>
        </Grid>
      </CardContent>
    </>
  );

  const BackEndCard = (
    <>
      <CardContent sx={{ minHeight: 250 }}>
        <Typography variant="h5" component="div" textAlign="center" marginY={2}>
          BACK-END
        </Typography>

        <Grid container spacing={4}>
          <Grid item xl={3} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              Node.js
            </Paper>
          </Grid>
          <Grid item xl={3} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              MongoDB
            </Paper>
          </Grid>
          <Grid item xl={3} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              JavaScript
            </Paper>
          </Grid>
          <Grid item xl={3} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              Express.js
            </Paper>
          </Grid>
          <Grid item xl={3} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              Mongoose
            </Paper>
          </Grid>
          <Grid item xl={3} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              Java
            </Paper>
          </Grid>
        </Grid>
      </CardContent>
    </>
  );
  return (
    <Box sx={{ mb: 2 }}>
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: isMobile || isIPad ? "center " : "none",
          }}
        >
          TECHNICAL SKILLS
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={2}
            sx={{
              backgroundImage: isMobile
                ? "linear-gradient(rgba(0,200,200,0.20), rgba(0,150,150,0.15))"
                : "linear-gradient(to right, rgba(0,200,200,0.20), rgba(0,150,150,0.15))",
            }}
          >
            {FrontEndCard}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={2}
            sx={{
              backgroundImage: isMobile
                ? "linear-gradient(rgba(0,200,200,0.15), rgba(0,150,150,0.1))"
                : "linear-gradient(to right, rgba(0,150,150,0.15), rgba(0,0,0,0.1))",
            }}
          >
            {BackEndCard}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
