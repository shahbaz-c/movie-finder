import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActorCredits from './ActorCredits';
import profileAvatar from '../../images/profile.jpeg';

import MovieContext from '../../context/movieContext';

const Actor = () => {
	const movieContext = useContext(MovieContext);

	const { getActor, actor } = movieContext;

	const { id } = useParams();

	const {
		name,
		biography,
		birthday,
		place_of_birth,
		profile_path,
		gender,
	} = actor;

	useEffect(() => {
		getActor(id);
	}, []);

	return (
		<div>
			<div className='card actor-card mt-5 mx-4'>
				<div className='row'>
					{profile_path === null ? (
						<>
							<div className='col-sm-4'>
								<img
									src={profileAvatar}
									alt={name}
									className='img-fluid movie-card-img'
									loading='lazy'
								/>
							</div>
							<div className='col-sm-8'>
								<div className='card-body'>
									<h4 className='card-title mb-3'>{name}</h4>
									{gender === 1 ? (
										<h6>Actress Information Unavailable</h6>
									) : (
										<h6>Actor Information Unavailable</h6>
									)}
									<p className='card-text mt-4'>{biography}</p>
								</div>
							</div>
						</>
					) : (
						<>
							<div className='col-lg-4 actor-container'>
								<img
									src={`https://image.tmdb.org/t/p/original${profile_path}`}
									alt={name}
									className='img-fluid movie-card-img actor-movie-img'
									loading='lazy'
								/>
							</div>

							<div className='col-lg-8'>
								<div className='card-body actor-card-body'>
									<h4 className='card-title mb-3'>{name}</h4>
									<h6 className='actor-place'>
										Place of Birth:{' '}
										<span className='text-white'>{place_of_birth}</span>
									</h6>
									<h6 className='actor-day'>
										Birthday: <span className='text-white'>{birthday}</span>
									</h6>
									<p className='card-text mt-4 actor-bio'>{biography}</p>
								</div>
							</div>
						</>
					)}
				</div>
			</div>

			<div className='m-5 p-3 text-white bg-dark home-bg'>
				<h2 className='ms-3 my-2'>Filmography</h2>
				<ActorCredits />
			</div>
		</div>
	);
};

export default Actor;
