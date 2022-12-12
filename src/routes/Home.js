import PortfolioPage from "../components/PortfolioPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Typography } from "@mui/material";
import "./Home.css";
import About from "../components/About";

export default function Home() {
  return (
    <div className="home">
      <a id="back-to-top-anchor"></a>
      <Navbar title="Portfolio" isHomePage="true" />
      <About />

      <div className="section-about">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="section-header">
          <h2>Projects</h2>
        </div>
        <PortfolioPage />
      </div>
      <Footer />
    </div>
  );
}
