import React from 'react'
import './styles.css'


function Home() {

function hadleBooking() {
  window.location.href = "/flights";
}

  return (
    <div className='container' >
      <div id='herotext'>
      <h1 className='neon-effect'>Welcome to Airline Reservation</h1>
      <p className='neon-effect'>Book your flights easily with our simple system</p>
      <button className='book-btn' onClick={hadleBooking}>Book Now</button>
      </div>
    </div>
  )
}

export default Home
