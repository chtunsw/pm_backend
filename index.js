"use strict";

// require global modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// require local modules
const router = require('./router');

// connect to db, or create new db if not exists
const uri = "mongodb://user123:user123@cluster0-shard-00-00-dfmqy.mongodb.net:27017,cluster0-shard-00-01-dfmqy.mongodb.net:27017,cluster0-shard-00-02-dfmqy.mongodb.net:27017/pm_database?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
mongoose.connect(uri, { useNewUrlParser: true });
// connect to local db
// mongoose.connect("mongodb://localhost:27017/pm", { useNewUrlParser: true });

// create app server
const app = express();

// extract request body to json
app.use(bodyParser.json());

// use router
app.use(router);

// app server listen PORT 3000
app.listen(3000, () => {
  console.log("Server starts at PORT: 3000");
});
