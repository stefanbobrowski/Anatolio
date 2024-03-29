import React, { useEffect } from 'react';
import { A } from 'hookrouter';
import exerciseLogsThumb from '../assets/project-thumbs/exercise-logs.svg';
import strawVoteThumb from '../assets/project-thumbs/straw-vote.svg';
import toDoListThumb from '../assets/project-thumbs/to-do-list.svg';
import paymentFormThumb from '../assets/project-thumbs/payment-form.svg';
import signUpThumb from '../assets/project-thumbs/sign-up.svg';
import globalProviderThumb from '../assets/project-thumbs/global-provider.svg';
import mineralMinerThumb from '../components/MineralMiner/assets/minerals.jpg';
import reactIcon from '../assets/skill-icons/react.svg';
import mongoIcon from '../assets/skill-icons/mongodb.svg';
import sassIcon from '../assets/skill-icons/sass.svg';
import nodeIcon from '../assets/skill-icons/node-dot-js.svg';
import jsIcon from '../assets/skill-icons/javascript.svg';
import tsIcon from '../assets/skill-icons/typescript.svg';
import ueIcon from '../assets/skill-icons/ue.svg';
import copilotIcon from '../assets/skill-icons/copilot.svg';
import steamIcon from '../assets/skill-icons/steam.png';
import resumeIcon from '../assets/resume.svg';
import resume from '../assets/StefanResume2023.pdf';
import githubIcon from '../assets/social-links/github.svg';
import stackoverflowIcon from '../assets/social-links/stackoverflow.svg';
import linkedinIcon from '../assets/social-links/linkedin.svg';
import sjIcon from '../assets/sj.png';

const Home = () => {
  return (
    <div className='page home-page'>
      <div className='page-intro'>
        <div className='center-message'>
          <h1>
            <span>Stefan Bobrowski,</span> Front-end Developer
          </h1>
          <p>Highly skilled Front-end Developer with over a decade of experience developing web applications.</p>
        </div>

        <div className='code-box'>
          <pre>
            <code>
              <span className='const'>const </span> <span className='const-name'>stefanBobrowski </span>{' '}
              <span className='equals'>{'= '}</span> <span className='curly-bracket'>{'{'}</span>
            </code>
            <code>
              &emsp;<span className='property'>occupation</span>
              <span className='colon'>: </span>{' '}
              <span className='string'>
                <span className='bracket'>{'['}</span>'Front-end Developer'<span className='comma'>,</span> 'Software
                Engineer'<span className='bracket'>{']'}</span>
                <span className='comma'>,</span>
              </span>
            </code>
            <code>
              &emsp;<span className='property'>skills</span>
              <span className='colon'>: </span>{' '}
              <span className='string'>
                'JavaScript, Typescript, React, Redux Saga, Node, Express, GraphQL, Apollo, MongoDB, Docker, Git, CSS,
                SASS, Figma, Jira, REST, UI/UX, Component Design Systems, Agile/Scrum, Accessibility, NoSQL, Server-side
                rendering, Micro-front ends, Web Sockets, Unit testing, Integration testing, End-to-end testing, Github
                Copilot, and more!'
                <span className='comma'>,</span>
              </span>
            </code>
            <code>
              &emsp;<span className='property'>interests</span>
              <span className='colon'>: </span>
              <span className='bracket'>[</span>
            </code>
            <code>
              &emsp;&emsp;
              <span className='string'>
                'Building scalable and accessible applications'<span className='comma'>,</span>
              </span>
            </code>
            <code>
              &emsp;&emsp;
              <span className='string'>
                'Creating beautiful, streamlined user experiences'<span className='comma'>,</span>
              </span>
            </code>
            <code>
              &emsp;&emsp;
              <span className='string'>
                'Writing clean, performant, and well-tested code'<span className='comma'>,</span>
              </span>
            </code>
            <code>
              &emsp;&emsp;
              <span className='string'>
                'Leveraging AI and other cutting-edge technologies'<span className='comma'>,</span>
              </span>
            </code>
            <code>
              &emsp;&emsp;
              <span className='string'>
                'Providing business value and constantly learning'<span className='comma'>,</span>
              </span>
            </code>
            <code>
              &emsp;<span className='bracket'>]</span>
              <span className='comma'>,</span>
            </code>
            <code>
              <span className='curly-bracket'>{'}'}</span>
              <span className='semi-colon'>{';'}</span>
            </code>
          </pre>
        </div>

        <a className='resume-container' href={resume} target='_blank' rel='noreferrer'>
          <img src={resumeIcon} title='Resume' alt='Resume'></img>
          <p>StefanResume2023.pdf (50.8KB)</p>
        </a>
      </div>

      <section className='skills-section'>
        <div className='content-container'>
          <div className='skills-container'>
            <h2>Skills </h2>
            <div className='skill'>
              <div className='skill-icon' title='CoPilot'>
                <img src={copilotIcon} alt='CoPilot'></img>
              </div>
              <p>Copilot</p>
            </div>
            <div className='skill'>
              <div className='skill-icon' title='JavaScript'>
                <img src={jsIcon} alt='JavaScript'></img>
              </div>
              <p>JavaScript</p>
            </div>
            <div className='skill'>
              <div className='skill-icon' title='TypeScript'>
                <img src={tsIcon} alt='TypeScript'></img>
              </div>
              <p>TypeScript</p>
            </div>
            <div className='skill'>
              <div className='skill-icon' title='React.js'>
                <img src={reactIcon} alt='React'></img>
              </div>
              <p>React</p>
            </div>
            <div className='skill'>
              <div className='skill-icon' title='Node.js'>
                <img src={nodeIcon} alt='Node'></img>
              </div>
              <p>Node</p>
            </div>
            <div className='skill'>
              <div className='skill-icon mongodb' title='MongoDB'>
                <img src={mongoIcon} alt='MongoDb'></img>
              </div>
              <p>MongoDb</p>
            </div>
            <div className='skill'>
              <div className='skill-icon express' title='Express.js'>
                <div className='express-icon'>
                  <span>ex</span>
                </div>
              </div>
              <p>Express</p>
            </div>
            <div className='skill'>
              <div className='skill-icon' title='Sass'>
                <img src={sassIcon} alt='Sass'></img>
              </div>
              <p>Sass</p>
            </div>
          </div>
        </div>
      </section>

      <section className='projects-section'>
        <div className='content-container'>
          <h2>Projects</h2>
          <div className='projects-container'>
            <A className='project nine-square' href='/projects/NineSquare'>
              <div className='project-thumb'>
                <div className='nine-square-logo'>
                  <span>9</span>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <h3>NineSquare</h3>
              <p>Game I created with game theory.</p>
              <div className='skills-used'>
                <div className='skill-used' title='JavaScript'>
                  <img src={jsIcon} alt='JavaScript'></img>
                </div>
                <div className='skill-used' title='React.js'>
                  <img src={reactIcon} alt='React'></img>
                </div>
              </div>
            </A>
            <a
              className='project derision'
              href='https://store.steampowered.com/app/2218950/Derision/'
              target='_blank'
              rel='noreferrer'>
              <div className='project-thumb'></div>
              <h3>Derision</h3>
              <p>PC game made with Unreal Engine 5. Available now on Steam.</p>
              <div className='skills-used'>
                <div className='skill-used' title='Unreal Engine 5'>
                  <img src={ueIcon} alt='UE5'></img>
                </div>
                <div className='skill-used' title='Steam SDK'>
                  <img src={steamIcon} alt='Steam'></img>
                </div>
              </div>
            </a>
            <A className='project' href='/projects/MineralMiner'>
              <div className='project-thumb'>
                <img src={mineralMinerThumb} alt='Mineral Miner'></img>
              </div>
              <h3>Mineral Miner</h3>
              <p>Starcraft II tribute game.</p>
              <div className='skills-used'>
                <div className='skill-used' title='React.js'>
                  <img src={reactIcon} alt='React'></img>
                </div>
                <div className='skill-used' title='Sass'>
                  <img src={sassIcon} alt='SASS'></img>
                </div>
              </div>
            </A>
            <A className='project' href='/projects/GlobalProvider'>
              <div className='project-thumb'>
                <img src={globalProviderThumb} alt='Global Provider'></img>
              </div>
              <h3>Global Provider</h3>
              <p>Scalable global state management system built with useContext and useReducer. (outdated)</p>
              <div className='skills-used'>
                <div className='skill-used' title='React.js'>
                  <img src={reactIcon} alt='React'></img>
                </div>
                <div className='skill-used' title='Sass'>
                  <img src={sassIcon} alt='SASS'></img>
                </div>
              </div>
            </A>
            <A className='project' href='/projects/ToDoList'>
              <div className='project-thumb'>
                <img src={toDoListThumb} alt='ToDo List'></img>
              </div>
              <h3>To-Do List</h3>
              <p>Got things to do? My React Hooks implementation of the classic To-Do List app.</p>
              <div className='skills-used'>
                <div className='skill-used' title='React.js'>
                  <img src={reactIcon} alt='React'></img>
                </div>
                <div className='skill-used' title='Sass'>
                  <img src={sassIcon} alt='SASS'></img>
                </div>
              </div>
            </A>

            <A className='project' href='/projects/ExerciseLogs'>
              <div className='project-thumb'>
                <img src={exerciseLogsThumb} alt='Excercise Logs'></img>
              </div>
              <h3>Exercise Logs</h3>
              <p>
                Create, Read, Update, and Delete your own <i>Exercise Logs</i> in this full stack MERN application.
              </p>
              <div className='skills-used'>
                <div className='skill-used'>
                  <img src={mongoIcon} alt='MongoDB' title='MongoDB'></img>
                </div>

                <div className='skill-used'>
                  <div className='express-icon' title='Express.js'>
                    <span>ex</span>
                  </div>
                </div>
                <div className='skill-used' title='Node.js'>
                  <img src={nodeIcon} alt='Node'></img>
                </div>
                <div className='skill-used' title='React.js'>
                  <img src={reactIcon} alt='React'></img>
                </div>
                <div className='skill-used' title='Sass'>
                  <img src={sassIcon} alt='SASS'></img>
                </div>
              </div>
            </A>
            <A className='project' href='/projects/SignUp'>
              <div className='project-thumb'>
                <img src={signUpThumb} alt='Sign up'></img>
              </div>
              <h3>SignUp</h3>
              <p>Full-stack MERN application for signing a piece of paper. Everyone sign up!</p>

              <div className='skills-used'>
                <div className='skill-used'>
                  <img src={mongoIcon} alt='MongoDB'></img>
                </div>

                <div className='skill-used'>
                  <div className='express-icon' title='Express.js'>
                    <span>ex</span>
                  </div>
                </div>
                <div className='skill-used' title='Node.js'>
                  <img src={nodeIcon} alt='Node'></img>
                </div>
                <div className='skill-used' title='React.js'>
                  <img src={reactIcon} alt='React'></img>
                </div>
                <div className='skill-used' title='Sass'>
                  <img src={sassIcon} alt='SASS'></img>
                </div>
              </div>
            </A>

            <A className='project' href='/projects/PaymentForm'>
              <div className='project-thumb'>
                <img src={paymentFormThumb} alt='Payment Form'></img>
              </div>
              <h3>Payment Form</h3>
              <p>Use this dynamic payment form with validation to add payment methods to your wallet.</p>
              <div className='skills-used'>
                <div className='skill-used' title='React.js'>
                  <img src={reactIcon} alt='React'></img>
                </div>
                <div className='skill-used' title='Sass'>
                  <img src={sassIcon} alt='SASS'></img>
                </div>
              </div>
            </A>

            <A href='/projects/StrawVote' className='project'>
              <div className='project-thumb'>
                <img src={strawVoteThumb} alt='Straw Vote'></img>
              </div>
              <h3>Straw Vote</h3>
              <p> Straw Vote is the worst place to create instant, real-time votes for free. </p>
              <div className='skills-used'>
                <div className='skill-used' title='React.js'>
                  <img src={reactIcon} alt='React'></img>
                </div>
              </div>
            </A>
          </div>
        </div>
      </section>
      <section className='work-section'>
        <div className='content-container'>
          <h2>Work</h2>
          <div className='works-container'>
            <a className='work resume' href={resume} target='_blank' rel='noreferrer'>
              <img src={resumeIcon} alt='Resume'></img>
              <div className='details'>
                <h5>Resume</h5>
              </div>
            </a>
            <a className='work github' href='https://github.com/stefanbobrowski' target='_blank' rel='noreferrer'>
              <img src={githubIcon} alt='Github'></img>
              <div className='details'>
                <h5>Github</h5>
              </div>
            </a>
            <a
              className='work linkedin'
              href='https://www.linkedin.com/in/stefanbobrowski/'
              target='_blank'
              rel='noreferrer'>
              <img src={linkedinIcon} alt='Linkedin'></img>
              <div className='details'>
                <h5>Linkedin</h5>
              </div>
            </a>
            <a
              className='work stack'
              href='https://stackoverflow.com/users/3317728/stefanbob'
              target='_blank'
              rel='noreferrer'>
              <img src={stackoverflowIcon} alt='Stack Overflow'></img>
              <div className='details'>
                <h5>Stack Overflow</h5>
              </div>
            </a>
          </div>

          <h2>Currently Hosting</h2>
          <div className='works-container'>
            <a className='work sj' href='https://susiejetta.com/' target='_blank' rel='noreferrer'>
              <img src={sjIcon} alt='Susie Jetta'></img>
              <div className='details'>
                <h5>SusieJetta.com</h5>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
