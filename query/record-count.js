/**
  * fetch record counts query result from mongodb
 */
const mongoose = require('mongoose');
module.exports = {
/** Get recordcount from mongo db
    @param req - request with params startDate, endDate, minCount, maxCount
    @param res - response with result or error
*/
    recordCount: async (req, res) => {
        const reqBody = req.body;
        const startDate = reqBody.startDate;
        const endDate = reqBody.endDate;
        const minCount = reqBody.minCount;
        const maxCount = reqBody.maxCount;
        try {
            const result = await mongoose.model("Record").aggregate([
                { $match: { createdAt: { "$gte": new Date(startDate), "$lte": new Date(endDate) } } },
                { $project: { key: 1, createdAt: { "$dateToString": { "date": "$createdAt" } }, _id: 0, totalCount: { "$sum": "$counts" } } },
                { $match: { totalCount: { "$gte": minCount, "$lte": maxCount } } }
            ]).exec();
            return res.json({ "code": 0, "msg": "Success", record: result });
        }
        catch (error) {
            return res.status(500).json({ code: 500, msg: error });
        }
    }
}
