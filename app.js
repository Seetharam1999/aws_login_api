// require('dotenv').config();
// const express = require('express');

// 
// const app = express();
// app.use(express.json());

// const sesClient = require('./src/aws/aws_ses');

// app.use(bodyParser.urlencoded({ extended: false }));  
// app.use(bodyParser.json());
// const pool=require('./src/mysql/mysql.conect')
// const {createUser,login}=require('./src/users/user.controller');
// if(pool){
//     console.log('db conneced');
// }
// else{
//     console.log('err')
// }


// app.post('/users/register',createUser);
// // app.get('/',getusers);
// //app.get('/:id',checkToken,getUserByUserID);
// app.post('/users/login',login);
// // //app.get('/users')
// // app.get('/', (req, res) => {
    
// //   //  sesClient.sendEmail('seetharam.20it@licet.ac.in', "Hey! Welcome", "This is the body of email");
    
// //     res.send('Email is sent!');
// // });

// app.listen(process.env.APP_PORT, () => {
//     console.log('App is listening on port 3000');
// });

require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());
const userRouter = require("./src/users/user.router");

app.use(express.json());

app.use("/api/users", userRouter);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
