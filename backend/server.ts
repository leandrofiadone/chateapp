// Importing module
import express from "express"
import { configDotenv } from 'dotenv';

configDotenv()

const app = express()
const PORT: any = process.env.PORT || 5000;

// Handling GET / Request
app.get("/", (req, res) => {
  res.send("Welcome to typescript backend!!!!")
})

// Server setup
app.listen(PORT, () => {
  console.log(
    "The application is listening " + "on port http://localhost:" + PORT
  )
})
