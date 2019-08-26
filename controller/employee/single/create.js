"use strict";
const ObjectID = require('mongodb').ObjectID
const employee = require("../../../model/employee");

module.exports = async (req, res, next) => {
    try {
        const { body } = req;
        // check if role is valid
        if (!body.role) {
            res.statusCode = 400;
            res.send({
                msg: "role should not be empty!"
            });
        } else {
            // initialize _id for new record object
            const newObject = {
                ...body,
                _id: new ObjectID(),
            };
            // save new record
            const newEmployee = new employee(newObject);
            await newEmployee.save();
            res.statusCode = 201;
            res.send({
                id: newEmployee.id,
                msg: "employee creation succeed!"
            });
        }
        // if catch error
    } catch (e) {
        res.statusCode = 500;
        res.send({
            msg: "Error, employee creation failed!"
        });
        // pass errors to Express
        next(e)
    }
};
