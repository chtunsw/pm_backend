"use strict";

const ObjectId = require("mongoose").Types.ObjectId
const leaveRequest = require("../../../model/leaveRequest")

module.exports = async (req, res, next) => {
    try {
        const { body } = req;
        if (ObjectId.isValid(body._id)) {
            const result = await leaveRequest.findOne({ _id: body._id })
            if (result) {
                const newObject = {
                    ...result.toObject(),
                    ...body,
                }
                await leaveRequest.updateOne({ _id: body._id }, newObject)
                res.statusCode = 200;
                res.send({
                    id: body._id,
                    message: "leaveRequest update succeed!"
                })
            } else {
                res.statusCode = 404;
                res.send({
                    message: "leaveRequest does not exist!"
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
            message: "leaveRequest update failed!"
        })
        next(e);
    }
}