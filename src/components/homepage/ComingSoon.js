import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = ({ comingSoon }) => {
	const { title, poster_path, id } = comingSoon;

	return (
		<Link to={`/movie/${id}`} title={title}>
			<img
				src={`https://image.tmdb.org/t/p/original${poster_path}`}
				alt={title}
				className='img-size img-trans'
				loading='lazy'
			/>
		</Link>
	);
};

export default ComingSoon;
