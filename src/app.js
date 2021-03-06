const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth/authRoutes')
const conf = require('./conf')
const cors = require('cors')

const port = process.env.PORT || 8000
const app = express()

app.use(express.static('build'));
app.use(cors())
app.use(cookieParser())
app.use(express.json())

mongoose.connect(conf.dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => {
    console.log('Listening', __dirname)
    app.listen(port)
  })
  .catch((err) => console.log(err))

app.use(authRoutes)
