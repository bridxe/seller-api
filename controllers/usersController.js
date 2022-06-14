Users = require('../models/Users')

/**
 * @api {get} /api/users/getUsersById Get User By Id
 * @apiName Get User By Id
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} ownerId  ownerId `Mandatory`.
 * @apiGroup Users
 * @apSkuescription  Retrieve User By Id
*/
exports.getUserById = async (req, res) => {
    try {

        // TO-DO: query database to get this data
        const {ownerId} = req.query;
        var resdata = await Users.findOne({"userid": ownerId}).exec();

        // TO-DO: put response from query inside data
        return res.status(200).json({ status: true, data: resdata });

    } catch (error) {
        return res.status(500).json({ status: false, data: { error: error } });
    }
}