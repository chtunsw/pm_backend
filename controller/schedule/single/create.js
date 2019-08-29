"use strict";

const ObjectId = require("mongoose").Types.ObjectId
const schedule = require("../../../model/schedule")

module.exports = async (req, res, next) => {
    try {
        const { body } = req;
        const newObject = {
            _id: new ObjectId(),
            ...body
        }
        const newSchedule = new schedule(newObject);
        const result = await newSchedule.save()
        res.statusCode = 200;
        res.send({
            result,
            message: "schedule creation succeed!"
        })
    } catch (e) {
        res.statusCode = 500;
        res.send({
            message: "schedule creation failed!"
        })
        next(e);
    }
}