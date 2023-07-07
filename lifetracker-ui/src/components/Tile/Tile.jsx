import React from 'react'
import "./Tile.css"
import { useState } from 'react'


const Tile = ({tileObject, itemNameTitles, currentActivityType}) => {
    
  //currentTypes is an array of the names each value from the tileObject should be assigned to
  //TileOject changed depending on the object given
  // We need to handle which data we are going to display

  const convert = (militaryTime) => {
    const [hours, minutes, seconds] = militaryTime.split(':');
    return `${(hours > 12) ? hours - 12 : hours}:${minutes}${seconds ? `:${seconds}` : ''} ${(hours >= 12) ? 'PM' : 'AM'}`;
}
  let altImage = ''

  console.log(`currrrentnntntntntt ${currentActivityType}`)
  if (currentActivityType == "exercise"){
    altImage = "lifetracker-ui/src/assets/exercise.svg"
  }
  if(currentActivityType == "sleep"){
    altImage = "lifetracker-ui/src/assets/bed.svg"
  }

  if(currentActivityType == "nutrition"){
    altImage = "lifetracker-ui/src/assets/nutrition.svg"
  }


  //usestate variables 
  // T07:00:00.000Z
  let startTime = null
  let endTime = null
  let date = null
  if(tileObject.date){
    date = tileObject.date.replace("T07:00:00.000Z", "") 
  }

  if(tileObject.start_time){

    startTime = convert(tileObject.start_time)
    endTime = convert(tileObject.end_time)

    console.log(`startTime ${startTime}`)
  }







  return (
    <div className='tile-border'>

      <div className= "tile-data">{itemNameTitles[0]}: {date || tileObject.type || tileObject.item}</div>

      <div className= "tile-data" >{itemNameTitles[1]}: {startTime || tileObject.duration || tileObject.calories}</div>

      <div className= "tile-data">{itemNameTitles[2]}: {endTime || tileObject.intensity || tileObject.quantity}</div>

      {tileObject.image? <div> <img id = "tile-image" src = {tileObject.image} alt = {altImage}/> </div>:<div> <img id = "tile-image" src = {altImage} alt= {"Image not displayed"}/> </div> }

    </div>
  )
}

export default Tile