import React, { useState } from 'react';

import "./BookDetail.css";
import AbstractBookInfo from './AbstractBookInfo';

const BookDetail = (props) => {
  const doctorinfo = props.doctorinfo
  const date=props.date
  const message= props.message
  const booktype= props.booktype
  const videolink = "http://videolink.com/66456456/pwd=fwfwefwewfw"
  const booktext = booktypedisplay(booktype, videolink)

  return(
    <div>
      <h2>Booking Details</h2>
      <AbstractBookInfo date={date} info={doctorinfo} />
      <div>
        <h2>Booking Type</h2>
        {booktext}
      </div>

      <div>
        <h2>Message</h2>
        {message}
      </div>
    </div>
  )
}

function booktypedisplay(booktype, videolink) {
  let booktext = ""
  let linktitle = ""
  if (booktype === "video") {
    booktext = "Video Call"
    linktitle = "Video Call Link"
  }
  else if (booktype === "audio") {
    booktext = "Audio Call"
    linktitle = "Audio Call Link"
  }
  else if (booktype === "clinic") {
    booktext = "Visit Clinic"
    return (
      <div>
        {booktext}
      </div>
    )
  }
  return (
    <div>
      <div>
        {booktext}
      </div>
      <h2>
        {linktitle}
      </h2>
      <div>
        {videolink}
      </div>
    </div>
  )
}

export default BookDetail;