"use strict";

const leaveRequest = require("../../../model/leaveRequest")

module.exports = async (req, res, next) => {
    try {
        var { pageIndex, pageSize } = req.params;
        pageIndex = Number(pageIndex);
        pageSize = Number(pageSize);
        const result = await leaveRequest.find(undefined, undefined, { limit: pageSize, skip: pageIndex * pageSize })
        res.statusCode = 200;
        res.send({
            result,
            message: "leaveRequest paginate read succeed!"
        })
    } catch (e) {
        res.statusCode = 500;
        res.send({
            message: "leaveRequest paginate read failed!"
        })
        next(e);
    }
}