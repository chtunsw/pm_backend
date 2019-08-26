"use strict";
const employee = require("../../../model/employee");

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await employee.deleteOne({
            _id: id
        });
        if (result.deletedCount === 0) {
            res.statusCode = 404;
            res.send({
                id: id,
                msg: "employee does not exist!"
            });
        } else {
            res.statusCode = 200;
            res.send({
                id: id,
                msg: "employee deletion succeed!"
            });
        }
    } catch (e) {
        res.statusCode = 500;
        res.send({
            msg: "employee deletion failed!",
        });
        // pass errors to Express
        next(e)
    }
};
