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
var createError = require('http-errors');
var http = require("http");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());
const userRouter = require("./src/users/user.router");

// class App{
//   constructor(){
//     this.middleWare();
//   }
  
//   middleWare=()=>{
//     console.log('sample')
//   }
//   }



app.use(express.json());


app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
  //res.header("Access-Control-Allow-Credentials", true);
 
  if (req.url === '/') {
      return  res.json({
              name: "AWss Login",
               });
  }
    next();
})





app.use("/", userRouter);
app.use(function(req, res, next) {
  next(createError(404));
});

// // error handler
app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

res.json({
  message: err.message,
  error: err
});
});
// var server = http.createServer(app);
// server.listen(process.env.APP_PORT,()=>{
//   console.log('server listened.....',process.env.APP_PORT)
// });

app.listen(process.env.APP_PORT, () => {
  console.log("server up and running on PORT :", process.env.APP_PORT);
});
