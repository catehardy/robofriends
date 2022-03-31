import React from 'react';

const Scroll = (props) => {
	return (
		// double {{}} indicate an object inside of JS code, in React
		<div style={{overflowY: 'scroll', border: '1px solid purple', height: '600px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;