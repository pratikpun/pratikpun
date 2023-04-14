import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function SkillsCard() {
  const FrontEndCard = (
    <>
      <CardContent sx={{ minHeight: 250 }}>
        <Typography variant="h5" component="div" textAlign="center" marginY={2}>
          Front-End
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
              React
            </Paper>
          </Grid>
        </Grid>
      </CardContent>
    </>
  );
  return (
    <>
      <Box>
        <Typography variant="h5">TECHNICAL SKILLS</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={2}>{FrontEndCard}</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={2}>{FrontEndCard}</Paper>
        </Grid>
      </Grid>
    </>
  );
}
