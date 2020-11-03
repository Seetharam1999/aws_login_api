

// const SqlConnection=require('mysql');
// class MysqlConnection {
    
//      setConnection() {
      
//         this.mysql = SqlConnection.createPool({
//             host     :  process.env.DB_HOST,
//             user     : process.env.DB_USER,
//             password : process.env.DB_PASS,
//             database : process.env.MYSQL_DB,
//             port:process.env.DB_PORT,
//             connectionLimit: 25
//         });
//         this.ping();
//     }

//      ping() {
//         this.mysql.on('connect', function (sequence) {
//             console.log('DB Connection established');
//           });
//         this.mysql.query('SELECT 1', function (error, results, fields) {
//             if (error) {
//                 console.log(error);
//              throw error;
//             }
//             console.log('Database Connection Established ');
//           });
        
//         this.mysql.on('enqueue', function (sequence) {
//             if (sequence.constructor.name === 'Query') {
//               console.log(sequence.sql);
//             }
//           });
  
//         this.mysql.on('enqueue', function (sequence) {
//             if (sequence.constructor.name === 'Query') {
//               console.log(sequence.sql);
//             }
//           });
//     }
//      getMysql() {
//         return this.mysql;
//     }
// }
// var mysql=new MysqlConnection();
// module.exports = {mysql};
const mysql=require('mysql');

const pool=mysql.createPool({
    host     :  process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.MYSQL_DB,
    port:process.env.DB_PORT,
    connectionLimit: 25
})
module.exports=pool;