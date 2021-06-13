const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth/authRoutes')
const dbURI = 'mongodb+srv://dev:laFseYp7RvVoWeiY@cluster0.7akme.mongodb.net/Navol?retryWrites=true&w=majority'
const cors = require('cors')

const port = process.env.PORT || 8000
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => {
    console.log('Listening')
    app.listen(port)
  })
  .catch((err) => console.log(err))

app.use(authRoutes)
