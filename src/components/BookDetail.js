import React, { useState } from 'react';

import "./BookDetail.css";
import AbstractBookInfo from './AbstractBookInfo';

const BookDetail = (props) => {
  const doctorinfo = props.doctorinfo
  const date=props.date
  const message= props.message
  const booktype= props.booktype
  const filename = props.filename
  const videolink = "https://lmu-munich.zoom.us/j/4617004849?pwd=NjN4TXYveUt6U0s4bGo5Y2FiUEV6Zz09"
  const booktext = booktypedisplay(booktype, videolink)

  return(
    <div className="bookdetail" id="placecenter">
      <h2>Booking Details</h2>
      <AbstractBookInfo date={date} info={doctorinfo} />
      <div id="placecenter">
        <h2>Booking Type</h2>
        {booktext}
      </div>
      <div id="placecenter">
        <h2>Message</h2>
        <div style={{marginBottom: "20px"}} >
          {message}
        </div>
        {filelistformat(filename)}
      </div>
    </div>
  )
}

function booktypedisplay(booktype, videolink) {
  let booktext = ""
  let linktitle = ""

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

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
    <div id="placecenter">
      <div>
        {booktext}
      </div>
      <h2>
        {linktitle}
      </h2>
      <div className="linkstyle" onClick={() => openInNewTab(videolink)}>
        {videolink}
      </div>
    </div>
  )
}

function filelistformat(filelist) {
  let fstr = []
  if (filelist === null) {filelist = ["No files"]} 
  for (let i=0; i<filelist.length; i++) {
    fstr.push(
      <div key={filelist[i]}>
        <img height="20" src={"image/fileicon.png"} alt="fileicon" />
        {filelist[i]}
      </div>
    )
  }
  return fstr
}

export default BookDetail;