import React, { useEffect, useState } from 'react';
import Quote from './components/Quote/Quote';
import NextButton from './components/NextButton/NextButton';
import FavouriteButton from './components/FavouriteButton/FavouriteButton';
import FavouriteQuotes from './components/FavouriteQuotes/FavouriteQuotes';

import './styles/uiKit/uiKit.css';
import './styles/index.css';

function App() {
	const [fetchResult, setFetchResult] = useState('No quote');
	const [favouriteQuotes, setFavouriteQuotes] = useState([]);

	useEffect(() => {
		if (localStorage.getItem('favourites')) {
			setFavouriteQuotes(JSON.parse(localStorage.getItem('favourites')));
		}
		nextQuote();
	}, []);

	function nextQuote() {
		fetch('https://dummyjson.com/quotes/random')
			.then((res) => res.json())
			.then((res) => setFetchResult(res));
	}

	function addToFavourite() {
		let favouriteQuotesIDs = favouriteQuotes.map((item) => item.id);

		if (!favouriteQuotesIDs.includes(fetchResult.id)) {
			setFavouriteQuotes([...favouriteQuotes, fetchResult]);
		}
	}

	useEffect(() => {
		localStorage.setItem('favourites', JSON.stringify(favouriteQuotes));
	}, [favouriteQuotes]);

	function deleteFromFavourite(id) {
		let result = favouriteQuotes.filter((item) => item.id !== id);
		setFavouriteQuotes(result);
	}

	return (
		<>
			<div className='app-body'>
				<section className='quote-of-the-day'>
					<h1>Find your quote of the day!</h1>
					<Quote quoteText={fetchResult.quote} quoteAuthor={fetchResult.author}></Quote>
					<div className='buttons-wrapper'>
						<FavouriteButton handleClick={() => addToFavourite()}></FavouriteButton>
						<NextButton handleClick={() => nextQuote()}></NextButton>
					</div>
					<div className='divider'></div>
				</section>
				<section className='favourite-quotes'>
					<h2>Your favourite quotes</h2>
					<FavouriteQuotes favouriteList={favouriteQuotes} handleClick={deleteFromFavourite}></FavouriteQuotes>
				</section>
			</div>
			<footer>
				<p>Dmitry Smotryaev</p>
				<p>2023</p>
			</footer>
		</>
	);
}

export default App;
