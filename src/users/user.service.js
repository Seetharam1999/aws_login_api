
const pool=require('../mysql/mysql.conect')
if(pool){
console.log('db connected');
}
else{
console.log('err')}
module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into users(username, nickname, email, phonenumber, password) 
                values(?,?,?,?,?)`,
      [
        data.username,
        data.nickname,
        data.email,
        data.phoneNumber,
        data.password
        
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
	
    pool.query(
      `select * from users where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

//   getUsers: callBack => {
//     pool.query(
//       `select id,firstName,lastName,gender,email,number from registration`,
//       [],
//       (error, results, fields) => {
//         if (error) {
//           callBack(error);
//         }
//         return callBack(null, results);
//       }
//     );
//   },

};
