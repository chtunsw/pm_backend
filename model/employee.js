"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

// create employee schema
const employeeSchema = new Schema({
  id: String,
  name: String,
  title: String
});

// create employee model 
const employeeModel = mongoose.model('employee', employeeSchema);

module.exports = employeeModel;