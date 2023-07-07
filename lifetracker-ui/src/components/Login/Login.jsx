import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

function Login({onLogin}) {

  //------- Login Specific Usestate Variables --------\\

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("testpassord")

  const onSubmitLogin = (event) => {
    event.preventDefault()
    
    onLogin(email, password)
  }



  return (
    <div className = "log-in-page" >
      <h2>Lifetracker</h2>
        {/* we have a form that, when submitted, stores our register information so we can pass the informatiuon to the backend */}
        <div className="input-container">
          <form className = "log-in-form" onSubmit={onSubmitLogin} >
              <input type="text" id="email" placeholder = "Email" name="email" onChange={(event) => {setEmail(event.target.value)}}/>
              <input type="text" id="password"  placeholder  = "Password"name="password" onChange={(event) => {setPassword(event.target.value)}}/>
              <button type= "submit" id = "submit-log-in-information">Log in </button>
          </form>
        </div>
    </div>
  )
}

export default Login