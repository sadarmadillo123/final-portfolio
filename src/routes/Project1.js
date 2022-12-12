import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Typography } from "@mui/material";
import PortfolioPage from "../components/PortfolioPage";
import "./Project1.css";

export default function Project1() {
  return (
    <div className="projectContainer">
      <a id="back-to-top-anchor"></a>
      <Navbar title="Personas and Storyboarding" isProjectPage="true" />
      <div id="project-content-container">
        <div class="section">
          <h3>Overview</h3>
          <div class="section-row-flush-left">
            <p>
              The first step in the design thinking processis to empathize with users.
              From a design perspective, the goal of this step is to develop the best
              possible understanding we can about users, which also involves setting aside
              previous assumptions we might have had about users and the ways they would
              interact with our product. Taking the time to understand users and their
              motivations also helps us communicate to others (stakeholders, shareholders,
              etc.) why our product has value by showing how it meets a particular ignored
              or under-served user need.
            </p>
          </div>
          <div style={{ marginTop: "0rem" }} class="section-row-flush-left">
            <blockquote cite="https://www.interaction-design.org/literature/topics/design-thinking">
              "Design thinking is a non-linear, iterative process that teams use to
              understand users, challenge assumptions, redefine problems and create
              innovative solutions to prototype and test." <br />
              &nbsp;&nbsp;&nbsp;
              <i style={{ color: "black", fontStyle: "normal" }}>
                interaction-design.org
              </i>
            </blockquote>
          </div>
          <div style={{ marginTop: "0rem" }} class="section-row-flush-left">
            <p>
              <strong>Personas</strong> and <strong>Storyboarding</strong> are two tools
              designers can use in this phase of the design process to gain this better
              understanding of the user perspective and their specific needs. The goal of
              this project was to gather relevant user data about a particular interface,
              and leverage that data to create user personas and a storyboard.
            </p>
          </div>
        </div>

        <div class="section">
          <h3>Part 1: Preparation</h3>
          <div class="section-row-flush-left">
            <div class="left-section">
              <p style={{ marginTop: "0rem" }}>
                I first began by identifing a particular public interface to examine. For
                this project, I chose to examine the new Brown washing machines because
                they are a interface students interact often with, I have personal
                familiarity with the interface (which helped with doing observations), and
                I enjoy the warmth of the indoors.
              </p>
              <p>
                Next I drafted a set of questions regarding user experiences with the
                interface:
              </p>
              <p>
                <strong>Questions:</strong>
              </p>
              <ol style={{ marginTop: "0.3em" }}>
                <li>When do you decide you need to do laundry?</li>
                <ol type="a">
                  <li>
                    When you do need to do laundry, how often do you use the on-campus
                    washing machines?
                  </li>
                </ol>
                <li>
                  Is there any specific process or routine you have when doing laundry
                  (before using the actual machine)?
                </li>
                <li>How do you decide which settings to use on the washing machine?</li>
                <li>
                  Do you recall any difficulties or accidents you have had when selecting
                  washing machine settings?
                </li>
                <li>
                  What additional washing machine setting would be useful to you for
                  washing clothes?
                </li>
              </ol>
            </div>

            <figure style={{ marginLeft: "2vw" }}>
              <img
                src={process.env.PUBLIC_URL + "/images/p1assets/interface.png"}
                alt="A sketch of a drawing machine."
                width="502px"
                height="425px"
              />
              <figcaption>
                Fig 1) The front of the machine contains the main door, detergent drawer,
                and an information label. There are two panels on the top of the machine.
                One allows the user to set washer settings with a timer and start button.
                The other panel contains machine instructions which consist only of icons
                (no text).
              </figcaption>
            </figure>
          </div>
        </div>

        <div class="section">
          <h3>Part 2: Observations</h3>
          <div class="section-row-flush-left">
            <p>
              I then gathered data from interviews with these same experience questions
              along with my own observations of user interactions with the interface. I
              observed/interviewed 3 separate students in the Diman laundry room, and my
              results are summarized below.
            </p>
          </div>
          <div class="section-row-flush-left">
            <p>
              <strong>Interview Response Summary:</strong>
            </p>
          </div>

          <div class="section-row-flush-left">
            <ul>
              <li>
                Laundry was either done around once a week (2/3) or based purely on when a
                particular user ran out of specific clothing item (1/3), none of the three
                users did their laundry via alternative methods
              </li>
              <li>
                Two users did not do additional work outside of gathering dirty clothes
                before using the wachine mashing, one user reported separated laundry into
                light/dark clothes to prevent bleeding
              </li>
              <li>
                Users generally did not pay much attention to settings unless in certain
                circumstances, such as a particularly dirty load or a load with delicate
                clothing
              </li>
              <li>
                Users didn't have many difficulties using the interface, none mentioned a
                particular negative experience (besides the fact that certain machines had
                not worked properly in previous years)
              </li>
              <li>
                Users did not express a need for additional options, and felt that the
                options presented were sufficent for their needs, one user was skeptical
                about the efficacy of the 'delicate' setting on the machine but did not
                provide an alternative
              </li>
            </ul>
          </div>

          <div class="section-row-flush-left">
            <p>
              <strong>Observation Summary:</strong>
            </p>
          </div>

          <div class="section-row-flush-left">
            <ul>
              <li>
                Users typically interacted with the interface for a short period of time
                (finished interactions &#60; 10-15 seconds after loading the machine)
              </li>
              <li>
                Users observed did not change the initial settings before starting the
                machine
              </li>
              <li>
                No users looked at the instructions/icon displayed on the top portion of
                the machine
              </li>
              <li>
                Users lingered for a brief moment after starting the machine, usually
                looking at the timer or machine door
              </li>
            </ul>
          </div>
        </div>

        <div class="section">
          <h3>Part 3: Personas</h3>
          <div class="section-row-space-evenly">
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/images/p1assets/map1.png"}
                alt="An empathy map for a persona 'Organized Oliver'. Describes thoughts/feelings/actions/speech of persona during interaction with washing machine interface."
                width="720px"
                height="540px"
              />
              <figcaption>
                Fig 2) An empathy map for 'Organized Oliver', a student who is more
                intentional about washing machine use and maintaining good laundry habits.
              </figcaption>
            </figure>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/images/p1assets/map2.png"}
                alt="An empathy map for a persona 'Lazy Larry'. Describes thoughts/feelings/actions/speech of persona during interaction with washing machine interface."
                width="720px"
                height="540px"
              />
              <figcaption>
                Fig 3) An empathy map for 'Lazy Larry', a student who uses the washing
                machine on a need-to basis and prioritizes just getting laundry done over
                choosing the best washer settings.
              </figcaption>
            </figure>
          </div>
        </div>

        <div class="section">
          <h3>Part 4: Storyboard</h3>
          <div style={{ marginTop: "1em" }} class="section-row-space-evenly">
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/images/p1assets/storyboard.png"}
                alt="Storyboard."
                width="680px"
                height="680px"
              />
              <figcaption>Fig 4) A short storyboard for the interface!</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
