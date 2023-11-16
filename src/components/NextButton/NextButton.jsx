import React from 'react';

const NextButton = ({ handleClick }) => {
	return (
		<button className='next__button' onClick={handleClick}>
			Next
		</button>
	);
};

export default NextButton;
