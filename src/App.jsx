import { useState, useEffect } from 'react'
import './App.css'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import "/script.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Flights from './Pages/Flights'
import Bookings from './Pages/Bookings'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { useNavigate } from "react-router-dom";


// there should be one user of a name and password
// when login or register both are display none and seen logout button istead of them.
// logout button will clear the old user state


const mockflights = [
  {
   id: 1,
   flightName: "AA101 - New York to Los Angeles",
   date: "2023-12-01",
   time: 10.00,
   seats: ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"]
  },
  {
    id: 2,
    flightName: "BB202 - Vienna to Miami",
   date: "2023-12-02",
   time: 14.00,
   seats: ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"]  
 }
]



function App() {
    const navigate = useNavigate();

// extract data from the object
 const [flight, setflight] = useState(mockflights)
 const [inputValues, setInputValues] = useState({username: "", password: ""});

//  handle selected seats
 const [selectedSeat, setSelectedSeat] = useState( () => {
   const saved = localStorage.getItem('selectedSeat');
   return saved ? JSON.parse(saved) : [];
 });

 //  A new user state to handle registered users
 const [newusers, setNewUsers] = useState(() => {
  try {
    const savedUser = localStorage.getItem('newUser');
    return savedUser ? JSON.parse(savedUser) : [];
  } catch (error) {
    console.error("Error parsing newUser from localStorage:", error);
    return [];
  }
});

//  Already registered users state
const [oldUsers, setOldUsers] = useState(() => {
  try {
    const savedOldUser = localStorage.getItem('oldUser');
    return savedOldUser ? JSON.parse(savedOldUser) : [];
  } catch (error) {
    console.error("Error parsing oldUser from localStorage:", error);
    return [];
  }
 });

//  set input values for login and register


useEffect(() => {
  localStorage.setItem('selectedSeat', JSON.stringify(selectedSeat));
  localStorage.setItem('newUser', JSON.stringify(newusers));
  localStorage.setItem('oldUser', JSON.stringify(oldUsers));
 }, [selectedSeat, newusers, oldUsers])
 
 
// Register a new user
function handleRegisteredUsers(e,newUser) {
  e.preventDefault();
  
     const userExist = newusers.find(user => user.username === newUser.username);

    if (userExist) {
      alert("User already exist. Try a different email") ;
      return;
    } 
      setNewUsers(prevUser => {
        return [...prevUser, newUser];
      })
      setInputValues({username: "", password: ""});
      alert("Registered Successfully");
      navigate("/login");

    }
    console.log("registe user", newusers);

    //  Login an existing user
function loginUser(e) {
  e.preventDefault();
  const userFound = newusers.find(user => user.username === inputValues.username && user.password === inputValues.password);
  if(userFound) {
    setOldUsers(prevOldUser => [...prevOldUser, userFound]);
    alert("Login Succesfully");
    setInputValues({username: "", password: ""});
    navigate("/");
  } else {
    alert("User not found");
  }
  console.log("old user", oldUsers);
}


//  to change the input values
 function HandleChange(e) {
  setInputValues(prev => {
    return {
      ...prev,
      [e.target.name]: e.target.value
    }
  })
}
 console.log("input value", inputValues.username, inputValues.password);
 
 //  To select the flights and seats
 function handleSeatSelected(flightName, seat, date) {
   setSelectedSeat(prev => {
    const exist = prev.find(item => item.seat === seat);
    if (exist) {
      return prev.filter(item => item.seat !== seat);
    } else {
      return [...prev, {flightName, seat, date}]
    }
  }
)};
console.log(selectedSeat);


const isLoggedIn = oldUsers.length > 0 && newusers.length > 0;
 

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setOldUsers={setOldUsers} />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights flights={flight} selectedSeat={selectedSeat} onSeatSelected={handleSeatSelected}/>} />
        <Route path="/booking" element={<Bookings selectedSeat={selectedSeat} />} />
        
        <Route path="/login" element={<Login inputValue={inputValues} handleChange={HandleChange} loginUser={loginUser} />} />
        <Route path="/register" element={<Register inputValue={inputValues} handleChange={HandleChange} registerUser={handleRegisteredUsers} />} />
      </Routes>
    </>
  )
}

export default App
