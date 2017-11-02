var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var connection=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'nav'
})

/* GET home page. */
router.post('/view', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*')
  connection.query('SELECT * FROM input',function(err,rows,fields){
  	res.send(rows)
  })
});
router.post('/add', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*')
  var a=req.body.a;
  var b=req.body.b;
  connection.query('INSERT INTO input (title,datail) VALUES ("'+a+'","'+b+'")',function(err,rows,fields){
  	res.send(rows)
  })
});

module.exports = router;
