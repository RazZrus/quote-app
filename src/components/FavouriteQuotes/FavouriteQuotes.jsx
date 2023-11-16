import React from 'react';
import './favouriteQuotes.css';

const FavouriteQuotes = ({ favouriteList, handleClick }) => {
	const result = [];

	try {
		favouriteList.forEach((item) => {
			result.push(
				<li className='favourite-quotes-list-item' key={item.id}>
					<h3 className='favourite-quote-author'>{item.author}</h3>
					<p className='favourite-quote-text'>{item.quote}</p>
					<button className='delete-from-favourites__button' onClick={() => handleClick(item.id)}>
						Delete
					</button>
				</li>
			);
		});
	} catch (e) {
		console.log(e);
	}

	return <ul className='favourite-quotes-list'>{result}</ul>;
};

export default FavouriteQuotes;
