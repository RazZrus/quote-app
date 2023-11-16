import React from 'react';

const FavouriteButton = ({ handleClick }) => {
	return (
		<button className='favourite__button' onClick={handleClick}>
			Fav
		</button>
	);
};

export default FavouriteButton;
