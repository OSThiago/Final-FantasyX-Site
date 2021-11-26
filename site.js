const express = require('express');
const app = express()
const mysql = require('mysql');

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'teste'
})

connection.connect()

connection.query("INSERT INTO test.user (nome, email, senha) VALUES ('teste1', 'teste1', 'teste1')", function(err,rows, fields){

});

connection.query('SELECT * FROM user', function(err,rows, fields){
    console.log('resultado: ',rows)
});

connection.end()