const express = require ('express')
require("dotenv").config()
const workoutRoutes = require('./routes/workouts.js')
const mongoose = require('mongoose')

// express app

const app = express()

//middleware
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
