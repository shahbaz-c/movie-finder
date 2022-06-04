import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import MovieContext from '../../context/movieContext';

const SearchBar = () => {
	const movieContext = useContext(MovieContext);
	const { searchMovies } = movieContext;

	const [text, setText] = useState('');

	let navigate = useNavigate();

	const searchSubmit = (e) => {
		e.preventDefault();

		searchMovies(text);
		navigate('/search');
		setText('');
	};

	const searchInput = (e) => {
		setText(e.target.value);
	};

	return (
		<div>
			<form className='search-box me-2' onSubmit={searchSubmit}>
				<input
					className=' me-2 search-text'
					type='search'
					placeholder='Search for a movie'
					aria-label='Search'
					value={text}
					onChange={searchInput}
				/>
				<button className='search-btn' type='submit' disabled={!text}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
