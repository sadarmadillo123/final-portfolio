import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import "./ProjectCard.css";

export default function ProjectCard(props) {
  return (
    <div className="projectCard">
      <img
        className="project-image"
        height="500px"
        src={process.env.PUBLIC_URL + props.image}
      />
      <div class="overlay">
        <div class="text">{props.name}</div>
      </div>
    </div>
  );
}
