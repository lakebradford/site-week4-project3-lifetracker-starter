import React from 'react'
import "./Hero.css"
const Hero = ({name, color}) => {
    //This component handles the Hero for the following Components
    // Activity
    // Sleep
    // Exercise
    //Nutrition
    //---------------A different component handles the Hero for Home/DetailedActivity----------//
    //Hero takes in Name and Color as props and displays them depending on the activity page

  // Current props that are being passed down
  let currentBackgroundColor = color
  let currentHeroName = name
  

    

  return (
    <div id = "hero-background" style={{backgroundColor: currentBackgroundColor}}>
        <h2 id = "hero-name">{currentHeroName}</h2>
    </div>
  )
}

export default Hero