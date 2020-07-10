import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import movieReducer from "./movie/movie.reducer";

const middlewares = [
  thunk
]

const store = createStore(
  movieReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
