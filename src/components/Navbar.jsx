import React, { useState } from 'react'
import './Navbar.css'
import "../../script.js"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';


function Navbar({ isLoggedIn, setOldUsers }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogout() {
    setOldUsers([]);
    localStorage.removeItem('oldUser');
    navigate("/login");
    setMenuOpen(false);
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (

    <>
      <div className='navbar'>
        <div className='navlogo' id='navlogo'>
          <h2 className='nav-neon'>Airline Reservation</h2>
        </div>
        <button className='hamburger' onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`navLinks ${menuOpen ? 'active' : ''}`} id='navLinks'>
          <Link className='alternate nav-neon' to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link className='opposite nav-neon' to="/flights" onClick={() => setMenuOpen(false)}>Flights</Link>
          {!isLoggedIn && (
            <>
              <Link className='alternate nav-neon' to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link className='opposite nav-neon' to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <Link className='alternate nav-neon' to="/booking" onClick={() => setMenuOpen(false)}>MyBookings</Link>
              <div className='opposite logout nav-neon' onClick={handleLogout}>Logout</div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
