import React from 'react'
import Hero from '../Hero/Hero'
import ActivityGrid from '../ActivityGrid/ActivityGrid'


const NutritionPage = ({tileData, setTileData, isAddActivityFormOpen, setIsAddActivityFormOpen, setCurrentActivityType, currentActivityType, setTileObject, tileObject, setNutritionTileObject}) => {

  setCurrentActivityType("nutrition")
  return (
    <div>
        <Hero name = {"Nutrition"} color = {"#c3f5fa"}/>
        <ActivityGrid 
          tileData = {tileData} 
          setTileData = {setTileData} 
          isAddActivityFormOpen = {isAddActivityFormOpen} 
          setIsAddActivityFormOpen = {setIsAddActivityFormOpen} 
          currentActivityType={currentActivityType}
          setTileObject ={setTileObject} 
          tileObject={tileObject}
          setNutritionTileObject = {setNutritionTileObject}/>
    </div>

  )
}

export default NutritionPage