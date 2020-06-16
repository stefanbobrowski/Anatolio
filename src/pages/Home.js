import React, { useState, useEffect } from "react";
import { A } from "hookrouter";

import exerciseLogsThumb from "../assets/project-thumbs/exercise-logs.svg";
import strawVoteThumb from "../assets/project-thumbs/straw-vote.svg";
import toDoListThumb from "../assets/project-thumbs/to-do-list.svg";
import paymentFormThumb from "../assets/project-thumbs/payment-form.svg";
import signUpThumb from "../assets/project-thumbs/sign-up.svg";
import globalProviderThumb from "../assets/project-thumbs/global-provider.svg";
import reactIcon from "../assets/skill-icons/react.svg";
import mongoIcon from "../assets/skill-icons/mongodb.svg";
import sassIcon from "../assets/skill-icons/sass.svg";
import nodeIcon from "../assets/skill-icons/node-dot-js.svg";
import jsIcon from "../assets/skill-icons/javascript.svg";

import kkhLogo from "../assets/work-logos/kkh.jpg";
import kkhdbLogo from "../assets/work-logos/kkh-db.jpg";

import akcaLogo from "../assets/work-logos/akca.png";
import asfLogo from "../assets/work-logos/asf.png";
import clevelandLogo from "../assets/work-logos/cleveland.png";
import stjamesLogo from "../assets/work-logos/stjames.png";
import setonLogo from "../assets/work-logos/seton.png";

import collingwoodLogo from "../assets/work-logos/collingwood.png";

import acsLogo from "../assets/work-logos/acs.png";

// import resumeIcon from "../assets/resume.png";
import resumeIcon from "../assets/resume.svg";
import resume from "../assets/SAB Resume.pdf";

const Home = () => {
  useEffect(() => {}, []);

  return (
    <div className="page home-page">
      <div className="page-intro">
        <div className="center-message">
          <h1>Full Stack Web Developer</h1>
          <p>
            I enjoy coding with the MERN stack and working on exciting web
            applications.
          </p>
        </div>

        <div className="code-box">
          <pre>
            <code>
              <span className="const">const</span>{" "}
              <span className="const-name">Stefan</span>{" "}
              <span className="equals">{"="}</span> {"{"}
            </code>

            <code>
              &emsp;<span className="property">occupation</span>
              <span className="colon">:</span>{" "}
              <span className="string">"Full Stack Web Developer"</span>,
            </code>
            <code>
              &emsp;<span className="property">specialty</span>
              <span className="colon">:</span>{" "}
              <span className="string">"MERN Stack"</span>,
            </code>
            <code>
              &emsp;<span className="property">interests</span>
              <span className="colon">:</span> [
            </code>
            <code>
              &emsp;&emsp;<span className="string">"Clean Code"</span>,
            </code>
            <code>
              &emsp;&emsp;
              <span className="string">"Modern but thorough solutions"</span>,
            </code>
            <code>
              &emsp;&emsp;<span className="string">"New Technologies"</span>,
            </code>
            <code>&emsp;],</code>
            <code>{"}"}</code>
          </pre>
        </div>

        <a className="resume-container" href={resume} target="_blank">
          <img src={resumeIcon} title="Resume" alt="Resume"></img>
          <p>SAB Resume.pdf (78.3kb)</p>
        </a>
      </div>

      <section className="skills-section">
        <div className="content-container">
          <div className="skills-container">
            <h2>Skills</h2>

            <div className="skill">
              <div className="skill-icon" title="React.js">
                <img src={reactIcon} alt="React"></img>
              </div>
              <p>React</p>
            </div>
            <div className="skill">
              <div className="skill-icon" title="Node.js">
                <img src={nodeIcon} alt="Node"></img>
              </div>
              <p>Node</p>
            </div>
            <div className="skill">
              <div className="skill-icon mongodb" title="MongoDB">
                <img src={mongoIcon} alt="MongoDb"></img>
              </div>
              <p>MongoDb</p>
            </div>
            <div className="skill">
              <div className="skill-icon express" title="Express.js">
                <div className="express-icon">
                  <span>ex</span>
                </div>
              </div>
              <p>Express</p>
            </div>
            <div className="skill">
              <div className="skill-icon" title="JavaScript">
                <img src={jsIcon} alt="JavaScript"></img>
              </div>
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <div className="skill-icon" title="Sass">
                <img src={sassIcon} alt="Sass"></img>
              </div>
              <p>Sass</p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="content-container">
          <h2>Projects</h2>
          <div className="projects-container">
            <A className="project" href="/projects/GlobalProvider">
              <div className="project-thumb">
                <img src={globalProviderThumb}></img>
              </div>
              <h3>Global Provider</h3>
              <p>
                A scalable global state management system built with useContext
                and useReducer.
              </p>
              <div className="skills-used">
                <div className="skill-used" title="React.js">
                  <img src={reactIcon}></img>
                </div>
                <div className="skill-used" title="Sass">
                  <img src={sassIcon}></img>
                </div>
              </div>
            </A>
            <A className="project" href="/projects/ToDoList">
              <div className="project-thumb">
                <img src={toDoListThumb}></img>
              </div>
              <h3>To-Do List</h3>
              <p>
                Got things to do? My React Hooks implementation of the classic
                To-Do List app.
              </p>
              <div className="skills-used">
                <div className="skill-used" title="React.js">
                  <img src={reactIcon}></img>
                </div>
                <div className="skill-used" title="Sass">
                  <img src={sassIcon}></img>
                </div>
              </div>
            </A>

            <A className="project" href="/projects/ExerciseLogs">
              <div className="project-thumb">
                <img src={exerciseLogsThumb}></img>
              </div>
              <h3>Exercise Logs</h3>
              <p>
                Create, Read, Update, and Delete your own <i>Exercise Logs</i>{" "}
                in this full stack MERN application.
              </p>
              {/* <p>
                Track your fitness with <i>Exercise Logs</i>, small check-ins of
                your exercises with personal stats.{" "}
              </p> */}

              <div className="skills-used">
                <div className="skill-used">
                  <img src={mongoIcon}></img>
                </div>

                <div className="skill-used">
                  <div className="express-icon" title="Express.js">
                    <span>ex</span>
                  </div>
                </div>
                <div className="skill-used" title="Node.js">
                  <img src={nodeIcon}></img>
                </div>
                <div className="skill-used" title="React.js">
                  <img src={reactIcon}></img>
                </div>
                <div className="skill-used" title="Sass">
                  <img src={sassIcon}></img>
                </div>
              </div>
            </A>
            <A className="project" href="/projects/SignUp">
              <div className="project-thumb">
                <img src={signUpThumb}></img>
              </div>
              <h3>SignUp</h3>
              <p>
                A full stack MERN application for signing a piece of paper.
                Everyone sign up!
              </p>

              <div className="skills-used">
                <div className="skill-used">
                  <img src={mongoIcon}></img>
                </div>

                <div className="skill-used">
                  <div className="express-icon" title="Express.js">
                    <span>ex</span>
                  </div>
                </div>
                <div className="skill-used" title="Node.js">
                  <img src={nodeIcon}></img>
                </div>
                <div className="skill-used" title="React.js">
                  <img src={reactIcon}></img>
                </div>
                <div className="skill-used" title="Sass">
                  <img src={sassIcon}></img>
                </div>
              </div>
            </A>

            <A className="project" href="/projects/PaymentForm">
              <div className="project-thumb">
                <img src={paymentFormThumb}></img>
              </div>
              <h3>Payment Form</h3>
              <p>
                Use this dynamic payment form with validation to add payment
                methods to your wallet.
              </p>
              <div className="skills-used">
                <div className="skill-used" title="React.js">
                  <img src={reactIcon}></img>
                </div>
                <div className="skill-used" title="Sass">
                  <img src={sassIcon}></img>
                </div>
              </div>
            </A>

            <A href="/projects/StrawVote" className="project">
              <div className="project-thumb">
                <img src={strawVoteThumb}></img>
              </div>
              <h3>Straw Vote</h3>
              <p>
                {" "}
                Straw Vote is the best place to create instant, real-time votes
                for free.{" "}
              </p>
              <div className="skills-used">
                <div className="skill-used" title="React.js">
                  <img src={reactIcon}></img>
                </div>

                <div className="skill-used" title="Sass">
                  <img src={sassIcon}></img>
                </div>
              </div>
            </A>
          </div>
        </div>
      </section>
      <section className="work-section">
        <div className="content-container">
          <h2>Work</h2>
          <div className="works-container">
            <a
              className="work kkh-db"
              href="https://www.kathykuohome.com/designbar"
              target="_blank"
            >
              <img src={kkhdbLogo}></img>
              <div className="details">
                <h5>
                  Design Bar, <i>Kathy Kuo Home</i>
                </h5>
              </div>
            </a>
            <a
              className="work kkh"
              href="https://www.kathykuohome.com/"
              target="_blank"
            >
              <img src={kkhLogo}></img>
              <div className="details">
                <h5>
                  Kathy Kuo Home, <i>Kathy Kuo Home</i>
                </h5>
              </div>
            </a>

            {/* <a
              className="work akca"
              href="https://www.akcainc.com/
              "
              target="_blank"
            >
              <img src={akcaLogo}></img>
              <div className="details">
                <h5>
                  AKCA, Inc, <i>ArchiFX</i>
                </h5>
              </div>
            </a> */}

            <a
              className="work seton"
              href="https://www.slshs.org/"
              target="_blank"
            >
              <img src={setonLogo}></img>
              <div className="details">
                <h5>
                  Seton LaSalle High School, <i>Finalsite</i>
                </h5>
              </div>
            </a>
            <a
              className="work collingwood"
              href="https://www.collingwood.org/"
              target="_blank"
            >
              <img src={collingwoodLogo}></img>
              <div className="details">
                <h5>
                  Collingwood School, <i>Finalsite</i>
                </h5>
              </div>
            </a>
            <a
              className="work asf"
              href="https://www.asf.edu.mx/"
              target="_blank"
            >
              <img src={asfLogo}></img>
              <div className="details">
                <h5>
                  The American School Foundation, <i>Finalsite</i>
                </h5>
              </div>
            </a>

            <a
              className="work cleveland"
              href="https://www.cleveland.edu/"
              target="_blank"
            >
              <img src={clevelandLogo}></img>
              <div className="details">
                <h5>
                  Cleveland University, <i>Finalsite</i>
                </h5>
              </div>
            </a>

            <a
              className="work acs"
              href="https://www.acs.edu.lb/index.cfm"
              target="_blank"
            >
              <img src={acsLogo}></img>
              <div className="details">
                <h5>
                  American Community School Beirut, <i>Finalsite</i>
                </h5>
              </div>
            </a>

            <a
              className="work stjames"
              href="https://www.stjames.edu/"
              target="_blank"
            >
              <img src={stjamesLogo}></img>
              <div className="details">
                <h5>
                  Saint James School, <i>Finalsite</i>
                </h5>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
