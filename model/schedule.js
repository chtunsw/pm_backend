"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

// create schedule schema
const scheduleSchema = new Schema({
  _id: Schema.Types.ObjectId,
  employeeID: { type: Schema.Types.ObjectId, ref: 'Employee' },
  date: Date,
  detail: String,
});

// create schedule model 
const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;