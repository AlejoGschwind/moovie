import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import HomePage from "./pages/HomePage";
import DetailMoviePage from "./pages/DetailMoviePage";

function Routes() {
  return <Router>
    <Route exact path="/" component={HomePage} />
    <Route path="/movie/:id" component={DetailMoviePage}/>
  </Router>;
}

export default Routes;
