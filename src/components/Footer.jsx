import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
  //   const [currentDate, setCurrentDate] = useState();
  const date = new Date().getFullYear();
  return (
    <footer>
      <Box
        sx={{
          height: "30%",
          mt: 3,
          p: 2,
          backgroundColor: "#1C1F33",
          color: "white",
          //   textAlign: "center",
          //   marginY: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>&copy; Pratik Pun {date}</Typography>
        <Typography>Developed with Material UI</Typography>
      </Box>
    </footer>
  );
};

export default Footer;
