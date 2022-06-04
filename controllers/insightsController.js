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

        // TO-DO: query database to get this data

        // TO-DO: put response from query inside data
        return res.status(200).json({ status: true, data: { } });

    } catch (error) {
        return res.status(500).json({ status: false, data: { error: error } });
    }
}