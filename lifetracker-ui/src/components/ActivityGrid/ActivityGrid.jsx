import React from 'react'
import "./ActivityGrid.css"
import Tile from '../Tile/Tile'
import AddActivityButton from '../AddActivityButton/AddActivityButton'
import { useState } from 'react'

const ActivityGrid = ({setIsAddActivityFormOpen, isAddActivityFormOpen, currentActivityType, currentData, addCurentData, itemNameTitles, updateData, currentuser, input}) => {
  // each data list is passed into tile so it can be displayed. 



  
  

  


  return (
    <div id = "activity-grid" > 
      {/* if the activity form is open, we want to display the actual Activity form. If the  button hasnt been clickedk, we want to display the tiles */}

      {isAddActivityFormOpen || !currentData? <div></div>  :currentData.map((tileObject) => {
        return <Tile key={tileObject}  tileObject = {tileObject} currentActivityType = {currentActivityType} itemNameTitles = {itemNameTitles}/>
      }) }
      <AddActivityButton 
        addCurrentData={addCurentData}
        setIsAddActivityFormOpen = {setIsAddActivityFormOpen} 
        isAddActivityFormOpen = {isAddActivityFormOpen} 
        currentActivityType = {currentActivityType}
        updateData = {updateData}
        currentuser={currentuser}
        input = {input}
        itemNameTitles = {itemNameTitles}
      />
    </div>
  )
}

export default ActivityGrid