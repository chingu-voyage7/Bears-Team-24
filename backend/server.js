const express = require('express');
const app = express();
const bodyParser = require('body-Parser');
const http = require('http').Server(app);
const mongoose = require('mongoose');
const config = require('./config/secret');

mongoose.connect(config.database, function(err) {
  if (err) console.log(err);
  console.log("connected to the database");
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const User = require('./model/user');

app.post('/users', (req, res) => {
	const user = req.body;
	User.addUser(user, (err, user) => {
		if (err){
			console.log(`can't get users`);
			res.json({'err': err});
		}
		else { res.json(user); }
	})
});

app.get('/users', (req, res) => {
	User.findUsers({}, (err, users) =>{
		if (err){
			console.log(`can't get users: ${err}`);
			res.json({'err': err});
		}
		else res.json(users);
	});
});

app.get('/users/:id', (req, res) => {
	var ID = req.params.id;
	User.findUserByID({_id: ID}, (err, user) =>{
		if (err){
			console.log(`can't get user: ${err}`);
			res.json({'err': err});
		}
		else res.json(user);
	});
});


http.listen(1337, (err) => {
  if (err) console.log(err);
  console.log(`Running on port ${1337}`);
});