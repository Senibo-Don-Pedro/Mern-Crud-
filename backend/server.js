const express = require ('express')
require("dotenv").config()
const workoutRoutes = require('./routes/workouts.js')
const mongoose = require('mongoose')
const cors = require('cors')

// express app
const app = express()

//cors
const corsOptions = {
  origin: "http://127.0.0.1:5173",
  allowedHeaders: ["Content-Type", "Authorization"],
}


//middleware
app.use(cors(corsOptions))


app.use(express.json())

app.use((req,res,next)=>{
  console.log(req.path,req.method);
  next()
})

//connect to db;
mongoose.connect(process.env.MONGO_DB)
  .then(()=>{
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT)
    })
  })
  .catch((error) =>{
    console.log(error)
  })

//routes
app.use('/api/workouts',workoutRoutes)
