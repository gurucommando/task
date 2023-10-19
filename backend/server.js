const Router = require("./router/router.js");
const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors')
var app = express()
app.use(cors({origin:'*'}))

// use bodyParser for body parsing
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

 mongoose
 .connect("mongodb://localhost:27017/task") // connect to database
 .then(() => console.log("DB connection successful!")) // connect to database
 .catch((error) => console.log(error)); // catch error
Router.use(express.json()) // use express.json
const PORT = 8080; // port to connect to
app.use(Router) // access all defined routes
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})