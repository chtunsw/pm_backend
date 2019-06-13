"use strict";

// import mock employees
const {
    Employee_1,
    Employee_2,
    Employee_3,
    Employee_4,
    Employee_5,
    Employee_6,
    Employee_7,
    Employee_8,
    Employee_9,
    Employee_10,
    Employee_11,
    Employee_12,
    Employee_13,
    Employee_14,
    Employee_15,
} = require('./mockEmployees')

// import mock leave requests
const {
    LeaveRequest_1,
    LeaveRequest_2,
    LeaveRequest_3,
    LeaveRequest_4,
    LeaveRequest_5,
    LeaveRequest_6,
    LeaveRequest_7,
    LeaveRequest_8,
    LeaveRequest_9,
    LeaveRequest_10,
    LeaveRequest_11,
    LeaveRequest_12,
    LeaveRequest_13,
    LeaveRequest_14,
    LeaveRequest_15,
} = require('./mockLeaveRequests')

//import mock schedules
const {
    Schedule_1,
    Schedule_2,
    Schedule_3,
    Schedule_4,
    Schedule_5,
    Schedule_6,
    Schedule_7,
    Schedule_8,
} = require('./mockSchedules')

// import database model
const employee = require("../../../model/employee");
const leaveRequest = require("../../../model/leaveRequest");
const schedule = require("../../../model/schedule");

// recreate and connect to database
const mongoose = require("mongoose");
const uri = "mongodb://user123:user123@cluster0-shard-00-00-dfmqy.mongodb.net:27017,cluster0-shard-00-01-dfmqy.mongodb.net:27017,cluster0-shard-00-02-dfmqy.mongodb.net:27017/pm_database?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
mongoose.connect(uri, { useNewUrlParser: true }, () => mongoose.connection.db.dropDatabase());
mongoose.connect(uri, { useNewUrlParser: true })

// init database
