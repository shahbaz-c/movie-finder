import React from 'react';
import { Link } from 'react-router-dom';

const Trending = ({ trending }) => {
	const { title, overview, backdrop_path, id } = trending;

	return (
		<>
			<div className='backdrop-container'>
				<Link to={`/movie/${id}`} title={title}>
					<img
						src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
						className='trending-img'
						alt={title}
					/>
					<h5>
						<span className='badge  trending-badge'>#Trending</span>
					</h5>

					<h3 className='movie-title text-white m-2'>{title}</h3>
					<p className='homepage-overview m-2 me-4 text-white'>{overview}</p>
				</Link>
			</div>
		</>
	);
};

export default Trending;
