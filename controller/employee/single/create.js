"use strict";

const employee = require("../../../model/employee");

module.exports = async (req, res, next) => {
    try {
        const { body } = req;

        // check if id is valid
        if (body.id.length !== 3) {
            res.statusCode = 400;
            res.send({
                msg: "id should have 3 digits!"
            });
            return;
        }
        const newEmployee = new employee(body);
        await newEmployee.save();
        res.statusCode = 201;
        res.send({
            id: newEmployee.id,
            msg: "employee creation succeed!"
        });

    // if catch error
    } catch (e) {
        res.statusCode = 500;
        res.send({
            msg: "employee creation failed!"
        });
        next(e);
    }
};
