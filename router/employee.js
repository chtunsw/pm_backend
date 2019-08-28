'use strict';

const Router = require("express").Router;

const singleRead = require("../controller/employee/single/read");
const singleCreate = require("../controller/employee/single/create");
const singleUpdate = require("../controller/employee/single/update");
const singleDelete = require("../controller/employee/single/delete");

const paginateRead = require("../controller/employee/paginate/read");
// const bulkCreate = require("../controller/employee/bulk/create");
// const bulkUpdate = require("../controller/employee/bulk/update");
// const bulkDelete = require("../controller/employee/bulk/delete");

// create router
const router = Router();

// single employee restful apis
router.get("/employee/:id", singleRead);
router.post("/employee", singleCreate);
router.put("/employee", singleUpdate);
router.delete("/employee/:id", singleDelete);

// bulk employee restful apis
router.get("/employees/:pageIndex/:pageSize", paginateRead);
// router.post("/employees", bulkCreate);
// router.put("/employees", bulkUpdate);
// router.delete("/employees", bulkDelete);

// export router
module.exports = router;