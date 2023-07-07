// Installing necessary dependencies
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const authRoutes = require("./routes/auth")

// Import used for accessing the database in ur express server
const { PORT } = require("./config")

const app = express()

// Middleware Setup
app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))

app.use("/api/auth", authRoutes)


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})

