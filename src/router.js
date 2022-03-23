import React from 'react';

// Pages
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

// Projects
import PaymentForm from './components/PaymentForm/PaymentForm.js';
import ToDoList from './components/ToDoList/ToDoList.js';
import StrawVote from './components/StrawVote/StrawVote.js';
import ExerciseLogs from './components/ExerciseLogs/ExerciseLogs.js';
import SignUp from './components/SignUp/SignUp.js';
import GlobalProvider from './components/GlobalProvider/GlobalProvider';
import MineralMiner from './components/MineralMiner/MineralMiner';
// import RecoilDemo from './components/RecoilDemo/index';

const routes = {
	'/': () => <Home />,
	'/pagenotfound': () => <PageNotFound />,
	'/projects/ToDoList': () => <ToDoList />,
	'/projects/PaymentForm': () => <PaymentForm />,
	'/projects/StrawVote': () => <StrawVote />,
	'/projects/ExerciseLogs': () => <ExerciseLogs />,
	'/projects/SignUp': () => <SignUp />,
	'/projects/GlobalProvider': () => <GlobalProvider />,
	'/projects/MineralMiner': () => <MineralMiner />,
	// '/projects/RecoilDemo': () => <RecoilDemo />,
};

export default routes;
