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
        "Name": "Dr. Oliver",
        "Propic": "image/DefaultDoctorProfileImage.jpg",
        "Specialization": "Cardiologists",
        "Language": "English, German",
        "Phone": "+49 56326987541",
        "Email": "droliver@g.com",
        "Address": {
          "country": "Germany",
          "city": "Munich",
          "street": "Kaufingerstr",
          "house": "1a",
        },
        "Selfintro": "Hello, I am Dr. Oliver. xxxxxxxxxx. xxxxxxxxxxxxxx. xxxxxxxxxxxxxxx. xxxxxxxxx.",
        "Starnum": "4",
        "Reviewnum": "3"
      },
      time: new Date(Date.now() - 86400000),
      message: "random message",
      booktype: "video" // "video", "audio", "clinic"
    },
    {
      doctorinfo: {
        "Name": "Dr. Ben",
        "Propic": "image/DefaultDoctorProfileImage.jpg",
        "Specialization": "Cardiologists",
        "Language": "English, German",
        "Phone": "+49 87453987541",
        "Email": "drBen@g.com",
        "Address": {
          "country": "Germany",
          "city": "Munich",
          "street": "Kaufingerstr",
          "house": "2a",
        },
        "Selfintro": "Hello, I am Dr. Ben. xxxxxxxxxx. xxxxxxxxxxxxxx. xxxxxxxxxxxxxxx. xxxxxxxxx.",
        "Starnum": "5",
        "Reviewnum": "10"
      },
      time: new Date(Date.now() - 86400000*3),
      message: "random message 222",
      booktype: "video" // "video", "audio", "clinic"
    }
  ]

  const [applist, setapplist] = useState(null)  

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
      let updatelist = [... appointmenttemplate]
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
      <div className="App-content">
        <h1>Your appointments</h1>
        <div>
          {applist !== null? appointmentlist(applist, cancelbooking) : null}
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