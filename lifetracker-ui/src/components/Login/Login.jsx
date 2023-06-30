import React from 'react'
import "./Login.css"

function Login() {


  return (
    <div id = "log-in-page">
        {/* we have a form that, when submitted, stores our register information so we can pass the informatiuon to the backend */}

        <form id = "log-in-form" >
            <label for="email">Email:</label>
            <input type="text" id="email" name="email"/>
            <label for="password">Password:</label>
            <input type="text" id="password" name="password"/>
            <button type= "submit" id = "submit-log-in-information"></button>
        </form>
    </div>
  )
}

export default Login