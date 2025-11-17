const express = require('express')
const cors = require('cors')

const authorizeUser = require('./utils/authuser')
const userRouter = require('./routes/user')

const app = express()

app.use(cors())
app.use(express.json())
app.use(authorizeUser)
app.use('/user', userRouter)

app.listen(4000, 'localhost', ()=> {
    console.log('Server started running at Port 4000')
})