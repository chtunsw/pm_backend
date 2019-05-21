"use strict";

const employee = require("../../../model/employee");

module.exports = async (req, res, next) => {
    try {
        const { body } = req;
        const { id } = req.params;

        // check if id is valid
        if (id.length !== 3) {
            res.statusCode = 400;
            res.send({
                msg: "id should have 3 digits!"
            });
            return;
        }
        const result = await employee.findOne({
            id: id
        });

        // if employee exist, can be update
        if (result) {
            Object.assign(result, body);
            const assign = new employee(result);
            await assign.save();
            res.statusCode = 200;
            res.send({
                id: id,
                msg: 'employee update succeed!'
            });

        // if employee does not exist, create new employee
        } else {
            Object.assign(body, { id: id });
            const assign = new employee(body);
            await assign.save();
            res.statusCode = 201;
            res.send({
                id: id,
                msg: 'employee creation succeed!'
            });
        }

    // if catch error
    } catch (e) {
        res.statusCode = 500;
        res.send({
            msg: "employee update failed!"
        });
        next(e);
    }
};
