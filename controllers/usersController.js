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

/**
 * @api {get} /api/users/PostUser Get User By Id
 * @apiName Get User By Id
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiBody {String} ownerId  ownerId `Mandatory`.
 * @apiBody {String} name name `Mandatory`.
 * @apiBody {String} email email `Mandatory`.
 * @apiBody {String} address address `Mandatory`.
 * @apiBody {String} wallet wallet `Mandatory`.
 * @apiGroup Users
 * @apSkuescription  Retrieve User By Id
*/
exports.postUser = async (req, res) => {
    try {

        // insert data into database
        const new_User = new Users(req.body);
        console.log(new_User) 
        var resdata = await new_User.save();

        // put response from query inside data
        return res.status(200).json({ status: true, data: resdata });

    } catch (error) {
        return res.status(500).json({ status: false, data: { error: error } });
    }
}