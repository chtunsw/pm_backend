"use strict";

// require global modules
const Router = require("express").Router;
const yamljs = require("yamljs");
const swaggerUI = require("swagger-ui-express");

// create router
const router = Router();

// root path redirect to openapi doc
router.get("/", (req, res, next) => {
  res.redirect("/docs");
});

// load openapi doc
const openapiDOC = yamljs.load('./openapi.yaml');

// serve openapi doc page
router.use('/docs', swaggerUI.serve, swaggerUI.setup(openapiDOC));

// use employeeRouter
const employeeRouter = require('./routers/employee.js')
router.use(employeeRouter)

module.exports = router;