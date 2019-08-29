"use strict";

const ObjectId = require("mongoose").Types.ObjectId
const schedule = require("../../../model/schedule")

module.exports = async (req, res, next) => {
    try {
        const body = req.body;
        if (ObjectId.isValid(body._id)) {
            const result = await schedule.findOne({ _id: body._id })
            if (result) {
                const newObject = {
                    ...result.toObject(),
                    ...body
                }
                await schedule.updateOne({ _id: body._id }, newObject)
                res.statusCode = 200;
                res.send({
                    id: body._id,
                    message: "schedule update succeed!"
                })
            } else {
                res.statusCode = 404;
                res.send({
                    message: "schedule does not exist!"
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
            message: "schedule update failed!"
        })
        next(e);
    }
}