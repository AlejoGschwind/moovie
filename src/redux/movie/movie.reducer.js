const {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIE_DETAIL_FAILURE,
  FETCH_MOVIE_DETAIL_REQUEST,
  FETCH_MOVIE_DETAIL_SUCCESS,
} = require("./movie.types");

const initialState = {
  movieDetail: {
    loading: false,
    movie: null,
    error: null,
  },
  moviesList: {
    loading: false,
    total_movies: 0,
    page: 0,
    total_pages: 0,
    movies: [],
    error: null,
  },
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        moviesList: {
          ...state.moviesList,
          loading: true,
        },
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        moviesList: {
          ...state.moviesList,
          loading: false,
          total_movies: action.payload.total_results,
          page: action.payload.page,
          total_pages: action.payload.total_pages,
          movies: state.moviesList.movies.concat(action.payload.results),
        },
      };

    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        moviesList: {
          ...state.moviesList,
          loading: false,
          error: action.payload,
        },
      };

    case FETCH_MOVIE_DETAIL_REQUEST:
      return {
        ...state,
        movieDetail: {
          ...state.movieDetail,
          loading: true,
        },
      };

    case FETCH_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        movieDetail: {
          ...state.movieDetail,
          loading: false,
          movie: action.payload
        },
      };
    
    case FETCH_MOVIE_DETAIL_FAILURE:
      return {
        ...state,
        movieDetail: {
          ...state.movieDetail,
          loading: false,
          error: action.payload
        },
      };

    default:
      return state;
  }
};

export default movieReducer;
