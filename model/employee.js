"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

// create employee schema
const employeeSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  title: String,
  potrait: String,
  password: String,
  email: String,
  role: String,
  salary: String,
  schedules: [{ type: Schema.Types.ObjectId, ref: 'Schedule' }],
  leaveRequests: [{ type: Schema.Types.ObjectId, ref: 'LeaveRequest' }],
});

// create employee model 
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;