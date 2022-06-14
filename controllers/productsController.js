Products = require('../models/Products')

/**
 * @api {get} /api/products/getProductbySku Get Product By Sku
 * @apiName Get Product By Sku
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} productSku  productSku `Mandatory`.
 * @apiGroup Products
 * @apSkuescription  Retrieve Products by Sku
*/

exports.getProductBySku = async (req, res) => {
    try {

        // query database to get this data
        const {productSku} = req.query;
        var resdata = await Products.findOne({"sku": productSku}).exec();
        // put response from query inside data
        return res.status(200).json({ status: true, data: resdata });

    } catch (error) {
        return res.status(500).json({ status: false, data: { error: error } });
    }
}

/**
 * @api {post} /api/product/postProduct Post Product
 * @apiName Post Product 
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} name  name `Mandatory`.
 * @apiParam {Number} price  price `Mandatory`.
 * @apiParam {Array} quantity  quantity `Mandatory`.
 * @apiParam {Number} tax  tax `Mandatory`.
 * @apiParam {String} description  description `Mandatory`.
 * @apiParam {Array} picture  picture `Mandatory`.
 * @apiParam {Array} model  model `Mandatory`.
 * @apiParam {String} nft_contract_address  nft_contract_address `Mandatory`.
 * @apiGroup Products
 * @apSkuescription  Create Product (TO-DO: calculate product Skus?)
*/
exports.postProduct = async (req, res) => {
    try {

        // insert data into database
        const new_Product = new Products(req.query);
        var resdata = await new_Product.save();

        // put response from query inside data
        return res.status(200).json({ status: true, data: resdata });

    } catch (error) {
        return res.status(500).json({ status: false, data: { error: error } });
    }
}