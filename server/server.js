const express = require('express')
const cors = require('cors')
const router = require('./routes/routes')
const users = require('./routes/user.route')
const app = express()
const env = require('dotenv')
const cookieSession = require('cookie-session')

app.use(cors({ origin: "http://localhost:3000",credentials:true }));
app.use(express.json())

env.config()
app.use(cookieSession({
    name : 'PR',
    keys : ['PR_key'],
    //maxAge 
  }))
require('./models/db')

app.use('/api/tasks' , router)
app.use('/api/users' , users)

app.listen('8000', err => {
    if(err) console.log(err)
    console.log('server is started at port number:8000')
})