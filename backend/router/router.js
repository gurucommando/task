const express =  require('express');
const { postAdderssController, postNumberController, postUsercontroller, getUsercontroller } = require('../controller/userController');
const route = express.Router()

// define all  routes
route.post('/addUser',postUsercontroller) // add user
route.post('/address',postAdderssController)  // add address
route.post('/number',postNumberController)  // add number
route.get('/getUser',getUsercontroller) // get users

module.exports=route
