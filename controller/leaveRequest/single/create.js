"use strict";

const ObjectId = require("mongoose").Types.ObjectId
const leaveRequest = require("../../../model/leaveRequest")

module.exports = async (req, res, next) => {
    try {
        const { body } = req;
        const newObject = {
            _id: new ObjectId(),
            ...body,
        }
        const newLeaveRequest = new leaveRequest(newObject)
        const result = await newLeaveRequest.save()
        res.statusCode = 200;
        res.send({
            result,
            message: "leaveRequest creation succeed!"
        })
    } catch (e) {
        res.statusCode = 500;
        res.send({
            message: "Error, leaveRequest creation failed!"
        })
        next(e)
    }
}