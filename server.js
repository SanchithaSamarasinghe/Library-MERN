const express = require('express');
const app = express();
const port = 8880;
const mongoose = require('mongoose')
const authRoute = require('./routes/authorRoute')
const libRoute  = require('./routes/libraryRoute')
const bookRoute = require('./routes/bookRoute')

app.use(express.json())
app.use('/auth',authRoute)
app.use('/lib',libRoute)
app.use('/book',bookRoute)
sds