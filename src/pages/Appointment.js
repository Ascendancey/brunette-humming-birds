import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Popup from 'reactjs-popup';

import AbstractBookInfo from '../components/AbstractBookInfo';
import BookDetail from '../components/BookDetail';

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
      booktype: "video" // "video", "audio", "clinic"
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
      booktype: "video" // "video", "audio", "clinic"
    }
  ]

  const [applist, setapplist] = useState(null)
  const [historyapplist, sethistoryapplist] = useState(appointmenttemplate)

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
      }
      props.storeappfunc(updatelist)
      setapplist(updatelist)
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
    <div>
      <div className="App-content">
        <h1>Appointment</h1>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          {applist !== null? appointmentlist(applist, cancelbooking) : null}
        </div>
        <h1>Appointment History</h1>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          {historyapplist !== null? appointmentlist(historyapplist, cancelbooking) : null}
        </div>
      </div>
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
        <button className="appointmentbox" >
          <AbstractBookInfo date={data.time} info={data.doctorinfo} />
        </button>
      }
      modal nested
    >
      {close => {
        return (
          <div className="modal">
            <div className="content">
              <BookDetail doctorinfo={data.doctorinfo} date={data.time} message={data.message} booktype={data.booktype} />
            </div>
          <div className="actions">
            <button className="button" onClick={()=>{ cancelbooking(data.time); close(); }}>
              Cancel Booking
            </button>
          </div>
          </div>
        )
      }}
    </Popup>
  )
}

export default Appointment;