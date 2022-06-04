import React from 'react';
import { Link } from 'react-router-dom';

const TopRated = ({ topRated }) => {
	const { title, poster_path, id } = topRated;

	return (
		<Link to={`/movie/${id}`} title={title}>
			<img
				src={`https://image.tmdb.org/t/p/original${poster_path}`}
				alt={title}
				className='img-size img-trans'
			/>
		</Link>
	);
};

export default TopRated;
