const express = require('express');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');
const config = require('./config/secret');

mongoose.connect(config.database, function(err) {
  if (err) console.log(err);
  console.log("connected to the database");
});

http.listen(1337, (err) => {
  if (err) console.log(err);
  console.log(`Running on port ${1337}`);
});