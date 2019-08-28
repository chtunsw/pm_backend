'use strict';

const Router = require("express").Router;

// single employee api callback function
const singleCreate = require("../controller/employee/single/create");
const singleRead = require("../controller/employee/single/read");
const singleUpdate = require("../controller/employee/single/update");
const singleDelete = require("../controller/employee/single/delete");

// paginate employee api callback function
const paginateRead = require("../controller/employee/paginate/read");

// create router
const router = Router();

// single employee restful apis
router.post("/employee", singleCreate);
router.get("/employee/:id", singleRead);
router.put("/employee", singleUpdate);
router.delete("/employee/:id", singleDelete);

// paginate employee restful apis
router.get("/employees/:pageIndex/:pageSize", paginateRead);

// export router
module.exports = router;