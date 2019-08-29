"use strict";

// require global modules
const Router = require("express").Router;

// create router
const router = Router();

// use openApiRouter
const openApiRouter = require('./swagger.js')
router.use(openApiRouter)

// use employeeRouter
const employeeRouter = require('./employee.js')
router.use(employeeRouter)


// use leaveRequestRouter
const leaveRequestRouter = require("./leaveRequest.js")
router.use(leaveRequestRouter)

// use scheduleRouter
const scheduleRouter = require("./schedule.js")
router.use(scheduleRouter)

module.exports = router;