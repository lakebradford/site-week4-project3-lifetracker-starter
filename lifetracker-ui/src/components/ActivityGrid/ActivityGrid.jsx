import React from 'react'
import "./ActivityGrid.css"
import Tile from '../Tile/Tile'
import AddActivityButton from '../AddActivityButton/AddActivityButton'

const ActivityGrid = ({tileData, setTileData, setIsAddActivityFormOpen, isAddActivityFormOpen, currentActivityType, setTileObject, tileObject, setNutritionTileObject,setSleepTileObject,setExerciseTileObject}) => {
    // ActivityGrid component stores and displays each new activity tile
    // Takes in an array object from App.jsx and displays each object 

    // isAddActivityFormOpen: Boolean
    //  - used to distinguish whether or not to display the tile grid or the add activity button form 
    // tileData: array of Objects, each object contains the form information (Ex: [{item name, category, quantity, calories, imageUrl}])

    //currentActivityType: String value representing the current activity we are in 
    //  - used to determine which form data should be used 
    
    //setNutritionTileObject,setSleepTileObject,setExerciseTileObject: Objects responsible for receiving and adding a new object from each activity
    //  - used in AddButtonActivity





  return (
    <div id = "activity-grid" > 
      {/* if the activity form is open, we want to display the actual Activity form. If the  button hasnt been clickedk, we want to display the tiles */}
      {isAddActivityFormOpen? <div></div>  : <Tile/>}

      <AddActivityButton 
        tileData = {tileData}
        setTileData = {setTileData} 
        setIsAddActivityFormOpen = {setIsAddActivityFormOpen} 
        isAddActivityFormOpen = {isAddActivityFormOpen} 
        currentActivityType = {currentActivityType}
        setTileObject ={setTileObject} 
        tileObject={tileObject}
        setNutritionTileObject = {setNutritionTileObject}
        setSleepTileObject = {setSleepTileObject}
        setExerciseTileObject = {setExerciseTileObject}/>
    </div>
  )
}

export default ActivityGrid