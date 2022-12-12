import ProjectCard from "./ProjectCard";
import Grid from "@mui/material/Grid";
import "./PortfolioPage.css";
import { Link } from "react-router-dom";

export default function PortfolioPage() {
  return (
    <div className="portfolioPage">
      <Grid container rowSpacing={8} columnSpacing={8}>
        <Grid item xs={12} lg={6}>
          <Link to={`project1`}>
            <ProjectCard
              image="images/p1assets/interface.png"
              name="Personas and Storyboarding"
            />
          </Link>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Link to={`project2`}>
            <ProjectCard
              image="/images/p2assets/visualdesignstyleguide.PNG"
              name="Responsive Redesign"
            />
          </Link>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Link to={`project3`}>
            <ProjectCard image="images/p3assets/screenshot.png" name="Iterative Design" />
          </Link>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Link to={`project4`}>
            <ProjectCard image="/images/p4assets/screenshot.png" name="Development" />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
