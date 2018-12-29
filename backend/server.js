const express = require('express');
const app = express();
const bodyParser = require('body-parser');
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
	const Id = req.params.id;
	User.findUserById({_id: Id}, (err, user) =>{
		if (err){
			console.log(`can't get user: ${err}`);
			res.json({'err': err});
		}
		else res.json(user);
	});
});

app.put('/users/:id', (req, res) => {
	const Id = req.params.id;
	const updatesPayload = req.body;
	const payload = {Id, updatesPayload};
	User.updateUserById(payload, (err, user) =>{
		if (err){
			console.log(`can't update user: ${err}`);
			res.json({'err': err});
		}
		else res.json(user);
	});
});

app.delete('/users/:id', (req, res) => {
	const Id = req.params.id;
	User.deleteUserById(Id, (err, user) =>{
		if (err){
			console.log(`can't delete user: ${err}`);
			res.json({'err': err});
		}
		else res.json(user);
	});
});

http.listen(1337, (err) => {
  if (err) console.log(err);
  console.log(`Running on port ${1337}`);
});