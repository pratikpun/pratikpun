import {
  Box,
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
          }}
        >
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            label="Email"
          />

          <TextField
            type="text"
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
        </Box>
      </form>
    </div>
  );
};

export default Contact;
