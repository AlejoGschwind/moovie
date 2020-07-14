import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIE_DETAIL_REQUEST,
  FETCH_MOVIE_DETAIL_SUCCESS,
  FETCH_MOVIE_DETAIL_FAILURE,
} from "./movie.types";
import axios from "axios";

export const fetchMoviesRequest = () => {
  return {
    type: FETCH_MOVIES_REQUEST,
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error,
  };
};

export const fetchMovies = (page = 1) => {
  return async (dispatch) => {
    dispatch(fetchMoviesRequest());
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`
      );
      console.log(response);
      dispatch(fetchMoviesSuccess(response.data));
    } catch (error) {
      dispatch(fetchMoviesFailure(error.message));
    }
  };
};

// Movie Detail
export const fetchMovieDetailRequest = () => {
  return {
    type: FETCH_MOVIE_DETAIL_REQUEST,
  };
};

export const fetchMovieDetailSuccess = (movieDetail) => {
  return {
    type: FETCH_MOVIE_DETAIL_SUCCESS,
    payload: movieDetail,
  };
};

export const fetchMovieDetailFailure = (error) => {
  return {
    type: FETCH_MOVIE_DETAIL_FAILURE,
    payload: error,
  };
};

export const fetchMovieDetail = (id) => {
  return async (dispatch) => {
    dispatch(fetchMovieDetailRequest());

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      dispatch(fetchMovieDetailSuccess(response.data))
    } catch (error) {
      dispatch(fetchMovieDetailFailure(error));
    }
  };
};
