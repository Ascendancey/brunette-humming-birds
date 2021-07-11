import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { useHistory } from 'react-router-dom';

import "./Timeslot.css";

import AbstractBookInfo from './AbstractBookInfo';
import BookDetail from './BookDetail';

const Timeslot = (props) => {
  const history = useHistory();

  const doctorinfo = props.info
  const time = props.datetime
  const [status, setstatus] = useState(props.status)
  const [booktype, setbooktype] = useState("video")
  const [message, setmessage] = useState("")
  const [upfile, setupfile] = useState(null)
  const timedisplay = time.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })
  let btn_class = statuscolor(status)

  function selectbooktype(event) {
    setbooktype(event.target.value)
  }

  function writemessage(event) {
    setmessage(event.target.value)
  }

  function onfileupload(event) {
    //console.log(event.target.files)
    setupfile(event.target.files)
  }

  function confirmbooking() {
    const filename = filecheck() // return file names and upload files 
    setstatus("booked")
    history.push({
      pathname: '/appointment',
      state: {
       "doctorinfo": doctorinfo,
       "time": time,
       "message": message,
       "booktype": booktype,
       "filename": filename,
       "notification": 1 // Hard notification for demo purpose
      }
    })
  }

  function filecheck() {    
    let filename = []
    if (upfile !== null) {
      for (let i=0; i<upfile.length; i++) {
        filename.push(upfile[i].name)
      }
      if (upfile !== null) {
        const data = new FormData() 
        data.append('file', upfile)
        //console.log(data)
      }
    }
    return filename
  }
  
  const makebooing = (close) => {
    return(
      <div className="modal">             
        <div className="header"> Make A Booking </div>
        {/* Booking Adstract Info */}
        <div className="content">
          <AbstractBookInfo date={time} info={doctorinfo} />
        </div>
        <div className="actions">
          {/* Select Booking Type */}
          <div>
            <h3>Booking Type</h3>
            <div onChange={selectbooktype}>
              <input type="radio" value="video" name="booktype" defaultChecked={booktype==="video"? true: false} /> Video Call
              <input type="radio" value="audio" name="booktype" defaultChecked={booktype==="audio"? true: false} /> Audio Call
              <input type="radio" value="clinic" name="booktype" defaultChecked={booktype==="clinic"? true: false}/> Visit Clinic
            </div>
          </div>              
          {/* Write Message */}
          <div>
            <h3>Message</h3>
            <textarea value={message} onChange={writemessage} rows="5" cols="40" />
          </div>
          {/* Upload File */}
          <div>
            <h3>Upload File</h3>
            <input type="file" name="file" onChange={onfileupload} multiple />
          </div>
          {/* Comfirm Cancel button */}
          <div className="buttonarea">
            {/* Confirm button */}
            <button id="confirm" onClick={()=>{ confirmbooking(); close(); }}>
              Confirm
            </button>
            {/* Cancel button */}
            <button id="cancel" onClick={close}>
              Cancel
            </button>
          </div>                
        </div>
      </div>
    )
  }

  const bookeddetail = (close) => {
    return (
      <div className="modal">
        <div className="content">
          <BookDetail doctorinfo={doctorinfo} date={time} message={message} booktype={booktype} />
        </div>
        {/* <div className="actions"> */}
          <button id="cancel" onClick={()=>{ cancelbooking(); close(); }}>
            Cancel Booking
          </button>
        {/* </div>         */}
      </div>
    )
  }

  function cancelbooking() {
    setbooktype("video")
    setmessage("")
    setstatus("empty")
  }

  return (
    <div className="">
      <Popup trigger={<button disabled={status==="occupy"? true : false} className={btn_class}> {timedisplay} </button>} modal nested>
        {close => {
          if (status === "empty") {
            return makebooing(close)
          }
          else if (status === "booked") {
            return bookeddetail(close)
          }
        }}
      </Popup>
    </div>
  );
};

function statuscolor(status) {
  if (status === "empty") {
    return "emptybutton"
  }
  else if (status === "occupy") {
    return "occupybutton"
  }
  else if (status === "booked") {
    return "bookedbutton"
  }
}

export default Timeslot;