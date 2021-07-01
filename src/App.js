import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";

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
    // console.log(dummy);
  };

  return (
    <Router>
      <div className="App">
        <div className="App-content">
          <div>
            <nav>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/doctordetail">Doctor Detail</Link>
              </li>
            </nav>
          </div>

          <Switch>
            <Route path="/">
              <Home dummy={dummy} addSomeHandler={addSomeHandler}/>
            </Route>
            <Route path="/doctordetail">
              {/* <DoctorDetail /> */}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
