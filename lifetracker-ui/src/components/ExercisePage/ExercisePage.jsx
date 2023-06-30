import React from 'react'
import Hero from '../Hero/Hero'
import ActivityGrid from '../ActivityGrid/ActivityGrid'
import Tile from '../Tile/Tile'
import AddActivityButton from '../AddActivityButton/AddActivityButton'

const ExercisePage = ({tileData, setTileData, isAddActivityFormOpen, setIsAddActivityFormOpen, setCurrentActivityType, currentActivityType, setTileObject, tileObject, setExerciseTileObject}) => {
  //tileData: an array of objects
  //  - will be passed to and iterated through in activityGrid
  //  - ActivityGrid uses tile to display our tiles on screen

  //setTileData: setter function for our usestate variable tileData
  //  - will be passed to our ActivityGrid and ActivityButton component which will update our tileData if new information is added

  //setCurrentActivityType: setter function used for setting the currentActivityType variable in App. 
  //  - will be used to identify the data we will need to display in the form in our AddActivityButton

  //======================Not yet implemented======================
  // isAddActivityFormOpen: boolean
  //  - used to determine when we need to display our form vs our tileData
  //  - used in ActivityGrid 




  //irst we need to set the current Activity type so we can 
  setCurrentActivityType("exercise")
  console.log("current activity is now set to: ", currentActivityType)



  return (
    <div>
        <Hero name = {"Exercise"} color = {"#d3ffce"}/>
        {/* Now we need to check if our activity form is open, if it is then we do not display the activityGrid (displaying empty div) */}
        <ActivityGrid 
          tileData = {tileData} 
          setTileData = {setTileData} 
          isAddActivityFormOpen = {isAddActivityFormOpen} 
          setIsAddActivityFormOpen = {setIsAddActivityFormOpen} 
          currentActivityType={currentActivityType}
          setTileObject ={setTileObject} 
          tileObject={tileObject}
          setExerciseTileObject = {setExerciseTileObject}/>
    </div>
  )
}

export default ExercisePage