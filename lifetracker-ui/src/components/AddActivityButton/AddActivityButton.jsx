import React from 'react'
import { useState } from 'react'
import "./AddActivityButton.css"


const AddActivityButton = ({setIsAddActivityFormOpen, isAddActivityFormOpen,addCurrentData, input, itemNameTitles,currentActivityType}) => {
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

    //All data is passed up to App 
    // These are for settingand getting the data from each different form. there are 3 items in reach form so we can use thesre universally over the 3 inputs
    const [item1, setItem1] = useState('')
    const [item2, setItem2] = useState('')
    const [item3, setItem3] = useState('')
    const [item4, setItem4] = useState('')

    //Input types and placeholders




    
    
    const handleAddButtonCLick = (event) => {
        //if the form is open, we want to close it on the button click,
        event.preventDefault()
        if(isAddActivityFormOpen){
 
            setIsAddActivityFormOpen(false)
            event.target.style.backgroundColor = "#1899D6"
            

        }
        else{
            setIsAddActivityFormOpen(true)
    
            event.target.style.backgroundColor = "#ff5c5c"
        }
    }

    const handleAddItemSubmit = (event) =>{
        event.preventDefault()
        //We first identify our activity so we can set the appropriate items
        //Then, call setter variables and update the corresponding tile information
        console.log("Item has been submitted")
        


        addCurrentData(item1, item2, item3,item4)
        setIsAddActivityFormOpen(false)

        setItem1('')
        setItem2('')
        setItem3('')
        
    }
   



    

  return (
    <div>
        <div id = "button-div"><button id = "add-activity" onClick={handleAddButtonCLick}>{ isAddActivityFormOpen? "Cancel": `record ${currentActivityType}`}</button></div>
        {isAddActivityFormOpen? 
            <div className='activity-form-wrapper'>
                <form className='activity-form'onSubmit={handleAddItemSubmit}>
                    <center><div id = "exercise-div">Record {currentActivityType}</div> </center>
                    <input type = {input[0]} className='form-items' id = "form-item-1" placeholder={itemNameTitles[0]} value = {item1} onChange={(event)=> setItem1(event.target.value)} required></input>
                    <input type = {input[1]} className='form-items' id = "form-item-2" placeholder={itemNameTitles[1]} value = {item2} onChange={(event)=> setItem2(event.target.value)}required></input>
                    <input type = {input[2]} className='form-items' id = "form-item-3" placeholder={itemNameTitles[2]} value = {item3} onChange={(event)=> setItem3(event.target.value)}required></input>
                    <input type = "text" className='form-items' id = "form-image" placeholder="Image" value = {item4} onChange={(event)=> setItem4(event.target.value)}></input>
                    <div id = "button-div"><button type='submit' id = "form-submit" placeholder='Update' >Update</button></div>
                </form>
            </div>: <div></div> }
    </div>
  )
}

export default AddActivityButton