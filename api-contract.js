/**
 * @api {get} /api/products/getProductbySku Get Product By Sku
 * @apiName Get Product By Sku
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} productSku  productSku `Mandatory`.
 * @apiGroup Products
 * @apSkuescription  Retrieve Products by Sku
*/


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


/**
 * @api {get} /api/sales/getSalesbySku Get Sales By Sku
 * @apiName Get Sales By Sku
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} productSku  productSku `Mandatory`.
 * @apiGroup Sales
 * @apSkuescription  Retrieve Sales by Sku
*/

/**
 * @api {get} /api/sales/getSalesbyOwner Get Sales By Owner
 * @apiName Get Sales By Owner
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} ownerId  ownerId `Mandatory`.
 * @apiGroup Sales
 * @apSkuescription  Retrieve Sales by Owner
*/

// TO-DO: function to aggregate Purchase(r)s table to Sales Table
// can be done automatically at every interval using CRON job?
// we should deal with this later

// should we change Purchasers to Purchases?

/**
 * @api {get} /api/purchases/getPurchasesByOrderId Get Purchasers By Order Id
 * @apiName Get Purchasers By Order Id
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} ownerId  ownerId `Mandatory`.
 * @apiGroup Purchases
 * @apSkuescription  Retrieve Purchasers By Order Id
*/

/**
 * @api {get} /api/purchases/getPurchasesByUserId Get Purchasers By User Id
 * @apiName Get Purchasers By User Id
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} ownerId  ownerId `Mandatory`.
 * @apiGroup Purchases
 * @apSkuescription  Retrieve Purchasers By User Id
*/

/**
 * @api {get} /api/users/getUserById Get User By Id
 * @apiName Get User By Id
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} ownerId  ownerId `Mandatory`.
 * @apiGroup Users
 * @apSkuescription  Retrieve User By Id
*/

/**
 * @api {get} /api/insights/getInsightsById Get Insights By Id
 * @apiName Get Insights By Id
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} ownerId  ownerId `Mandatory`.
 * @apiGroup Insights
 * @apSkuescription  Retrieve Insights By Id
*/