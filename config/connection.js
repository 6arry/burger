const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'NotAnother1',
    database:'burgers_db'
})

connection.connect(function(err){
    if(err)throw err;
    console.log('We are connected');
});

module.exports = connection;