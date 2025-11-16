import React, { useEffect, useState } from 'react'
import './Styles.css'
import "../../script.js"

function Bookings({selectedSeat}) {

return (
  <div className='flights-page'>
    <h1>My Bookings</h1>
    {!selectedSeat || selectedSeat === 0 ? (
      <p>No seat selected. Please select a seat first.</p>
    ) : (
      selectedSeat.map((booking, index) => {
        return (
      <div className="flight" key={index}>
        <p>Flight: {booking.flightName}</p>
        <p>Seat: <span id='selectedSeatDisplay'>{booking.seat}</span> | Date: {booking.date}</p>
      </div>
        )
      })
  )}
  </div>
)
}

export default Bookings
