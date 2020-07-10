import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from "./movie.types";
import axios from "axios";

export const fetchMoviesRequest = () => {
  return {
    type: FETCH_MOVIES_REQUEST
  }
}

export const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies
  }
}

export const fetchMoviesFailure = (error) => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error
  }
}

export const fetchMovies = (page) => {
  return async (dispatch) => {
    dispatch(fetchMoviesRequest())
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`)
      dispatch(fetchMoviesSuccess(response.data))
    } catch(error) {
      dispatch(fetchMoviesFailure(error.message))
    }
  }
}
