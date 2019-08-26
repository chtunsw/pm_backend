"use strict";
var ObjectId = require('mongoose').Types.ObjectId;
const employee = require("../../../model/employee");

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params;
        // if id is valid
        if (ObjectId.isValid(id)) {
            const result = await employee.findOne({ _id: id });
            // if employee not found
            if (!result) {
                res.statusCode = 404;
                res.send({
                    id: id,
                    msg: "employee not found!"
                });

                //  if employee is found
            } else {
                res.statusCode = 200;
                res.send({
                    result,
                    msg: "employee found!"
                });
            }
            // if id is not valid
        } else {
            res.statusCode = 400;
            res.send({
                msg: "id is not valid!"
            });
        }
        // if catch error
    } catch (e) {
        res.statusCode = 500;
        res.send({
            msg: "employee search failed!"
        });
        next(e);
    }
};
