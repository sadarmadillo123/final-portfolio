import React from "react";
import "./About.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import IconButton from "@mui/material/IconButton";

export default function About() {
  const path = process.env.PUBLIC_URL + "images/header-background-2.jpg";

  return (
    <React.Fragment>
      <div className="background-tint">
        <div className="about">
          <div className="banner">
            <div className="banner-text">
              <h1 className="responsive-headline" style={{ marginTop: "1rem" }}>
                Hi, I'm <span className="gradient-text">Somebody</span>!
              </h1>
              <h3
                style={{
                  color: "#fff",
                  fontFamily: "sans-serif ",
                  fontSize: "24px",
                  textShadow: `2px 4px 3px rgba(0,0,0,0.3)`,
                }}
              >
                Student currently studying{" "}
                <a
                  className="styled-link"
                  href="https://cs.brown.edu/courses/csci1300/"
                  target="_blank"
                >
                  UI/UX
                </a>{" "}
                at {""}
                <a className="styled-link" href="https://cs.brown.edu/ " target="_blank">
                  Brown University
                </a>
                .
              </h3>
              <hr />
              <div className="icons">
                <a href="https://linkedin.com" target="_blank">
                  <IconButton>
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                </a>
                <a href="https://github.com/sadarmadillo123/" target="_blank">
                  <IconButton>
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                </a>
                <a href="https://instagram.com" target="_blank">
                  <IconButton>
                    <InstagramIcon fontSize="large" />
                  </IconButton>
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                  <IconButton>
                    <YouTubeIcon fontSize="large" />
                  </IconButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
