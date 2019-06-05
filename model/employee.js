"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

// create employee schema
const employeeSchema = new Schema({

  id: String, // to be replaced

  //_id: Schema.Types.ObjectId,
  name: String,
  title: String,
<<<<<<< HEAD
  portrait: String,
  password: String,
  email: String,
  salary: String,
  schedules: [{type: Schema.Types.ObjectId, ref:'schedule'}]
=======
  // potrait: String,
  // password: String,
  // email: String,
  // salary: String,
  // schedules: [{ type: Schema.Types.ObjectId, ref: 'Schedule' }],
  // leaveRequests: [{ type: Schema.Types.ObjectId, ref: 'LeaveRequest' }],
>>>>>>> 7d38a6fbab64e1f6746e72622d9ce7a495f7d0e7
});

// create employee model 
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;