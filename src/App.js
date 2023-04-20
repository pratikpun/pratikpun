import "./App.css";
import Banner from "./components/Banner";
import ResponsiveAppBar from "./components/NavBar";
import SkillsCard from "./components/SkillsCard";
import Container from "@mui/material/Container";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* TODO:
      1) Navbar
      2) intro / about - short paragraph
      3) skills (grid layout, Parent Card, with skills in paper)
      4) Projects (left - right - left), add gifs to show project usage
      5) contact - form
    */}
      {/* <BrowserRouter> */}
      <ResponsiveAppBar />

      <Container>
        <Banner />
        {/* About me */}
        <About />
        {/* Skills */}
        <SkillsCard />
        {/* Projects */}
        <Projects />

        {/* Contact */}
        <Contact />
      </Container>
      <Footer />
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
