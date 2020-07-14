import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MovieDetailWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hero = styled.div`
  width: 100vw;
  height: 70vh;
  background: #323232;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: top;
`;

function MovieDetail() {
  const { movie, loading } = useSelector((state) => state.movieDetail);

  if (loading) {
    return "Loading...";
  }

  return (
    <MovieDetailWrapper>
      {movie ? (
        <>
          <Hero
            background={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          />
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <span>{movie.release_date}</span>
        </>
      ) : <p>Not Found</p>}
    </MovieDetailWrapper>
  );
}

export default MovieDetail;
