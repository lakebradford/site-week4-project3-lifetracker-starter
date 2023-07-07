import React from 'react'
import Tile from '../Tile/Tile'
import Hero from '../Hero/Hero'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./ActivityPage.css"

const ActivityPage = ({sleepData, nutritionData, exerciseData, loggedIn, handleActivityButtons}) => {
  


  
  return (
    <div id = "activity-content">
      
    
      {loggedIn && <center><div>
        <div id = "activity-buttons">
          <Link to="/Exercise" onClick={handleActivityButtons}><button id = "activity-button"> Record Exercise</button></Link>
          <Link to="/Nutrition" onClick={handleActivityButtons}><button id = "activity-button">Record Nutrition</button></Link>
          <Link to="/Sleep" onClick={handleActivityButtons}><button id = "activity-button">Record Sleep</button></Link>
        </div>
          

        <div id = "activity-data">
          <div id = "sleep-data">
            <div>SLEEP SECTION</div>
            { sleepData && sleepData.map((tileObject) => {
              return <Tile key = {tileObject} tileObject = {tileObject} currentActivityType={"sleep"} itemNameTitles = {["Date", "start Time", "end Time", "Image"]}/>
            })}
          </div>

      
          <div id = "exercise-data">
            <div>EXERCISE SECTION</div>
            {exerciseData && exerciseData.map((tileObject) => {
              return <Tile key = {tileObject} tileObject = {tileObject} currentActivityType={"exercise"} itemNameTitles = {["Exercise", "Duration", "Intensity", "Image"]}/>
            })}
          </div>

          <div id = "nutrition-data">
            <div>NUTRITION SECTION</div>
            {nutritionData && nutritionData.map((tileObject) => {
              return <Tile key = {tileObject} tileObject = {tileObject} currentActivityType={"nutrition"} itemNameTitles = {["Food", "quantity", "calories", "Image"]}/>
            })}
          </div>
        </div>
        
      </div></center>}
      {!loggedIn && <center><div id = "not-logged-in">Login to see data</div></center>}
        
        








    </div>
  )
}

export default ActivityPage