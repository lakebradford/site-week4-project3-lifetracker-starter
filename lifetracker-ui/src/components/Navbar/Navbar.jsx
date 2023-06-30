import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


const Navbar = ({setIsAddActivityFormOpen}) => {
    //Navbar should contain the following buttons:
    // ------------Router Buttons ----------
    // Activity, Sleep, Nutriton, Exercise
    // Home/ DetailedActivity
    // -------------------------------------

    // Sign in / register  ***these buttons should only be displayed if the user is NOT already logged in
    // Sign out *** This button should only be displayed if the user is logged in. 

    //----------------------Props------------------------\\
    //setIsAddActivityFormOpen: used to close the form when switching tabs

  return (
    <div>
        <ul id = "navigation-bar">
            <li className = "navigation-button" id = 'activity-button-navbar'><Link to="/" onClick={() => setIsAddActivityFormOpen(false)}>Home</Link></li>
            <li className = "navigation-button" id = 'activity-button-navbar'><Link to="/Activity" onClick={() => setIsAddActivityFormOpen(false)}>Activity</Link></li>
            <li className = "navigation-button" id = 'exercise-button-navbar'><Link to="/Exercise" onClick={() => setIsAddActivityFormOpen(false)}>Exercise</Link></li>
            <li className = "navigation-button" id = 'nutrition-button-navbar'><Link to="/Nutrition" onClick={() => setIsAddActivityFormOpen(false)}>Nutrition</Link></li>
            <li className = "navigation-button" id = 'sleep-button-navbar'><Link to="/Sleep" onClick={() => setIsAddActivityFormOpen(false)}>Sleep</Link></li>
            {/* These buttons will be visible depending on if a user is signed in or not */}
            <li className = "navigation-button" id = 'log-in-button-navbar'><Link to="/Login" onClick={() => setIsAddActivityFormOpen(false)}>Log In</Link></li>
            <li className = "navigation-button" id = 'register-button-navbar'><Link to="/Register" onClick={() => setIsAddActivityFormOpen(false)}>Register</Link></li>
            <li className = "navigation-button" id = 'sign-out-button-navbar'><Link to="/" onClick={() => setIsAddActivityFormOpen(false)}>Sign Out</Link></li>
        </ul>

    </div>
  )
}

export default Navbar