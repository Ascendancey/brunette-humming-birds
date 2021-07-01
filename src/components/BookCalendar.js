import React, { useState } from 'react';

import "./BookCalendar.css";

import TimeSlot from "./Timeslot";

const BookCalendar = (props) => {
  const doctorinfo = props.info
  const [currentday, setcurrentday] = useState(new Date(new Date().setHours(0,0,0,0)))
  const [currentyear, setcurrentyear] = useState(currentday.getFullYear())
  let calendardata = generatecldata(currentday)
  const [caltable, setcaltable] = useState(calandartable(calendardata, doctorinfo))

  function dateback() {
    let curday = currentday
    curday.setDate(curday.getDate() - 7)
    updatestate(currentday)
  }
  
  function dateforward() {
    let curday = currentday
    curday.setDate(curday.getDate() + 7)
    updatestate(currentday)
  }

  function updatestate(updateday) {
    let newcaldata = generatecldata(updateday)
    let newcaltable = calandartable(newcaldata, doctorinfo)
    setcurrentday(updateday)
    setcurrentyear(updateday.getFullYear())
    setcaltable(newcaltable)
  }

  return (
    <div className="">
      {/* Head bar of calendar */}
      <div className="calendarbar">
        <button className="chleftbut" onClick={dateback}>
          left
        </button>
        <div>Booking {currentyear}</div>
        <button className="chrightbut"  onClick={dateforward}>
          right
        </button>
      </div>
      {/* Calendar Table */}
      <div>
        {caltable}
      </div>
    </div>
  );
};

function calandartable(calandardata, doctorinfo) {
  let caltable = []
  for (let i=0; i<calandardata.length; i++) {
    let calrow = calandarrow(calandardata[i], doctorinfo)
    caltable.push(calrow)
  }
  return caltable
}

function calandarrow(rowdata, doctorinfo) {
  // Derive each row in calandar
  let caldate = rowdata.date.toLocaleDateString("en-GB").substring(0, 5)
  let tslot = []
  for (let i=0; i<rowdata.timeslot.length; i++) {
    tslot.push(<TimeSlot key={i} id={i} info={doctorinfo} datetime={rowdata.timeslot[i].date} status={rowdata.timeslot[i].status} />)
  }  
  return (
    <div key={caldate} id={caldate} className="calandarrow">
      <div>{caldate}</div>
      <div className="timeslots">{tslot}</div>
    </div>
  )
}

function generatecldata(startday) {
  // Generate data for 7 days from start day
  let data = []
  let curdate = new Date(startday)
  for (let i=0; i<7; i++) {    
    curdate.setDate(startday.getDate()+i)
    // timeslot of generating data
    let curtimeslot = generatetimslot(curdate, 9, 15)
    let d = {
      "date": new Date(curdate),
      "timeslot": curtimeslot
    }
    data.push(d)
  }
  return data
}

function generatetimslot(date, starttime, endtime) {
  // Generate time slot from starttime to endtime for every 30 mins
  let timeslot = []
  let firstslot = new Date(date)
  firstslot.setHours(firstslot.getHours()+starttime)
  let status = "empty" // empty, occupy, booked
  let tslotobj = {
    "date": new Date(firstslot),
    "status": status
  }
  timeslot.push(tslotobj)
  let slotnum = (endtime-starttime)*2
  for (let i=0; i<slotnum; i++){
    firstslot.setMinutes(firstslot.getMinutes()+30)    
    if (Math.random() * 10 <= 3) {
      status = "occupy"
    }
    else {
      status = "empty"
    }
    tslotobj = {
      "date": new Date(firstslot),
      "status": status
    }
    timeslot.push(tslotobj)
  }
  return timeslot
}

export default BookCalendar;