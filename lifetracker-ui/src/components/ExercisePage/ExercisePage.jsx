import React from 'react'
import Hero from '../Hero/Hero'
import ActivityGrid from '../ActivityGrid/ActivityGrid'
import Tile from '../Tile/Tile'


const ExercisePage = ({isAddActivityFormOpen, setIsAddActivityFormOpen, setCurrentActivityType, currentActivityType,addExerciseActivity, loggedIn, exerciseData, getExerciseQuery, currentUser}) => {
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
  console.log(`exercisedata ${exerciseData}`)
  console.log("current activity is now set to: ", currentActivityType)
  console.log(`logged in ${loggedIn}`)



  return (
    <div>
        <Hero name = {"Exercise"} color = {"#d3ffce"}/>
        {loggedIn?
        <ActivityGrid 
        isAddActivityFormOpen = {isAddActivityFormOpen} 
        setIsAddActivityFormOpen = {setIsAddActivityFormOpen} 
        currentActivityType={currentActivityType}
        addExerciseActivity = {addExerciseActivity}
        addCurentData={addExerciseActivity}
        currentData={exerciseData}
        updateData={getExerciseQuery}
        currentuser={currentUser}
        input = {["text", "number", "number"]}
        itemNameTitles = {["Exercise", "Duration", "Intensity"]}

        />
        : <center><div id = "not-logged-in">Login to see data</div></center> }

    </div>
  )
}

export default ExercisePage