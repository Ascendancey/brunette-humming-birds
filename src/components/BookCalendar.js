import React, { useState } from 'react';

import "./BookCalendar.css";

const BookCalendar = (props) => {
  let currentyear = 2021
  let currentday = new Date(currentyear, 7, 12) // Month from 0 to 11
  let calendardata = generatecldata(currentday)

  return (
    <div className="">
      {/* Head bar of calendar */}
      <div>
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
        
      </div>
    </div>
  );
};

function dateback() {

}

function dateforward() {

}

function generatecldata(startday) {
  // Generate data for 7 days from start day
  let data = []
  let curdate = new Date(startday)
  for (let i=0; i<7; i++) {    
    curdate.setDate(startday.getDate()+i)
    let curtimeslot = generatetimslot(curdate, 9, 18)
    let d = {
      "date": new Date(curdate),
      "timeslot": curtimeslot
    }
    data.push(d)
  }
  console.log(data)
  return data
}

function generatetimslot(date, starttime, endtime) {
  // Generate time slot from starttime to endtime for every 30 mins
  let timeslot = []
  let firstslot = new Date(date)
  firstslot.setHours(firstslot.getHours()+starttime)
  timeslot.push(new Date(firstslot))
  let slotnum = (endtime-starttime)*2
  for (let i=0; i<slotnum; i++){
    firstslot.setMinutes(firstslot.getMinutes()+30) 
    timeslot.push(new Date(firstslot))
  }
  return timeslot
}

export default BookCalendar;