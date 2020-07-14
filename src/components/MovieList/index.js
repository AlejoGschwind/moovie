import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import MovieItem from "../MovieItem";

const MoviesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

function MovieList() {
  const { movies } = useSelector((state) => state.moviesList);

  return (
    <div>
      <h2>Popular movies:</h2>
      <MoviesGrid>
        {movies &&
          movies.map((movie) => (
            <MovieItem
              key={movie.id}
              id={movie.id}
              title={movie.title}
              posterUrl={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
            />
          ))}
      </MoviesGrid>
    </div>
  );
}

export default MovieList;
