import React, { useState } from 'react';

import "./Timeslot.css";

const Timeslot = (props) => {
    const time = props.datetime
    const timedisplay = time.getHours() + " : " + time.getMinutes()

    return (
      <div className="">
          <button onClick={bookingpop(time)}>
              {timedisplay}
          </button>
      </div>
    );
  };

  function bookingpop(time) {
      // Open booking pup up
  }
  
  export default Timeslot;