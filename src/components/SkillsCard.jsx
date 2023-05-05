import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useMediaQuery, useTheme } from "@mui/material";
import data from "../JSONcontents/skills.json";

export default function SkillsCard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isIPad = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const skills = data.skills;
  console.log(skills);

  const FrontEndCard = (
    <>
      <CardContent sx={{ minHeight: 250 }}>
        <Typography variant="h6" component="div" textAlign="center" marginY={2}>
          FRONT-END
        </Typography>

        <Grid container spacing={4}>
          <Grid item xl={4} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              HTML
            </Paper>
          </Grid>
          <Grid item xl={4} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              CSS
            </Paper>
          </Grid>
          <Grid item xl={4} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              JavaScript
            </Paper>
          </Grid>
          <Grid item xl={4} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              React.js
            </Paper>
          </Grid>
          <Grid item xl={4} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              Material UI
            </Paper>
          </Grid>
          <Grid item xl={4} md={4} xs={6}>
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
        <Typography variant="h6" component="div" textAlign="center" marginY={2}>
          BACK-END
        </Typography>

        <Grid container spacing={4}>
          <Grid item xl={4} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              Node.js
            </Paper>
          </Grid>
          <Grid item xl={4} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              MongoDB
            </Paper>
          </Grid>
          <Grid item xl={4} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              JavaScript
            </Paper>
          </Grid>
          <Grid item xl={4} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              Express.js
            </Paper>
          </Grid>
          <Grid item xl={4} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              Mongoose
            </Paper>
          </Grid>
          <Grid item xl={4} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              Java
            </Paper>
          </Grid>
          <Grid item xl={4} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              MySQL
            </Paper>
          </Grid>
        </Grid>
      </CardContent>
    </>
  );
  const OtherCard = (
    <>
      <CardContent sx={{ minHeight: 250 }}>
        <Typography variant="h6" component="div" textAlign="center" marginY={2}>
          Others
        </Typography>

        <Grid container spacing={4}>
          <Grid item xl={4} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              Github
            </Paper>
          </Grid>
          <Grid item xl={4} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              Git
            </Paper>
          </Grid>
          <Grid item xl={4} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              Trello
            </Paper>
          </Grid>
          <Grid item xl={4} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              VS Code
            </Paper>
          </Grid>
          <Grid item xl={4} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              Agile
            </Paper>
          </Grid>
          <Grid item xl={4} md={4} xs={6}>
            <Paper elevation={2} sx={{ textAlign: "center", padding: 1 }}>
              Scrum
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
          variant="h5"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          TECH STACKS
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={2}
            sx={{
              backgroundImage:
                isMobile || isIPad
                  ? "linear-gradient(rgba(0,200,200,0.20), rgba(0,150,150,0.17))"
                  : "linear-gradient(to right, rgba(0,200,200,0.20), rgba(0,150,150,0.17))",
            }}
          >
            {FrontEndCard}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={2}
            sx={{
              backgroundImage:
                isMobile || isIPad
                  ? "linear-gradient(rgba(0,200,200,0.17), rgba(0,150,150,0.15))"
                  : "linear-gradient(to right, rgba(0,150,150,0.17), rgba(0,150,150,0.15))",
              // backgroundColor: "transparent",
              // border: "1px solid green",
            }}
          >
            {BackEndCard}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={2}
            sx={{
              backgroundImage:
                isMobile || isIPad
                  ? "linear-gradient(rgba(0,200,200,0.15), rgba(0,150,150,0.1))"
                  : "linear-gradient(to right, rgba(0,150,150,0.15), rgba(0,0,0,0.1))",
            }}
          >
            {OtherCard}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
