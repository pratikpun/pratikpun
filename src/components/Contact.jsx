import {
  Alert,
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [validateName, setValidateName] = useState(false);
  const [isTypingName, setIsTypingName] = useState(false);
  const [isTypingEmail, setIsTypingEmail] = useState(false);
  const [validateEmail, setValidateEmail] = useState(false);
  const [contactObject, setContactObject] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      if (value !== "") {
        setIsTypingName(true);
      } else {
        setIsTypingName(false);
      }
    }

    if (name === "email") {
      if (value !== "") {
        setIsTypingEmail(true);
      } else {
        setIsTypingEmail(false);
      }
    }

    setContactObject((previousInfo) => {
      return { ...previousInfo, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);

    if (contactObject.name === "") setValidateName(true);
    if (contactObject.email === "") setValidateEmail(true);

    console.log(`submitted, ${JSON.stringify(contactObject)}`);
  };
  return (
    <>
      <Box id="contact" sx={{ textAlign: "center" }}>
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
          }}
        >
          <Box
            sx={{
              width: isMobile ? "90%" : 600,
              margin: "auto",
            }}
          >
            <TextField
              type="text"
              name="name"
              autoComplete="false"
              value={contactObject.name}
              onChange={handleChange}
              variant="outlined"
              label="Your name . . ."
              sx={{
                width: "100%",
                mt: 2,
              }}
            />
            {validateName && !isTypingName && (
              <Alert severity="error" sx={{ mt: 1 }}>
                Please enter your name
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
            {validateEmail && !isTypingEmail && (
              <Alert severity="error" sx={{ mt: 1 }}>
                Please enter your email
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
    </>
  );
};

export default Contact;
