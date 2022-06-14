Purchases = require('../models/Purchasers')

/**
 * @api {get} /api/purchases/getPurchasesByOrderId Get Purchasers By Order Id
 * @apiName Get Purchasers By Order Id
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} orderId  orderId `Mandatory`.
 * @apiGroup Purchases
 * @apSkuescription  Retrieve Purchasers By Order Id
*/
exports.getPurchasesByOrderId = async (req, res) => {
    try {

        // query database to get this data
        const {orderId} = req.query;
        var resdata = await Purchases.findOne({ orderid: orderId }).exec();

        // put response from query inside data
        return res.status(200).json({ status: true, data: resdata });

    } catch (error) {
        return res.status(500).json({ status: false, data: { error: error } });
    }
}

/**
 * @api {get} /api/purchases/getPurchasesByUserId Get Purchasers By User Id
 * @apiName Get Purchasers By User Id
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} userId  userId `Mandatory`.
 * @apiGroup Purchases
 * @apSkuescription  Retrieve Purchasers By User Id
*/
exports.getPurchasesByUserId = async (req, res) => {
    try {

        // query database to get this data
        const {userId} = req.query;
        var resdata = await Purchases.findOne({ userId: userId}).exec();

        // put response from query inside data
        return res.status(200).json({ status: true, data: resdata });

    } catch (error) {
        return res.status(500).json({ status: false, data: { error: error } });
    }
}
