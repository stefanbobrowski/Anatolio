import React, { useState, useEffect, useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const ProviderA = () => {
	const globalContext = useContext(GlobalContext);
	const globalState = globalContext.globalstate;
	const [submitNews, setSubmitNews] = useState({});

	useEffect(() => {
		console.log('📡 Provider A: ', globalContext);
	}, []);

	const handleSubmitNews = (e) => {
		e.preventDefault();
		e.target.reset();
		const news = globalState.news;
		for (const i in news) {
			// check for duplicates
			const thisHeadline = news[i];
			if (thisHeadline.headline === submitNews) {
				return;
			}
		}

		const d = new Date();
		const newsObj = {
			id: globalState.news[globalState.news.length - 1].id + 1,
			headline: submitNews,
			date: d.toLocaleDateString(),
		};
		globalContext.globaldispatch({ type: 'submitNews', newsObj });
	};

	return (
		<div className='component provider'>
			<h4>
				<span role='img' aria-label='Provider A'>
					📺
				</span>{' '}
				Provider A
			</h4>
			<p>Count: {globalState.globals.count}</p>
			<span>Count control: </span>
			<button className='int-button' onClick={() => globalContext.globaldispatch({ type: 'decrementCount' })}>
				-
			</button>
			<button className='int-button' onClick={() => globalContext.globaldispatch({ type: 'incrementCount' })}>
				+
			</button>
			<h5>News:</h5>
			<div className='news-list'>
				{globalState.news.length ? (
					<div>
						{globalState.news.map((n, i) => (
							<div className='news-listing' key={i}>
								<i>{n.date}</i>
								<p>{n.headline}</p>
							</div>
						))}
					</div>
				) : (
					<div>No news</div>
				)}
			</div>
			<h5>Submit news:</h5>
			<form onSubmit={handleSubmitNews}>
				<input placeholder='Headline' onChange={(e) => setSubmitNews(e.target.value)}></input>

				<button>Submit News</button>
			</form>
		</div>
	);
};

export default ProviderA;
