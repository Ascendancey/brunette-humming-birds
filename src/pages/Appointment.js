import React, { useState } from "react";
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
      time: new Date(),
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
      time: new Date(),
      message: "random message 222",
      booktype: "video" // "video", "audio", "clinic"
    }
  ]

  const [applist, setapplist] = useState(appointmentlist(appointmenttemplate, cancelbooking))

  if (location.state) {
    let updatelist = [... applist]
    updatelist.push(location.state)
    setapplist(updatelist)
  }

  function cancelbooking(index) {
    let updatelist = [... applist]
    updatelist.splice(index, 1)
    setapplist(updatelist)
  }  

  return (
    <div>
      <div className="App-content">
        <h1>Appointment</h1>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          {applist}
        </div>
      </div>
    </div>
  );
};

function appointmentlist(data, cancelbooking) {
  let applist = []
  for (let i=0; i<data.length; i++) {
    applist.push(
      <Popup key={i}
        trigger = {
          <button className="appointmentbox" >
            <AbstractBookInfo date={data[i].time} info={data[i].doctorinfo} />
          </button>
        }
        modal nested
      >
        {close => {
          return (
            <div className="modal">
              <div className="content">
                <BookDetail doctorinfo={data[i].doctorinfo} date={data[i].time} message={data[i].message} booktype={data[i].booktype} />
              </div>
            <div className="actions">
              <button className="button" onClick={()=>{ cancelbooking(i); close(); }}>
                Cancel Booking
              </button>
            </div>
            </div>
          )
        }}
      </Popup>
    )
  }
  return applist
}

export default Appointment;