//This is where we actually connect our database 
const {Pool} = require("pg")
require("colors")



//SQL script as a string to create a table called users
const userTableScript = `
CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    );
`;

const sleepTableScript = `
    CREATE TABLE IF NOT EXISTS sleepActivity(
        date DATE NOT NULL,
        start_time VARCHAR(255) NOT NULL,
        end_time VARCHAR(255) NOT NULL,
        user_id INTEGER NOT NULL,
        image TEXT,
        FOREIGN KEY (user_id) REFERENCES users(id)
        
    );
`
const exerciseTableScript = `
    CREATE TABLE IF NOT EXISTS exerciseActivity(
        type VARCHAR(255) NOT NULL,
        duration INTEGER NOT NULL,
        intensity INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        image TEXT,
        FOREIGN KEY (user_id) REFERENCES users(id)
    );
`

const nutritionTableScript = `
    CREATE TABLE IF NOT EXISTS nutritionActivity(
        item VARCHAR(255) NOT NULL,
        calories INTEGER NOT NULL,
        quantity INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        image TEXT,
        FOREIGN KEY (user_id) REFERENCES users(id)
    );
`




//DB information to connect
const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "life_tracker",
});

//Executing the SQL scripts
//Users table
pool
  .query(userTableScript)
  .then(() => {
    console.log("USERS table created query successfully".bold);
  })
  .catch((error) => {
    console.error("Error creating USERS table".red, error);
});

//Sleep table
pool
  .query(sleepTableScript)
  .then(() => {
    console.log("SLEEP table created query successfully".bold);
  })
  .catch((error) => {
    console.error("Error creating SLEEP table".red, error);
});

pool
  .query(exerciseTableScript)
  .then(() => {
    console.log("EXERCISE table created query successfully".bold);
  })
  .catch((error) => {
    console.error("Error creating EXERCISE table".red, error);
});

pool
  .query(nutritionTableScript)
  .then(() => {
    console.log("NUTRITION table created query successfully".bold);
  })
  .catch((error) => {
    console.error("Error creating NUTRITION table".red, error);
});







//export the pool to be used in a different file
module.exports = pool;








