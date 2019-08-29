"use strict";

const ObjectId = require("mongoose").Types.ObjectId
const schedule = require("../../../model/schedule")

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (ObjectId.isValid(id)) {
            const result = await schedule.deleteOne({ _id: id })
            if (result.deletedCount !== 0) {
                res.statusCode = 200;
                res.send({
                    result,
                    message: "schedule deletion succeed!"
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
            message: "schedule deletion failed!"
        })
        next(e);
    }
}