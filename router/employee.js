'use strict';

const Router = require("express").Router;

const singleGet = require("../controller/employee/single/get");
const singleCreate = require("../controller/employee/single/create");
const singleUpdate = require("../controller/employee/single/update");
const singleDelete = require("../controller/employee/single/delete");

const bulkGet = require("../controller/employee/bulk/get");
// const bulkCreate = require("../controller/employee/bulk/create");
// const bulkUpdate = require("../controller/employee/bulk/update");
// const bulkDelete = require("../controller/employee/bulk/delete");

// create router
const router = Router();

// single employee restful apis
router.get("/employee/:id", singleGet);
router.post("/employee", singleCreate);
router.put("/employee/:id", singleUpdate);
router.delete("/employee/:id", singleDelete);

// bulk employee restful apis
router.get("/bulk/employee/:ids", bulkGet);
// router.post("/bulk/employee", bulkCreate);
// router.put("/bulk/employee", bulkUpdate);
// router.delete("/bulk/employee/:ids", bulkDelete);

module.exports = router;