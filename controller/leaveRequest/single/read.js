"use strict";

const ObjectId = require("mongoose").Types.ObjectId
const leaveRequest = require("../../../model/leaveRequest")

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params
        if (ObjectId.isValid(id)) {
            const result = await leaveRequest.findOne({ _id: id })
            if (result) {
                res.statusCode = 200;
                res.send({
                    result,
                    message: "leaveRequest found!"
                })
            } else {
                res.statusCode = 404;
                res.send({
                    id: id,
                    message: "leaveRequest not found!"
                })
            }
        } else {
            res.statusCode = 400;
            res.send({
                message: "id is not valid!"
            })
        }
    } catch (e) {
        res.statusCode = 500;
        res.send({
            message: "leaveRequest read failed!"
        })
        next(e);
    }
}