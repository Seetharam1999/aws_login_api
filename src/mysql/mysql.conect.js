

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