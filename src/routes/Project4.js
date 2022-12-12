import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "@mui/material/Button";

export default function Project4() {
  return (
    <div className="projectContainer">
      <a id="back-to-top-anchor"></a>
      <Navbar title="Development" isProjectPage="true" />
      <div id="project-content-container" style={{ minHeight: "100vh" }}>
        <div class="section">
          <h3>Overview</h3>
          <div class="section-row-flush-left">
            <p>
              The goal of the project was to practice using React by developing an
              interactive interface. The interface needed to have various interface
              components and tie components to an internal data state. I chose to make an
              interface for an online shopping page at a bakery, with filtering and
              sorting options for each bakery item combined with a global shopping cart
              which keeps track of items selected and the total price of selected items.
              Data about each bakery item is passed in via a JSON file, which can be
              updated or modified if the bakery shop needed to update the description for
              a food, its popularity, or current availability.{" "}
            </p>
          </div>
          <div style={{ marginRight: "auto", marginLeft: "auto" }}>
            <a href="https://sadarmadillo123.github.io/development/" target="_blank">
              <Button sx={{ fontSize: "2rem", marginTop: "1rem", fontWeight: "bold" }}>
                {" "}
                Click here to see the website!
              </Button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
