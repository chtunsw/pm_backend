"use strict";

const ObjectId = require("mongoose").Types.ObjectId
const schedule = require("../../../model/schedule")

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (ObjectId.isValid(id)) {
            const result = await schedule.findOne({ _id: id })
            if (result) {
                res.statusCode = 200;
                res.send({
                    result,
                    message: "schedule read succeed!"
                })
            } else {
                res.statusCode = 404;
                res.send({
                    message: "schedule not found!"
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
            message: "schedule read failed!"
        })
        next(e);
    }
}