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
import "./styles.css";

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
  const emailRegEx =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  const validateEmailREGEXP = emailRegEx.test(contactObject.email);
  // Handle changes in input fields
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

  // Handle submit button
  // validate all input fields
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(false);
    // if empty, set validation error to true
    if (contactObject.name !== "") setValidateName(true);
    if (contactObject.email !== "") setValidateEmail(true);

    //  Only submit if name and email is validated
    // if (validateEmailREGEXP && validateName) {
    if (validateEmail && validateName) {
      console.log(`submitted, ${JSON.stringify(contactObject)}`);
    } else {
      console.log(`Error, could not submit`);
    }
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
            border: 1,
            borderColor: "#45A29E",
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
              className="input-field"
              sx={{
                width: "100%",
                mt: 2,
                color: "white",
              }}
              InputLabelProps={{
                classes: {
                  root: "inputLabel",
                  focused: "inputLabel",
                },
              }}
              InputProps={{
                // sx: {
                //   color: "white",
                //   paddingLeft: "15px",
                //   fontSize: "20px",
                //   color: "white",
                // },
                classes: {
                  notchedOutline: "input-border",
                },
              }}
            />
            {validateName && !isTypingName && (
              <Alert severity="error" sx={{ mt: 1 }}>
                Please enter your name
              </Alert>
            )}

            <TextField
              type="text"
              name="email"
              value={contactObject.email}
              onChange={handleChange}
              variant="outlined"
              label="Your Email . . ."
              sx={{ mt: 2, width: "100%" }}
            />
            {/* {validateEmailREGEXP && !isTypingEmail ? (
              <></>
            ) : (
              <Alert severity="error" sx={{ mt: 1 }}>
                Please enter a valid email!
              </Alert>
            )} */}
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
