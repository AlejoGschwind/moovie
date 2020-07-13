import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MovieDetail from "../components/MovieDetail";

function DetailMoviePage(props) {
  const movies = useSelector((state) => state.movies);

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (movies) {
      const [foundMovie] = movies.filter(movie => movie.id == props.match.params.id);
      setMovie(foundMovie)
    } else {
      
    }
  }, [movies])


  return <div>{movie && <MovieDetail movie={movie}/>}</div>;
}

export default DetailMoviePage;
