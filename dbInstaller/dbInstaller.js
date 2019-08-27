"use strict";

// import database model
const employeeModel = require("../model/employee");
const leaveRequestModel = require("../model/leaveRequest");
const scheduleModel = require("../model/schedule");

// import mock data objects
const employees = require("./mockEmployees");
const leaveRequests = require("./mockLeaveRequests");
const schedules = require("./mockSchedules");

// define dbInstaller
async function dbInstaller() {
  // recreate and connect to database
  const mongoose = require("mongoose");
  const url =
    "mongodb://user123:user123@cluster0-shard-00-00-dfmqy.mongodb.net:27017,cluster0-shard-00-01-dfmqy.mongodb.net:27017,cluster0-shard-00-02-dfmqy.mongodb.net:27017/pm_database?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
  await mongoose.connect(url, { useNewUrlParser: true }, () =>
    mongoose.connection.db.dropDatabase()
  );
  await mongoose.connect(url, { useNewUrlParser: true });
  // insert data
  // create new objects
  var newEmployees = employees;
  var newleaveRequests = leaveRequests;
  var newSchedules = schedules;
  // define _id reference relationship among objects
  const mapRelationship = [
    {
      employeeIndex: 0,
      leaveRequestIndexes: Array.from(Array(5), (item, index) => index),
      scheduleIndexes: Array.from(Array(3), (item, index) => index)
    },
    {
      employeeIndex: 1,
      leaveRequestIndexes: Array.from(Array(5), (item, index) => index + 5),
      scheduleIndexes: Array.from(Array(3), (item, index) => index + 3)
    },
    {
      employeeIndex: 10,
      leaveRequestIndexes: Array.from(Array(5), (item, index) => index + 10),
      scheduleIndexes: Array.from(Array(3), (item, index) => index + 6)
    }
  ];
  // update new objects with reference _id
  mapRelationship.map(relationship => {
    // update newEmployees with leaveRequestIds and scheduleIds
    Object.assign(newEmployees[relationship.employeeIndex], {
      schedules: relationship.leaveRequestIndexes.map(
        index => newleaveRequests[index]._id
      ),
      leaveRequests: relationship.scheduleIndexes.map(
        index => newSchedules[index]._id
      )
    });
    // update newLeaveRequests with employeeId
    relationship.leaveRequestIndexes.map(leaveRequestIndex => {
      Object.assign(newleaveRequests[leaveRequestIndex], {
        employeeID: newEmployees[relationship.employeeIndex]._id
      });
    });
    // update newSchedules with employeeId
    relationship.scheduleIndexes.map(scheduleIndex => {
      Object.assign(newSchedules[scheduleIndex], {
        employeeID: newEmployees[relationship.employeeIndex]._id
      });
    });
  });
  // save data in database
  await Promise.all(newEmployees.map(async newEmployee => {
    const newData = new employeeModel(newEmployee);
    await newData.save();
  }))
  await Promise.all(newleaveRequests.map(async newleaveRequest => {
    const newData = new leaveRequestModel(newleaveRequest);
    await newData.save();
  }))
  await Promise.all(newSchedules.map(async newSchedule => {
    const newData = new scheduleModel(newSchedule);
    await newData.save();
  }))
}

// install db
dbInstaller().then(result => console.log("database installed successfully!"));
