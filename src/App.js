import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux"
import { fetchMovies } from "./redux";
import Routes from "./routes"

function App() {
  const [actualPage, setActualPage] = useState(1);
  const dispatch = useDispatch();

  const fetchFirstFourPages = () => {
    if (actualPage <= 4) {
      setActualPage(actualPage + 1);
    }
  }

  useEffect(() => {
    fetchFirstFourPages()
    dispatch(fetchMovies(actualPage));
  }, [actualPage])

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
