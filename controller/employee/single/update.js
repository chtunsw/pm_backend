"use strict";
const ObjectId = require("mongoose").Types.ObjectId;
const employee = require("../../../model/employee");

module.exports = async (req, res, next) => {
    try {
        const { body } = req;

        // check if id is valid
        if (ObjectId.isValid(body._id)) {
            const result = await employee.findOne({
                _id: body._id
            });
            // if employee exist, can be update
            if (result) {
                const newObject = {
                    ...result.toObject(),
                    ...body,
                }
                await employee.updateOne({ _id: body._id }, newObject)
                res.statusCode = 200;
                res.send({
                    id: body._id,
                    msg: 'employee update succeed!'
                });

                // if employee does not exist, not found
            } else {
                res.statusCode = 404;
                res.send({
                    id: body._id,
                    msg: 'employee does not exist!'
                });
            }
        } else {
            res.statusCode = 400;
            res.send({
                id: body._id,
                msg: "id is not valid!"
            });
            return;
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
