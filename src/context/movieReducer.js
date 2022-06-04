import {
	SET_LOADING,
	GET_TRENDING,
	GET_POPULAR,
	GET_TOPRATED,
	GET_COMINGSOON,
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

export default (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case GET_TRENDING:
			return {
				...state,
				trending: action.payload,
				loading: false,
			};
		case GET_POPULAR:
			return {
				...state,
				popular: action.payload,
				loading: false,
			};
		case GET_TOPRATED:
			return {
				...state,
				topRated: action.payload,
				loading: false,
			};
		case GET_COMINGSOON:
			return {
				...state,
				comingSoon: action.payload,
				loading: false,
			};
		case GET_MOVIE:
			return {
				...state,
				movie: action.payload,
				loading: false,
			};
		case GET_RELATED:
			return {
				...state,
				related: action.payload,
				loading: false,
			};
		case GET_CREDITS:
			return {
				...state,
				credits: action.payload,
				loading: false,
			};
		case GET_ACTOR:
			return {
				...state,
				actor: action.payload,
				loading: false,
			};
		case GET_ACTOR_CREDITS:
			return {
				...state,
				actorCredits: action.payload,
				loading: false,
			};
		case ADD_TO_MY_WATCHLIST:
			return {
				...state,
				myWatchlist: [action.payload, ...state.myWatchlist],
			};
		case DELETE_MOVIE_FROM_WATCHLIST:
			return {
				...state,
				myWatchlist: state.myWatchlist.filter(
					(movie) => movie.id !== action.payload
				),
			};
		case ADD_TO_WATCHED_LIST:
			return {
				...state,
				myWatchlist: state.myWatchlist.filter(
					(movie) => movie.id !== action.payload.id
				),
				watchedList: [action.payload, ...state.watchedList],
			};
		case DELETE_MOVIE_FROM_WATCHED_LIST:
			return {
				...state,
				watchedList: state.watchedList.filter(
					(movie) => movie.id !== action.payload
				),
			};
		case MOVE_MOVIE_BACK_TO_WATCHLIST:
			return {
				...state,
				watchedList: state.watchedList.filter(
					(movie) => movie.id !== action.payload.id
				),
				myWatchlist: [action.payload, ...state.myWatchlist],
			};
		case SEARCH_MOVIES:
			return {
				...state,
				searchResult: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};
