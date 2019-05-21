"use strict";

const employee = require("../../../model/employee");

module.exports = async (req, res, next) => {
    try {
        let { ids } = req.params;
        ids = ids.split(",");
        const isValid = ids.every(id => id.length === 3);

        // check if ids are valid
        if (isValid) {
            const result = await employee.find({
                id: {
                    $in: ids
                }
            });

            // if employees not found
            if (result.length === 0) {
                res.statusCode = 404;
                res.send({
                    notfound: ids,
                    msg: "employees not found!"
                });
            
            // if some employees are found
            } else {
                const resultIds = {};
                result.forEach(item => (resultIds[item.id.toString()] = true));
                const notfound = ids.filter(id => !resultIds[id]);

                res.statusCode = 200;
                res.send({
                    notfound: notfound,
                    result
                });
            }

        // if ids are not valid
        } else {
            res.statusCode = 400;
            res.send({
                msg: "ids should have 3 digits!"
            });
        }

    // if catch error
    } catch (e) {
        res.statusCode = 500;
        res.send({
            msg: "employees search failed!"
        });
        next(e);
    }
};
