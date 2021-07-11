import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Popup from 'reactjs-popup';

import AbstractBookInfo from '../components/AbstractBookInfo';
import BookDetail from '../components/BookDetail';
import Notification from "../components/Notification";
import {NotificationContainer, NotificationManager} from 'react-notifications';

import "../components/AbstractBookInfo.css";

const Appointment = (props) => {
  const location = useLocation();

  const appointmenttemplate = [
    {
      doctorinfo: {
        "Name": "Dr. Sam",
        "Propic": "image/DefaultDoctorProfileImage.jpg",
        "Specialization": "Cardiologists",
        "Language": "English, German",
        "Phone": "+49 45236985478",
        "Email": "droliver@g.com",
        "Address": {
          "country": "Germany",
          "city": "Munich",
          "street": "JonehStr",
          "house": "1a",
        },
        "Selfintro": "Hello, I am Dr. Oliver. xxxxxxxxxx. xxxxxxxxxxxxxx. xxxxxxxxxxxxxxx. xxxxxxxxx.",
        "Starnum": "4",
        "Reviewnum": "3"
      },
      time: new Date(Date.now() - 86400000*7),
      message: "random message",
      booktype: "video", // "video", "audio", "clinic"
      filename: null
    },
    {
      doctorinfo: {
        "Name": "Dr. Ben",
        "Propic": "image/DefaultDoctorProfileImage.jpg",
        "Specialization": "Nephrology",
        "Language": "English, German",
        "Phone": "+49 87453987541",
        "Email": "drBen@g.com",
        "Address": {
          "country": "Germany",
          "city": "Munich",
          "street": "Kau",
          "house": "9a",
        },
        "Selfintro": "Hello, I am Dr. Ben. xxxxxxxxxx. xxxxxxxxxxxxxx. xxxxxxxxxxxxxxx. xxxxxxxxx.",
        "Starnum": "5",
        "Reviewnum": "10"
      },
      time: new Date(Date.now() - 86400000*10),
      message: "random message 222",
      booktype: "video", // "video", "audio", "clinic"
      filename: null
    }
  ]

  const [applist, setapplist] = useState(null)
  const [historyapplist, sethistoryapplist] = useState(appointmenttemplate)

  // Hard code notification for demo
  const [notimessage, setnotimessage] = useState(null)

  useEffect(() => {
    if (props.storedappointments !== null) {
      let updatelist = [... props.storedappointments]
      if (location.state) {        
        updatelist.push(location.state)        
      }
      props.storeappfunc(updatelist)
      setapplist(updatelist)
    }
    else {
      let updatelist = []
      if (location.state) {        
        updatelist.push(location.state)
        props.storeappfunc(updatelist)
        setapplist(updatelist)      
      }      
    }
    // Hard code notification for demo
    if (location.state) {
      const input = {
        type: 'apprem',
        message: formatDatestring(location.state.time)
      }
      const timer = setTimeout(() => {        
        //console.log("notification")
        setnotimessage(formatDatestring(location.state.time))
      }, 3000);
      return () => clearTimeout(timer);
    }    
  }, [] );

  function cancelbooking(targetdate) {
    let updatelist = [... applist]
    let find = -1;
    for(let i=0; i<updatelist.length; i++) {
	    if(updatelist[i].time.getTime() == targetdate.getTime()) {
		    find = i;
		    break;
	    }
    }
    updatelist.splice(find, 1)
    props.storeappfunc(updatelist)
    setapplist(updatelist)
  }

  return (
    <div className="App-content">
      <h1>Appointment</h1>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        {applist !== null? appointmentlist(applist, cancelbooking) : null}
      </div>
      <h1>Appointment History</h1>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        {historyapplist !== null? appointmentlist(historyapplist, cancelbooking) : null}
      </div>
      {/* Hard code notification for demo */}
      {notimessage !== null?
        NotificationManager.info(notimessage, 'Appointment Reminder')
      : null}
      <NotificationContainer/>
    </div>
  );
};

function appointmentlist(data, cancelbooking) {
  let applist = []
  for (let i=0; i<data.length; i++) {
    applist.push(
      appointmentslot(data[i], cancelbooking)
    )
  }
  return applist
}

function appointmentslot(data, cancelbooking) {
  return(
    <Popup key={data.time}
      trigger = {
        <button className="abstactdoctor_apptlist" >
          <AbstractBookInfo date={data.time} info={data.doctorinfo} />
        </button>
      }
      modal nested
    >
      {close => {
        return (
          <div className="modal">
            <div className="content">
              <BookDetail doctorinfo={data.doctorinfo} date={data.time} message={data.message} booktype={data.booktype} filename={data.filename} />
            </div>
          <div className="actions">
            <button id="cancel_wide" onClick={()=>{ cancelbooking(data.time); close(); }}>
              Cancel Booking
            </button>
          </div>
          </div>
        )
      }}
    </Popup>
  )
}

function formatDatestring(date) {
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
  let datestring = date.toLocaleString('en-US', options, { hour12: false })
  datestring = datestring + "-" + date.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })
  return datestring
}

export default Appointment;