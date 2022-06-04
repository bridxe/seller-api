/**
 * @api {get} /api/users/getUsersById Get Users By Id
 * @apiName Get Users By Id
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} ownerId  ownerId `Mandatory`.
 * @apiGroup Users
 * @apSkuescription  Retrieve Users By Id
*/
exports.getUsersById = async (req, res) => {
    try {

        // TO-DO: query database to get this data

        // TO-DO: put response from query inside data
        return res.status(200).json({ status: true, data: { } });

    } catch (error) {
        return res.status(500).json({ status: false, data: { error: error } });
    }
}