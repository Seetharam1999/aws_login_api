const router = require("express").Router();
const { checkToken } = require("../token");
const {
  createUser,
  login,
 // getUserByUserId,
  //getUsers,
  //updateUsers,
  //deleteUser
} = require("./user.controller");
//router.get("/", checkToken, getUsers);
router.post("/", createUser);
//router.get("/:id", checkToken, getUserByUserId);
router.post("/login", login);
//router.patch("/", checkToken, updateUsers);
//router.delete("/", checkToken, deleteUser);

module.exports = router;



// const {createUser,login}=require('./user.controller');

// const app=require('express').Router();

// // const {checkToken}=require('../../auth/token');
// const router=()=>{
// app.post('/',createUser);
// // app.get('/',getusers);
// //app.get('/:id',checkToken,getUserByUserID);
// app.post('/login',login);
// app.get('/',(req,res)=>{
//     return res.status(200).json({
//         success:1,
//         message:'hello'
//     })
// })
// }

// module.exports=router;
