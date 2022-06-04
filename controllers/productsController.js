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

        // TO-DO: query database to get this data

        // TO-DO: put response from query inside data
        return res.status(200).json({ status: true, data: { } });

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
 * @apiParam {Object} quantity  quantity `Mandatory`.
 * @apiParam {Number} tax  tax `Mandatory`.
 * @apiParam {String} description  description `Mandatory`.
 * @apiParam {Object} picture  picture `Mandatory`.
 * @apiParam {Object} model  model `Mandatory`.
 * @apiParam {String} nft_contract_address  nft_contract_address `Mandatory`.
 * @apiGroup Products
 * @apSkuescription  Create Product (TO-DO: calculate product Skus?)
*/
exports.postProduct = async (req, res) => {
    try {

        // TO-DO: insert data into database

        // TO-DO: put response from query inside data
        return res.status(200).json({ status: true, data: { } });

    } catch (error) {
        return res.status(500).json({ status: false, data: { error: error } });
    }
}