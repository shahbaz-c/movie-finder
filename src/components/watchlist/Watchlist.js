import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import PreLoader from '../PreLoader';

import MyWatchlist from './MyWatchlist';
import Watched from './Watched';

import MovieContext from '../../context/movieContext';

const Watchlist = () => {
	const movieContext = useContext(MovieContext);

	const { loading } = movieContext;

	if (loading) {
		return <PreLoader />;
	}

	return (
		<>
			<div className='m-5 p-3 text-white bg-dark home-bg' id='watchlist'>
				<h2 className='ms-3 my-2 mt-3'>
					<FontAwesomeIcon icon={faBookmark} className='me-3 bookmark-icon' />
					Watchlist
				</h2>

				<MyWatchlist />
			</div>

			<div className='m-5 p-3 text-white bg-dark home-bg' id='watched'>
				<h2 className='ms-3 my-2 mt-3'>
					<FontAwesomeIcon icon={faCheck} className='me-3 tick-icon' />
					Watched
				</h2>

				<Watched />
			</div>
		</>
	);
};

export default Watchlist;
