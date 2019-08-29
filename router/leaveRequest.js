"use strict";

const Router = require("express").Router

// single leaveRequest api callback function
const singleCreate = require("../controller/leaveRequest/single/create.js")
const singleRead = require("../controller/leaveRequest/single/read.js")
const singleUpdate = require("../controller/leaveRequest/single/update.js")
const singleDelete = require("../controller/leaveRequest/single/delete.js")

// paginate leaveRequest api callback function
// const paginateRead = require("../controller/leaveRequest/paginate/read.js")

// batch leaveRequest api callback function
const batchRead = require("../controller/leaveRequest/batch/read.js")

// create router
const router = Router()

// single leaveRequest restful apis 
router.post("/leaveRequest", singleCreate)
router.get("/leaveRequest/:id", singleRead)
router.put("/leaveRequest", singleUpdate)
router.delete("/leaveRequest/:id", singleDelete)

// paginate leaveRequest restful apis
// router.get("/leaveRequests/:pageIndex/:pageSize", paginateRead)

// batch leaveRequest restful apis
router.get("/employee/:id/leaveRequests/:pageIndex/:pageSize", batchRead)

module.exports = router