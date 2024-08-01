const express = require('express');
const app = express();
const port = 8880;
const mongoose = require('mongoose')
const authRoute = require('./routes/authorRoute')
const libRoute  = require('./routes/libraryRoute')
const bookRoute = require('./routes/bookRoute')
const userRoute = require('./routes/userRoute')

app.use(express.json())
app.use('/auth',authRoute)
app.use('/lib',libRoute)
app.use('/book',bookRoute)
app.use('/user',userRoute)

mongoose.connect(url)
.then (()=>{
    console.log("Connected")
})
.catch((err)=>{
    console.log("DB error",err)
})

app.listen(port,()=>{console.log("app is runing on ",port)})