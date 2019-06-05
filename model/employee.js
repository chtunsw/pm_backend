"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

// create employee schema
const employeeSchema = new Schema({
  id: String,
  name: String,
  title: String,
  portrait: String,
  password: String,
  email: String,
  salary: String,
  schedules: [{type: Schema.Types.ObjectId, ref:'schedule'}]
});

// create employee model 
const employeeModel = mongoose.model('employee', employeeSchema);

module.exports = employeeModel;