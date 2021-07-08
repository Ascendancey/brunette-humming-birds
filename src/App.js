import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import RankingList from "./pages/RankingList";
import DoctorDetail from "./pages/DoctorDetail";
import Appointment from "./pages/Appointment";
import BookingDetails from "./pages/BookingDetails";

const DUMMY_DATA = [
  {
    id: 0,
    name: "Dr. Oliver",
    propic: "image/DefaultDoctorProfileImage.jpg",
    specialization: "Cardiologist",
    language: ["English", "German"],
    phone: "+49 56326987541",
    email: "droliver@g.com",
    location: {
      country: "Germany",
      city: "Munich",
      street: "Kaufingerstr",
      house: "1a",
    },
    selfintro:
      "Hello, I am Dr. Oliver. xxxxxxxxxx. xxxxxxxxxxxxxx. xxxxxxxxxxxxxxx. xxxxxxxxx.",
    availablein: 2,
    price: 100,
    rating: 4.5,
  },
  {
    id: 1,
    name: "Dr. Not Oliver",
    propic: "image/DefaultDoctorProfileImage.jpg",
    specialization: "Surgeon",
    language: ["German", "Spanish"],
    phone: "+49 56326987541",
    email: "droliver@g.com",
    location: {
      country: "Germany",
      city: "Berlin",
      street: "Whateverstr",
      house: "2b",
    },
    selfintro:
      "Hello, I am Dr. Not Oliver. xxxxxxxxxx. xxxxxxxxxxxxxx. xxxxxxxxxxxxxxx. xxxxxxxxx.",
    availablein: 4,
    price: 200,
    rating: 4.1,
  },
];

const App = () => {
  const [dummy, setDummy] = useState(DUMMY_DATA);
  const addSomeHandler = (addition) => {
    setDummy((prevState) => {
      return [addition, ...prevState];
    });
  };

  const [currentSearch, setCurrentSearch] = useState("");
  const searchHandler = (enteredData) => {
    setCurrentSearch(() => {
      return enteredData;
    });
  };

  const [storedappointments, setappointments] = useState(null);
  function storeappointments(data) {
    setappointments(data);
  }

  return (
    <Router>
      <div className="App">
        <div className="navBar">
        <Link to="/home"><img className="userImage" src="../image/prodoctor_logo.png" />
          </Link>
          {/* <nav className="links">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/appointment">Appointment booking</Link>
            </li>
          </nav> */}
          <div className="user">
          <label className="helloUser">Hello, {dummy && dummy[0].name}</label>
          <Link to="/appointment">
            <img className="userImage" src="../image/caticon.png" /></Link>
            
          </div>
        </div>
        <div className="App-content">
          <Switch>
            <Route path="/home">
              <Home
                dummy={dummy}
                addSomeHandler={addSomeHandler}
                searchHandler={searchHandler}
              />
            </Route>
            <Route path="/rankinglist">
              <RankingList
                dummy={dummy}
                addSomeHandler={addSomeHandler}
                searchHandler={searchHandler}
              />
            </Route>
            <Route path="/details">
              <DoctorDetail />
            </Route>
            <Route path="/appointment">
              <Appointment
                storedappointments={storedappointments}
                storeappfunc={storeappointments}
              />
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
