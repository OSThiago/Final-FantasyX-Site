const express = require('express');
const app = express()
const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
})

connection.connect()

connection.query("INSERT INTO test.user (nome, email, senha) VALUES ('teste1', 'teste1', 'teste1')", function(err,rows, fields){

});

connection.query('SELECT * FROM user', function(err,rows, fields){
    console.log('resultado: ',rows)
});

connection.end()