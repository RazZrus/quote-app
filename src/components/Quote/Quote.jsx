import React from 'react';
import './quote.css';

const Quote = ({ quoteText, quoteAuthor }) => {
	return (
		<div className='quote'>
			<q className='quote-text'>{quoteText}</q>
			<cite className='quote-author'>{quoteAuthor}</cite>
		</div>
	);
};

export default Quote;
