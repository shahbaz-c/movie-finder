import React, { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PreLoader from '../PreLoader';

import MovieContext from '../../context/movieContext';

const RelatedMovies = () => {
	const movieContext = useContext(MovieContext);

	const { getRelated, related, loading } = movieContext;

	const { id } = useParams();

	useEffect(() => {
		getRelated(id);
	}, [id]);

	if (loading) {
		return <PreLoader />;
	}

	return (
		<div>
			<div className='m-5 p-3 text-white bg-dark home-bg'>
				<h2 className='ms-3 my-2'>Related Movies</h2>
				<div className='cast-grid mx-3 my-4'>
					{related.map((movie) => {
						const { id, title, poster_path } = movie;
						return (
							<div key={id}>
								{poster_path === null ? (
									<Link
										to={`/movie/${id}`}
										title={title}
										className='text-decoration-none align-middle'
									>
										<div className='no-img img-trans'>
											<h6 className='text-center text-white my-3 px-1'>
												{title}
											</h6>
										</div>
									</Link>
								) : (
									<div className='actor-credit-card img-trans'>
										<Link to={`/movie/${id}`} title={title}>
											<img
												src={`https://image.tmdb.org/t/p/original${poster_path}`}
												alt={title}
												className='img-fluid'
												title={title}
												loading='lazy'
											/>
										</Link>
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default RelatedMovies;
