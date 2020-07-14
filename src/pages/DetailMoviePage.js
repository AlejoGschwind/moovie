import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovieDetail } from "../redux";
import MovieDetail from "../components/MovieDetail";

function DetailMoviePage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetail(props.match.params.id));
  }, [props.match.params.id]);

  return <MovieDetail />;
}

export default DetailMoviePage;
