import React from 'react';
import { Store } from './store';
import { GameContainer } from './components/GameContainer/GameContainer';
import githubIcon from '../../assets/social-links/github.svg';
import './MineralMiner.scss';

const MineralMiner = () => {
	return (
		<>
			<div className='project-page mineral-miner-project'>
				<Store>
					<GameContainer />
				</Store>
			</div>

			<div className='code-container' style={{ marginLeft: 20 }}>
				<h4>Code:</h4>
				<a
					className='github-project-link'
					href='https://github.com/stefanbobrowski/Mineral-Miner'
					target='_blank'
					rel='noreferrer'
					title='Mineral Miner - Github'>
					<div className='github-icon'>
						<img src={githubIcon} alt='Github'></img>
					</div>
					<span>Mineral Miner</span>
				</a>
			</div>
		</>
	);
};

export default MineralMiner;
