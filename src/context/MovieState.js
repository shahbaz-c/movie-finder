import React, { useEffect, useReducer } from 'react';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';

import API_KEY from '../config';

import {
	SET_LOADING,
	GET_TRENDING,
	GET_POPULAR,
	GET_COMINGSOON,
	GET_TOPRATED,
	GET_MOVIE,
	GET_RELATED,
	GET_CREDITS,
	GET_ACTOR,
	GET_ACTOR_CREDITS,
	ADD_TO_MY_WATCHLIST,
	DELETE_MOVIE_FROM_WATCHLIST,
	ADD_TO_WATCHED_LIST,
	DELETE_MOVIE_FROM_WATCHED_LIST,
	MOVE_MOVIE_BACK_TO_WATCHLIST,
	SEARCH_MOVIES,
} from './types';

const MovieState = ({ children }) => {
	const initialState = {
		loading: false,
		trending: [],
		popular: [],
		topRated: [],
		comingSoon: [],
		movie: {},
		related: [],
		credits: [],
		actor: {},
		actorCredits: [],
		searchResult: [],
		myWatchlist: localStorage.getItem('My Watchlist')
			? JSON.parse(localStorage.getItem('My Watchlist'))
			: [],
		watchedList: localStorage.getItem('Watched List')
			? JSON.parse(localStorage.getItem('Watched List'))
			: [],
	};

	const [state, dispatch] = useReducer(MovieReducer, initialState);

	// Set Loading
	const setIsLoading = () => {
		dispatch({ type: SET_LOADING });
	};

	// Homepage trending movie
	useEffect(async () => {
		setIsLoading();

		const response = await fetch(
			`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
		);
		const data = await response.json();
		dispatch({
			type: GET_TRENDING,
			payload: data.results[0],
		});
	}, []);

	// Homepage popular movies
	useEffect(async () => {
		setIsLoading();

		const response = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
		);
		const data = await response.json();

		setTimeout(() => {
			dispatch({
				type: GET_POPULAR,
				payload: data.results,
			});
		}, 2000);
	}, []);

	// Top Rated movies
	useEffect(async () => {
		setIsLoading();

		const response = await fetch(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
		);
		const data = await response.json();

		setTimeout(() => {
			dispatch({
				type: GET_TOPRATED,
				payload: data.results,
			});
		}, 2000);
	}, []);

	// Coming Soon movies
	useEffect(async () => {
		setIsLoading();

		const response = await fetch(
			`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
		);
		const data = await response.json();

		setTimeout(() => {
			dispatch({
				type: GET_COMINGSOON,
				payload: data.results,
			});
		}, 2000);
	}, []);

	// Get Movie Info
	const getMovie = async (id) => {
		setIsLoading();

		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
		);
		const data = await response.json();

		dispatch({
			type: GET_MOVIE,
			payload: data,
		});
	};

	// Get Related Movies
	const getRelated = async (id) => {
		setIsLoading();

		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US@page=1`
		);
		const data = await response.json();

		dispatch({
			type: GET_RELATED,
			payload: data.results,
		});
	};

	// Get Credits
	const getCredits = async (id) => {
		setIsLoading();

		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
		);
		const data = await response.json();

		dispatch({
			type: GET_CREDITS,
			payload: data.cast,
		});
	};

	// Get Actor Info
	const getActor = async (id) => {
		setIsLoading();

		const response = await fetch(
			`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`
		);
		const data = await response.json();

		dispatch({
			type: GET_ACTOR,
			payload: data,
		});
	};

	// Get Actor Movie Credits
	const getActorCredits = async (id) => {
		setIsLoading();

		const response = await fetch(
			`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`
		);
		const data = await response.json();

		dispatch({
			type: GET_ACTOR_CREDITS,
			payload: data.cast,
		});
	};

	// Search Movies
	const searchMovies = async (text) => {
		setIsLoading();

		const response = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${text}&page=1&include_adult=false`
		);
		const data = await response.json();

		dispatch({
			type: SEARCH_MOVIES,
			payload: data.results,
		});
	};

	// Add Movie to Watchlist
	const addToMyWatchlist = (movie) => {
		dispatch({
			type: ADD_TO_MY_WATCHLIST,
			payload: movie,
		});
	};

	// Delete Movie from Watchlist
	const deleteMovieFromWatchlist = (id) => {
		dispatch({
			type: DELETE_MOVIE_FROM_WATCHLIST,
			payload: id,
		});
	};

	// Add Movie to Watched list
	const addToWatchedList = (movie) => {
		dispatch({
			type: ADD_TO_WATCHED_LIST,
			payload: movie,
		});
	};

	// Delete Movie from Watched list
	const deleteMovieFromWatchedList = (id) => {
		dispatch({
			type: DELETE_MOVIE_FROM_WATCHED_LIST,
			payload: id,
		});
	};

	// Move movie back to Watchlist from Watched list
	const moveMovieBackToWatchlist = (movie) => {
		dispatch({
			type: MOVE_MOVIE_BACK_TO_WATCHLIST,
			payload: movie,
		});
	};

	// Add Movies in Watchlist to Local Storage
	useEffect(() => {
		localStorage.setItem('My Watchlist', JSON.stringify(state.myWatchlist));
		localStorage.setItem('Watched List', JSON.stringify(state.watchedList));
	}, [state]);

	return (
		<MovieContext.Provider
			value={{
				loading: state.loading,
				trending: state.trending,
				popular: state.popular,
				topRated: state.topRated,
				comingSoon: state.comingSoon,
				movie: state.movie,
				related: state.related,
				credits: state.credits,
				actor: state.actor,
				actorCredits: state.actorCredits,
				myWatchlist: state.myWatchlist,
				watchedList: state.watchedList,
				searchResult: state.searchResult,
				getMovie,
				getRelated,
				getCredits,
				getActor,
				getActorCredits,
				searchMovies,
				addToMyWatchlist,
				deleteMovieFromWatchlist,
				addToWatchedList,
				deleteMovieFromWatchedList,
				moveMovieBackToWatchlist,
			}}
		>
			{children}
		</MovieContext.Provider>
	);
};

export default MovieState;
