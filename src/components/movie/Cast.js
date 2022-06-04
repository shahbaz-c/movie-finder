import React, { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import profileAvatar from '../../images/profile.jpeg';
import PreLoader from '../PreLoader';

import MovieContext from '../../context/movieContext';

const Cast = () => {
	const movieContext = useContext(MovieContext);

	const { getCredits, credits, related, loading } = movieContext;

	const { id } = useParams();

	useEffect(() => {
		getCredits(id);
	}, [related]);

	if (loading) {
		return <PreLoader />;
	}

	return (
		<div>
			<div className='m-5 p-3 text-white bg-dark cast-bg'>
				<h2 className='ms-3 my-2'>Cast</h2>
				<div className='cast-grid mx-3 my-4'>
					{credits.map((actor) => {
						const { cast_id, name, profile_path, character, id } = actor;
						return (
							<div key={cast_id} className='cast-card img-trans'>
								<Link to={`/person/${id}`}>
									{profile_path === null ? (
										<img
											src={profileAvatar}
											alt={name}
											className='img-unavailable'
											title={name}
										/>
									) : (
										<img
											src={`https://image.tmdb.org/t/p/original${profile_path}`}
											alt={name}
											className='img-fluid'
											title={name}
										/>
									)}
									<div className='cast-hover'>
										<h6 className='text-center mt-3 text-white cast-text'>
											{name}
										</h6>
										<p className='text-center cast-text'>'{character}'</p>
									</div>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Cast;
