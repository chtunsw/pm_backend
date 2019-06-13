"use strict";

// import mock data
const employees = require('./mockEmployees')
const leaveRequests = require('./mockLeaveRequests')
const schedules = require('./mockSchedules')

// import database model
const employeeModel = require("../model/employee");
const leaveRequestModel = require("../model/leaveRequest");
const scheduleModel = require("../model/schedule");

// define dbInstaller
async function dbInstaller() {
    // recreate and connect to database
    const mongoose = require("mongoose");
    const uri = "mongodb://user123:user123@cluster0-shard-00-00-dfmqy.mongodb.net:27017,cluster0-shard-00-01-dfmqy.mongodb.net:27017,cluster0-shard-00-02-dfmqy.mongodb.net:27017/pm_database?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
    await mongoose.connect(uri, { useNewUrlParser: true }, () => mongoose.connection.db.dropDatabase());
    await mongoose.connect(uri, { useNewUrlParser: true })

    employees.map( async (employee, index) => {
        try {
            const newEmployee = new employeeModel(employee);
            await newEmployee.save();
        } catch (e) {
            console.log(e)
        }
    })
}

// install db
dbInstaller()