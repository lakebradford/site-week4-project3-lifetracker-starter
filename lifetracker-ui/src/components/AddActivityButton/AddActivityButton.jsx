import React from 'react'
import { useState } from 'react'
import "./AddActivityButton.css"
const AddActivityButton = ({tileData, setTileData, setIsAddActivityFormOpen, isAddActivityFormOpen, currentActivityType, setTileObject, tileObject}) => {
    //when clicked, the button opens up into a form
    //When the form is filled out, and submitted, the activity is added to the activities array of previous logged tiles and is displayed on screen
    
    // setTileData: object of the data we want to display in Tile, if a form is submitted, we want to  create and add the object into our list
    // setIsAddActivityFormOpen: setter for isAddActivityFormOpen, 
    // isAddActivityFormOpen: we use in handleclick to switch between the form and our ActivityGrid
    // activityType: string containing the activity we are curently in, used to determine which form we want to show 

    //--------------FORM TYPES ------------\\
    // Sleep form should have a form with inputs for date, startTime, endTime
    // Exercise should habe a form with inputs for exerciseType, Duration, and intensity
    // Nutrition should have a form with inputs for foodItem, calories, and quantity
    //--------------------------------------\\

    //----------------- USESTATE VARIABLES SPECIFIC TO THE ADD ACTIVITY BUTTON --------------------\\
    // UseState variable that is specific to this component, Is used to change the text of the button when clicked
    const [buttonText, setButtonText] = useState("Add Activity")

    //All data is passed up to App 
    // These are for settingand getting the data from each different form. there are 3 items in reach form so we can use thesre universally over the 3 inputs
    const [item1, setItem1] = useState('')
    const [item2, setItem2] = useState('')
    const [item3, setItem3] = useState('')

    //Input types and placeholders
    const [item1Input, setItem1Input] = useState()
    const [item2Input, setItem2Input] = useState()
    const [item3Input, setItem3Input] = useState()

    const [item1Placeholder, setItem1Placeholder] = useState()
    const [item2Placeholder, setItem2Placeholder] = useState()
    const [item3Placeholder, setItem3Placeholder] = useState()

    function test(event) {
        setExerciseType(event.target.value);
        console.log(exerciseType)
    }
    
    const handleAddButtonCLick = (event) => {
        //if the form is open, we want to close it on the button click,
        event.preventDefault()
        if(isAddActivityFormOpen){
            setButtonText("Add Activity")
            setIsAddActivityFormOpen(false)
        }
        else{
            setIsAddActivityFormOpen(true)
            setButtonText("Cancel")
        }
        // We will have 3 different if statements, one for each activity type
        // we use currentActivityType to determine which form we will return
        // If our currentActivityType doesnt match any of our current activities, we return "no activity found"
        if(currentActivityType == 'exercise'){
            // If our current activity Type is exercise, we need to change the input types to text for the exercise type, number for duration, and number for intensity
            //we also need to update the placeholder and value

            //Changing Each input type 
            setItem1Input("text") 
            setItem2Input("number")
            setItem3Input("number")
            //change placeholder (using UseState variables)
            setItem1Placeholder("Exercise Type")
            setItem2Placeholder("Exercise Duration")
            setItem3Placeholder("Exercise Intensity")

        }
        else if(currentActivityType == 'sleep'){
            // if our current activity type is exercise, we need to change the input types to date, time, and time

            //Changing Each input type 
            setItem1Input("date") 
            setItem2Input("time")
            setItem3Input("time")
            //change placeholder (using UseState variables)
            setItem1Placeholder("Date")
            setItem2Placeholder("Start Time")
            setItem3Placeholder("End Time")
        }
        else if(currentActivityType == 'nutrition'){
            //finally if our current activity type is nutrition, we need to change the input types to text, number, and number

            //Changing Each input type 
            setItem1Input("text") 
            setItem2Input("number")
            setItem3Input("number")
            //change placeholder (using UseState variables)
            setItem1Placeholder("Food")
            setItem2Placeholder("Calories")
            setItem3Placeholder("Quantity")
        }
    }

    const handleAddItemSubmit = (event) =>{
        event.preventDefault()
        //We first identify our activity so we can set the appropriate items
        //Then, call setter variables and update the corresponding tile information
        if(currentActivityType == 'exercise'){
            //updating the tile information by creating a tile object and adding it to our tileData

            let exerciseTileObject = {typeOfExercise: item1, durationOfExercise: item2, intensityOfExercise: item3}
            //Now we add exerciseTileObject to our Tile. Information is passed back to App and then put into the database
            setTileData(tileData.concat(exerciseTileObject))

        }
        else if(currentActivityType == 'sleep'){
            let sleepTileObject = {dateOfSleep: item1, startSleepTime: item2, endSleepTime: item3}
            setTileData(tileData.concat(sleepTileObject))
        }
        else if(currentActivityType == 'nutrition'){
            let nutritionTileObject = {nutritionItem: item1, caloriesOfNutritionItem: item2, quantityOfNutritionItem: item3}
            setTileData(tileData.concat(nutritionTileObject))
        }
    }

  return (
    <div>
        <center><button onClick={handleAddButtonCLick}>{buttonText}</button></center>
        {isAddActivityFormOpen? 
            <div className='activity-form-wrapper'>
                <form className='activity-form'onSubmit={handleAddItemSubmit}>
                    <input type = {item1Input} id = "form-item-1" placeholder={item1Placeholder} value = {item1} onChange={(event)=> setItem1(event.target.value)} required></input>
                    <input type = {item2Input} id = "form-item-2" placeholder={item2Placeholder} value = {item2} onChange={(event)=> setItem2(event.target.value)}required></input>
                    <input type = {item3Input} id = "form-item-3" placeholder={item3Placeholder} value = {item3} onChange={(event)=> setItem3(event.target.value)}required></input>
                    <button type='submit'>Update</button>
                </form>
            </div>: <div></div> }
    </div>
  )
}

export default AddActivityButton