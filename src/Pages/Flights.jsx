import React, {useEffect, useState} from 'react'
import './Styles.css'
import "../../script.js"

function Flights({flights, onSeatSelected, selectedSeat}) {
  

  console.log("Flights component loaded");
  console.log(flights);

  
  
  return (
    <div className="flights-page">
      <h1>Available Flights</h1>
      <div className="ls-flights">
        {flights.map((flight) => {
          return (
            <div key={flight.id} className="flight flight-1">
            <h3>{flight.flightName}</h3>
            <p>Date: {flight.date} | Time: {flight.time} {flight.time < 12 ? "AM" : "PM"}</p>
            <div className="flights-seats">
                {flight.seats.map((seat) => {
                  return (
                    <button key={seat} className={selectedSeat.some(item => item.seat === seat) ? 'seat selected' : 'seat unselect'} onClick={() => {onSeatSelected(flight.flightName, seat, flight.date)}}>{seat}</button>
                  )
      })}
            </div>
          </div>
              )
        })}
      </div>
    </div>
  )
}

export default Flights
