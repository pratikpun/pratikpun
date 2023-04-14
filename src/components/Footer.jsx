import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
  //   const [currentDate, setCurrentDate] = useState();
  const date = new Date().getFullYear();
  return (
    <footer>
      <Box
        sx={{
          height: 60,
          backgroundColor: "#1C1F33",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography>&copy; Pratik Pun {date}</Typography>
      </Box>
    </footer>
  );
};

export default Footer;
