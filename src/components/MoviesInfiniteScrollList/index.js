import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieList from "../MovieList";

function MoviesInfiniteScroll() {
  const dispatch = useDispatch();
  const {
    loading,
    movies,
    page,
    total_pages,
    total_movies,
    error,
  } = useSelector((state) => state);


  const fetchNextPage = () => {
    dispatch(fetchMovies(page + 1));
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchNextPage}
        hasMore={total_pages > page}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <MovieList />
      </InfiniteScroll>
    </div>
  );
}

export default MoviesInfiniteScroll;
