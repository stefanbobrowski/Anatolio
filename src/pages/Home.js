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
import resume from '../assets/StefanBobrowskiResume.pdf';
import githubIcon from '../assets/social-links/github.svg';
import stackoverflowIcon from '../assets/social-links/stackoverflow.svg';
import linkedinIcon from '../assets/social-links/linkedin.svg';
import sjIcon from '../assets/sj.png';
import googleCloudIcon from '../assets/skill-icons/google-cloud.svg';

const Home = () => {
  return (
    <div className='page home-page'>
      <div className='page-intro'>
        <div className='center-message'>
          <h1>
            <span>Stefan Bobrowski</span>
          </h1>
          <h2>Senior Front-End Developer</h2>
          <h2>Full-Stack Engineer</h2>
          <p>
            Senior Front-End Developer and Full-Stack Engineer with over 10 years of professional experience building
            scalable, high-performance web applications.
          </p>
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
                <span className='bracket'>{'['}</span>'Senior Front-End Developer'<span className='comma'>,</span>{' '}
                'Full-Stack Engineer'<span className='bracket'>{']'}</span>
                <span className='comma'>,</span>
              </span>
            </code>
            <code>
              &emsp;<span className='property'>skills</span>
              <span className='colon'>: </span>{' '}
              <span className='string'>
                'Google Cloud Platform, Vertex AI, Gemini 1.5 Pro, Cloud Run, Cloud Storage, Cloud SQL, BigQuery,
                Postgres, CI/CD, Kubernetes, Docker, GitHub Actions, Node.js, Express, React, Vite, JavaScript,
                TypeScript, Redux-Saga, GraphQL, Apollo, MongoDB, REST, SSR, Micro-frontends, Web Sockets, Component
                Design Systems, Agile/Scrum, Unit Testing, Integration Testing, E2E Testing, Jest, React Testing
                Library, SASS, Figma, Jira, Accessibility, GitHub Copilot, ChatGPT'
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
                'Building secure, scalable cloud-native applications'<span className='comma'>,</span>
              </span>
            </code>
            <code>
              &emsp;&emsp;
              <span className='string'>
                'Designing intuitive, high-performance user experiences'<span className='comma'>,</span>
              </span>
            </code>
            <code>
              &emsp;&emsp;
              <span className='string'>
                'Writing clean, testable, and maintainable code'<span className='comma'>,</span>
              </span>
            </code>
            <code>
              &emsp;&emsp;
              <span className='string'>
                'Leveraging AI and big data in full-stack workflows'<span className='comma'>,</span>
              </span>
            </code>
            <code>
              &emsp;&emsp;
              <span className='string'>
                'Delivering business value while continually learning'<span className='comma'>,</span>
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

        <a className='resume-container' href={resume} target='_blank' rel='noopener noreferrer'>
          <img src={resumeIcon} title='View Resume PDF' alt='Resume icon'></img>
          <p>StefanBobrowskiResume.pdf (131 KB)</p>
        </a>
      </div>

      <section className='skills-section'>
        <div className='content-container'>
          <div className='skills-container'>
            <h2>Skills </h2>
            <div className='skill'>
              <div className='skill-icon' title='Google Cloud Platform'>
                <img src={googleCloudIcon} alt='GCP'></img>
              </div>
              <p>Google Cloud Platform</p>
            </div>
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
            <a
              className='project upload-center'
              href='https://upload-center-177749780343.us-central1.run.app/'
              target='_blank'
              rel='noreferrer'>
              <div className='project-thumb'>🌆</div>
              <h3>Cloud Playground - Upload Center</h3>
              <p>
                Full-stack app for uploading and analyzing data using <strong>Google Cloud Platform </strong>
                services + AI.
              </p>
              <div className='skills-used'>
                <div className='skill-used' title='Google Cloud Platform'>
                  <img src={googleCloudIcon} alt='Google Cloud Platform'></img>
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
                <div className='skill-used' title='TypeScript'>
                  <img src={tsIcon} alt='TypeScript'></img>
                </div>
              </div>
            </a>
            <a
              className='project upload-center'
              href='https://gglist-frontend-177352903615.us-central1.run.app/'
              target='_blank'
              rel='noreferrer'>
              <div className='project-thumb gglist'>ggList</div>
              <h3>ggList - Favorite Pokemon</h3>
              <p>
                Full-stack app for tracking and ranking user favorites. Users log in with Google, favorite up to 10
                items, and see a leaderboard of top picks across all users.
              </p>
              <div className='skills-used'>
                <div className='skill-used' title='Google Cloud Platform'>
                  <img src={googleCloudIcon} alt='Google Cloud Platform'></img>
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
                <div className='skill-used' title='TypeScript'>
                  <img src={tsIcon} alt='TypeScript'></img>
                </div>
              </div>
            </a>
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
              <img src={resumeIcon} alt='Stefan Bobrowski Resume'></img>
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
                <h5>LinkedIn</h5>
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
            <a
              className='work upload-center'
              href='https://upload-center-177749780343.us-central1.run.app/'
              target='_blank'
              rel='noreferrer'>
              <span style={{ fontSize: '4rem' }}>🌆</span>

              <div className='details'>
                <h5>Upload Center</h5>
              </div>
            </a>
            <a
              className='work gglist'
              href='https://gglist-frontend-177352903615.us-central1.run.app/'
              target='_blank'
              rel='noreferrer'>
              <span>ggList</span>

              <div className='details'>
                <h5>ggList</h5>
              </div>
            </a>
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
