import React from 'react';
import Card from './Card';

// Passing argument {robots} into CardList function is possible because robots is
// a property (props) of CardList (see index.js)
const CardList = ({ robots }) => {
	return (
		<React.StrictMode>
		{
			robots.map((user, i) => {
			return (
				<Card
				key={i}
				id={robots[i].id}
				name={robots[i].name}
				email={robots[i].email}
				/>
			);
		})
		}
	  </React.StrictMode>
	);
}

export default CardList;