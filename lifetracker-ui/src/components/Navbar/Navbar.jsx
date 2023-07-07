import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


const Navbar = ({setIsAddActivityFormOpen, loggedIn, handleLogout }) => {
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
    <div id = "navbar-div">
        <ul id = "navigation-bar">
            <li className = "navigation-icon" id = 'activity-button-navbar'><Link to="/" onClick={() => setIsAddActivityFormOpen(false)}><img  id = "logo-icon"src = {"src/assets/health.png"}/></Link></li>
            <li className = "navigation-button" id = 'activity-button-navbar'><Link to="/Activity" onClick={() => setIsAddActivityFormOpen(false)}><button className='nav-button'> Activity</button></Link></li>
            <li className = "navigation-button" id = 'exercise-button-navbar'><Link to="/Exercise" onClick={() => setIsAddActivityFormOpen(false)}> <button className='nav-button'>Exercise</button></Link></li>
            <li className = "navigation-button" id = 'nutrition-button-navbar'><Link to="/Nutrition" onClick={() => setIsAddActivityFormOpen(false)}> <button className='nav-button'>Nutrition</button></Link></li>
            <li className = "navigation-button" id = 'sleep-button-navbar'><Link to="/Sleep" onClick={() => setIsAddActivityFormOpen(false)}><button className='nav-button'>Sleep</button></Link></li>
            {/* These buttons will be visible depending on if a user is signed in or not */}
            
            {!loggedIn &&<li className = "navigation-button log-button"><Link to="/Login" onClick={() => setIsAddActivityFormOpen(false)}><button id = 'register-login-button-navbar' className='nav-button'>Log In</button></Link></li>}
            {!loggedIn &&<li className = "navigation-button log-button" ><Link to="/Register" onClick={() => setIsAddActivityFormOpen(false)}><button id = 'register-login-button-navbar' className='nav-button'>Register</button></Link></li>}
            {loggedIn &&<li className = "navigation-button log-button" ><Link to="/" onClick={() => setIsAddActivityFormOpen(false)}><button className='nav-button' id = 'sign-out-button-navbar' onClick = {handleLogout}>Log Out</button></Link></li>}
        </ul>

    </div>
  )
}

export default Navbar