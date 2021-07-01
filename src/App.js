import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import RankingList from "./pages/RankingList";
import Details from "./pages/Details";
import Appointment from "./pages/Appointment";
import BookingDetails from "./pages/BookingDetails";


const DUMMY_DATA = [
  { id: "1", name: "PJ" },
  { id: "2", name: "MP" },
];

const App = () => {
  const [dummy, setDummy] = useState(DUMMY_DATA);
  const addSomeHandler = (addition) => {
    setDummy((prevState) => {
      return [addition, ...prevState];
    });
  };

  return (
    <Router>
      <div className="App">
        <div className="App-content">
          <div>
            <nav>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/rankinglist">Ranking List</Link>
              </li>
              <li>
                <Link to="/details">Details</Link>
              </li>
              <li>
                <Link to="/appointment">Appointment booking</Link>
              </li>
              <li>
                <Link to="/bookingdetails">Booking details</Link>
              </li>
            </nav>
          </div>

          <Switch>
            <Route path="/home">
              <Home dummy={dummy} addSomeHandler={addSomeHandler} />
            </Route>
            <Route path="/rankinglist">
              <RankingList />
            </Route>
            <Route path="/details">
              <Details />
            </Route>
            <Route path="/appointment">
              <Appointment />
            </Route>
            <Route path="/bookingdetails">
              <BookingDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
