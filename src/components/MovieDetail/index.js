import React from "react";
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
  background-position: center;
`;

function MovieDetail({ movie: { title, backdrop_path, overview, release_date } }) {
  return (
    <MovieDetailWrapper>
      <Hero
        background={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
      />
      <h1>{title}</h1>
      <p>{overview}</p>
      <span>{release_date}</span>
    </MovieDetailWrapper>
  );
}

export default MovieDetail;
