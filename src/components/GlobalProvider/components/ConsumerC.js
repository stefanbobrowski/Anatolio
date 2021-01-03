import React, { useEffect } from 'react';

const ConsumerC = (props) => {
	useEffect(() => {
		console.log('📻 Consumer C: ', props.payload);
	}, []);

	return (
		<div className='component consumer'>
			<h4>
				<span role='img' aria-label='Consumer C'>
					📺
				</span>{' '}
				Consumer C
			</h4>
			{/* <p>Count: {globalState.globals.count}</p> */}
			<p>Count (passed in as props from B): {props.payload.globals.count}</p>
		</div>
	);
};

export default ConsumerC;
