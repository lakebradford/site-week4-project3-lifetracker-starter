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

  //Used to pass the exercise tile data to the exercise page and update it/send it back to App.jsx
  const [exerciseTileData, setExerciseTileData] = useState([])
  // Recieves a tile object from AddActivityButton, Used to add a new tile to our exerciseTileData
  const [exerciseTileObject, setExerciseTileObject] = useState()

  //Used to pass the sleep tile data to the sleep page and update it/send it back to App.jsx
  const [sleepTileData, setSleepTileData] = useState([])
  // Recieves a tile object from AddActivityButton, Used to add a new tile to our sleepTileData
  const [sleepTileObject, setSleepTileObject] = useState()

  //Used to pass the nutrition tile data to the nutrition page and update it/send it back to App.jsx
  const[nutritionTileData, setNutritionTileData] = useState([])
  // Recieves a tile object from AddActivityButton, Used to add a new tile to our nutritionTileData
  const [nutritionTileObject, setNutritionTileObject] = useState()
  // Used to create the a object for each activities' TileData 
  const [tileObject, setTileObject] = useState({})






  console.log(`The form to add activity is set to ${isAddActivityFormOpen}`)
  console.log(`Current tile data for ExerciseTile: ${exerciseTileData}`)

  return (
    <BrowserRouter>
      <div>
        {/* Components here will be displayed at all times no matter which route we have selected */}
        <Navbar setIsAddActivityFormOpen = {setIsAddActivityFormOpen}/>
        {/* ROUTES */}
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/Activity" element = {<ActivityPage/>}/>

        <Route path="/Exercise" element = {
            <ExercisePage 
              tileData = {exerciseTileData} 
              setTileData = {setExerciseTileData} 
              isAddActivityFormOpen = {isAddActivityFormOpen} 
              setIsAddActivityFormOpen = {setIsAddActivityFormOpen}
              setCurrentActivityType = {setCurrentActivityType}
              currentActivityType={currentActivityType}
              setTileObject ={setTileObject} 
              tileObject={tileObject}
              setExerciseTileObject = {setExerciseTileObject}/>}/>

          <Route path="/Nutrition" element = {
            <NutritionPage
              tileData = {nutritionTileData} 
              setTileData = {setNutritionTileData} 
              isAddActivityFormOpen = {isAddActivityFormOpen} 
              setIsAddActivityFormOpen = {setIsAddActivityFormOpen}
              setCurrentActivityType = {setCurrentActivityType}
              currentActivityType={currentActivityType}
              setTileObject ={setTileObject} 
              tileObject={tileObject}
              setNutritionTileObject = {setNutritionTileObject}/>}/>
          <Route path="/Sleep" element = {
            <SleepPage
              tileData = {sleepTileData} 
              setTileData = {setSleepTileData} 
              isAddActivityFormOpen = {isAddActivityFormOpen} 
              setIsAddActivityFormOpen = {setIsAddActivityFormOpen}
              setCurrentActivityType = {setCurrentActivityType}
              currentActivityType={currentActivityType}
              setTileObject ={setTileObject} 
              tileObject={tileObject}
              setSleepTileObject = {setSleepTileObject}/>}/>
          <Route path="/Register" element = {<Register/>}/>
          <Route path="/Login" element = {<Login/>}/>
          <Route path="/Signout" element = {<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
