"use strict";

// require global modules
const express = require("express");
const mongoose = require("mongoose");

// require local modules
const router = require("./router");

// connect to db, or create new db if not exists
const uri =
  "mongodb://user123:user123@cluster0-shard-00-00-dfmqy.mongodb.net:27017,cluster0-shard-00-01-dfmqy.mongodb.net:27017,cluster0-shard-00-02-dfmqy.mongodb.net:27017/pm_database?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
mongoose.connect(uri, { useNewUrlParser: true });
// connect to local db
// mongoose.connect("mongodb://localhost:27017/pm", { useNewUrlParser: true });

// create app server
const app = express();

// parse json payloads in requests
app.use(express.json());

// add cors header
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// use router
app.use(router);

// app server listen PORT 2000
app.listen(2000, () => {
  console.log("Server starts at PORT: 2000");
});
