import './App.css'
import Navbar from "../Navbar/Navbar"
import React, { useState } from "react";
import { ReactDOM } from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import ActivityPage from '../ActivityPage/ActivityPage';
import ExercisePage from '../ExercisePage/ExercisePage';
import NutritionPage from '../NutritionPage/NutritionPage';
import SleepPage from '../SleepPage/SleepPage';
import Home from '../Home/Home'
import Register from '../Register/Register';
import Login from '../Login/Login';
import axios from "axios"
import { useEffect } from 'react';
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";



function App() {
  // in app we need to display the following components:
  // Navbar
  // --------These components hsould be displayed depending on the Route -
  // ActivityPage
  // ExercisePage
  // NutritionPage
  // SleepPage
  // Home (DetailedActivity)
  // ---------------------------------------------------------------------

  // ------------UseState Variables--------------------------
  //Used to distinguish between different activities, the variable changes based on what activity type is currently selected. 
  const [currentActivityType, setCurrentActivityType] = useState('')
  //Used to determine whether or not we need to display the ActivityGrid or display the form to add an activity
  const [isAddActivityFormOpen, setIsAddActivityFormOpen] = useState(false)

  // Stores/sets all of our data for our exercise data, There is a user_id column so we can locate each users exercise tile data
  const [exerciseData, setExerciseData] = useState([])
  // Stores/sets all of our data for our sleep data, There is a user_id column so we can locate each users sleep tile data
  const [sleepData, setSleepData] = useState()
 // Stores/sets all of our data for our nutrition data, There is a user_id column so we can locate each users nutrition tile data
  const[nutritionData, setNutritionData] = useState([])

  // used to determine which buttons are displayed in the navbar, also determines which screens should be displayed since it will change depending on  if a user is logged in or not
  const [loggedIn, setLoggedIn] = useState(false)
  // Used to identify which user is logged in by id. Used to access the users Activity Information
  const [currentUserID, setCurrentUserID] = useState(null)
  const [currentUserName, setCurrentUserName] = useState('')


  
  useEffect(() => {
    const checkLoggedIn = () => {
      const token = Cookies.get("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp * 1000 > Date.now()) {
          console.log("DECODED TOKEN ", decodedToken)
          console.log(`USER ID FROM TOKEN ${decodedToken.userId}`)
          setLoggedIn(true);
          setCurrentUserName(decodedToken.username)
          setCurrentUserID(decodedToken.userId)
          getExerciseQuery(decodedToken.userId)
          getNutritionQuery(decodedToken.userId)
          getSleepQuery(decodedToken.userId)


        } else {
          // Token has expired, log out the user
          handleLogout();
        }
      }
    };
    checkLoggedIn();
  }, []);


  //Adds the information from the sleep activity page to the backend
  //passed down to sleep Activity
  const addSleepActivity = async (date, startTime, endTime, image) =>{
    // call the database
    console.log(`current ID ${currentUserID}`)
    try {
      // First we fetch the API
      const response = await fetch("http://localhost:3001/api/auth/sleep", {
        //Now we need to actually send the post request
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Now we format our post request 
        body: JSON.stringify({ date, startTime, endTime, currentUserID, image}),
      });
      // Now we get the response from our post request and save it to a variable
      const data = await response.json();
  

      if (response.ok) {
        //Successful Login
        console.log("ITEM SUCCESSFULLY ADDED TO SLEEP DATABASE")

        //______We can modify to display on our screen________\\
        console.log(data.message);
        getSleepQuery(currentUserID)
  
      } else {
        console.log("issue adding sleep activity")

        //______We can modify to display on our screen________\\
        console.log(data.message); 
      }
    } catch (error) {
      console.error("Error:", error);
    }


  }

  const addNutritionActivity = async (item, calories, quantity, image) =>{
    // call the database
    console.log(`current ID ${currentUserID}`)
    try {
      const response = await fetch("http://localhost:3001/api/auth/nutrition", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item, calories, quantity, currentUserID,image}),
      });

      const data = await response.json();
  

      if (response.ok) {
        //Successful Login
        console.log("ITEM SUCCESSFULLY ADDED TO NUTRIOTN DATABASE")

        //______We can modify to display on our screen________\\
        console.log(data.message);
        getNutritionQuery(currentUserID)
  
      } else {
        console.log("issue adding NUTRITION activity")

        //______We can modify to display on our screen________\\
        console.log(data.message); 
      }
    } catch (error) {
      console.error("Error:", error);
    }

  }


  const addExerciseActivity = async (type, duration, intensity) =>{
    // call the database
    console.log(`current ID ${currentUserID}`)
    try {
      const response = await fetch("http://localhost:3001/api/auth/exercise", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type, duration, intensity, currentUserID}),
      });

      const data = await response.json();
  

      if (response.ok) {
        //Successful Login
        console.log("ITEM SUCCESSFULLY ADDED TO EXERCISE DATABASE")

        //______We can modify to display on our screen________\\
        console.log(data);
        getExerciseQuery(currentUserID)
        
  
      } else {
        console.log("issue adding EXERCISE activity")

        //______We can modify to display on our screen________\\
        console.log(data.message); 
      }
    } catch (error) {
      console.error("Error:", error);
    }
    

  }


  // Handles login by fetching data from our database and making sure the email is present and the password matches the email
  // Passed down to the Login Component
  const handleLogin = async (email, password) => {
    try {
      
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),

      });




      const data = await response.json();
      console.log(data.user.username)
      setCurrentUserName(data.user.username)
      if (response.status === 200) {
        Cookies.set("token", data.token); // Set the token as a cookie
      } else {
        console.log("" ); // Optional: Display an error message
      }





      // Now that we have retrieved the data, we can start retrieving the information from the user
      setCurrentUserID(data.user.id)
      getSleepQuery(data.user.id)
      getExerciseQuery(data.user.id)
      getNutritionQuery(data.user.id)


      // Now we need to fetch our token


      



      if (response.ok) {
        //Successful Login
        setLoggedIn(true);

        //______We can modify to display on our screen________\\
 
  
      } else {
        //Login failed
        console.log("loginFailed")

        //______We can modify to display on our screen________\\
        console.log(data.message); 
      }
    } catch (error) {
      console.error("Error:", error);
    }

    window.location.href = "/";



    
  };

  //function that handles our regisration. Adds a new user into our database
  // Passed down to the Register component
  const handleRegistration = async (username, email, firstname, lastname, password) => {
    try {
      // Accessing the database
      const response = await fetch("http://localhost:3001/api/auth/register", {
        //calling a post request using the data we received from the regisration form
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username, email, firstname, lastname, password }),
      })
      console.log("String pulled from registration form ")
      console.log(JSON.stringify({username, email, firstname, lastname, password }))

      const data = await response.json();
      setCurrentUserID(data.user.id)

      if (response.status === 201) {
        Cookies.set("token", data.token)
        console.log(data.token); // Set the token as a cookie
      } else {
        console.log("" ); // Optional: Display an error message
      }


      if (response.ok) {
        //Registration successful
        setLoggedIn(true);
        console.log(data.message);
        setLoggedIn(true)
      } else {
        //REgistration failed
        console.log(data.message); 
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };


  const handleLogout = async() => {
    console.log("Setting Logged In to false")
    setLoggedIn(false)
    //Delete teh token so the users information is removed
    Cookies.remove("token")




  }






  // Use axios to get the request'
  // "http://localhost:3001/api/auth/sleep"

  const getSleepQuery = async(userID) =>{
    axios
      .get(`http://localhost:3001/api/auth/sleep/${userID}`)
      .then((response) => {
        console.log("SLEEP DATA")
        console.log(response.data.user)
        setSleepData(response.data.user);

      })
      .catch((error) => {
        console.error(error);
      });

  }

  const getExerciseQuery = async(userID) =>{
    axios
      .get(`http://localhost:3001/api/auth/exercise/${userID}`)
      .then((response) => {
        console.log("EXERCISE DATA")
        console.log(response.data.user)
        setExerciseData(response.data.user);

      })
      .catch((error) => {
        console.error(error);
      });

  }

  const getNutritionQuery = async(userID) =>{
    axios
      .get(`http://localhost:3001/api/auth/nutrition/${userID}`)
      .then((response) => {
        console.log("NUTRITION DATA")
        console.log(response.data.user)
        setNutritionData(response.data.user);

      })
      .catch((error) => {
        console.error(error);
      });

  }


  const handleActivityButtons = () =>{
    setIsAddActivityFormOpen(true)



    console.log("form should open")
  }












  // function that handles our log out
  return (
    <BrowserRouter>

      <div>
        {/* Components here will be displayed at all times no matter which route we have selected */}
        <Navbar setIsAddActivityFormOpen = {setIsAddActivityFormOpen} onRegister={handleRegistration} loggedIn = {loggedIn} handleLogout = {handleLogout}/>
        {/* ROUTES */}
        <Routes>
          <Route path="/" element = {<Home loggedIn = {loggedIn} currentUserName = {currentUserName}/>}/>
          <Route path="/Activity" element = {
            <ActivityPage
              loggedIn = {loggedIn} exerciseData = {exerciseData} sleepData ={sleepData} nutritionData = {nutritionData} handleActivityButtons = {handleActivityButtons}/>}/>
{/* {isAddActivityFormOpen, setIsAddActivityFormOpen, setCurrentActivityType, currentActivityType,addSleepActivity, loggedIn, sleepData} */}
        <Route path="/Exercise" element = {
            <ExercisePage 
              isAddActivityFormOpen = {isAddActivityFormOpen} 
              setIsAddActivityFormOpen = {setIsAddActivityFormOpen}
              setCurrentActivityType = {setCurrentActivityType}
              currentActivityType={currentActivityType}
              addExerciseActivity = {addExerciseActivity}
              exerciseData = {exerciseData} 
              loggedIn = {loggedIn}
              getExerciseQuery={getExerciseQuery}
              currentUser={currentUserID}
              />}/>

          <Route path="/Nutrition" element = {
            <NutritionPage
            isAddActivityFormOpen = {isAddActivityFormOpen} 
            setIsAddActivityFormOpen = {setIsAddActivityFormOpen}
            setCurrentActivityType = {setCurrentActivityType}
            currentActivityType={currentActivityType}
            addNutritionActivity = {addNutritionActivity}
            nutritionData = {nutritionData}
            loggedIn = {loggedIn}/>}
            getNutritionQuery={getNutritionQuery}
            currentUser={currentUserID}/>
          <Route path="/Sleep" element = {
            <SleepPage
              isAddActivityFormOpen = {isAddActivityFormOpen} 
              setIsAddActivityFormOpen = {setIsAddActivityFormOpen}
              setCurrentActivityType = {setCurrentActivityType}
              currentActivityType={currentActivityType}
              addSleepActivity = {addSleepActivity}
              sleepData = {sleepData}
              loggedIn = {loggedIn}
              getSleepQuery={getSleepQuery}
              currentUser={currentUserID}/>}/>
          <Route path="/Register" element = {<Register onRegister={handleRegistration}/>}/>
          <Route path="/Login"  element = {<Login onLogin = {handleLogin}/>}/>
        
          <Route path="/Signout" element = {<Home loggedIn = {loggedIn} />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
