import React from 'react';
import Card from './Card';

// Passing argument robots into CardList function, as robots is a property (props) of CardList
// (see index.js)
const CardList = ({ robots }) => {
	const cardComponent = robots.map((user, i) => {
		return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
	})
	return (
		<React.StrictMode>
			{cardComponent}
	  </React.StrictMode>
	);
}

export default CardList;