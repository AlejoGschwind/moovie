import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../redux"

function MovieList() {
  const dispatch = useDispatch();
  const { loading, movies, error } = useSelector((state) => state);

  const [page, setPage] = useState(1);

  const decrementPage = () => {
    if (page > 1) {
      setPage( page - 1);
    }
  }

  const incrementPage = () => {
    if (page < movies.total_pages) {
      setPage( page + 1);
    }
  }

  useEffect(() => {
    dispatch(fetchMovies(page))
  }, [page])

  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>{error}</p>;
  } else {
    return (
      <div>
        <h2>Popular movies:</h2>
        <ul>
          {movies.results &&
            movies.results.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
        </ul>
        <div>
          <button onClick={decrementPage}>Anterior</button>
          <button disabled={true}>{page}</button>
          <button onClick={incrementPage}>Siguiente</button>
        </div>
      </div>
    );
  }
}

export default MovieList;
