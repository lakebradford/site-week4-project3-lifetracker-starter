import React from 'react'
import Hero from '../Hero/Hero'
import ActivityGrid from '../ActivityGrid/ActivityGrid'

const SleepPage = ({isAddActivityFormOpen, setIsAddActivityFormOpen, setCurrentActivityType, currentActivityType,addSleepActivity, loggedIn, sleepData, getSleepQuery, currentUser}) => {
  

  setCurrentActivityType('sleep')
  return (
    <div>
        <Hero name = {"Sleep"} color = {"#fff0c8"}/>
        {/* ternary operator which determines whether or not we can show user data */}
        {loggedIn?
                <ActivityGrid 
                currentData = {sleepData}
                isAddActivityFormOpen = {isAddActivityFormOpen} 
                setIsAddActivityFormOpen = {setIsAddActivityFormOpen} 
                currentActivityType={currentActivityType}
                addCurentData = {addSleepActivity}
                input = {["date", "time", "time"]}
                itemNameTitles = {["Date", "start Time", "end Time"]}
                updateData={getSleepQuery}
                currentuser={currentUser}
                />: <center><div id = "not-logged-in">Login to see data</div></center> }

    </div>
  )
}

export default SleepPage