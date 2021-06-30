import React, { useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";

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
    <div className="App">
      <SearchBar hi="Hi Philipp" />
      <button onClick={() => addSomeHandler({ id: Math.random() , name: Math.random() })}>
        Click me
      </button>
      {dummy && dummy
        // .filter((comment) => comment.memeid === this.state.currentmeme._id)
        .map((entries) => (
          <p>{entries.name}</p>
        ))}
    </div>
  );
};

export default App;
