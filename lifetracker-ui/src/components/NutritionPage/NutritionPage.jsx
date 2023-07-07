import React from 'react'
import Hero from '../Hero/Hero'
import ActivityGrid from '../ActivityGrid/ActivityGrid'


const NutritionPage = ({tileData, isAddActivityFormOpen, setIsAddActivityFormOpen, setCurrentActivityType, currentActivityType, addNutritionActivity, loggedIn, nutritionData, getNutritionQuery, currentUser}) => {
  
  setCurrentActivityType("nutrition")
  console.log("NUTRITION")
  console.log(nutritionData)
  return (
    <div>
        <Hero name = {"Nutrition"} color = {"#c3f5fa"}/>
        {loggedIn?
                <ActivityGrid 
                currentData = {nutritionData}
                tileData = {tileData} 
                isAddActivityFormOpen = {isAddActivityFormOpen} 
                setIsAddActivityFormOpen = {setIsAddActivityFormOpen} 
                currentActivityType={currentActivityType}
                addCurentData = {addNutritionActivity}
                input = {["text", "number", "number"]}
                itemNameTitles = {["Food", "quantity", "calories"]}
                updateData = {getNutritionQuery}
                currentuser={currentUser}
                />: <center><div id = "not-logged-in">Login to see data</div></center> }

    </div>

  )
}

export default NutritionPage