"use strict";

const ObjectId = require("mongoose").Types.ObjectId
const leaveRequest = require("../../../model/leaveRequest")

module.exports = async (req, res, next) => {
    try {
        var { id, pageIndex, pageSize } = req.params;
        pageIndex = Number(pageIndex)
        pageSize = Number(pageSize)
        if (ObjectId.isValid(id)) {
            const result = await leaveRequest.find({ employeeID: id }, undefined, { limit: pageSize, skip: pageIndex * pageSize })
            res.statusCode = 200;
            res.send({
                result,
                message: "leaveRequest batch read succeed!"
            })
        } else {
            res.statusCode = 400;
            res.send({
                message: "id is not valid!"
            })
        }
    } catch (e) {
        res.statusCode = 500;
        res.send({
            message: "leaveRequest batch read failed!"
        })
        next(e);
    }
}