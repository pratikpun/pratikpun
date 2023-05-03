import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isNameError, setNameError] = useState(false);
  const [isEmailError, setEmailError] = useState(false);
  const [contactObject, setContactObject] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submit, setSubmit] = useState(false);
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const emailRegEx =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  const validateEmailREGEXP = emailRegEx.test(contactObject.email);

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      if (value !== "") {
        setNameError(false);
      } else {
        setNameError(true);
      }
    }
    if (name === "email") {
      if (value !== "") {
        setEmailError(false);
      } else {
        setEmailError(true);
      }
    }
    setContactObject((previousInfo) => {
      return { ...previousInfo, [name]: value };
    });
  };

  // handling SNACKBAR
  const { vertical, horizontal, open } = snackbarState;
  const handleClick = (newState) => () => {
    setSnackbarState({ open: true, ...newState });
  };
  const handleClose = () => {
    setSnackbarState({ ...snackbarState, open: false });
  };

  // Valid name check
  const isValidName = () => {
    return contactObject.name !== "" && contactObject.name.length > 1;
  };

  // valid email check
  const isValidEmail = () => {
    return contactObject.email !== "" && validateEmailREGEXP;
  };

  // Handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidName()) {
      setNameError(true);
    }
    if (!isValidEmail()) {
      setEmailError(true);
    }

    if (isValidEmail() && isValidName()) {
      const serviceID = `${process.env.REACT_APP_EMAIL_SERVICE_ID}`;
      const templateID = `${process.env.REACT_APP_EMAIL_TEMPLATE_ID}`;
      const publicKey = `${process.env.REACT_APP_EMAIL_PUBLIC_KEY}`;
      emailjs
        .sendForm(
          "service_1uqfou5",
          "template_7mid9ow",
          form.current,
          "MuJmdCPzEaFFQG8vT"
        )
        // .sendForm(serviceID, templateID, form.current, publicKey)
        .then(
          (result) => {
            if (result.text === "OK") {
              console.log(contactObject);
              console.log("Message sent successfully!");
              console.log(result.text);
              setSubmit(true);
              console.log(`submitted, ${JSON.stringify(contactObject)}`);
              setContactObject({ name: "", email: "", message: "" });
            }
          },
          (error) => {
            console.log("Failed to send message...");
            console.log(error.text);
          }
        );
    } else {
      setSubmit(false);
      console.log("Error, did not submit. . .");
    }

    // if my validation works then send message using email js.
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
      <form ref={form} onSubmit={handleSubmit}>
        <Box>
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
              label="Name "
              sx={{
                width: "100%",
                mt: 2,
              }}
            />

            {isNameError && (
              <Alert severity="error" sx={{ mt: 1 }}>
                Please enter your name
              </Alert>
            )}
            {/* {isValidName === "false" && !isTypingName ? (
              <Alert severity="error" sx={{ mt: 1 }}>
                Please enter your name
              </Alert>
            ) : (
              <></>
            )} */}

            <TextField
              type="text"
              name="email"
              value={contactObject.email}
              onChange={handleChange}
              variant="outlined"
              label="Email"
              sx={{ mt: 2, width: "100%" }}
            />

            {isEmailError && (
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
                onClick={handleClick({
                  vertical: "top",
                  horizontal: "center",
                })}
                sx={{
                  width: "100%",
                }}
              >
                Submit
              </Button>
              {submit && (
                <Snackbar
                  anchorOrigin={{ vertical, horizontal }}
                  open={open}
                  autoHideDuration={2000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    Message sent successfully!
                  </Alert>
                </Snackbar>
              )}
            </Box>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default Contact;
