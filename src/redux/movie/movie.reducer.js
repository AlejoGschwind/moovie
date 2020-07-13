const { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } = require("./movie.types");

const initialState = {
  loading: false,
  total_movies: 0,
  page: 0,
  total_pages: 0,
  movies: [],
  error: null,
};

const movieReducer = ( state = initialState, action) => {
  switch(action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        total_movies: action.payload.total_movies ,
        page: action.payload.page ,
        total_pages: action.payload.total_pages,
        movies: state.movies.concat(action.payload.results),
      }
    
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default movieReducer;