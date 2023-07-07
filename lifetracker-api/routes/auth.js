const express = require("express")
const User = require("../models/user")
const router  = express.Router()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../db");


require("colors")

router.post("/register", async(req,res,next) => {
    //When we receive new information from our login page we first access the information from the post request
    const {username, email, firstname, lastname, password}  = req.body
    //next we want to encrypt their password
    console.log("----------Backend------------")
    console.log(`username: ${username}`)
    console.log(`email: ${email}`)
    console.log(`firstname: ${firstname}`)
    console.log(`lastname: ${lastname}`)


    try{
        const saltRounds = 10
        const salt = await bcrypt.genSalt(saltRounds)
        // hash the password
        const hashedPassword = await bcrypt.hash(password, salt)
        // now that the password has been hashed, we want to store their information in our database using SQL 
        // We first insert all of our variables into our table
        // next we set each value to a variable so we can access them later 
        // finally we return
        const createUserQuery = `
        INSERT INTO users  (username, email, first_name, last_name, password)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
        `
        console.log("--------------------- CREATE QUERY ----------------".bgGreen)
        console.log(createUserQuery)
        console.log("--------------------- END------------------------".bgGreen)
    
        // $1 should be username, $2 should be email, $3 should be firstname, $4 should be lastname, $5 should be password
        const values  = [username, email, firstname, lastname, hashedPassword]
        const result = await pool.query(createUserQuery, values);
        const token = jwt.sign({ userId:result.rows.id, username: result.rows.username }, "secret-key-unique", {
            expiresIn: "1h",
        });
        console.log(`JWT token ${token}`)

        //if we successfully create the user, we now run a 201 status code meaning a new data entry has succcesfully been entered
        res.status(201).json({
            message: "User registered successfully",
            token: token,
            user: result.rows[0],
          });
    }
    // if we cant successfully create a user, we throw an error
    catch (error){
        console.error("Error registering user: ", error);
        res.status(500).json({ message: "Error registering user" });
    }
})
router.post("/login", async(req,res,next) => {
    //When we receive new information from our register page we first try to access the information from the post request
    const {email, password}  = req.body
    try{
        //now we need to check if the email entered by the user exists in the database,
        const getUserQuery = `
        SELECT * FROM users
        WHERE email = $1
    `;
        //now we actually access the data contained in the user query (we get the exercise, sleep, and nutrition data for the specific user)
        const result = await pool.query(getUserQuery, [email]);
        //store the user data returned from the query
        const user = result.rows[0];
        //if there is no user in the database, we throw an error
        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }
        //Now we need to check if the password is correct. To do this we need to compare the given password with the password (password) that is stored (user.password)
        const isPasswordValid = await bcrypt.compare(password, user.password);

        //If the passwords dont match we throw an error
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }
        
        //Now that we have verified the user, we now need to create a jwt token and store it (we will need to export this token to our .env file)
        const token = jwt.sign({ userId: user.id, username:user.username  }, "secret-key-unique", {
            expiresIn: "1h",
        });
        console.log(`JWT token ${token}`)

        // Now that we have finished retrieving the information from our user, we return a status code 200
        res.status(200).json({
            message: "Login Successful",
            token: token,
            user: {
              id: user.id,
              username: user.username,
              email: user.email,
            },
        });
    }
    // if there is an issue with receiving the infnormation, throw an error
    catch (error) {
        console.error("Error logging in: ", error);
        res.status(500).json({ message: "Error Logging in" });
    }
})




 //------------------- Routes for Activities ---------------------------\\
// ===================================================================== \\





router.post("/sleep", async(req,res,next) => {
    //When we receive new information from our sleep page we first try to access the information from the post request
    const {date, startTime, endTime, currentUserID, image}  = req.body
    try{
        const createUserQuery = `
        INSERT INTO sleepActivity (date, start_time, end_time, user_id, image)
        VALUES ($1, $2, $3, $4,$5)
        RETURNING *
        `
    
        console.log("--------------------- CREATE QUERY (SLEEP) ----------------".bgGreen)
            console.log(`date: ${date}`)
    console.log(`start_time: ${startTime}`)
    console.log(`endTime: ${endTime}`)
    console.log(`current user id: ${currentUserID}`)
    console.log(`current user image: ${image}`)

        console.log("--------------------- END------------------------".bgGreen)
    
        // $1 should be username, $2 should be email, $3 should be firstname, $4 should be lastname, $5 should be password
        const values  = [date, startTime, endTime, currentUserID, image]
        const result = await pool.query(createUserQuery, values);





        //if we successfully create the user, we now run a 201 status code meaning a new data entry has succcesfully been entered
        res.status(201).json({
            message: "SLEEP activity logged successfully",
            user: result.rows[0],
          });
    }
    // if we cant successfully create a user, we throw an error
    catch (error){
        console.error("Error adding Sleep activity: ", error);
        res.status(500).json({ message: "Error adding Sleep activity" });
    }
})


router.post("/exercise", async(req,res,next) => {
    //When we receive new information from our sleep page we first try to access the information from the post request
    const {type, duration, intensity, currentUserID, image}  = req.body
    try{
        const createUserQuery = `
        INSERT INTO exerciseActivity (type, duration, intensity, user_id,image)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
        `
    
        console.log("--------------------- CREATE QUERY (EXERCISE) ----------------".bgGreen)
        console.log(`type: ${type}`)
        console.log(`duration: ${duration}`)
        console.log(`intensity: ${intensity}`)
        console.log(`current user id: ${currentUserID}`)
        console.log("--------------------- END------------------------".bgGreen)
    
        // $1 should be username, $2 should be email, $3 should be firstname, $4 should be lastname, $5 should be password
        const values  = [type, duration, intensity, currentUserID, image]
        const result = await pool.query(createUserQuery, values);





        //if we successfully create the user, we now run a 201 status code meaning a new data entry has succcesfully been entered
        res.status(201).json({
            message: "EXERCISE activity logged successfully",
            user: result.rows[0],
          });
    }
    // if we cant successfully create a user, we throw an error
    catch (error){
        console.error("Error adding EXERCISE activity: ", error);
        res.status(500).json({ message: "Error adding EXERCISE activity" });
    }
})




router.post("/nutrition", async(req,res,next) => {
    //When we receive new information from our sleep page we first try to access the information from the post request
    const {item, calories, quantity, currentUserID, image}  = req.body
    console.log(req.body)
    try{
        const createUserQuery = `
        INSERT INTO nutritionActivity(item, calories, quantity, user_id,image)
        VALUES ($1, $2, $3, $4,$5)
        RETURNING *
        `
    
        console.log("--------------------- CREATE QUERY (NUTRITION) ----------------".bgGreen)
        console.log(`item: ${item}`)
        console.log(`quantity: ${quantity}`)
        console.log(`calories: ${calories}`)
        console.log(`current user id: ${currentUserID}`)
        console.log(`current user image: ${image}`)
        console.log("--------------------- END------------------------".bgGreen)
    
        // $1 should be username, $2 should be email, $3 should be firstname, $4 should be lastname, $5 should be password
        const values  = [item, calories, quantity, currentUserID, image]
        const result = await pool.query(createUserQuery, values);





        //if we successfully create the user, we now run a 201 status code meaning a new data entry has succcesfully been entered
        res.status(201).json({
            message: "NUTRITION activity logged successfully",
            user: result.rows[0],
          });
    }
    // if we cant successfully create a user, we throw an error
    catch (error){
        console.error("Error adding NUTRITION activity: ", error);
        res.status(500).json({ message: "Error adding NUTRITION activity" });
    }
})

router.get("/sleep/:id", async(req,res,next) => {
    const {id} = req.params
    console.log(`id: ${id}`)
    try{       
        const createUserQuery = `
        SELECT * FROM sleepActivity
        WHERE user_id = ${id}
        `
        const result = await pool.query(createUserQuery);
        res.status(201).json({
            message: "sleep activity logged successfully",
            user: result.rows,
          });


    }catch (error){
        console.error("we messed up", error);
        res.status(500).json({ message: "we messed up" });
    }
})

router.get("/exercise/:id", async(req,res,next) => {
    const {id} = req.params
    console.log(`id: ${id}`)
    try{       
        const createUserQuery = `
        SELECT * FROM exerciseActivity
        WHERE user_id = ${id}

        `
        const result = await pool.query(createUserQuery);
        res.status(201).json({
            message: "EXERCISE activity logged successfully",
            user: result.rows,
          });


    }catch (error){
        console.error("we messed up", error);
        res.status(500).json({ message: "we messed up" });
    }
})


router.get("/nutrition/:id", async(req,res,next) => {
    const {id} = req.params
    console.log(`id: ${id}`)
    try{       
        const createUserQuery = `
        SELECT * FROM nutritionActivity
        WHERE user_id = ${id}

        `
        const result = await pool.query(createUserQuery);
        res.status(201).json({
            message: "NUTRITION activity logged successfully",
            user: result.rows,
          });


    }catch (error){
        console.error("we messed up", error);
        res.status(500).json({ message: "we messed up" });
    }
})













module.exports = router