"use strict";

const employee = require("../../../model/employee");

module.exports = async (req, res, next) => {
    try {
        var { pageIndex, pageSize } = req.params;
        pageIndex = Number(pageIndex)
        pageSize = Number(pageSize)
        const result = await employee.find(undefined, undefined, { limit: pageSize, skip: pageIndex * pageSize })
        res.statusCode = 200;
        res.send({
            result,
            msg: "employees search succeed!"
        });
        // if catch error
    } catch (e) {
        res.statusCode = 500;
        res.send({
            msg: "employees search failed!"
        });
        next(e);
    }
};
