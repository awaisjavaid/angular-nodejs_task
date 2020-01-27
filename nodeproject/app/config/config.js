const connection = mysql.createConnection({
    connectionLimit: 10,
    host: process.env.HOST,
     user: process.env.USER_NAME,
     password: process.env.PASSWORD,
     database: process.env.DATABASE
 });
connection.connect(function (err) {
     if (err) throw err;
     console.log("Connected!");
});
module.exports= connection;