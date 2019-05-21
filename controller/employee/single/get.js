"use strict";

const employee = require("../../../model/employee");

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params;

        // check if id is valid
        if (id.length !== 3) {
            res.statusCode = 400;
            res.send({
                msg: "id should have 3 digits!"
            });
            return;
        }
        const result = await employee.findOne({id: id});

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
    
    // if catch error
    } catch (e) {
        res.statusCode = 500;
        res.send({
            msg: "employee search failed!"
        });
        next(e);
    }
};
