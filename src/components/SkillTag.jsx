import { Grid, Paper } from "@mui/material";
import React from "react";

const SkillTag = (skill) => {
  console.log(skill);
  return (
    <Grid item xl={4} md={4} xs={6}>
      <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
        {skill}
      </Paper>
    </Grid>
  );
};

export default SkillTag;
