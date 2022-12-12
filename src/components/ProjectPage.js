import React from "react";
import "./ProjectPage.css";

export default function ProjectPage(props) {
  return (
    <div className="projectPage">
      <h1>{props.project.title}</h1>
      <img src={props.project.image} alt={props.project.title} />
      <p>{props.project.description}</p>
    </div>
  );
}
