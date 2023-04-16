import {
  Box,
  Button,
  Input,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
          }}
        >
          CONTACT
        </Typography>
      </Box>
      <form action="">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // border: 1,
          }}
        >
          <TextField
            type="text"
            // color="primary"
            variant="outlined"
            label="Your name . . ."
            sx={{
              width: isMobile ? "90%" : "50%",
              mt: 2,
            }}
          />

          <TextField
            type="text"
            variant="outlined"
            label="Your Email . . ."
            sx={{ mt: 2, width: isMobile ? "90%" : "50%" }}
          />

          <TextField
            sx={{ my: 2, width: isMobile ? "90%" : "50%" }}
            type="text"
            variant="outlined"
            label="Message"
            multiline
            rows={5}
          />
          <Box
            sx={{
              width: isMobile ? "70%" : "20%",
              mb: 4,
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "100%",
                borderRadius: 5,
                backgroundColor: "#1C1F33",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default Contact;
