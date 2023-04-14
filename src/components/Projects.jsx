import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Typography } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const Projects = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [likeWord, setLikeWord] = useState("likes");
  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
    likeCount === 0 ? setLikeWord("like") : setLikeWord("likes");
  };
  return (
    <div>
      PROJECTS
      <Box sx={{ border: 1 }}>
        <Grid container>
          <Grid item sm={12} md={8}>
            <Typography variant="h5">Name of project</Typography>
            <Typography variant="subtitle1" component="p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores accusamus quo sint sapiente reprehenderit in sunt,
              repellendus ullam cupiditate inventore soluta, aut molestias sit,
              ea animi velit quas quos placeat!
            </Typography>
          </Grid>
          <Grid item sm={12} md={3}>
            IMAGE
          </Grid>
        </Grid>

        <div onClick={handleLikeClick}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon color="error" />
          </IconButton>
          {bull} {likeCount} {likeWord} {bull}
          <Button size="small">More</Button>
        </div>
      </Box>
    </div>
  );
};

export default Projects;
