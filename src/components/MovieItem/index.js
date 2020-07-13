import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieItemWrapper = styled.div`
  border-radius: 8px;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  min-height: 600px;
  cursor: pointer;
`;

function MovieItem({ posterUrl, id }) {
  return (
    <Link to={`movie/${id}`}>
      <MovieItemWrapper background={posterUrl} />
    </Link>
  );
}

export default MovieItem;
