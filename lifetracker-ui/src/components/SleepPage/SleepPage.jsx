import React from 'react'
import Hero from '../Hero/Hero'
import ActivityGrid from '../ActivityGrid/ActivityGrid'

const SleepPage = ({tileData, setTileData, isAddActivityFormOpen, setIsAddActivityFormOpen, setCurrentActivityType, currentActivityType, setTileObject, tileObject,setSleepTileObject}) => {
  

  setCurrentActivityType('sleep')
  return (
    <div>
        <Hero name = {"Sleep"} color = {"#fff0c8"}/>
        <ActivityGrid 
          tileData = {tileData} 
          setTileData = {setTileData} 
          isAddActivityFormOpen = {isAddActivityFormOpen} 
          setIsAddActivityFormOpen = {setIsAddActivityFormOpen} 
          currentActivityType={currentActivityType}
          setTileObject ={setTileObject} 
          tileObject={tileObject}
          setSleepTileObject = {setSleepTileObject}/>
    </div>
  )
}

export default SleepPage