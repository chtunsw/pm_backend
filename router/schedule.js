"use strict";

const Router = require("express").Router

// create router
const router = Router();

// single schedule api callback function
const singleCreate = require("../controller/schedule/single/create")
const singleRead = require("../controller/schedule/single/read")
const singleUpdate = require("../controller/schedule/single/update")
const singleDelete = require("../controller/schedule/single/delete")

// batch schedule api callback function
const batchRead = require("../controller/schedule/batch/read")

// single schedule restful apis 
router.post("/schedule", singleCreate)
router.get("/schedule/:id", singleRead)
router.put("/schedule", singleUpdate)
router.delete("/schedule/:id", singleDelete)

// batch schedule restful apis 
router.get("/employee/:id/schedules/:pageIndex/:pageSize", batchRead)

module.exports = router