const express = require("express");
const app = express()
const PORT = 3000
const mainRouter = require('./Routes/index')
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.use('/api/v1',mainRouter)

app.listen(PORT,(req,res)=>{
    console.log(`Listening at port ${PORT}`)
})