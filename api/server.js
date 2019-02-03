const express = require('express');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/secret');

mongoose.connect(config.database, function(err) {
  if (err) console.log(err);
  console.log("connected to the database");
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const userRoutes = require('./routes/User');
const CategoryRoutes = require('./routes/Category');
const GameRoutes = require('./routes/Game');

app.use(userRoutes);
app.use(CategoryRoutes);
app.use(GameRoutes);

http.listen(9000, (err) => {
  if (err) console.log(err);
  console.log(`Running on port ${9000}`);
});