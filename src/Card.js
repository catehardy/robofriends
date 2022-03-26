import React from 'react';
import 'tachyons';

const Card = (props) => {
	return (
		<div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${props.id}?set=set4&size=200x200`} alt='robot'/>
			<>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</>
		</div>
	)
}

export default Card;