import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
export default function SkillsCard() {
  const [likeCount, setLikeCount] = useState(0);
  const [likeWord, setLikeWord] = useState("likes");
  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
    likeCount === 0 ? setLikeWord("like") : setLikeWord("likes");
  };

  const card = (
    <>
      <CardContent sx={{ minHeight: 250 }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Peep n Chill
        </Typography>
        <Typography variant="h5" component="div">
          Front-End
        </Typography>

        <Grid container spacing={4}>
          <Grid item xl={3} md={4} xs={6}>
            <Paper elevation={2}>HTML</Paper>
          </Grid>
          <Grid item xl={3} md={4} xs={6}>
            <Paper elevation={2}>CSS</Paper>
          </Grid>
          <Grid item xl={3} md={4} xs={6}>
            <Paper elevation={2}>JavaScript</Paper>
          </Grid>
          <Grid item xl={3} md={4} xs={6}>
            <Paper elevation={2}>React</Paper>
          </Grid>
        </Grid>
      </CardContent>
      <div onClick={handleLikeClick} sx={{ mt: "auto" }}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color="error" />
        </IconButton>
        {bull} {likeCount} {likeWord} {bull}
        <Button size="small">More</Button>
      </div>
    </>
  );
  return (
    <>
      <Box>
        <Typography variant="h5">TECHNICAL SKILLS</Typography>
      </Box>
      <Grid container spacing={5}>
        <Grid item lg={6}>
          <Paper elevation={2}>{card}</Paper>
        </Grid>
        <Grid item lg={6}>
          <Paper elevation={2}>{card}</Paper>
        </Grid>
      </Grid>
    </>
  );
}
