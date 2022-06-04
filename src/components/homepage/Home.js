import React, { useContext } from 'react';
import PreLoader from '../PreLoader';
import Trending from './Trending';
import Popular from './Popular';
import TopRated from './TopRated';
import ComingSoon from './ComingSoon';

import MovieContext from '../../context/movieContext';

const Home = () => {
	const movieContext = useContext(MovieContext);
	const { trending, popular, topRated, comingSoon, loading } = movieContext;

	if (loading) {
		return <PreLoader />;
	}

	return (
		<div>
			{/* Hero - trending movies */}
			<div>
				<Trending trending={trending} />
			</div>

			{/* Popular movies */}
			<div className='m-5 p-3 text-white bg-dark home-bg home-container'>
				<h2 className='ms-3 my-2'>Popular</h2>
				<div className='movie-grid mx-3 my-4'>
					{popular.map((pop) => {
						return <Popular key={pop.id} popular={pop} />;
					})}
				</div>
			</div>

			{/* Top Rated movies */}
			<div className='m-5 p-3 text-white bg-dark home-bg home-container'>
				<h2 className='ms-3 my-2'>Top Rated</h2>
				<div className='movie-grid mx-3 my-4'>
					{topRated.map((top) => {
						return <TopRated key={top.id} topRated={top} />;
					})}
				</div>
			</div>

			{/* Coming Soon movies */}
			<div className='m-5 p-3 text-white bg-dark home-bg home-container'>
				<h2 className='ms-3 my-2'>Coming Soon</h2>
				<div className='movie-grid mx-3 my-4'>
					{comingSoon.map((soon) => {
						return <ComingSoon key={soon.id} comingSoon={soon} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Home;
