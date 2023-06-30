//This is where we actually connect our database 
const {Client} = require("pg")
const {getDatabaseUri} = require("./config")
require("colors")

//we create a new database by using our connectionStgring that we created in config.js
const db = new Client({ connectionString: getDatabaseUri()})

//now we actualy connect our datase, if we get an error, we display it and stop, otherwise we continue
db.connect((err) => {
    if (err) {
        console.error("Connection error".red, err.stack)
    } else {
        console.log("Successfully connected to the postgres database".blue)
    }   
})
module.exports = db 
