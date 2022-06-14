Sales = require('../models/Sales')

/**
 * @api {get} /api/sales/getSalesbyOwner Get Sales By Owner
 * @apiName Get Sales By Owner
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} ownerId  ownerId `Mandatory`.
 * @apiGroup Sales
 * @apSkuescription  Retrieve Sales by Owner
*/
exports.getSalesByOwner = async (req, res) => {
    try {

        // query database to get this data
        const {ownerId} = req.query;
        console.log(ownerId);
        var resdata = await Sales.find({ownerid: ownerId}).exec();
        console.log(resdata);

        // put response from query inside data
        return res.status(200).json({ status: true, data: resdata });

    } catch (error) {
        return res.status(500).json({ status: false, data: { error: error } });
    }
}

/**
 * @api {get} /api/sales/getSalesbySku Get Sales By Sku
 * @apiName Get Sales By Sku
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} productSku  productSku `Mandatory`.
 * @apiGroup Sales
 * @apSkuescription  Retrieve Sales by Sku
*/
exports.getSalesBySku = async (req, res) => {
    try {

        // TO-DO: query database to get this data
        const {productSku} = req.query;
        var resdata = await Sales.findOne({sku: productSku}).exec();

        // TO-DO: put response from query inside data
        return res.status(200).json({ status: true, data: resdata });

    } catch (error) {
        return res.status(500).json({ status: false, data: { error: error } });
    }
}