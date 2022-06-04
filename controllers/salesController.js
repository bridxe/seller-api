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

        // TO-DO: query database to get this data

        // TO-DO: put response from query inside data
        return res.status(200).json({ status: true, data: { } });

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

        // TO-DO: put response from query inside data
        return res.status(200).json({ status: true, data: { } });

    } catch (error) {
        return res.status(500).json({ status: false, data: { error: error } });
    }
}