// Handles environment settings/variables for our backend
require("dotenv").config()
require("colors")

// if the port already exists, we set it equal to the port number, if not we set it equal to 3001
const PORT  = process.env.PORT ? Number(process.env.PORT): 3001

//Function containing variables used to construct our database URI
// Uri: uniform resource identifier: its an identifier to know which database we are using, think of it as a key to accessing our database
function getDatabaseUri(){
    // notice how this is the same information that we used to create our database
    const dbUser = process.env.DATABASE_USER || "postgres"
    const dbPass = process.env.DATABASE_PASS || "postgres"
    const dbHost = process.env.DATABASE_HOST || "localhost"
    const dbPort = process.env.DATABASE_PORT || 5432
    const dbName = process.env.DATABASE_NAME || "life_tracker"

    //if the database URL enviromnent variable is already created, we can use that
    //otherwise we can create the database url with the information with the variables we defined

    return process.env.DATABASE_URL || `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
}

console.log("-------------Life Tracker: Config.js-------------".green)
console.log(`DATABASE URI: ${getDatabaseUri()}`.blue)
console.log("--------------------------------------------------".green)

module.exports ={
    PORT,
    getDatabaseUri,
}