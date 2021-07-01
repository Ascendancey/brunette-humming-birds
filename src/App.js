import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";
import DoctorDetail from "./DoctorDetail";
import Home from "./Home";

import SearchBar from "./components/SearchBar";


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Platform Name</h1>
        <SearchBar />
      </div>
      <div>
        <nav>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/doctordetail">Doctor Detail</Link>
          </li>
        </nav>
      </div>

      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/doctordetail">
          <DoctorDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
