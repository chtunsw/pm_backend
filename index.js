"use strict";

// require global modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// require local modules
const router = require('./router');

// connect to db, or create new db if not exists
mongoose.connect("mongodb://localhost:27017/pm", { useNewUrlParser: true });

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
