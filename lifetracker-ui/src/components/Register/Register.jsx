import React from 'react'
import "./Register.css"

const Register = () => {


  return (
    <div id = "register-page">
        <form id = "register-form">

            <input type="text" id="registered-username" name="username" placeholder = "Username"/>
            <br></br>

            <input type="text" id="registered-first-name" name="first-name" placeholder = "First Name"/>
            <input type="text" id="registered-last-name" name="last-name" placeholder = "Last Name"/>
            <br></br>

            <input type="text" id="registered-password" name="password" placeholder = "Password"/>
            <br></br>
            <input type="text" id="registered-confirm-password" name="confirm-password" placeholder = "Confirm Password"/>
            <br></br>

            <input type= "submit" id = "submit-register-information"></input>

        </form>
    </div>
  )
}

export default Register