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
    // insert data
    await Promise.all(
        employees.map( async (employee, index) => {
            try {
                let leaveRequestIndexArray = []
                let scheduleIndexArray = []
                let leaveRequestIdArray = []
                let scheduleIdArray = []
                if(index === 0){
                    leaveRequestIndexArray = [0, 1, 2, 3, 4]
                    scheduleIndexArray = [0, 1, 2]
                }else if(index === 1){
                    leaveRequestIndexArray = [5, 6, 7, 8, 9]
                    scheduleIndexArray = [3, 4, 5]
                }else if(index === 10){
                    leaveRequestIndexArray = [10, 11, 12, 13, 14]
                    scheduleIndexArray = [6, 7, 8]
                }
                // insert leave requests
                const employeeID = {
                    employeeID: employee._id
                }
                leaveRequestIndexArray.map( async index => {
                    try {
                        leaveRequestIdArray.push(leaveRequests[index]._id)
                        const leaveRequestObj = Object.assign(leaveRequests[index], employeeID)
                        const newleaveRequest = new leaveRequestModel(leaveRequestObj);
                        await newleaveRequest.save();
                        console.log('leave request', index)
                    } catch(e) {
                        console.log(e)
                    }
                })
                // insert schedules
                scheduleIndexArray.map( async index => {
                    try {
                        scheduleIdArray.push(schedules[index]._id)
                        const scheduleObj = Object.assign(schedules[index], employeeID)
                        const newSchedule = new scheduleModel(scheduleObj);
                        await newSchedule.save();
                        console.log('schedule', index)
                    } catch(e) {
                        console.log(e)
                    }
                })
                // insert employees
                const leaveRequestArray = {
                    leaveRequests: leaveRequestIdArray
                }
                const scheduleArray = {
                    schedules: scheduleIdArray
                }
                let employeeObj = employee
                Object.assign(employeeObj, leaveRequestArray, scheduleArray)
                const newEmployee = new employeeModel(employeeObj);
                await newEmployee.save();
                console.log('exployee', index)
                return ['exployee', index]
            } catch (e) {
                console.log(e)
            }
        })
    ).then(result => console.log('promise:', result))
    // database installed
    console.log('database installed')
}

// install db
dbInstaller()
