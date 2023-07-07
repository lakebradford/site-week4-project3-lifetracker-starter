import { useState } from "react"
import React from 'react'
import "./Register.css"


const Register = ({ onRegister }) => {

  // ------------------- Registration specific Usestate Variables ----------------||
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')







  const HandleFormSubmit = (event) => {
    //first we need to check if the passwords match 
    event.preventDefault()
    onRegister(username, email, firstName, lastName, password);
    
  }


  return (
    <div id = "register-page">
      <h2>Lifetracker</h2>
        <form id = "register-form" onSubmit={HandleFormSubmit}>

        <center><input type="text" id="registered-username" name="username" placeholder = "Username" onChange={(event) => setUsername(event.target.value)}/></center>
            <center><input type="text" id="registered-email" name="email" placeholder = "Email" onChange={(event) => setEmail(event.target.value)}/></center>
            <center><input type="text" id="registered-first-name" name="first-name" placeholder = "First Name" onChange={(event) => setFirstName(event.target.value)}/></center>
            <center><input type="text" id="registered-last-name" name="last-name" placeholder = "Last Name" onChange={(event) => setLastName(event.target.value)}/></center>
            <center><input type="text" id="registered-password" name="password" placeholder = "Password" onChange={(event) => setPassword(event.target.value)}/></center>
            <center><input type="text" id="registered-confirm-password" name="confirm-password" placeholder = "Confirm Password" onChange={(event) => setConfirmPassword(event.target.value)}/></center>
            <center><button type= "submit" id = "submit-register-information">Register</button></center>

        </form>
    </div>
  )
}

export default Register