const express = require('express');
const app = express();
const port = 8880;
const mongoose = require('mongoose')

app.use(express.json())


mongoose.connect('mongodb://localhost:27017/library')
.then (()=>{
    console.log("Connected")
})
.catch((err)=>{
    console.log("DB error",err)
})

app.listen(port,()=>{console.log("app is runing on ",port)})