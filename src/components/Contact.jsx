import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Input,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [validateName, setValidateName] = useState(true);
  const [validateEmail, setValidateEmail] = useState(true);
  const [contactObject, setContactObject] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactObject((previousInfo) => {
      return { ...previousInfo, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);

    console.log(`submitted, ${JSON.stringify(contactObject)}`);
  };
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
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            // border: 1,
            borderColor: "red",

            // display: "flex",
            // flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
            // border: 1,
          }}
        >
          <Box
            sx={{
              //   display: "flex",
              //   flexDirection: "column",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   border: 1,
              width: isMobile ? "90%" : 600,
              margin: "auto",
              //   alignContent: "center",
              //   width: "100%",
            }}
          >
            <TextField
              type="text"
              name="name"
              autoComplete="false"
              value={contactObject.name}
              onChange={handleChange}
              // color="primary"
              variant="outlined"
              label="Your name . . ."
              sx={{
                width: "100%",
                mt: 2,
              }}
            />
            {validateName && (
              <Alert severity="error" sx={{ mt: 1 }}>
                Please enter your name!
              </Alert>
            )}

            <TextField
              type="email"
              name="email"
              value={contactObject.email}
              onChange={handleChange}
              variant="outlined"
              label="Your Email . . ."
              sx={{ mt: 2, width: "100%" }}
            />
            {validateName && (
              <Alert severity="error" sx={{ mt: 1 }}>
                Please enter a valid email!
              </Alert>
            )}

            <TextField
              sx={{ my: 2, width: "100%" }}
              type="text"
              name="message"
              value={contactObject.message}
              onChange={handleChange}
              variant="outlined"
              label="Message"
              multiline
              rows={5}
            />
            <Box
              sx={{
                width: isMobile ? "70%" : "20%",
                // mb: 4,
                // border: 1,
                marginX: isMobile ? "auto" : 0,
              }}
            >
              <Button
                variant="contained"
                type="submit"
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
        </Box>
      </form>
    </div>
  );
};

export default Contact;
