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
import ueIcon from '../assets/skill-icons/ue.svg';
import steamIcon from '../assets/skill-icons/steam.png';
import resumeIcon from '../assets/resume.svg';
import resume from '../assets/StefanResume2023.pdf';
import githubIcon from '../assets/social-links/github.svg';
import stackoverflowIcon from '../assets/social-links/stackoverflow.svg';
import linkedinIcon from '../assets/social-links/linkedin.svg';
import sjIcon from '../assets/sj.png';

const Home = () => {
	useEffect(() => {}, []);

	return (
		<div className='page home-page'>
			<div className='page-intro'>
				<div className='center-message'>
					<h1>Web Developer</h1>
					<p>Software Engineer, Game Developer... I enjoy building exceptional applications for the people!</p>
				</div>

				<div className='code-box'>
					<pre>
						<code>
							<span className='const'>const </span> <span className='const-name'>Stefan </span>{' '}
							<span className='equals'>{'= '}</span> {'{'}
						</code>

						<code>
							&emsp;<span className='property'>occupation</span>
							<span className='colon'>: </span>{' '}
							<span className='string'>
								"Software Engineer, Web Developer, Game Developer"<span className='comma'>,</span>
							</span>
						</code>
						<code>
							&emsp;<span className='property'>skills</span>
							<span className='colon'>: </span>{' '}
							<span className='string'>
								"JavaScript, React, Redux Saga, GraphQL, AWS, Node.js,
								<br />
								Express, MongoDB, Vue, SCSS, AWS, Git, Github,
								<br />
								Unreal Engine 5, Premiere Pro, Photoshop"<span className='comma'>,</span>
							</span>
						</code>

						<code>
							&emsp;<span className='property'>interests</span>
							<span className='colon'>: </span>[
						</code>
						<code>
							&emsp;&emsp;
							<span className='string'>
								"Building exceptional applications"<span className='comma'>,</span>
							</span>
						</code>
						<code>
							&emsp;&emsp;
							<span className='string'>
								"Creating high-quality user-experiences"<span className='comma'>,</span>
							</span>
						</code>
						<code>
							&emsp;&emsp;
							<span className='string'>
								"Writing clean and performant code"<span className='comma'>,</span>
							</span>
						</code>
						<code>
							&emsp;&emsp;
							<span className='string'>
								"Learning the latest technology"<span className='comma'>,</span>
							</span>
						</code>

						<code>
							&emsp;&emsp;
							<span className='string'>"Helping others succeed"</span>
						</code>
						<code>&emsp;],</code>
						<code>{'}'}</code>
					</pre>
				</div>

				<a className='resume-container' href={resume} target='_blank' rel='noreferrer'>
					<img src={resumeIcon} title='Resume' alt='Resume'></img>
					<p>StefanResume2023.pdf (174KB)</p>
				</a>
			</div>

			<section className='skills-section'>
				<div className='content-container'>
					<div className='skills-container'>
						<h2>Skills</h2>
						<div className='skill'>
							<div className='skill-icon' title='JavaScript'>
								<img src={jsIcon} alt='JavaScript'></img>
							</div>
							<p>JavaScript</p>
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
							className='project derision'
							href='https://store.steampowered.com/app/2218950/Derision/'
							target='_blank'
							rel='noreferrer'>
							<div className='project-thumb'>{/* <img src={derisionThumb} alt='Derision'></img> */}</div>
							<h3>Derision</h3>
							<p>A full-fledged Steam game made in Unreal Engine 5 for PC.</p>
							<div className='skills-used'>
								<div className='skill-used' title='Steam SDK'>
									<img src={steamIcon} alt='Steam'></img>
								</div>
								<div className='skill-used' title='Unreal Engine 5'>
									<img src={ueIcon} alt='UE5'></img>
								</div>
							</div>
						</a>
						<A className='project' href='/projects/MineralMiner'>
							<div className='project-thumb'>
								<img src={mineralMinerThumb} alt='Mineral Miner'></img>
							</div>
							<h3>Mineral Miner</h3>
							<p>A Starcraft II tribute game.</p>
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
							<p>A scalable global state management system built with useContext and useReducer.</p>
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
						<A className='project' href='/projects/SignUp'>
							<div className='project-thumb'>
								<img src={signUpThumb} alt='Sign up'></img>
							</div>
							<h3>SignUp</h3>
							<p>A full stack MERN application for signing a piece of paper. Everyone sign up!</p>

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
							<p> Straw Vote is the best place to create instant, real-time votes for free. </p>
							<div className='skills-used'>
								<div className='skill-used' title='React.js'>
									<img src={reactIcon} alt='React'></img>
								</div>

								<div className='skill-used' title='Sass'>
									<img src={sassIcon} alt='SASS'></img>
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
