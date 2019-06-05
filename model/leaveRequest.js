"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

// create leaveRequest schema
const leaveRequestSchema = new Schema({
  _id: Schema.Types.ObjectId,
  employeeID: { type: Schema.Types.ObjectId, ref: 'Employee' },
  startDate: Date,
  endDate: Date,
  leaveReason: String,
  approvalStatus: String,
});

// create leaveRequest model 
const LeaveRequest = mongoose.model('LeaveRequest', leaveRequestSchema);

module.exports = LeaveRequest;