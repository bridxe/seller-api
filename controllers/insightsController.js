Insights = require('../models/Insights')

/**
 * @api {get} /api/insights/getInsightsById Get Insights By Id
 * @apiName Get Insights By Id
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} ownerId  ownerId `Mandatory`.
 * @apiGroup Insights
 * @apSkuescription  Retrieve Insights By Id
*/

exports.getInsightsById = async (req, res) => {
    try {
        // query database to get this data
        const { ownerId } = req.query;

        //console.log(ownerId);

        var resdata = await Insights.findOne({ sku: ownerId }).exec();

        //console.log(resdata);

        // put response from query inside data
        return res.status(200).json({ status: true, data: resdata });

    } catch (error) {
        return res.status(500).json({ status: false, data: { error: error } });
    }
}