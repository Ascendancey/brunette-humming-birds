import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import RankingList from "./pages/RankingList";
import DoctorDetail from "./pages/DoctorDetail";
import Appointment from "./pages/Appointment";
import BookingDetails from "./pages/BookingDetails";

import Popup from "reactjs-popup";

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
        {/* <div className="navBar-background"> */}
          <div className="navBar">
            <div className="user">
            <Link to="/home">
              <img className="logo" src="../image/logo.png" />
            </Link>
            </div>
            
            <div className="user">
              <label className="helloUser">
                Hello, {dummy && dummy[0].name}
              </label>

              <Popup
                trigger={
                  <div className="menu-item">
                    {" "}
                    <img
                      className="userImage"
                      src="../image/caticon.png"
                    />{" "}
                  </div>
                }
                position="bottom right"
                on="hover"
                closeOnDocumentClick
                mouseLeaveDelay={300}
                mouseEnterDelay={0}
                contentStyle={{ padding: "0px", border: "none" }}
                arrow={false}
              >
                <div className="menu">
                  <div className="menu-item"> View profile</div>
                  <div className="menu-item">
                    <Link to="/appointment"> My appointments</Link>
                  </div>
                  <div className="menu-item"> Settings</div>
                </div>
              </Popup>
            </div>
          </div>
        {/* </div> */}

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
    </Router>
  );
};

export default App;
