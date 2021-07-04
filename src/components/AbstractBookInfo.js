import React, { useState } from 'react';

import "./AbstractBookInfo.css";

const AbstractBookInfo = (props) => {
  const date = props.date
  const doctorinfo = props.info  
  const datestring = formatDatestring(date)

  return(
    <div>
      <h2>{datestring}</h2>
      <div className="docinfotoparea">
        <div>
          <img height="130" src={doctorinfo.Propic} alt="ProfilePic" />
        </div>
        <div>
          <div className="docName">{doctorinfo.Name}</div>
          <div>
            <div>{doctorinfo.Specialization}</div>
            <div>Phone: {doctorinfo.Phone}</div>
            <div>Email: {doctorinfo.Email}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function formatDatestring(date) {
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
  let datestring = date.toLocaleString('en-US', options, { hour12: false })
  datestring = datestring + "-" + date.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })
  return datestring
}

export default AbstractBookInfo;