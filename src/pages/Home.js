import React, { useState, useEffect } from "react";
import { A } from "hookrouter";

import projectThumb from "../assets/StefanBobrowski.png";
import exerciseLogsThumb from "../assets/project-thumbs/exercise-logs.svg";
import strawVoteThumb from "../assets/project-thumbs/straw-vote.svg";
import toDoListThumb from "../assets/project-thumbs/to-do-list.svg";
import paymentFormThumb from "../assets/project-thumbs/payment-form.svg";
import reactIcon from "../assets/skill-icons/react.svg";
import mongoIcon from "../assets/skill-icons/mongodb.svg";
import sassIcon from "../assets/skill-icons/sass.svg";
import nodeIcon from "../assets/skill-icons/node-dot-js.svg";

const Home = () => {
  useEffect(() => {}, []);

  return (
    <div className="page home-page">
      <div className="page-intro">
        <div className="center-message">
          <h1>Full Stack Web Developer</h1>

          <p>
            I love coding with the MERN stack and learning new technologies.
          </p>
        </div>

        <div className="code-box">
          <pre>
            <code>
              <span className="const">const</span>{" "}
              <span className="const-name">Stefan</span> = {"{"}
            </code>

            <code>
              &emsp;<span className="property">occupation</span>
              <span className="colon">:</span>{" "}
              <span className="string">"Full Stack Developer"</span>,
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
              &emsp;&emsp;<span className="string">"Thorough solutions"</span>,
            </code>
            <code>
              &emsp;&emsp;<span className="string">"New Technologies"</span>,
            </code>
            <code>&emsp;],</code>
            <code>{"}"}</code>
          </pre>
        </div>
      </div>

      <section className="skills-section">
        <div className="content-container">
          <div className="skills-container">
            <h2>Skills</h2>

            <div className="skill">
              <div className="skill-icon">
                <img src={reactIcon} alt="react"></img>
              </div>
              <p>React</p>
            </div>
            <div className="skill">
              <div className="skill-icon">
                <img src={reactIcon} alt="react"></img>
              </div>
              <p>Express</p>
            </div>
            <div className="skill">
              <div className="skill-icon">
                <img src={nodeIcon} alt="react"></img>
              </div>
              <p>Node</p>
            </div>
            <div className="skill">
              <div className="skill-icon">
                <img src={mongoIcon} alt="react"></img>
              </div>
              <p>MongoDb</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="content-container">
          <h2>Projects</h2>

          <div className="projects-container">
            <A href="/" className="project">
              <div className="project-thumb">
                <img src={strawVoteThumb}></img>
              </div>
              <h3>Straw Vote</h3>
              <p>
                {" "}
                Straw Vote is the best place to create instant, real-time polls
                for free.{" "}
              </p>
              <div className="skills-used">
                <div className="skill-used">
                  <img src={reactIcon}></img>
                </div>
                <div className="skill-used">
                  <img src={mongoIcon}></img>
                </div>
                <div className="skill-used">
                  <img src={nodeIcon}></img>
                </div>
                <div className="skill-used">
                  <img src={sassIcon}></img>
                </div>
              </div>
            </A>
            <div className="project">
              <div className="project-thumb">
                <img src={toDoListThumb}></img>
              </div>
              <h3>To-Do List</h3>
              <p>
                Got things to do? My implementation of the classic To-Do List.
              </p>
              <div className="skills-used">
                <div className="skill-used">
                  <img src={reactIcon}></img>
                </div>
                <div className="skill-used">
                  <img src={mongoIcon}></img>
                </div>
                <div className="skill-used">
                  <img src={nodeIcon}></img>
                </div>
                <div className="skill-used">
                  <img src={sassIcon}></img>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project-thumb">
                <img src={paymentFormThumb}></img>
              </div>
              <h3>Payment Form</h3>
              <p>
                Create, Read, Update, and Delete payment methods in this full
                stack MERN app.
              </p>
              <div className="skills-used">
                <div className="skill-used">
                  <img src={reactIcon}></img>
                </div>
                <div className="skill-used">
                  <img src={mongoIcon}></img>
                </div>
                <div className="skill-used">
                  <img src={nodeIcon}></img>
                </div>
                <div className="skill-used">
                  <img src={sassIcon}></img>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project-thumb">
                <img src={exerciseLogsThumb}></img>
              </div>
              <h3>Exercise Logs</h3>
              <p>
                Track your fitness with <i>Exercise Logs</i>, small check-ins of
                your exercises with personal stats.{" "}
              </p>

              <div className="skills-used">
                <div className="skill-used">
                  <img src={reactIcon}></img>
                </div>
                <div className="skill-used">
                  <img src={mongoIcon}></img>
                </div>
                <div className="skill-used">
                  <img src={nodeIcon}></img>
                </div>
                <div className="skill-used">
                  <img src={sassIcon}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="content-container">
          <h2>Work</h2>

          <div className="works-container">
            <div className="work">
              <h4>Windsor High School</h4>
              <h4>Finalsite</h4>
              <p>This website lorem ipsum</p>
            </div>
            <div className="work">
              <h4>Canadian University</h4>
              <h4>Finalsite</h4>
              <p>This website lorem ipsum</p>
            </div>
            <div className="work">
              <h4>Design Bar</h4>
              <h4>Kathy Kuo Home</h4>
              <p>This website lorem ipsum</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="content-container">
          <h2>Contact</h2>
          <p>Please contact me at stefanbobrowski1@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
