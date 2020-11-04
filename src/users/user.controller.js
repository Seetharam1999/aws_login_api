
const {
    create,
    getUserByUserEmail,
 
  } = require("./user.service");
  const { hashSync, genSaltSync, compareSync } = require("bcrypt");
  const { sign } = require("jsonwebtoken");
  const sesClient = require('../aws/aws_ses');
  module.exports = {
    createUser: (req, res) => {
      res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
      const body = req.body;
      const salt = genSaltSync(10);
	var email=(body.email).toString();
	getUserByUserEmail(email, (err, results) => {
	if(err){
		console.log(err)	
	}
	else{
		if(results){
			return res.status(300).json({
				success:0,
				message:"users already use this mail id"			
			})	
		}
		else{
		var random=(Math.floor(Math.random() * 26) + Date.now()).toString();
			console.log(random);      
body.password = hashSync(random, 10);
      create(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror"
          });
        }
        sesClient.sendEmail(body.email, "your New Password", random);
        return res.status(200).json({
          success: 1,
          data: results
        });
      });	
		}		
		
	}


	})		
     
    },
    login: (req, res) => {
      res.header("Access-Control-Allow-Origin", '*');
      res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
      const body = req.body;
	var email=(body.email).toString();
      getUserByUserEmail(email, (err, results) => {
        if (err) {

          console.log(err);
        }
        if (!results) {
	  	console.log("not email",results)
          return res.json({
            success: 0,
            data: "Invalid email or password"
          });
        }
	var password=(body.password).toString()
	
        const result = compareSync(password, results.password);
        if (result) {

          results.password = undefined;
          const jsontoken = sign({ result: results }, "qwe1234", {
            expiresIn: "1h"
          });
          return res.status(200).json({
            success: 1,
            message: "login successfully",
            token: jsontoken,
            data:results
          });
        } else {

          return res.json({
            success: 0,
            data: "Invalid email or password"
          });
        }
      });
    },
   };
  
