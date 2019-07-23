const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'NotAnother1',
    database:'burgers_db'
})

connection.,connect(function(err){
    if(err)throw err;
    console.log('connected as id: '+connection.threadid);
});

module.exports = connection;