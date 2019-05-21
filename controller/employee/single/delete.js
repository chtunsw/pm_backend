"use strict";

const employee = require("../../../model/employee");

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (id.length !== 3) {
            res.statusCode = 400;
            res.send({
                msg: "id should have 3 digits!"
            });
            return;
        }
        const result = await employee.deleteOne({
            id: id
        });
        if (result.deletedCount === 0) {
            res.statusCode = 404;
            res.send({
                id: id,
                msg: "employee dose not exist!"
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
            msg: "employee deletion failed!"
        });
        next(e);
    }
};
