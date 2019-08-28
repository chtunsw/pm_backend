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
router.put("/employee", singleUpdate);
router.delete("/employee/:id", singleDelete);

// bulk employee restful apis
router.get("/employees", bulkGet);
// router.post("/employees", bulkCreate);
// router.put("/employees", bulkUpdate);
// router.delete("/employees", bulkDelete);

// export router
module.exports = router;